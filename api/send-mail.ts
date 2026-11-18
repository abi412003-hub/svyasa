import nodemailer from "nodemailer";

/**
 * POST /api/send-mail — emails website form submissions.
 *
 * Environment variables (set in Vercel → Project → Settings → Environment Variables):
 *   SMTP_USER   Gmail address used to send (e.g. forms@yourdomain.com)
 *   SMTP_PASS   Gmail App Password for that account (not the normal password)
 *   MAIL_TO     Where submissions are delivered
 * Optional:
 *   MAIL_TO_APPLY, MAIL_TO_EDTECH, MAIL_TO_CONTACT   per-form recipients
 *   SMTP_HOST (default smtp.gmail.com), SMTP_PORT (default 465)
 */

// ── Validation and email formatting (exported for tests) ──────────────

export type FormType =
  | "apply-gcc"
  | "apply-prashanti"
  | "edtech-partner"
  | "contact"
  | "international"
  | "subscribe"
  | "training-contact"
  | "training-enquiry"
  | "training-institution"
  | "adopt-research";

export const FORMS: Record<FormType, { title: string; toEnv: string }> = {
  "apply-gcc": { title: "Application – S-VYASA Global City Campus", toEnv: "MAIL_TO_APPLY" },
  "apply-prashanti": { title: "Application – Prashanti Kutiram Campus", toEnv: "MAIL_TO_APPLY" },
  "edtech-partner": { title: "Edtech Partnership Enquiry", toEnv: "MAIL_TO_EDTECH" },
  contact: { title: "Contact Enquiry", toEnv: "MAIL_TO_CONTACT" },
  international: { title: "International Affairs Enquiry", toEnv: "MAIL_TO" },
  subscribe: { title: "Yoga Sudha Subscription", toEnv: "MAIL_TO" },
  "training-contact": { title: "Training Programs – Contact", toEnv: "MAIL_TO" },
  "training-enquiry": { title: "Training Programs – Course Enquiry", toEnv: "MAIL_TO" },
  "training-institution": { title: "Institutional / PSU Training Request", toEnv: "MAIL_TO" },
  "adopt-research": { title: "Adopt a Research Project Enquiry", toEnv: "MAIL_TO" },
};

const MAX_FIELDS = 30;
const MAX_KEY = 60;
const MAX_VALUE = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ValidPayload = {
  formType: FormType;
  fields: Record<string, string>;
  name: string;
  email: string;
};

export type ValidationResult =
  | { ok: true; payload: ValidPayload; spam: boolean }
  | { ok: false; error: string };

/** Validates and normalises an untrusted request body. */
export function validatePayload(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request body." };
  const { formType, fields, website } = body as Record<string, unknown>;

  if (typeof formType !== "string" || !(formType in FORMS)) {
    return { ok: false, error: "Unknown form." };
  }
  if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
    return { ok: false, error: "Missing form fields." };
  }

  const entries = Object.entries(fields as Record<string, unknown>);
  if (entries.length === 0 || entries.length > MAX_FIELDS) {
    return { ok: false, error: "Too many or too few fields." };
  }

  const clean: Record<string, string> = {};
  for (const [key, value] of entries) {
    if (key.length > MAX_KEY) return { ok: false, error: "Field name too long." };
    if (value === undefined || value === null || value === "") continue;
    if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") {
      return { ok: false, error: `Invalid value for ${key}.` };
    }
    const text = String(value).trim();
    if (text.length > MAX_VALUE) return { ok: false, error: `${key} is too long.` };
    if (text) clean[key] = text;
  }

  const email = clean.email ?? "";
  // Subscriptions only collect an email address.
  const name = clean.name ?? clean.fullName ?? (formType === "subscribe" ? email : "");
  if (!name) return { ok: false, error: "Name is required." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "A valid email address is required." };

  return {
    ok: true,
    // Honeypot: real visitors never fill the hidden "website" field.
    spam: typeof website === "string" && website.trim() !== "",
    payload: { formType: formType as FormType, fields: clean, name, email },
  };
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Turns camelCase / kebab keys into readable labels: "previousQualification" -> "Previous Qualification". */
export const labelFor = (key: string) =>
  key
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());

/** Removes characters that could break an email header. */
const headerSafe = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 120);

export function buildEmail(p: ValidPayload, submittedAt = new Date()) {
  const form = FORMS[p.formType];
  const subject = headerSafe(`[S-VYASA] ${form.title} – ${p.name}`);
  const when = submittedAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const rows = Object.entries(p.fields)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e0d6;background:#faf7f0;font-weight:600;color:#1d3a5c;white-space:nowrap;vertical-align:top">${escapeHtml(
          labelFor(k),
        )}</td><td style="padding:8px 12px;border:1px solid #e5e0d6;color:#1f2937;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto">
  <div style="background:#1d3a5c;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0">
    <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d4a843">S-VYASA Website</div>
    <div style="font-size:20px;font-weight:700;margin-top:4px">${escapeHtml(form.title)}</div>
  </div>
  <table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table>
  <p style="font-size:12px;color:#6b7280;margin-top:12px">Submitted ${escapeHtml(when)} IST. Reply to this email to respond to ${escapeHtml(p.name)} directly.</p>
</div>`;

  const text = `${form.title}\n\n${Object.entries(p.fields)
    .map(([k, v]) => `${labelFor(k)}: ${v}`)
    .join("\n")}\n\nSubmitted ${when} IST`;

  return { subject, html, text };
}

/** Recipient for a form: a per-form override, else MAIL_TO. */
export function recipientFor(formType: FormType, env: Record<string, string | undefined>) {
  return env[FORMS[formType].toEnv] || env.MAIL_TO || "";
}

// ── Handler ───────────────────────────────────────────────────────────

type Req = { method?: string; body?: unknown };
type Res = {
  status: (code: number) => Res;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: Req, res: Res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: "Invalid JSON." });
    }
  }

  const result = validatePayload(body);
  if ("error" in result) return res.status(400).json({ ok: false, error: result.error });
  // Quietly accept bot submissions without sending anything.
  if (result.spam) return res.status(200).json({ ok: true });

  const { SMTP_USER, SMTP_PASS, SMTP_HOST, SMTP_PORT } = process.env;
  const to = recipientFor(result.payload.formType, process.env);
  if (!SMTP_USER || !SMTP_PASS || !to) {
    console.error("send-mail: SMTP_USER, SMTP_PASS or MAIL_TO is not configured");
    return res.status(500).json({ ok: false, error: "Email is not configured yet. Please try again later." });
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const { subject, html, text } = buildEmail(result.payload);

  try {
    await transporter.sendMail({
      from: { name: "S-VYASA Website", address: SMTP_USER },
      to,
      replyTo: { name: result.payload.name, address: result.payload.email },
      subject,
      html,
      text,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-mail: failed to send", err);
    return res.status(502).json({ ok: false, error: "We couldn't send your message right now. Please try again." });
  }
}

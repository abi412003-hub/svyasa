import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const sendMail = vi.fn();
vi.mock("nodemailer", () => ({
  default: { createTransport: vi.fn(() => ({ sendMail })) },
}));

import handler, { validatePayload, buildEmail, recipientFor, labelFor } from "../../api/send-mail";

type MockRes = {
  statusCode: number;
  body: unknown;
  headers: Record<string, string>;
  status: (c: number) => MockRes;
  json: (b: unknown) => void;
  setHeader: (k: string, v: string) => void;
};

const mockRes = (): MockRes => {
  const res: MockRes = {
    statusCode: 0,
    body: undefined,
    headers: {},
    status: (c) => ((res.statusCode = c), res),
    json: (b) => {
      res.body = b;
    },
    setHeader: (k, v) => {
      res.headers[k] = v;
    },
  };
  return res;
};

const validBody = {
  formType: "apply-gcc",
  fields: { name: "Asha Rao", email: "asha@example.com", phone: "9876543210", program: "BCA" },
};

describe("validatePayload", () => {
  it("accepts a valid application", () => {
    const r = validatePayload(validBody);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.spam).toBe(false);
      expect(r.payload.name).toBe("Asha Rao");
    }
  });

  it("rejects unknown forms, bad emails and missing names", () => {
    expect(validatePayload({ ...validBody, formType: "nope" }).ok).toBe(false);
    expect(validatePayload({ ...validBody, fields: { name: "A", email: "bad" } }).ok).toBe(false);
    expect(validatePayload({ ...validBody, fields: { email: "a@b.co" } }).ok).toBe(false);
    expect(validatePayload(null).ok).toBe(false);
  });

  it("rejects oversized values and non-string values", () => {
    expect(validatePayload({ ...validBody, fields: { ...validBody.fields, message: "x".repeat(3001) } }).ok).toBe(false);
    expect(validatePayload({ ...validBody, fields: { ...validBody.fields, extra: { a: 1 } } }).ok).toBe(false);
  });

  it("flags the honeypot as spam", () => {
    const r = validatePayload({ ...validBody, website: "http://spam" });
    expect(r.ok && r.spam).toBe(true);
  });
});

describe("buildEmail", () => {
  it("escapes HTML and strips newlines from the subject", () => {
    const r = validatePayload({
      formType: "edtech-partner",
      fields: { name: "Eve\r\nBcc: x@y.z", email: "eve@example.com", message: "<script>alert(1)</script>" },
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const mail = buildEmail(r.payload, new Date("2026-11-17T10:00:00Z"));
    expect(mail.subject).not.toMatch(/[\r\n]/);
    expect(mail.subject).toContain("Edtech Partnership Enquiry");
    expect(mail.html).not.toContain("<script>");
    expect(mail.html).toContain("&lt;script&gt;");
  });

  it("labels camelCase keys", () => {
    expect(labelFor("previousQualification")).toBe("Previous Qualification");
  });
});

describe("course application form", () => {
  it("accepts the in-site Register form payload and emails all programme details", () => {
    const r = validatePayload({
      formType: "apply-prashanti",
      website: "",
      fields: {
        name: "Asha Rao",
        email: "asha@example.com",
        mobileNumber: "+91 9876543210",
        state: "Karnataka",
        city: "Bengaluru",
        campus: "Prashanti Kutiram Campus",
        degreeType: "Under Graduation",
        programName: "Physiotherapy Programmes",
        courseName: "Bachelor of Physiotherapy (BPT)",
        courseDuration: "5 Years",
        instituteName: "",
        coursePage: "https://svyasa-new.online/courses/bachelor-of-physiotherapy",
      },
    });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.spam).toBe(false);
    expect(r.payload.fields.instituteName).toBeUndefined();
    const mail = buildEmail(r.payload);
    expect(mail.subject).toContain("Prashanti Kutiram Campus");
    expect(mail.html).toContain("Bachelor of Physiotherapy (BPT)");
    expect(mail.html).toContain("Mobile Number");
    expect(recipientFor("apply-prashanti", { MAIL_TO: "inbox@example.com" })).toBe("inbox@example.com");
  });
});

describe("site-wide forms", () => {
  const newTypes = [
    "international",
    "subscribe",
    "training-contact",
    "training-enquiry",
    "training-institution",
    "adopt-research",
  ] as const;

  it.each(newTypes)("accepts %s and sends it to MAIL_TO", (formType) => {
    const r = validatePayload({ formType, fields: { name: "Asha", email: "asha@example.com", message: "Hi" } });
    expect(r.ok).toBe(true);
    expect(recipientFor(formType, { MAIL_TO: "inbox@example.com", MAIL_TO_APPLY: "x@example.com" })).toBe(
      "inbox@example.com",
    );
  });

  it("lets a newsletter subscription through with only an email", () => {
    const r = validatePayload({ formType: "subscribe", fields: { email: "reader@example.com" } });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.payload.name).toBe("reader@example.com");
      expect(buildEmail(r.payload).subject).toContain("Yoga Sudha Subscription");
    }
  });

  it("still requires a name for other email-only submissions", () => {
    expect(validatePayload({ formType: "international", fields: { email: "a@example.com" } }).ok).toBe(false);
  });
});

describe("recipientFor", () => {
  it("prefers the per-form address, then MAIL_TO", () => {
    expect(recipientFor("edtech-partner", { MAIL_TO: "a@x.in", MAIL_TO_EDTECH: "b@x.in" })).toBe("b@x.in");
    expect(recipientFor("apply-gcc", { MAIL_TO: "a@x.in" })).toBe("a@x.in");
  });
});

describe("handler", () => {
  const env = { ...process.env };
  beforeEach(() => {
    sendMail.mockReset();
    process.env.SMTP_USER = "forms@example.com";
    process.env.SMTP_PASS = "app-password";
    process.env.MAIL_TO = "admissions@example.com";
  });
  afterEach(() => {
    process.env = { ...env };
  });

  it("only allows POST", async () => {
    const res = mockRes();
    await handler({ method: "GET" }, res);
    expect(res.statusCode).toBe(405);
  });

  it("sends a valid submission with reply-to set to the applicant", async () => {
    sendMail.mockResolvedValue({});
    const res = mockRes();
    await handler({ method: "POST", body: validBody }, res);
    expect(res.statusCode).toBe(200);
    expect(sendMail).toHaveBeenCalledTimes(1);
    const msg = sendMail.mock.calls[0][0];
    expect(msg.to).toBe("admissions@example.com");
    expect(msg.replyTo.address).toBe("asha@example.com");
    expect(msg.subject).toContain("Global City Campus");
  });

  it("does not send honeypot submissions", async () => {
    const res = mockRes();
    await handler({ method: "POST", body: { ...validBody, website: "x" } }, res);
    expect(res.statusCode).toBe(200);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("reports missing configuration", async () => {
    delete process.env.SMTP_PASS;
    const res = mockRes();
    await handler({ method: "POST", body: validBody }, res);
    expect(res.statusCode).toBe(500);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("returns 502 when SMTP fails", async () => {
    sendMail.mockRejectedValue(new Error("auth failed"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    const res = mockRes();
    await handler({ method: "POST", body: JSON.stringify(validBody) }, res);
    expect(res.statusCode).toBe(502);
  });
});

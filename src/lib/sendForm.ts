export type FormType = "apply-gcc" | "apply-prashanti" | "edtech-partner" | "contact";

/**
 * Sends a website form to /api/send-mail (a Vercel function), which emails it
 * to the address configured in the MAIL_TO environment variable.
 * `website` is a honeypot: pass the value of the hidden field unchanged.
 */
export async function sendForm(
  formType: FormType,
  fields: Record<string, string | undefined>,
  website = "",
): Promise<void> {
  let res: Response;
  try {
    res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, fields, website }),
    });
  } catch {
    throw new Error("Network error — please check your connection and try again.");
  }

  const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (!res.ok || !data?.ok) {
    throw new Error(data?.error || "We couldn't send your message right now. Please try again.");
  }
}

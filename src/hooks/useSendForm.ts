import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { sendForm, type FormType } from "@/lib/sendForm";

/**
 * Submits a form to /api/send-mail (emailed to MAIL_TO) with loading state,
 * success/error toasts and the hidden "website" honeypot.
 * `submit` resolves to true only when the email was accepted.
 */
export function useSendForm(formType: FormType) {
  const [sending, setSending] = useState(false);

  const submit = async (
    e: FormEvent<HTMLFormElement>,
    fields: Record<string, string | undefined>,
    successMessage: string,
  ): Promise<boolean> => {
    e.preventDefault();
    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value;
    setSending(true);
    try {
      await sendForm(formType, fields, honeypot);
      toast.success(successMessage);
      return true;
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "We couldn't send your message. Please try again.");
      return false;
    } finally {
      setSending(false);
    }
  };

  return { sending, submit };
}

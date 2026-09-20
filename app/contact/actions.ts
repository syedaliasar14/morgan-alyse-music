"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot field — real users never fill this in.
  if (String(formData.get("company") ?? "").trim().length > 0) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email || !EMAIL_RE.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!message || message.length < 10) {
    fieldErrors.message = "Please share a little more detail (10+ characters).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, message: "Please fix the fields below." };
  }

  // TODO: wire this up to a real email/notification provider
  // (e.g. Resend, Postmark, or a mailing API) before going live.
  console.log("New contact form submission:", { name, email, message });

  return { status: "success", message: "Thanks! Your message is on its way." };
}

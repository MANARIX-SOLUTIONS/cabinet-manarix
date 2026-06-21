"use server";

import { getTranslations } from "next-intl/server";
import { escapeHtml } from "@/lib/html";
import { validateContactForm } from "@/lib/validation";
import type { ContactFormState } from "@/lib/validation-types";
import { SITE } from "@/lib/site";

async function sendViaResend(payload: {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? SITE.email;

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY not set — inquiry logged:", payload);
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Manarix Solutions <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: payload.email,
      subject: `New inquiry from ${payload.company} — ${payload.service}`,
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
        <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send email notification.");
  }
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const t = await getTranslations("contact");

  const honeypot = String(formData.get("website") ?? "");
  if (honeypot) {
    return { success: true, message: t("successMessage") };
  }

  const data = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    service: String(formData.get("service") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const validationError = validateContactForm(data, {
    formError: t("validation.formError"),
    name: t("validation.name"),
    email: t("validation.email"),
    company: t("validation.company"),
    service: t("validation.service"),
    message: t("validation.message"),
  });

  if (validationError) return validationError;

  try {
    await sendViaResend(data);
    return { success: true, message: t("successMessage") };
  } catch {
    return { success: false, message: t("errorGeneric") };
  }
}

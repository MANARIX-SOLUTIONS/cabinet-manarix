"use server";

import { getTranslations } from "next-intl/server";
import { escapeHtml } from "@/lib/html";
import { isGuideOnlyInquiry, validateContactForm } from "@/lib/validation";
import type { ContactFormState } from "@/lib/validation-types";
import { SITE } from "@/lib/site";

async function sendViaResend(payload: {
  name: string;
  email: string;
  company: string;
  family: string;
  volume: string;
  budget: string;
  timeline: string;
  message: string;
  offer: string;
  guideOnly: boolean;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? SITE.email;

  if (!apiKey) {
    console.info("[contact] RESEND_API_KEY not set — inquiry logged:", payload);
    return;
  }

  const prefix =
    payload.family === "partnership"
      ? "[COLLAB]"
      : payload.guideOnly
        ? "[GUIDE]"
        : "[Devis]";
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
      subject: `${prefix} ${payload.company} — ${payload.family}`,
      html: `
        <h2>${
          payload.family === "partnership"
            ? "Demande de collaboration"
            : payload.guideOnly
              ? "Demande à traiter par e-mail (guide)"
              : "Demande de devis"
        }</h2>
        ${payload.guideOnly ? "<p><strong>Règle interne :</strong> budget &lt; 1 M et échéance exploratoire — répondre par e-mail avec un guide, pas d'appel.</p>" : ""}
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>
        <p><strong>Family:</strong> ${escapeHtml(payload.family)}</p>
        <p><strong>Offer:</strong> ${escapeHtml(payload.offer || "—")}</p>
        <p><strong>Volume:</strong> ${escapeHtml(payload.volume)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(payload.budget)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(payload.timeline)}</p>
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
    family: String(formData.get("family") ?? ""),
    volume: String(formData.get("volume") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    timeline: String(formData.get("timeline") ?? ""),
    message: String(formData.get("message") ?? ""),
    offer: String(formData.get("offer") ?? ""),
  };

  const validationError = validateContactForm(data, {
    formError: t("validation.formError"),
    name: t("validation.name"),
    email: t("validation.email"),
    company: t("validation.company"),
    family: t("validation.family"),
    volume: t("validation.volume"),
    budget: t("validation.budget"),
    timeline: t("validation.timeline"),
    message: t("validation.message"),
  });

  if (validationError) return validationError;

  try {
    await sendViaResend({
      ...data,
      guideOnly: isGuideOnlyInquiry(data),
    });
    return { success: true, message: t("successMessage") };
  } catch {
    return { success: false, message: t("errorGeneric") };
  }
}

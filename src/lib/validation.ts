import type {
  ContactFormData,
  ContactFormState,
  ValidationMessages,
} from "@/lib/validation-types";
import {
  BUDGET_IDS,
  CONTACT_FAMILY_IDS,
  TIMELINE_IDS,
  VOLUME_IDS,
} from "@/lib/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isOneOf<T extends string>(value: string, allowed: readonly T[]) {
  return (allowed as readonly string[]).includes(value);
}

export function isGuideOnlyInquiry(
  data: Pick<ContactFormData, "budget" | "timeline" | "family">,
) {
  if (data.family === "partnership") return false;
  return data.budget === "under1m" && data.timeline === "exploratory";
}

export function validateContactForm(
  data: ContactFormData,
  messages: ValidationMessages,
): ContactFormState | null {
  const errors: ContactFormState["errors"] = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = messages.name;
  }

  if (!data.email.trim() || !EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = messages.email;
  }

  if (!data.company.trim()) {
    errors.company = messages.company;
  }

  if (!isOneOf(data.family, CONTACT_FAMILY_IDS)) {
    errors.family = messages.family;
  }

  if (!isOneOf(data.volume, VOLUME_IDS)) {
    errors.volume = messages.volume;
  }

  if (!isOneOf(data.budget, BUDGET_IDS)) {
    errors.budget = messages.budget;
  }

  if (!isOneOf(data.timeline, TIMELINE_IDS)) {
    errors.timeline = messages.timeline;
  }

  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = messages.message;
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: messages.formError, errors };
  }

  return null;
}

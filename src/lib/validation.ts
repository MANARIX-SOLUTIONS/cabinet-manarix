import type {
  ContactFormData,
  ContactFormState,
  ValidationMessages,
} from "@/lib/validation-types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  if (!data.service.trim()) {
    errors.service = messages.service;
  }

  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = messages.message;
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: messages.formError, errors };
  }

  return null;
}

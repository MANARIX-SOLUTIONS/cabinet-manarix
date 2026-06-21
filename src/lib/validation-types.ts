export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<
    Record<"name" | "email" | "company" | "service" | "message", string>
  >;
};

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export type ValidationMessages = Record<
  "name" | "email" | "company" | "service" | "message" | "formError",
  string
>;

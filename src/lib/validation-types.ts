export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<
    Record<
      | "name"
      | "email"
      | "company"
      | "family"
      | "volume"
      | "budget"
      | "timeline"
      | "message",
      string
    >
  >;
};

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  family: string;
  volume: string;
  budget: string;
  timeline: string;
  message: string;
  offer?: string;
}

export type ValidationMessages = Record<
  | "name"
  | "email"
  | "company"
  | "family"
  | "volume"
  | "budget"
  | "timeline"
  | "message"
  | "formError",
  string
>;

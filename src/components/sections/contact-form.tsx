"use client";

import { useActionState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { submitContactForm } from "@/app/actions/contact";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMounted } from "@/hooks/use-mounted";
import { CONTACT_SERVICE_IDS } from "@/lib/constants";
import type { ContactFormState } from "@/lib/validation-types";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";
  const fieldVariant = isDark ? "dark" : "default";

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  const serviceOptions = CONTACT_SERVICE_IDS.map((id) => t(`services.${id}`));

  if (state.success) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-card px-8 py-20 text-center",
          isDark
            ? "border border-white/15 bg-white/10 backdrop-blur-md"
            : "border border-border bg-card shadow-premium",
        )}
        role="status"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
          <CheckCircle2 className="h-7 w-7 text-accent" />
        </div>
        <h3
          className={cn(
            "mt-5 font-heading text-xl font-bold",
            isDark ? "text-white" : "text-text-primary",
          )}
        >
          {t("successTitle")}
        </h3>
        <p
          className={cn(
            "mt-2 max-w-xs text-sm leading-relaxed",
            isDark ? "text-white/75" : "text-text-secondary",
          )}
        >
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={cn(
        "relative rounded-card p-6 sm:p-8",
        isDark
          ? "border border-white/12 bg-white/8 shadow-premium backdrop-blur-md"
          : "border border-border bg-card shadow-premium",
      )}
      noValidate
    >
      <p
        className={cn(
          "mb-6 font-heading text-lg font-bold",
          isDark ? "text-white" : "text-text-primary",
        )}
      >
        {t("formTitle")}
      </p>

      <div
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label={t("fullName")}
          name="name"
          type="text"
          placeholder={t("namePlaceholder")}
          autoComplete="name"
          required
          error={state.errors?.name}
          variant={fieldVariant}
        />
        <Input
          label={t("workEmail")}
          name="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          autoComplete="email"
          required
          error={state.errors?.email}
          variant={fieldVariant}
        />
        <Input
          label={t("company")}
          name="company"
          type="text"
          placeholder={t("companyPlaceholder")}
          autoComplete="organization"
          required
          error={state.errors?.company}
          className="sm:col-span-2"
          variant={fieldVariant}
        />
        <Select
          label={t("serviceInterest")}
          name="service"
          options={serviceOptions}
          placeholder={t("servicePlaceholder")}
          required
          error={state.errors?.service}
          className="sm:col-span-2"
          variant={fieldVariant}
        />
        <Textarea
          label={t("projectOverview")}
          name="message"
          placeholder={t("messagePlaceholder")}
          required
          error={state.errors?.message}
          className="sm:col-span-2"
          variant={fieldVariant}
        />
      </div>

      {state.message && !state.success && (
        <p
          className={cn(
            "mt-4 text-sm",
            isDark ? "text-red-300" : "text-red-600",
          )}
          role="alert"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl",
          "bg-secondary px-6 py-3.5 text-sm font-semibold text-white",
          "shadow-[0_4px_16px_-2px_rgb(37_99_235/0.4)]",
          "transition-all duration-300 hover:bg-[#1d4ed8] hover:-translate-y-px",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-secondary/40 focus-visible:ring-offset-2",
          isDark
            ? "focus-visible:ring-offset-transparent"
            : "focus-visible:ring-offset-card",
          "disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0",
        )}
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {tc("submitting")}
          </>
        ) : (
          <>
            {tc("bookConsultation")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      <p
        className={cn(
          "mt-4 text-center text-xs",
          isDark ? "text-white/50" : "text-text-muted",
        )}
      >
        {t("responseTime")}
      </p>
    </form>
  );
}

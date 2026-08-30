"use client";

import { Suspense, useActionState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { submitContactForm } from "@/app/actions/contact";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BUDGET_IDS,
  CONTACT_FAMILY_IDS,
  SERVICE_FAMILY_BY_OFFER,
  SERVICE_IDS,
  TIMELINE_IDS,
  VOLUME_IDS,
  type ServiceSlug,
} from "@/lib/constants";
import type { ContactFormState } from "@/lib/validation-types";
import { cn } from "@/lib/utils";

type ContactFamily = (typeof CONTACT_FAMILY_IDS)[number];

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function isServiceSlug(value: string | null): value is ServiceSlug {
  return Boolean(value && (SERVICE_IDS as readonly string[]).includes(value));
}

function isContactFamily(value: string | null): value is ContactFamily {
  return Boolean(
    value && (CONTACT_FAMILY_IDS as readonly string[]).includes(value),
  );
}

function ContactFormFields() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");
  const searchParams = useSearchParams();
  const offerParam = searchParams.get("offer");
  const familyParam = searchParams.get("family");
  const offer = isServiceSlug(offerParam) ? offerParam : "";
  const defaultFamily = isContactFamily(familyParam)
    ? familyParam
    : offer
      ? SERVICE_FAMILY_BY_OFFER[offer]
      : "";

  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  const familyOptions = CONTACT_FAMILY_IDS.map((id) => ({
    value: id,
    label: t(`families.${id}`),
  }));
  const volumeOptions = VOLUME_IDS.map((id) => ({
    value: id,
    label: t(`volumes.${id}`),
  }));
  const budgetOptions = BUDGET_IDS.map((id) => ({
    value: id,
    label: t(`budgets.${id}`),
  }));
  const timelineOptions = TIMELINE_IDS.map((id) => ({
    value: id,
    label: t(`timelines.${id}`),
  }));

  if (state.success) {
    return (
      <div
        className="force-light flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white px-8 py-20 text-center shadow-premium"
        role="status"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
          <CheckCircle2 className="h-7 w-7 text-accent" />
        </div>
        <h3 className="mt-5 font-heading text-xl font-semibold text-text-primary">
          {t("successTitle")}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-secondary">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      action={formAction}
      className="force-light relative rounded-2xl border border-white/10 bg-white p-6 shadow-premium sm:p-8 lg:p-9"
      noValidate
    >
      <p className="mb-6 font-heading text-lg font-semibold text-text-primary">
        {t("formTitle")}
      </p>

      <div
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="offer" value={offer} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label={t("fullName")}
          name="name"
          type="text"
          placeholder={t("namePlaceholder")}
          autoComplete="name"
          required
          error={state.errors?.name}
        />
        <Input
          label={t("workEmail")}
          name="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          autoComplete="email"
          required
          error={state.errors?.email}
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
        />
        <Select
          label={t("family")}
          name="family"
          options={familyOptions}
          placeholder={t("familyPlaceholder")}
          required
          defaultValue={defaultFamily}
          error={state.errors?.family}
          className="sm:col-span-2"
        />
        <Select
          label={t("volume")}
          name="volume"
          options={volumeOptions}
          placeholder={t("volumePlaceholder")}
          required
          error={state.errors?.volume}
        />
        <Select
          label={t("budget")}
          name="budget"
          options={budgetOptions}
          placeholder={t("budgetPlaceholder")}
          required
          error={state.errors?.budget}
        />
        <Select
          label={t("timeline")}
          name="timeline"
          options={timelineOptions}
          placeholder={t("timelinePlaceholder")}
          required
          error={state.errors?.timeline}
          className="sm:col-span-2"
        />
        <Textarea
          label={t("projectOverview")}
          name="message"
          placeholder={t("messagePlaceholder")}
          required
          error={state.errors?.message}
          className="sm:col-span-2"
        />
      </div>

      {state.message && !state.success && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "group mt-6 flex w-full items-center justify-center gap-2 rounded-xl",
          "bg-hero px-6 py-3.5 text-sm font-medium text-white shadow-subtle",
          "transition-[background-color,transform] duration-200 hover:bg-hero/90 hover:-translate-y-px",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          "disabled:cursor-not-allowed disabled:opacity-70",
        )}
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {tc("submitting")}
          </>
        ) : (
          <>
            {tc("requestQuote")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-text-muted">
        {t("responseTime")}
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense>
      <ContactFormFields />
    </Suspense>
  );
}

import { Calendar, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import { WhatsAppIcon } from "@/components/ui/social-icons";
import { getWhatsAppUrl, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export async function CTASection() {
  const t = await getTranslations("cta");
  const tc = await getTranslations("common");
  const hasCalendly = Boolean(SITE.calendlyUrl);
  const whatsappUrl = getWhatsAppUrl();

  const contactCardClass = cn(
    "group flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors duration-200",
    "border border-white/12 bg-white/5",
    "hover:border-white/22 hover:bg-white/8",
  );

  const contactIconClass = cn(
    "flex h-10 w-10 items-center justify-center rounded-xl",
    "bg-white/8 text-white/80",
    "group-hover:bg-white/12 group-hover:text-white",
  );

  const titleHighlight = t("titleHighlight");

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-36">
      <div className="cta-surface noise-overlay absolute inset-0" />

      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div>
              <Badge className="border-white/15 bg-white/5 text-white/60">
                {t("badge")}
              </Badge>
              <h2 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.12]">
                {t("title")}
                {titleHighlight ? (
                  <>
                    {" "}
                    <span className="text-white/70">{titleHighlight}</span>
                  </>
                ) : null}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/60 lg:text-lg">
                {t("description")}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={hasCalendly ? SITE.calendlyUrl! : "#contact-form"}
                  variant="accent"
                  size="lg"
                  showArrow
                >
                  {tc("bookDiscovery")}
                </Button>
                <Button
                  href={`mailto:${SITE.email}`}
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/8"
                >
                  {tc("contactManarix")}
                </Button>
              </div>

              <p className="mt-5 text-sm text-white/45">{t("reassurance")}</p>

              <div className="mt-10 space-y-3">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactCardClass}
                  >
                    <span className={contactIconClass}>
                      <WhatsAppIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-white/45">
                        {tc("whatsapp")}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {tc("whatsappUs")}
                      </p>
                    </div>
                  </a>
                )}

                <a href={`mailto:${SITE.email}`} className={contactCardClass}>
                  <span className={contactIconClass}>
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-white/45">
                      {tc("email")}
                    </p>
                    <p className="text-sm font-medium text-white">
                      {SITE.email}
                    </p>
                  </div>
                </a>

                {hasCalendly && (
                  <a
                    href={SITE.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactCardClass}
                  >
                    <span className={contactIconClass}>
                      <Calendar className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-white/45">
                        {tc("scheduling")}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {tc("bookOnCalendly")}
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

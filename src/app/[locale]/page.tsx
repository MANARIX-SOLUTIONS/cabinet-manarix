import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Problem } from "@/components/sections/problem";
import { WhyManarix } from "@/components/sections/why-manarix";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { ArchitecturePrinciples } from "@/components/sections/architecture-principles";
import { SectionCta } from "@/components/sections/section-cta";
import { Process } from "@/components/sections/process";
import { Credibility } from "@/components/sections/credibility";
import { RecruiterSection } from "@/components/sections/recruiter-section";
import { Proofs } from "@/components/sections/proofs";
import { Transparency } from "@/components/sections/transparency";
import { Faq } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogoMarquee />
        <Problem />
        <WhyManarix />
        <Services />
        <SectionCta variant="services" />
        <CaseStudies />
        <SectionCta variant="caseStudies" />
        <ArchitecturePrinciples />
        <SectionCta variant="architecture" />
        <Process />
        <Credibility />
        <RecruiterSection />
        <Proofs hideHeader={false} />
        <Transparency />
        <Faq />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

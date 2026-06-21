import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { WhyManarix } from "@/components/sections/why-manarix";
import { Team } from "@/components/sections/team";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { TrustedClients } from "@/components/sections/trusted-clients";
import { Testimonials } from "@/components/sections/testimonials";
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
        <Services />
        <Industries />
        <WhyManarix />
        <Team />
        <Process />
        <CaseStudies />
        <Trust />
        <TrustedClients />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

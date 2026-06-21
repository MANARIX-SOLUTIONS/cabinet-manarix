import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="min-h-screen pt-28 pb-8">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

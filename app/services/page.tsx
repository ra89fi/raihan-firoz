import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { ContactCta } from "@/components/contact-cta"

export const metadata = {
  title: "Services | Full-Stack Developer & Automation Expert",
  description:
    "Specialized services in full-stack development, business process automation, AI integration, and digital transformation.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <ServicesHero />
      <ServiceDetails />
      <ProcessSection />
      <PricingSection />
      <FaqSection />
      <ContactCta />
      <Footer />
    </main>
  )
}


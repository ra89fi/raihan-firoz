import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCta } from "@/components/contact-cta"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactCta />
      <Footer />
    </main>
  )
}


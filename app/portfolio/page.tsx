import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { ProjectGallery } from "@/components/project-gallery"
import { ContactCta } from "@/components/contact-cta"

export const metadata = {
  title: "Portfolio | Full-Stack Developer & Automation Expert",
  description:
    "Explore my projects showcasing full-stack development, business process automation, and AI integration solutions.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PortfolioHero />
      <ProjectGallery />
      <ContactCta />
      <Footer />
    </main>
  )
}


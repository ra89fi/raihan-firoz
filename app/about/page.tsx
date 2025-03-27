import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ValuesSection } from "@/components/values-section"
import { ContactCta } from "@/components/contact-cta"

export const metadata = {
  title: "About Me | Full-Stack Developer & Automation Expert",
  description:
    "Learn about my journey, skills, and expertise in full-stack development, business process automation, and AI integration.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <AboutHero />
      <SkillsSection />
      <ExperienceSection />
      <ValuesSection />
      <ContactCta />
      <Footer />
    </main>
  )
}


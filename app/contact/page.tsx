import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactFaq } from "@/components/contact-faq"

export const metadata = {
  title: "Contact | Full-Stack Developer & Automation Expert",
  description:
    "Get in touch to discuss your project needs and how I can help with full-stack development, automation, and AI integration.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <ContactHero />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <ContactFaq />
      <Footer />
    </main>
  )
}


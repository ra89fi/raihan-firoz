import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogList } from "@/components/blog-list"
import { BlogSidebar } from "@/components/blog-sidebar"

export const metadata = {
  title: "Blog | Full-Stack Developer & Automation Expert",
  description:
    "Insights, tutorials, and thoughts on full-stack development, business process automation, and AI integration.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <BlogHero />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BlogList />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


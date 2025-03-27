"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Cpu, BarChart, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServiceDetails() {
  const services = [
    {
      id: "full-stack",
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Full-Stack Development",
      description: "Custom web applications built with modern technologies to solve your business challenges.",
      features: [
        "Responsive web applications",
        "Progressive web apps (PWAs)",
        "Custom CRM and ERP systems",
        "E-commerce platforms",
        "Content management systems",
        "API development and integration",
        "Database design and optimization",
        "UI/UX implementation",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "automation",
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Business Process Automation",
      description: "Streamline workflows and eliminate repetitive tasks with custom automation solutions.",
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction and transformation",
        "Scheduled reporting",
        "Form processing",
        "Email automation",
        "Cross-platform integration",
        "Custom automation scripts",
      ],
      technologies: ["Google Apps Script", "Zapier", "n8n", "Make.com", "Python", "Bash", "REST APIs", "Webhooks"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "ai-integration",
      icon: <Cpu className="h-12 w-12 text-primary" />,
      title: "AI Integration",
      description: "Leverage artificial intelligence to gain insights and enhance decision-making processes.",
      features: [
        "AI-powered chatbots",
        "Natural language processing",
        "Predictive analytics",
        "Data analysis and insights",
        "Content generation",
        "Image and document processing",
        "Recommendation systems",
        "Custom AI agents",
      ],
      technologies: [
        "OpenAI API",
        "LangChain",
        "Hugging Face",
        "TensorFlow",
        "PyTorch",
        "Vector Databases",
        "Embeddings",
        "LLMs",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "digital-transformation",
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Digital Transformation",
      description: "Comprehensive strategies to modernize your business operations and technology stack.",
      features: [
        "Business process analysis",
        "Technology stack assessment",
        "Digital strategy development",
        "Legacy system modernization",
        "Cloud migration",
        "Data integration",
        "Training and documentation",
        "Ongoing support and maintenance",
      ],
      technologies: [
        "Cloud Platforms",
        "Microservices",
        "DevOps",
        "CI/CD",
        "Containerization",
        "Serverless",
        "Data Migration",
        "API-First Design",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="service-details" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={item} id={service.id} className="scroll-mt-24">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Discuss your project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


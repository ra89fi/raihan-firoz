"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Automation Suite",
      description:
        "Automated inventory management, order processing, and customer communication for an online retailer.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Automation", "API Integration", "Node.js"],
      link: "/portfolio/ecommerce-automation",
    },
    {
      title: "AI-Powered Customer Support",
      description:
        "Developed an intelligent chatbot that handles 70% of customer inquiries without human intervention.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["AI", "NLP", "React"],
      link: "/portfolio/ai-customer-support",
    },
    {
      title: "Business Analytics Dashboard",
      description:
        "Real-time data visualization platform that integrates with multiple data sources for comprehensive business insights.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Data Visualization", "Next.js", "API"],
      link: "/portfolio/analytics-dashboard",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my recent work showcasing automation solutions and full-stack development projects.
            </p>
          </div>
          <Button variant="ghost" size="sm" className="mt-4 md:mt-0" asChild>
            <Link href="/portfolio">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.link}>
                      View case study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


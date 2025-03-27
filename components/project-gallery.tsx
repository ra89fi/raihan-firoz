"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProjectGallery() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: "ecommerce-automation",
      title: "E-Commerce Automation Suite",
      description:
        "Automated inventory management, order processing, and customer communication for an online retailer, resulting in a 40% reduction in manual tasks and improved order accuracy.",
      longDescription:
        "This comprehensive automation solution integrated with the client's e-commerce platform to streamline operations. The system automatically updates inventory levels across multiple sales channels, processes orders, generates shipping labels, and sends personalized customer communications. It also provides real-time analytics on sales performance and inventory status.",
      image: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["automation", "integration"],
      technologies: ["Node.js", "Zapier", "REST APIs", "MongoDB", "Webhooks"],
      results: [
        "40% reduction in manual tasks",
        "99.8% order accuracy",
        "2-hour reduction in order processing time",
        "Seamless integration with 3 sales channels",
      ],
      link: "https://example.com/ecommerce-case-study",
      featured: true,
    },
    {
      id: "ai-customer-support",
      title: "AI-Powered Customer Support",
      description:
        "Developed an intelligent chatbot that handles 70% of customer inquiries without human intervention, using natural language processing and machine learning.",
      longDescription:
        "This AI-powered customer support solution uses advanced natural language processing to understand customer inquiries and provide accurate responses. The system integrates with the client's knowledge base and CRM to access relevant information and customer history. It can handle common questions, troubleshoot issues, and escalate complex cases to human agents when necessary.",
      image: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["ai", "development"],
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "WebSockets"],
      results: [
        "70% reduction in support tickets",
        "24/7 customer support coverage",
        "90% positive customer feedback",
        "3-minute average response time",
      ],
      link: "https://example.com/ai-support-case-study",
      featured: true,
    },
    {
      id: "analytics-dashboard",
      title: "Business Analytics Dashboard",
      description:
        "Real-time data visualization platform that integrates with multiple data sources to provide comprehensive business insights and facilitate data-driven decision making.",
      longDescription:
        "This custom analytics dashboard consolidates data from multiple sources to provide a comprehensive view of business performance. The interactive visualizations allow users to explore data, identify trends, and generate reports. The system includes customizable widgets, automated reporting, and role-based access controls.",
      image: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["development", "integration"],
      technologies: ["Next.js", "D3.js", "PostgreSQL", "REST APIs", "AWS"],
      results: [
        "85% faster access to critical business data",
        "Consolidated 5 separate reporting systems",
        "Enabled data-driven decision making",
        "Customizable views for different departments",
      ],
      link: "https://example.com/analytics-case-study",
      featured: true,
    },
    {
      id: "document-processing",
      title: "Automated Document Processing",
      description:
        "Built a system that extracts data from various document formats, processes the information, and integrates it with the client's ERP system.",
      longDescription:
        "This document processing automation solution uses OCR and AI to extract information from invoices, purchase orders, and other business documents. The system validates the extracted data, transforms it into the required format, and integrates it with the client's ERP system. It also provides an audit trail and exception handling for documents that require manual review.",
      image: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["automation", "ai"],
      technologies: ["Python", "TensorFlow", "OCR", "REST APIs", "Docker"],
      results: [
        "90% reduction in manual data entry",
        "99.5% data accuracy",
        "Processing time reduced from days to minutes",
        "Scalable to handle increasing document volume",
      ],
      link: "https://example.com/document-case-study",
      featured: false,
    },
    {
      id: "crm-system",
      title: "Custom CRM Platform",
      description:
        "Developed a tailored customer relationship management system for a specialized industry with unique workflow requirements.",
      longDescription:
        "This custom CRM platform was designed to address the specific needs of a client in the healthcare industry. The system manages patient relationships, appointment scheduling, treatment plans, and billing information. It includes role-based access controls, HIPAA-compliant data storage, and integration with other healthcare systems.",
      image: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["development", "integration"],
      technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Auth0"],
      results: [
        "Streamlined patient management workflow",
        "Reduced administrative time by 35%",
        "Improved data accuracy and compliance",
        "Enhanced reporting capabilities",
      ],
      link: "https://example.com/crm-case-study",
      featured: false,
    },
    {
      id: "workflow-automation",
      title: "Marketing Workflow Automation",
      description:
        "Created an end-to-end automation solution for a marketing agency's campaign management, reporting, and client communication processes.",
      longDescription:
        "This workflow automation solution streamlines the entire marketing campaign lifecycle for an agency. It automates campaign setup, content scheduling, performance tracking, report generation, and client communications. The system integrates with various marketing platforms and provides a centralized dashboard for campaign management.",
      image: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=400&width=600",
      categories: ["automation", "integration"],
      technologies: ["JavaScript", "n8n", "Make.com", "APIs", "Google Apps Script"],
      results: [
        "60% reduction in campaign setup time",
        "Automated reporting saved 20 hours per week",
        "Improved campaign performance tracking",
        "Standardized processes across the agency",
      ],
      link: "https://example.com/workflow-case-study",
      featured: false,
    },
  ]

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.categories.includes(activeTab))

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
    <section id="projects" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="ai">AI Integration</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            <TabsContent value="development" className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            <TabsContent value="automation" className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            <TabsContent value="ai" className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            <TabsContent value="integration" className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div variants={item}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
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
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge key={i} variant="secondary">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && <Badge variant="outline">+{project.technologies.length - 3}</Badge>}
          </div>
          <div className="space-y-1 mb-4">
            {project.results.slice(0, 2).map((result, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 text-primary flex-shrink-0 mt-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-muted-foreground">{result}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/portfolio/${project.id}`}>
              View details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {project.link && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Visit project</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}


import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactCta } from "@/components/contact-cta"

// This would typically come from a database or CMS
const projects = [
  {
    id: "ecommerce-automation",
    title: "E-Commerce Automation Suite",
    description:
      "Automated inventory management, order processing, and customer communication for an online retailer, resulting in a 40% reduction in manual tasks and improved order accuracy.",
    longDescription:
      "This comprehensive automation solution integrated with the client's e-commerce platform to streamline operations. The system automatically updates inventory levels across multiple sales channels, processes orders, generates shipping labels, and sends personalized customer communications. It also provides real-time analytics on sales performance and inventory status.",
    challenge:
      "The client, a rapidly growing e-commerce business, was struggling to manage inventory across multiple sales channels and fulfill orders efficiently. Manual processes were error-prone and time-consuming, leading to shipping delays and customer dissatisfaction.",
    solution:
      "I developed a custom automation solution that integrated with their existing e-commerce platform and other sales channels. The system automatically synchronizes inventory levels, processes new orders, generates shipping labels, and sends personalized customer communications. It also provides real-time analytics on sales performance and inventory status.",
    implementation:
      "The implementation involved creating API integrations with multiple platforms, developing a central database to store and process data, and building automation workflows using Node.js and Zapier. The solution was deployed incrementally to minimize disruption to ongoing operations.",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    categories: ["automation", "integration"],
    technologies: ["Node.js", "Zapier", "REST APIs", "MongoDB", "Webhooks"],
    results: [
      "40% reduction in manual tasks",
      "99.8% order accuracy",
      "2-hour reduction in order processing time",
      "Seamless integration with 3 sales channels",
      "Real-time inventory visibility across all platforms",
      "Automated customer communications improved satisfaction",
    ],
    testimonial: {
      quote:
        "This automation solution has transformed our business operations. We can now handle 3x the order volume with the same team, and our customers are happier with faster, more accurate fulfillment.",
      name: "Sarah Johnson",
      title: "Operations Director, E-Commerce Inc.",
    },
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
    challenge:
      "The client's customer support team was overwhelmed with repetitive inquiries, leading to long response times and agent burnout. They needed a solution to handle routine questions efficiently while allowing human agents to focus on complex issues.",
    solution:
      "I developed an AI-powered chatbot that uses natural language processing to understand customer inquiries and provide accurate responses. The system integrates with the client's knowledge base and CRM to access relevant information and customer history. It handles common questions, troubleshoots issues, and escalates complex cases to human agents when necessary.",
    implementation:
      "The implementation involved training a machine learning model on historical support data, integrating with the client's knowledge base and CRM, and developing a user-friendly chat interface. The system was deployed with continuous learning capabilities to improve over time based on interactions and feedback.",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    categories: ["ai", "development"],
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "WebSockets"],
    results: [
      "70% reduction in support tickets handled by humans",
      "24/7 customer support coverage",
      "90% positive customer feedback",
      "3-minute average response time",
      "Support team now focuses on complex, high-value interactions",
      "Continuous improvement through machine learning",
    ],
    testimonial: {
      quote:
        "The AI chatbot has revolutionized our customer support. Our team is no longer overwhelmed with basic questions, and customers love the instant responses. It's like adding 10 support agents without the overhead.",
      name: "Michael Chen",
      title: "Customer Success Manager, TechSupport Co.",
    },
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
    challenge:
      "The client was struggling to make informed business decisions due to data being scattered across multiple systems. They needed a centralized solution to visualize key metrics, identify trends, and share insights across the organization.",
    solution:
      "I developed a custom analytics dashboard that consolidates data from multiple sources to provide a comprehensive view of business performance. The interactive visualizations allow users to explore data, identify trends, and generate reports. The system includes customizable widgets, automated reporting, and role-based access controls.",
    implementation:
      "The implementation involved creating data connectors for various systems, developing a data processing pipeline, and building an interactive front-end using Next.js and D3.js. The solution was deployed on AWS to ensure scalability and reliability.",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    categories: ["development", "integration"],
    technologies: ["Next.js", "D3.js", "PostgreSQL", "REST APIs", "AWS"],
    results: [
      "85% faster access to critical business data",
      "Consolidated 5 separate reporting systems",
      "Enabled data-driven decision making",
      "Customizable views for different departments",
      "Automated weekly reports saved 15 hours per week",
      "Improved data accuracy and consistency",
    ],
    testimonial: {
      quote:
        "This dashboard has transformed how we make decisions. We now have instant access to the data we need, presented in a way that makes it easy to understand and act upon. It's become an essential tool for our management team.",
      name: "Emily Rodriguez",
      title: "CEO, DataDriven Inc.",
    },
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
    challenge:
      "The client's accounting team was spending hours manually entering data from invoices, purchase orders, and other documents into their ERP system. This process was time-consuming, error-prone, and created a bottleneck in their financial operations.",
    solution:
      "I developed an automated document processing system that uses OCR and AI to extract information from various document formats. The system validates the extracted data, transforms it into the required format, and integrates it with the client's ERP system. It also provides an audit trail and exception handling for documents that require manual review.",
    implementation:
      "The implementation involved developing OCR capabilities using Python and TensorFlow, creating data validation and transformation logic, and building an integration with the client's ERP system. The solution was containerized using Docker for easy deployment and scaling.",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    categories: ["automation", "ai"],
    technologies: ["Python", "TensorFlow", "OCR", "REST APIs", "Docker"],
    results: [
      "90% reduction in manual data entry",
      "99.5% data accuracy",
      "Processing time reduced from days to minutes",
      "Scalable to handle increasing document volume",
      "Freed up accounting team for higher-value tasks",
      "Improved financial reporting timeliness",
    ],
    testimonial: {
      quote:
        "The document processing system has been a game-changer for our accounting department. What used to take days now happens in minutes, with better accuracy. Our team can now focus on analysis instead of data entry.",
      name: "David Wilson",
      title: "CFO, Manufacturing Corp.",
    },
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
    challenge:
      "The client, a healthcare provider, was struggling with generic CRM solutions that didn't address their specific workflow needs. They required a system that could manage patient relationships, appointment scheduling, treatment plans, and billing information while maintaining HIPAA compliance.",
    solution:
      "I developed a custom CRM platform tailored to the healthcare industry's unique requirements. The system manages patient relationships, appointment scheduling, treatment plans, and billing information. It includes role-based access controls, HIPAA-compliant data storage, and integration with other healthcare systems.",
    implementation:
      "The implementation involved designing a secure database architecture, developing a React-based user interface, implementing authentication and authorization using Auth0, and creating integrations with other healthcare systems. The solution was built with scalability and compliance in mind.",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    categories: ["development", "integration"],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Auth0"],
    results: [
      "Streamlined patient management workflow",
      "Reduced administrative time by 35%",
      "Improved data accuracy and compliance",
      "Enhanced reporting capabilities",
      "Better patient experience through coordinated care",
      "Secure, HIPAA-compliant data management",
    ],
    testimonial: {
      quote:
        "This CRM system understands how healthcare works. It's transformed our practice management, giving us more time with patients and less time with paperwork. The custom workflows match exactly how our clinic operates.",
      name: "Dr. Jennifer Lee",
      title: "Medical Director, Healthcare Provider",
    },
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
    challenge:
      "The marketing agency was struggling to manage multiple campaigns across different platforms, resulting in inefficient workflows, missed deadlines, and inconsistent reporting. They needed a solution to standardize processes and reduce manual effort.",
    solution:
      "I developed an end-to-end workflow automation solution that streamlines the entire marketing campaign lifecycle. It automates campaign setup, content scheduling, performance tracking, report generation, and client communications. The system integrates with various marketing platforms and provides a centralized dashboard for campaign management.",
    implementation:
      "The implementation involved creating integrations with multiple marketing platforms, developing automation workflows using n8n and Make.com, and building a custom dashboard for campaign oversight. The solution was implemented in phases to allow for user adoption and feedback.",
    image: "/placeholder.svg?height=600&width=800",
    thumbnail: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    categories: ["automation", "integration"],
    technologies: ["JavaScript", "n8n", "Make.com", "APIs", "Google Apps Script"],
    results: [
      "60% reduction in campaign setup time",
      "Automated reporting saved 20 hours per week",
      "Improved campaign performance tracking",
      "Standardized processes across the agency",
      "Reduced errors in campaign execution",
      "Enhanced client satisfaction through consistent communication",
    ],
    testimonial: {
      quote:
        "The workflow automation has transformed how we run campaigns. What used to take hours now happens automatically, and our clients love the consistent reporting and communication. We can handle twice the number of campaigns with the same team.",
      name: "Alex Thompson",
      title: "Director of Operations, Marketing Agency",
    },
    link: "https://example.com/workflow-case-study",
    featured: false,
  },
]

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === params.id)
  const nextProject = projects[currentIndex + 1] || projects[0]
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.link && (
                <Button asChild className="mb-6">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Solution</h2>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Implementation</h2>
                  <p className="text-muted-foreground">{project.implementation}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="space-y-3 mb-8">
                {project.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{result}</span>
                  </div>
                ))}
              </div>

              {project.testimonial && (
                <div className="bg-slate-50 p-6 rounded-lg">
                  <blockquote className="italic text-muted-foreground mb-4">"{project.testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-medium">{project.testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{project.testimonial.title}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((image, i) => (
                  <div key={i} className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t">
            <Button variant="outline" asChild>
              <Link href={`/portfolio/${prevProject.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous Project
              </Link>
            </Button>

            <Button variant="outline" className="mt-4 sm:mt-0" asChild>
              <Link href={`/portfolio/${nextProject.id}`}>
                Next Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  )
}


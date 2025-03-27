"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample blog data
const blogPosts = [
  {
    id: "ai-automation-trends-2023",
    title: "Top AI Automation Trends to Watch in 2023",
    excerpt:
      "Artificial intelligence is revolutionizing business process automation in unprecedented ways. This article explores the most significant AI automation trends of 2023, including intelligent document processing, conversational AI for customer service, predictive maintenance, and autonomous decision-making systems. Learn how these technologies are transforming industries and creating new opportunities for efficiency and innovation.",
    image: "/placeholder.svg?height=300&width=400",
    date: "June 15, 2023",
    readTime: "8 min read",
    categories: ["AI", "Automation"],
    tags: ["Trends", "Machine Learning", "Business", "Innovation"],
  },
  {
    id: "nextjs-vs-react-comparison",
    title: "Next.js vs React: A Comprehensive Comparison for Developers",
    excerpt:
      "Choosing between Next.js and React for your web development project? This comprehensive comparison breaks down the key differences, advantages, and use cases for each framework. We'll explore server-side rendering, static site generation, routing, data fetching, and performance considerations to help you make an informed decision for your specific project requirements.",
    image: "/placeholder.svg?height=300&width=400",
    date: "May 28, 2023",
    readTime: "10 min read",
    categories: ["Development", "Web"],
    tags: ["Next.js", "React", "JavaScript", "Frontend"],
  },
  {
    id: "business-process-automation-guide",
    title: "The Complete Guide to Business Process Automation",
    excerpt:
      "Business process automation can transform your operations, but implementing it effectively requires careful planning and execution. This guide walks you through the essential steps: identifying automation opportunities, selecting the right tools, designing workflows, implementation strategies, and measuring success. Learn how to avoid common pitfalls and maximize ROI on your automation initiatives.",
    image: "/placeholder.svg?height=300&width=400",
    date: "April 12, 2023",
    readTime: "12 min read",
    categories: ["Automation", "Business"],
    tags: ["Workflow", "Efficiency", "Digital Transformation", "ROI"],
  },
  {
    id: "api-integration-best-practices",
    title: "API Integration Best Practices for Seamless Systems",
    excerpt:
      "Effective API integrations are the backbone of modern software ecosystems, enabling disparate systems to work together seamlessly. This article covers essential best practices for API integration, including authentication strategies, error handling, rate limiting, versioning, documentation, and monitoring. Implement these practices to build robust, maintainable integrations that stand the test of time.",
    image: "/placeholder.svg?height=300&width=400",
    date: "March 5, 2023",
    readTime: "9 min read",
    categories: ["Development", "Integration"],
    tags: ["API", "Architecture", "Backend", "Security"],
  },
  {
    id: "chatgpt-business-applications",
    title: "Practical Applications of ChatGPT for Business Automation",
    excerpt:
      "ChatGPT and similar large language models are transforming business automation beyond simple chatbots. This article explores practical applications including content generation, data analysis, code assistance, customer support automation, and internal knowledge management. Discover how to leverage these AI capabilities to streamline operations and enhance productivity across your organization.",
    image: "/placeholder.svg?height=300&width=400",
    date: "February 18, 2023",
    readTime: "7 min read",
    categories: ["AI", "Business"],
    tags: ["ChatGPT", "NLP", "Productivity", "Use Cases"],
  },
]

export function BlogList() {
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
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      {blogPosts.map((post) => (
        <motion.div key={post.id} variants={item}>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="ghost" size="sm" className="text-primary" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}

      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg">
          Load more articles
        </Button>
      </div>
    </motion.div>
  )
}


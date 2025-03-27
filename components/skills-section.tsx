"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Zap, Globe } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Development",
      skills: [
        "JavaScript/TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "REST APIs",
        "GraphQL",
        "SQL & NoSQL Databases",
      ],
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Automation",
      skills: [
        "Google Apps Script",
        "Zapier",
        "n8n",
        "Make.com",
        "Workflow Design",
        "Process Optimization",
        "API Integration",
        "Bash Scripting",
      ],
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "AI & Machine Learning",
      skills: [
        "AI Integration",
        "LLM Implementation",
        "Natural Language Processing",
        "Chatbot Development",
        "Data Analysis",
        "Predictive Modeling",
        "AI Agents",
        "OpenAI API",
      ],
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Business & Strategy",
      skills: [
        "Digital Transformation",
        "Process Analysis",
        "Requirements Gathering",
        "Project Management",
        "Technical Documentation",
        "Client Communication",
        "ROI Analysis",
        "Agile Methodologies",
      ],
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
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to deliver end-to-end solutions for complex business challenges.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="mb-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


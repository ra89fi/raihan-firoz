"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Code, Zap, CheckCircle, BarChart } from "lucide-react"

export function ProcessSection() {
  const processSteps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Discovery",
      description: "I begin by understanding your business, challenges, and goals through in-depth consultation.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Planning",
      description: "Together, we develop a detailed plan outlining the solution, timeline, and expected outcomes.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Development",
      description: "I build your solution using modern technologies and best practices, with regular updates.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Testing",
      description: "Rigorous testing ensures your solution works flawlessly across all scenarios and devices.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Deployment",
      description: "Your solution is deployed with minimal disruption to your existing operations.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Support & Optimization",
      description: "Ongoing support and data-driven optimization ensure your solution continues to deliver value.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach that ensures successful outcomes for every project.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-primary"></div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </div>
                <CardContent className="pt-6">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


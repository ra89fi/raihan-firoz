"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Results-Driven Approach",
      description:
        "I focus on delivering solutions that provide measurable business outcomes, not just technical implementations.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaborative Partnership",
      description:
        "I work closely with clients to understand their unique challenges and develop tailored solutions that align with their goals.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Continuous Innovation",
      description:
        "I stay at the forefront of technology trends to bring innovative solutions that give my clients a competitive edge.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Quality & Reliability",
      description:
        "I deliver robust, well-tested solutions that perform reliably in production environments and adapt to changing needs.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Approach & Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide my work and ensure successful outcomes for every project.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


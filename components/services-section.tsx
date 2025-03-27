"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Zap, BarChart } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Full-Stack Development",
      description: "Custom web applications built with modern technologies to solve your business challenges.",
      link: "/services#full-stack",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Business Process Automation",
      description: "Streamline workflows and eliminate repetitive tasks with custom automation solutions.",
      link: "/services#automation",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI Integration",
      description: "Leverage artificial intelligence to gain insights and enhance decision-making processes.",
      link: "/services#ai-integration",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Digital Transformation",
      description: "Comprehensive strategies to modernize your business operations and technology stack.",
      link: "/services#digital-transformation",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with business acumen to deliver solutions that drive efficiency and growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={service.link}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/services">View all services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


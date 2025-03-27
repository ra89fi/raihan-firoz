"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const pricingPlans = [
    {
      title: "Project-Based",
      description: "For specific, well-defined projects with clear requirements.",
      price: "Custom Quote",
      features: [
        "Detailed project scoping",
        "Fixed project timeline",
        "Agreed deliverables",
        "Regular progress updates",
        "Post-project support (30 days)",
        "Complete documentation",
      ],
      popular: false,
      buttonText: "Request a quote",
    },
    {
      title: "Retainer",
      description: "Ongoing development and support for your business needs.",
      price: "Starting at $3,000/month",
      features: [
        "Dedicated development time",
        "Priority support",
        "Regular strategy sessions",
        "Continuous improvements",
        "Monthly reporting",
        "Technical consultation",
        "Emergency support",
      ],
      popular: true,
      buttonText: "Schedule a call",
    },
    {
      title: "Consultation",
      description: "Expert advice and strategy for your technical challenges.",
      price: "$200/hour",
      features: [
        "Technical assessment",
        "Solution architecture",
        "Technology recommendations",
        "Process optimization",
        "Implementation guidance",
        "Follow-up documentation",
      ],
      popular: false,
      buttonText: "Book consultation",
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Options</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible engagement models designed to meet your specific needs and budget.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={item}>
              <Card className={`h-full relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary hover:bg-primary">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">{plan.price}</p>
                  </div>
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/contact">
                      {plan.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
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
          <p className="text-muted-foreground mb-4">
            Not sure which option is right for you? Let's discuss your specific needs.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact me for custom options</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


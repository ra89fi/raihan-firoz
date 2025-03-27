"use client"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { MessageSquare } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The automation solutions implemented have saved us countless hours of manual work. Our team can now focus on strategic initiatives instead of repetitive tasks.",
      name: "Sarah Johnson",
      title: "Operations Director, TechCorp",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "Working with this developer was a game-changer for our business. The custom web application they built has streamlined our entire workflow and improved customer satisfaction.",
      name: "Michael Chen",
      title: "CEO, GrowthStartup",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "The AI integration project exceeded our expectations. We're now able to analyze customer data more effectively and make data-driven decisions with confidence.",
      name: "Emily Rodriguez",
      title: "Marketing Manager, DataInsights",
      image: "/placeholder.svg?height=64&width=64",
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
          <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working together.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-20">"</div>
                    <p className="relative z-10 italic text-muted-foreground">{testimonial.quote}</p>
                    <div className="absolute -bottom-4 -right-2 text-4xl text-primary opacity-20">"</div>
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


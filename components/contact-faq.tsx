"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContactFaq() {
  const faqs = [
    {
      question: "What information should I provide about my project?",
      answer:
        "To help me understand your project better, please include details about your business, the problem you're trying to solve, your goals, timeline, and budget constraints. The more specific you can be, the better I can assess if we're a good fit and provide an accurate estimate.",
    },
    {
      question: "How quickly will you respond to my inquiry?",
      answer:
        "I typically respond to all inquiries within 24 hours during business days. For urgent matters, please indicate this in your message and I'll prioritize your request.",
    },
    {
      question: "Do you work with clients internationally?",
      answer:
        "Yes, I work with clients worldwide. With modern communication tools and flexible scheduling, geographic location is not a barrier to successful collaboration.",
    },
    {
      question: "What is your typical process after initial contact?",
      answer:
        "After receiving your inquiry, I'll schedule a discovery call to discuss your project in detail. Following this, I'll provide a proposal outlining the scope, timeline, and cost. Once approved, we'll establish a project plan and begin work according to the agreed schedule.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, I offer various support options after project completion. All projects include a 30-day support period for bug fixes and minor adjustments. For ongoing maintenance and enhancements, I recommend a retainer agreement that provides dedicated support time each month.",
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answers to common questions about working together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary based on complexity and scope. A simple automation solution might take 2-4 weeks, while a comprehensive full-stack application could take 2-3 months. During our initial consultation, I'll provide a detailed timeline based on your specific requirements.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, I offer various support options after project completion. All projects include a 30-day support period for bug fixes and minor adjustments. For ongoing maintenance and enhancements, I recommend a retainer agreement that provides dedicated support time each month.",
    },
    {
      question: "How do you handle project changes and new requirements?",
      answer:
        "I follow an agile approach that accommodates changes throughout the development process. Minor changes can often be incorporated within the existing scope. For significant changes that affect timeline or complexity, we'll discuss the impact and adjust the project plan accordingly.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern web technologies including JavaScript/TypeScript, React, Next.js, Node.js, and Python. For automation, I work with Google Apps Script, Zapier, n8n, Make.com, and custom API integrations. My AI integration work primarily uses OpenAI, LangChain, and various machine learning frameworks.",
    },
    {
      question: "How do you ensure the security of the solutions you build?",
      answer:
        "Security is a priority in all my projects. I implement industry best practices including secure authentication, data encryption, input validation, and protection against common vulnerabilities. For applications handling sensitive data, I can perform security audits and implement additional security measures as needed.",
    },
    {
      question: "Can you work with my existing systems and technologies?",
      answer:
        "Yes, I have extensive experience integrating with existing systems through APIs and other integration methods. During the discovery phase, I'll assess your current technology stack and develop a plan to seamlessly integrate new solutions with your existing infrastructure.",
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
            Answers to common questions about my services and process.
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


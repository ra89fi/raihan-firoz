"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function ContactCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-primary/5 border border-primary/10 p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how custom automation solutions and web development can help your business grow and operate
              more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


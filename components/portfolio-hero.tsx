"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function PortfolioHero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A collection of projects showcasing my expertise in full-stack development, business process automation, and
            AI integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Discuss your project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View projects</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


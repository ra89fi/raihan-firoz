"use client"

import { motion } from "framer-motion"

export function ContactHero() {
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
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or want to discuss how I can help your business? I'm just a message away.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function BlogHero() {
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
            The <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Insights, tutorials, and thoughts on full-stack development, business process automation, and AI
            integration.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input type="text" placeholder="Search articles..." className="pr-10" />
              <Button size="sm" variant="ghost" className="absolute right-0 top-0 h-full px-3">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


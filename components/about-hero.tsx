"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              I'm a full-stack developer and automation expert with over 8 years of experience building custom solutions
              that help businesses streamline operations and achieve their goals.
            </p>
            <p className="text-muted-foreground mb-8">
              My journey began with a passion for solving complex problems through code. Over the years, I've
              specialized in creating automation solutions that eliminate repetitive tasks and integrate AI to provide
              valuable insights. I work closely with businesses to understand their unique challenges and develop
              tailored solutions that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[400px] w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Professional headshot"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-sm font-medium">
                "I believe in creating solutions that not only solve technical problems but deliver real business
                value."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


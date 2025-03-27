"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Full-Stack Developer & Automation Expert
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Transforming Ideas into <span className="text-primary">Automated Solutions</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl text-muted-foreground mt-4"
              >
                Specialized in building custom web applications, business process automation, and AI integration to help
                businesses achieve efficiency and growth.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/contact">
                  Work with me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View my work</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image src={`/placeholder.svg?height=32&width=32`} alt="Client" width={32} height={32} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-medium">20+</span> businesses
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Developer working on automation"
                fill
                className="object-cover mix-blend-overlay"
                priority
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-4/5 h-4/5 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                <div className="h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <pre className="text-xs text-slate-700 font-mono">
                      <code>
                        {`// Automation workflow
async function automateProcess() {
  const data = await fetchData();
  const processed = transformData(data);
  await saveResults(processed);
  
  // AI integration
  const insights = await analyzeWithAI(processed);
  return generateReport(insights);
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}


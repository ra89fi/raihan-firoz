"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Twitter } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                    contact@example.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                    +1 (123) 456-7890
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">
                  San Francisco, CA
                  <br />
                  Available for remote work worldwide
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM PST
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-3">Connect with me</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


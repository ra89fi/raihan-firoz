"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after showing success message
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-center text-muted-foreground">
                Thank you for reaching out. I'll be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company"
                  value={formState.company}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Project Type</Label>
                <RadioGroup
                  value={formState.projectType}
                  onValueChange={(value) => handleSelectChange("projectType", value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="development" id="development" />
                    <Label htmlFor="development" className="cursor-pointer">
                      Full-Stack Development
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="automation" id="automation" />
                    <Label htmlFor="automation" className="cursor-pointer">
                      Business Process Automation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ai" id="ai" />
                    <Label htmlFor="ai" className="cursor-pointer">
                      AI Integration
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consultation" id="consultation" />
                    <Label htmlFor="consultation" className="cursor-pointer">
                      Consultation
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formState.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-5k">Less than $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="more-50k">More than $50,000</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, goals, and timeline..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}


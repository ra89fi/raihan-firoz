"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export function ExperienceSection() {
  const workExperience = [
    {
      title: "Lead Automation Developer",
      company: "TechSolutions Inc.",
      period: "2020 - Present",
      description:
        "Lead the development of automation solutions for enterprise clients, resulting in 40% reduction in manual processes and significant cost savings.",
      achievements: [
        "Designed and implemented an AI-powered workflow system that reduced processing time by 60%",
        "Led a team of 5 developers to deliver 15+ successful automation projects",
        "Integrated AI capabilities into existing systems to enhance decision-making processes",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "InnovateX",
      period: "2017 - 2020",
      description:
        "Developed web applications and automation tools for clients across various industries, focusing on creating efficient and scalable solutions.",
      achievements: [
        "Built custom CRM systems with automated reporting features",
        "Developed API integrations between disparate systems",
        "Created data visualization dashboards for real-time business insights",
      ],
    },
    {
      title: "Web Developer",
      company: "Digital Creations",
      period: "2015 - 2017",
      description:
        "Focused on front-end development and initial exploration of automation technologies to enhance web applications.",
      achievements: [
        "Developed responsive websites for 20+ clients",
        "Implemented basic automation scripts to streamline content updates",
        "Collaborated with designers to create intuitive user interfaces",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      year: "2015",
      focus: "Specialization in Artificial Intelligence and Automation",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      year: "2013",
      focus: "Focus on Web Development and Database Systems",
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Certified Automation Professional (CAP)",
    "AI Engineering Professional",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {workExperience.map((job, index) => (
                <motion.div key={index} variants={item}>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                        </div>
                        <Badge variant="outline">{job.period}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="h-5 w-5 mt-0.5 text-primary flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <p className="text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}, {edu.year}
                        </p>
                        <p className="text-sm mt-2">{edu.focus}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Certifications</h2>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-5 w-5 text-primary flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883L9.5 10.956 8.26 9.15a.75.75 0 10-1.22.872l1.5 2.5a.75.75 0 001.164.114l3.5-4.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


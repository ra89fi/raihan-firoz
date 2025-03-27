"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogSidebar() {
  // Sample categories with post counts
  const categories = [
    { name: "Development", count: 12 },
    { name: "Automation", count: 8 },
    { name: "AI", count: 7 },
    { name: "Business", count: 5 },
    { name: "Integration", count: 4 },
    { name: "Web", count: 3 },
  ]

  // Sample tags with post counts
  const tags = [
    { name: "JavaScript", count: 8 },
    { name: "Next.js", count: 6 },
    { name: "API", count: 5 },
    { name: "Workflow", count: 5 },
    { name: "Machine Learning", count: 4 },
    { name: "React", count: 4 },
    { name: "Productivity", count: 3 },
    { name: "Security", count: 3 },
    { name: "Frontend", count: 3 },
    { name: "Backend", count: 3 },
    { name: "ChatGPT", count: 2 },
    { name: "ROI", count: 2 },
    { name: "Architecture", count: 2 },
    { name: "NLP", count: 2 },
    { name: "Trends", count: 2 },
  ]

  // Sample popular posts
  const popularPosts = [
    {
      id: "ai-automation-trends-2023",
      title: "Top AI Automation Trends to Watch in 2023",
      date: "June 15, 2023",
    },
    {
      id: "nextjs-vs-react-comparison",
      title: "Next.js vs React: A Comprehensive Comparison for Developers",
      date: "May 28, 2023",
    },
    {
      id: "business-process-automation-guide",
      title: "The Complete Guide to Business Process Automation",
      date: "April 12, 2023",
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Subscribe</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Get the latest articles and insights delivered to your inbox.</p>
            <div className="space-y-2">
              <Input placeholder="Your email" type="email" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name} className="flex justify-between items-center">
                  <Link
                    href={`/blog/category/${category.name.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Popular Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {popularPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    <h3 className="font-medium line-clamp-2">{post.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link key={tag.name} href={`/blog/tag/${tag.name.toLowerCase()}`}>
                  <Badge variant="outline" className="hover:bg-secondary transition-colors">
                    {tag.name} <span className="ml-1 text-xs">({tag.count})</span>
                  </Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}


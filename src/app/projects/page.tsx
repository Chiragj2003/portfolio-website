"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"

const allProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    githubUrl: "https://github.com/Chiragj2003/portfolio-website",
    liveUrl: "https://chiragj.vercel.app",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application with real-time data, forecasts, and interactive maps.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    category: "frontend",
    githubUrl: "https://github.com/Chiragj2003/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
  },
  {
    title: "Blog CMS",
    description: "A content management system for blogs with markdown support and SEO optimization.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/blog-cms",
    liveUrl: "https://blog-cms-demo.vercel.app",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with user authentication and message persistence.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/chat-app",
    liveUrl: "https://chat-app-demo.vercel.app",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "full-stack", name: "Full Stack" },
  { id: "mobile", name: "Mobile" },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Here's a collection of projects I've built, showcasing my skills in
              frontend development, full-stack applications, and problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <Section id="filter" title="Filter Projects" subtitle="Browse by category">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/70 text-lg">
              No projects found in this category. Please try another filter.
            </p>
          </div>
        )}
      </Section>

      {/* Project Stats */}
      <Section id="stats" title="Project Statistics" subtitle="Some numbers about my work" className="bg-secondary/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Total Projects", value: allProjects.length },
            { label: "Frontend Projects", value: allProjects.filter(p => p.category === "frontend").length },
            { label: "Full Stack Projects", value: allProjects.filter(p => p.category === "full-stack").length },
            { label: "Technologies Used", value: 15 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"
import AnimatedBackground from "@/components/AnimatedBackground"

const allProjects = [
  {
    title: "E-Learning Platform",
    description: "A full-stack e-learning application with video conferencing, user authentication, and course management.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "WebRTC"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/lms",
    liveUrl: "https://lms-gray-nine.vercel.app",
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
      <AnimatedBackground />
      {/* Hero Section with enhanced animations */}
      <section className="pt-20 pb-16 relative">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My <span className="gradient-text">Projects</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Here&apos;s a collection of projects I&apos;ve built, showcasing my skills in
              frontend development, full-stack applications, and problem-solving.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section with animations */}
      <Section id="filter" title="Filter Projects" subtitle="Browse by category">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid with stagger animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category. Please try another filter.
            </p>
          </motion.div>
        )}
      </Section>

      {/* Project Stats with enhanced animations */}
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
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.5 }
              }}
              className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-xl transition-shadow"
            >
              <motion.div 
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.1 + 0.2
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

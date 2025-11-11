"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"
import AnimatedBackground from "@/components/AnimatedBackground"

const allProjects = [
  {
    title: "E-Learning Platform",
    description: "A full-stack learning management system with live classrooms, role-based dashboards, secure payments, and real-time collaboration.",
    image: "/lms.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "WebRTC"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/lms",
    liveUrl: "https://lms-gray-nine.vercel.app",
  },
  {
    title: "One Notebook",
    description: "A modern document workspace inspired by Notion, featuring real-time collaboration, Convex-backed data, and Clerk-powered authentication.",
    image: "/one-notebook.png",
    technologies: ["Next.js", "Convex", "Clerk", "Tailwind CSS", "TypeScript"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/One-Notebook",
    liveUrl: "https://one-notebook.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "This interactive portfolio combines dynamic visuals, theme support, and rich storytelling to highlight skills and achievements.",
    image: "/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    githubUrl: "https://github.com/Chiragj2003/portfolio-website",
    liveUrl: "https://chiragj.vercel.app",
  },
  {
    title: "AI Resume Analyser",
    description: "An AI-assisted talent evaluation tool that ingests resumes, scores ATS readiness, and generates tailored feedback with Puter.js infrastructure.",
    image: "/resume analyser.png",
    technologies: ["React", "React Router", "Puter.js", "OpenAI", "Tailwind CSS"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/ai-resume-analyser",
    liveUrl: "https://ai-resume-analyser-kappa.vercel.app",
  },
  {
    title: "QuickDraw AI",
    description: "A timed drawing challenge where TensorFlow.js models guess your sketches in real-time, built with Vite and modern React tooling.",
    image: "/github.png",
    technologies: ["Vite", "React", "TypeScript", "TensorFlow.js", "Tailwind CSS"],
    category: "frontend",
    githubUrl: "https://github.com/Chiragj2003/quickdraw",
    liveUrl: "https://quickdraw-rho.vercel.app",
  },
  {
    title: "Emoji Pop",
    description: "A playful Expo/React Native app for decorating photos with emoji and text stickers, complete with save and share workflows.",
    image: "/github.png",
    technologies: ["Expo", "React Native", "TypeScript"],
    category: "mobile",
    githubUrl: "https://github.com/Chiragj2003/First-Expo-app-EmojiePop",
    liveUrl: "https://drive.google.com/file/d/19cNwWf24V-Pu0saRdGUZ15ruPc6PgWIa/view?usp=sharing",
  },
  {
    title: "CMS E-Commerce",
    description: "A production-ready CMS and storefront built with ASP.NET Core MVC, featuring catalog management, checkout, and admin tooling.",
    image: "/github.png",
    technologies: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server"],
    category: "full-stack",
    githubUrl: "https://github.com/Chiragj2003/CMSECommerce-main",
    liveUrl: "https://github.com/Chiragj2003/CMSECommerce-main",
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
              className="h-full"
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
            { label: "Technologies Used", value: 20 },
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

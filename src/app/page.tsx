"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Globe, Smartphone } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import LazySection from "@/components/LazySection"
import AnimatedBackground from "@/components/AnimatedBackground"

// Dynamic imports for better performance
const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  loading: () => <div className="animate-pulse bg-secondary rounded-xl h-64" />,
  ssr: false
})

const skills = [
  { 
    name: "Frontend Development", 
    icon: Globe, 
    description: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion" 
  },
  { 
    name: "Backend Development", 
    icon: Database, 
    description: "Node.js, Express, Python, Django, REST APIs, GraphQL, Microservices" 
  },
  { 
    name: "Mobile Development", 
    icon: Smartphone, 
    description: "React Native, Flutter, iOS, Android, Cross-platform Solutions" 
  },
  { 
    name: "Full Stack Solutions", 
    icon: Code, 
    description: "MERN Stack, PostgreSQL, MongoDB, AWS, Docker, CI/CD, DevOps" 
  },
]

const featuredProjects = [
  {
    title: "E-Learning Platform",
    description: "A production-ready LMS featuring live classrooms, role-based dashboards, secure payments, and instructor tooling—all powered by a modern Next.js stack.",
    image: "/lms.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "WebRTC"],
    githubUrl: "https://github.com/Chiragj2003/lms",
    liveUrl: "https://lms-gray-nine.vercel.app",
  },
  {
    title: "One Notebook",
    description: "A Notion-inspired document workspace with multiplayer editing, Convex real-time sync, and Clerk-secured authentication for teams.",
    image: "/one-notebook.png",
    technologies: ["Next.js", "Convex", "Clerk", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Chiragj2003/One-Notebook",
    liveUrl: "https://one-notebook.vercel.app",
  },
  {
    title: "AI Resume Analyser",
    description: "An AI-powered hiring assistant that ingests resumes, scores ATS readiness, and generates tailored feedback using Puter.js integrations.",
    image: "/resume analyser.png",
    technologies: ["React", "React Router", "Puter.js", "OpenAI", "Tailwind CSS"],
    githubUrl: "https://github.com/Chiragj2003/ai-resume-analyser",
    liveUrl: "https://ai-resume-analyser-kappa.vercel.app",
  },
]

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Chirag Joshi</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              A passionate full-stack developer and digital innovator who specializes in creating 
              immersive web experiences, scalable applications, and cutting-edge solutions that 
              bridge the gap between creativity and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <span>View My Work</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border border-border px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <LazySection
        id="skills"
        title="Technical Expertise"
        subtitle="Mastering the art of modern web development with cutting-edge technologies and innovative solutions"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateX: 10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <skill.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </LazySection>

      {/* Featured Projects Section */}
      <LazySection
        id="featured-projects"
        title="Featured Projects"
        subtitle="Innovative solutions and cutting-edge applications that demonstrate technical excellence and creative problem-solving"
        className="bg-secondary/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </LazySection>
    </div>
  )
}

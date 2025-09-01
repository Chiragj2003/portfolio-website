import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Globe, Smartphone } from "lucide-react"
import Link from "next/link"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"

const skills = [
  { name: "Frontend Development", icon: Globe, description: "React, Next.js, TypeScript, Tailwind CSS" },
  { name: "Backend Development", icon: Database, description: "Node.js, Express, Python, Django" },
  { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter" },
  { name: "Full Stack", icon: Code, description: "MERN Stack, PostgreSQL, MongoDB" },
]

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com/Chiragj2003/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/Chiragj2003/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Chiragj2003/portfolio-website",
    liveUrl: "https://chiragj.vercel.app",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Chirag J</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              A passionate full-stack developer who loves creating innovative web applications
              and turning ideas into reality through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>View My Work</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="What I Do"
        subtitle="I specialize in building modern web applications and digital experiences"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <skill.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section
        id="featured-projects"
        title="Featured Projects"
        subtitle="Some of my recent work that showcases my skills and creativity"
        className="bg-gray-50 dark:bg-gray-900/20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Section>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import Section from "@/components/Section"

const experience = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Leading the development of enterprise-scale web applications serving 100K+ users. Architected microservices infrastructure, implemented CI/CD pipelines, and mentored junior developers. Technologies: React, Node.js, AWS, Docker, Kubernetes.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations Inc",
    period: "2020 - 2022",
    description: "Delivered 15+ client projects including e-commerce platforms, SaaS applications, and mobile apps. Collaborated with cross-functional teams and implemented agile methodologies. Achieved 40% improvement in application performance.",
  },
  {
    title: "Frontend Developer",
    company: "WebStudio",
    period: "2019 - 2020",
    description: "Specialized in creating pixel-perfect, responsive user interfaces for diverse clients. Implemented modern design systems, optimized web performance, and conducted user experience research.",
  },
]

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2015 - 2019",
    description: "Graduated with honors, specializing in Software Engineering and Web Technologies. Completed advanced coursework in algorithms, data structures, and software architecture. Active member of the Computer Science Society.",
  },
  {
    degree: "Full-Stack Web Development Certification",
    institution: "Tech Academy",
    period: "2019",
    description: "Intensive 6-month program covering modern web development stack including React, Node.js, databases, and deployment strategies. Completed 5 major projects and achieved 95% grade average.",
  },
]

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Python", "Django",
  "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "Git", "REST APIs", 
  "GraphQL", "WebSockets", "Three.js", "Tailwind CSS", "Framer Motion", "Jest", "Cypress",
  "CI/CD", "Microservices", "Serverless", "Machine Learning", "OpenAI API"
]

export default function About() {
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I&apos;m a passionate full-stack developer and digital innovator with over 5 years of experience 
              building scalable web applications and immersive digital experiences. I specialize in creating 
              cutting-edge solutions that combine technical excellence with creative vision, always pushing 
              the boundaries of what's possible in web development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info */}
      <Section id="personal-info" title="Personal Information" subtitle="Get to know me better">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Based in Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Available for new opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>Computer Science Graduate</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">What drives me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m driven by the belief that technology should enhance human experiences and solve real-world problems. 
                My approach combines technical expertise with creative thinking, always striving to deliver solutions 
                that are not only functional but also delightful to use. I&apos;m passionate about continuous learning, 
                contributing to open-source projects, and mentoring the next generation of developers. When I&apos;m not 
                coding, you&apos;ll find me exploring emerging technologies, attending tech conferences, or experimenting 
                with the latest web development trends.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-secondary text-muted-foreground rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Work Experience" subtitle="My professional journey" className="bg-secondary/20">
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" subtitle="My academic background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <div className="flex items-center space-x-4 mb-3 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

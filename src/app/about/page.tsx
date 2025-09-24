"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import Section from "@/components/Section"

const experience = [
  {
    title: "Software Trainee",
    company: "J2B Global Solutions",
    period: "March 2025 – Present",
    description: "Contributing to the design and development of enterprise-scale web applications serving 100K+ users. Involved in website architecture, database implementation, and application testing to ensure high performance and scalability. Technologies: HTML, CSS, JavaScript, SQL, ASP.NET WebForms, ASP.NET MVC, ASP.NET Core.",
  },
  {
    title: "Full Stack Developer",
    company: "Freelancer",
    period: "2022 – 2025",
    description: "Delivered full-stack web solutions for diverse clients, from small businesses to large organizations. Designed responsive UIs, built scalable backends, and optimized performance across projects. Technologies: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Framer Motion, Three.js, Node.js, MongoDB, SQL, ASP.NET WebForms, ASP.NET MVC, ASP.NET Core.",
  },  
]

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "COER University",
    period: "2021 – 2025",
    description: "Specialized in Software Engineering and Web Technologies with a strong foundation in algorithms, data structures, and software architecture. Actively engaged in academic projects and a contributing member of the Computer Science Society.",
  },
  
  {
    degree: "Intermediate (PCM - Physics, Chemistry, Mathematics)",
    institution: "Stafford Public School",
    period: "2021",
    description: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, building a strong foundation in analytical and problem-solving skills.",
  },
  {
    degree: "Secondary School (10th Grade)",
    institution: "KCM Public School",
    period: "2019",
    description: "Successfully completed secondary education with distinction, developing a strong academic foundation and active participation in extracurricular activities.",
  },
]

const skills = [
  // Programming Languages
  "JavaScript (ES6+)", "C#", "SQL",

  // Frontend
  "React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js", "HTML", "CSS",

  // Backend
  "Node.js", "ASP.NET WebForms", "ASP.NET MVC", "ASP.NET Core",

  // Databases
  "MySQL", "MongoDB","PostgreSQL","REDIS","Oracle",

  // Tools & Version Control
  "Git", "REST APIs", "GitHub","Visual Studio", "Visual Studio Code", "SQL Server", "AWS", "Docker",  "REST APIs",

  // Other
  "CI/CD (basic)", "Machine Learning (beginner)", "OpenAI API"
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

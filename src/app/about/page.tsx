import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import Section from "@/components/Section"

const experience = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations Inc",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects using modern web technologies and best practices.",
  },
  {
    title: "Frontend Developer",
    company: "WebStudio",
    period: "2019 - 2020",
    description: "Developed responsive user interfaces and implemented modern design patterns.",
  },
]

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2015 - 2019",
    description: "Specialized in Software Engineering with focus on web technologies.",
  },
  {
    degree: "Full-Stack Web Development",
    institution: "Coding Bootcamp",
    period: "2019",
    description: "Intensive program covering modern web development technologies and practices.",
  },
]

const skills = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "REST APIs", "GraphQL",
  "Tailwind CSS", "Framer Motion", "Testing", "CI/CD"
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
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with over 4 years of experience
              building modern web applications. I love solving complex problems and
              creating user-friendly digital experiences.
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
              <p className="text-foreground/70 leading-relaxed">
                I'm passionate about creating software that makes a difference in people's lives. 
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies. When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer community.
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
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-secondary text-foreground/80 rounded-lg text-sm"
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
                  <div className="flex items-center space-x-4 mt-2 text-foreground/70">
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
              <p className="text-foreground/70">{job.description}</p>
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
              <div className="flex items-center space-x-4 mb-3 text-foreground/70">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="text-foreground/70">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

// Section component
const Section = ({ id, title, subtitle, children }: { id?: string; title: string; subtitle: string; children: React.ReactNode }) => (
  <section id={id} className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      {children}
    </div>
  </section>
)

// Input Field component
const InputField = ({ name, label, value, onChange }: { name: string; label: string; value: string; onChange: any }) => (
  <div>
    <label className="block text-sm font-medium mb-2 text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:scale-105 focus:scale-105"
      placeholder={`Your ${label.toLowerCase().replace('*', '').trim()}`}
    />
  </div>
)

// Textarea Field component
const TextareaField = ({ name, label, value, onChange }: { name: string; label: string; value: string; onChange: any }) => (
  <div>
    <label className="block text-sm font-medium mb-2 text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={5}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 hover:scale-105 focus:scale-105"
      placeholder={`Your ${label.toLowerCase().replace('*', '').trim()}`}
    />
  </div>
)

interface ContactInfo { icon: React.ComponentType<{ className?: string }>; title: string; value: string; href: string }
interface SocialLink { name: string; href: string; icon: React.ComponentType<{ className?: string }> }

const contactInfo: ContactInfo[] = [
  { icon: Mail, title: "Email", value: "chiragj2019@gmail.com", href: "mailto:chiragj2019@gmail.com" },
  { icon: Phone, title: "Phone", value: "+91 9258542485", href: "tel:+919258542485" },
  { icon: MapPin, title: "Location", value: "Pithoragarh, India", href: "#" },
]

const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/Chiragj2003", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/chirag-joshi-3b9b68222/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/chiragj2019", icon: Twitter },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) { alert('Please enter a valid email address'); return }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const emailSubject = `Contact Form: ${formData.subject}`
      const emailBody = `
New Contact Form Submission

From: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from portfolio contact form on ${new Date().toLocaleString()}
      `
      const mailtoLink = `mailto:chiragj2019@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

      // OPEN MAIL CLIENT IN NEW TAB (does NOT navigate away)
      window.open(mailtoLink, "_blank")

      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitStatus('success')
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally { setIsSubmitting(false) }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleKeyPress = (e: React.KeyboardEvent) => { if (e.key === 'Enter' && e.ctrlKey) handleSubmit() }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects.
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Information" subtitle="Let's start a conversation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700">✅ Email client opened!</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">❌ Error submitting form.</p>
              </div>
            )}

            <div className="space-y-6" onKeyDown={handleKeyPress}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField name="name" label="Name *" value={formData.name} onChange={handleChange} />
                <InputField name="email" label="Email *" value={formData.email} onChange={handleChange} />
              </div>
              <InputField name="subject" label="Subject *" value={formData.subject} onChange={handleChange} />
              <TextareaField name="message" label="Message *" value={formData.message} onChange={handleChange} />

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : <Send className="h-5 w-5" />}
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Details, Socials, Work Together */}
          <div className="flex flex-col gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
              <div className="space-y-4">
                {contactInfo.map(info => {
                  const Icon = info.icon
                  return (
                    <div key={info.title} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{info.title}</h4>
                        <a href={info.href} className="text-gray-600 hover:text-gray-900">{info.value}</a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Follow Me */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map(social => {
                  const Icon = social.icon
                  return (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors">
                      <Icon className="h-6 w-6" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Let's Work Together */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-gray-600 mb-4">
                I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative thinking, I'd love to hear about it.
              </p>
              <p className="text-gray-600">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

import Link from "next/link"
import { Github,
   Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Chiragj2003", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/chiragj2003", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/chiragj2003", icon: Twitter },
  { name: "Email", href: "mailto:chiragj2003@gmail.com", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 Chirag J. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={`Visit ${social.name} profile`}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

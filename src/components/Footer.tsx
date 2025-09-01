import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Chiragj2003", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/chiragj2003", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/chiragj2003", icon: Twitter },
  { name: "Email", href: "mailto:chiragj2003@gmail.com", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
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
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                aria-label={social.name}
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

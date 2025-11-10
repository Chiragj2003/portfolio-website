"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface Petal {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  rotation: number
}

export default function FallingPetals() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    setMounted(true)
    // Generate random petals
    const newPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 8,
      size: 20 + Math.random() * 30,
      rotation: Math.random() * 360,
    }))
    setPetals(newPetals)
  }, [])

  if (!mounted || resolvedTheme === "dark") {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: "-10%",
            filter: "drop-shadow(0 4px 8px rgba(255, 23, 68, 0.4))",
          }}
          initial={{ y: -100, opacity: 0, rotate: petal.rotation }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: petal.rotation + 360,
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Rose Petal SVG */}
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M12 2C12 2 8 4 8 8C8 10 9 11 10 12C9 13 8 14 8 16C8 20 12 22 12 22C12 22 16 20 16 16C16 14 15 13 14 12C15 11 16 10 16 8C16 4 12 2 12 2Z"
              fill="url(#redGradient)"
              opacity="0.85"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient id="redGradient" x1="8" y1="2" x2="16" y2="22">
                <stop offset="0%" stopColor="#ff1744" />
                <stop offset="50%" stopColor="#f50057" />
                <stop offset="100%" stopColor="#c51162" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

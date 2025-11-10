"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent flash during hydration
  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background - Pink for light mode, Blue for dark mode */}
      <div 
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark 
            ? "bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950" 
            : "bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50"
        }`} 
      />
      
      {/* Animated gradient orbs/bubbles - Enhanced with lighter colors and gentle movement */}
      {/* Large bubble 1 - Top Left */}
      <motion.div
        className={`absolute top-10 left-10 w-96 h-96 rounded-full ${
          isDark 
            ? "bg-blue-800 mix-blend-lighten opacity-30 blur-3xl" 
            : "bg-pink-100 mix-blend-multiply opacity-50 blur-3xl"
        }`}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Large bubble 2 - Top Right */}
      <motion.div
        className={`absolute top-20 right-10 w-80 h-80 rounded-full ${
          isDark 
            ? "bg-slate-700 mix-blend-lighten opacity-30 blur-3xl" 
            : "bg-rose-100 mix-blend-multiply opacity-50 blur-3xl"
        }`}
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Large bubble 3 - Bottom Left */}
      <motion.div
        className={`absolute bottom-20 left-32 w-96 h-96 rounded-full ${
          isDark 
            ? "bg-indigo-800 mix-blend-lighten opacity-30 blur-3xl" 
            : "bg-fuchsia-100 mix-blend-multiply opacity-45 blur-3xl"
        }`}
        animate={{
          x: [0, -20, 0],
          y: [0, -25, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Large bubble 4 - Bottom Right */}
      <motion.div
        className={`absolute bottom-32 right-20 w-80 h-80 rounded-full ${
          isDark 
            ? "bg-blue-900 mix-blend-lighten opacity-30 blur-3xl" 
            : "bg-pink-200 mix-blend-multiply opacity-50 blur-3xl"
        }`}
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0],
          scale: [1, 1.07, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Medium bubble 5 - Center Top */}
      <motion.div
        className={`absolute top-1/4 left-1/2 w-64 h-64 rounded-full ${
          isDark 
            ? "bg-cyan-800 mix-blend-lighten opacity-25 blur-3xl" 
            : "bg-rose-50 mix-blend-multiply opacity-40 blur-3xl"
        }`}
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Medium bubble 6 - Center Bottom */}
      <motion.div
        className={`absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full ${
          isDark 
            ? "bg-indigo-700 mix-blend-lighten opacity-25 blur-3xl" 
            : "bg-pink-50 mix-blend-multiply opacity-40 blur-3xl"
        }`}
        animate={{
          x: [0, 18, 0],
          y: [0, -18, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 dark:opacity-20" />
      
      {/* Radial gradient overlay for depth */}
      <div className={`absolute inset-0 bg-gradient-radial from-transparent via-transparent ${
        isDark ? "to-blue-950/50" : "to-pink-50/50"
      }`} />
    </div>
  )
}

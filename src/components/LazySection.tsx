"use client"

import { Suspense, lazy } from "react"
import { motion } from "framer-motion"

const Section = lazy(() => import("./Section"))

interface LazySectionProps {
  id: string
  title: string
  subtitle: string
  className?: string
  children: React.ReactNode
}

function LoadingFallback() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section-padding"
    >
      <div className="container-max text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-secondary rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-secondary rounded w-1/2 mx-auto mb-8"></div>
        </div>
      </div>
    </motion.div>
  )
}

export default function LazySection({ children, ...props }: LazySectionProps) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Section {...props}>
        {children}
      </Section>
    </Suspense>
  )
}

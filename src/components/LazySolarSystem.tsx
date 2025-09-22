"use client"

import { Suspense, lazy } from "react"
import { motion } from "framer-motion"

const SolarSystemBackground = lazy(() => import("./SolarSystem"))

function LoadingFallback() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    </div>
  )
}

export default function LazySolarSystem() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SolarSystemBackground />
    </Suspense>
  )
}

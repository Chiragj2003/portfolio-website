"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Register service worker for better caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }

    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Preload critical resources
      const preloadLinks = [
        { href: '/about', as: 'document' },
        { href: '/projects', as: 'document' },
        { href: '/contact', as: 'document' }
      ]

      preloadLinks.forEach(({ href, as }) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = href
        link.as = as as any
        document.head.appendChild(link)
      })
    }

    return () => {
      // Cleanup if needed
    }
  }, [])

  return null // This component doesn't render anything
}

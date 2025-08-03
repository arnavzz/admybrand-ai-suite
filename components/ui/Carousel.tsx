'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarouselItem {
  id: string
  content: React.ReactNode
}

interface CarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1))
  }, [items.length])

  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const interval = setInterval(goToNext, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, items.length, goToNext])

  if (items.length === 0) return null

  return (
    <div className={cn("relative", className)}>
      {/* Main content */}
      <div className="relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {items[currentIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                index === currentIndex
                  ? "bg-brand-accent scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
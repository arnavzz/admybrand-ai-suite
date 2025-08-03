'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  gradient?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  glass = false,
  gradient = false,
  padding = 'md',
}) => {
  const baseClasses = 'rounded-xl border'
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const classes = cn(
    baseClasses,
    paddingClasses[padding],
    {
      'card-hover': hover,
      'glass-morphism': glass,
      'bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm': gradient,
      'bg-white shadow-sm': !glass && !gradient,
    },
    className
  )

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
    >
      {children}
    </motion.div>
  )
}

export default Card
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: React.ReactNode
  pulse?: boolean
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  pulse = false,
}) => {
  const baseClasses = 'inline-flex items-center gap-1.5 rounded-full font-medium'
  
  const variantClasses = {
    primary: 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20',
    secondary: 'bg-gray-100 text-gray-700 border border-gray-200',
    accent: 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20',
    success: 'bg-green-100 text-green-700 border border-green-200',
    warning: 'bg-amber-100 text-amber-700 border border-amber-200',
    error: 'bg-red-100 text-red-700 border border-red-200',
  }
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  )

  return (
    <motion.span
      className={classes}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      {...(pulse && {
        animate: { 
          opacity: [1, 0.7, 1],
          scale: [1, 1.05, 1]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      })}
    >
      {content}
    </motion.span>
  )
}

export default Badge
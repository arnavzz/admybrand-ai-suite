'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  isLoading?: boolean
  icon?: React.ReactNode
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  isLoading = false,
  icon,
  href,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-brand-accent text-white hover:bg-amber-600 focus:ring-brand-accent hover:shadow-lg hover:scale-105',
    secondary: 'bg-brand-primary text-white hover:bg-blue-700 focus:ring-brand-primary hover:shadow-lg',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
    ghost: 'text-brand-primary hover:bg-brand-primary/10 focus:ring-brand-primary',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    isLoading && 'cursor-not-allowed',
    className
  )

  const content = (
    <>
      {isLoading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      ) : (
        icon && <span className="w-5 h-5">{icon}</span>
      )}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      disabled={disabled || isLoading}
      whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  )
}

export default Button
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
  variant?: 'default' | 'outline' | 'filled'
  inputSize?: 'sm' | 'md' | 'lg'
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  variant = 'default',
  inputSize = 'md',
  className,
  ...props
}) => {
  const baseClasses = 'w-full rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary'
  
  const variantClasses = {
    default: 'border border-gray-300 bg-white',
    outline: 'border-2 border-gray-300 bg-transparent',
    filled: 'border-0 bg-gray-100',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  }

  const inputClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[inputSize],
    error && 'border-red-300 focus:ring-red-500',
    icon && 'pl-12',
    className
  )

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          className={inputClasses}
          {...props}
        />
      </div>
      
      {error && (
        <motion.p
          className="mt-1 text-sm text-red-600"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  )
}

export default Input
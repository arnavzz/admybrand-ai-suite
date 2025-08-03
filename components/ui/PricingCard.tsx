'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Button from './Button'
import Card from './Card'
import { cn } from '@/lib/utils'

interface Feature {
  text: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: number
  period?: string
  description: string
  features: Feature[]
  isPopular?: boolean
  buttonText?: string
  className?: string
  onSelect?: () => void
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = 'month',
  description,
  features,
  isPopular = false,
  buttonText = 'Get Started',
  className,
  onSelect,
}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Popular badge */}
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-brand-accent text-white px-4 py-2 rounded-full flex items-center gap-1 text-sm font-semibold shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </motion.div>
      )}

      <Card 
        hover 
        className={cn(
          "h-full relative",
          isPopular && "ring-2 ring-brand-accent shadow-xl scale-105"
        )}
        padding="lg"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-500 ml-2">/{period}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={cn(
                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                feature.included 
                  ? "bg-green-100 text-green-600" 
                  : "bg-gray-100 text-gray-400"
              )}>
                <Check className="w-3 h-3" />
              </div>
              <span className={cn(
                "text-sm leading-relaxed",
                feature.included ? "text-gray-700" : "text-gray-400 line-through"
              )}>
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant={isPopular ? "primary" : "secondary"}
          size="lg"
          className="w-full"
          onClick={onSelect}
        >
          {buttonText}
        </Button>
      </Card>
    </div>
  )
}

export default PricingCard
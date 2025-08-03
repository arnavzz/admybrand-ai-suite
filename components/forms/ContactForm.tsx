'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'You must agree to receive communications'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  className?: string
  onSubmit?: (data: ContactFormData) => Promise<void>
}

const ContactForm: React.FC<ContactFormProps> = ({ className, onSubmit }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Form submitted:', data)
      }
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        className={cn("text-center p-8", className)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-6">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit(handleFormSubmit)}
      className={cn("space-y-6", className)}
    >
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors",
              errors.name ? "border-red-300" : "border-gray-300"
            )}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors",
              errors.email ? "border-red-300" : "border-gray-300"
            )}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company & Phone Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors",
              errors.company ? "border-red-300" : "border-gray-300"
            )}
            placeholder="Enter your company name"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={cn(
            "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary transition-colors resize-vertical",
            errors.message ? "border-red-300" : "border-gray-300"
          )}
          placeholder="Tell us about your marketing goals and how we can help..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-1 w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
        />
        <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
          I agree to receive communications from ADmyBRAND about products, 
          services, and industry insights. You can unsubscribe at any time. 
          View our{' '}
          <a href="#" className="text-brand-primary hover:underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-600">{errors.consent.message}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
        icon={<Send className="w-5 h-5" />}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default ContactForm
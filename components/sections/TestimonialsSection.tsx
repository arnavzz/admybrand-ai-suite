'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Users } from 'lucide-react'
import Carousel from '@/components/ui/Carousel'
import Card from '@/components/ui/Card'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
  metrics?: {
    label: string
    value: string
  }[]
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'VP of Marketing',
    company: 'TechFlow Solutions',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    content: 'ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in qualified leads within the first quarter. The AI insights are incredibly accurate and have helped us optimize our campaigns like never before.',
    rating: 5,
    metrics: [
      { label: 'Lead Increase', value: '+300%' },
      { label: 'Cost Reduction', value: '-45%' }
    ]
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Digital Marketing Director',
    company: 'GrowthLab Inc',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'The automation features saved our team 20+ hours per week. The AI-powered audience targeting is phenomenal - we\'re reaching customers we never knew existed. ROI improved by 250% in just 6 months.',
    rating: 5,
    metrics: [
      { label: 'Time Saved', value: '20h/week' },
      { label: 'ROI Increase', value: '+250%' }
    ]
  },
  {
    id: '3',
    name: 'Emily Foster',
    role: 'CMO',
    company: 'InnovateCorp',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'As a CMO, I needed a solution that could scale with our rapid growth. ADmyBRAND\'s enterprise features and dedicated support have been game-changing. The predictive analytics help us stay ahead of market trends.',
    rating: 5,
    metrics: [
      { label: 'Revenue Growth', value: '+180%' },
      { label: 'Customer Acquisition', value: '+220%' }
    ]
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Marketing Manager',
    company: 'StartupVenture',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Starting with the Starter plan was perfect for our small team. The onboarding was smooth, and we quickly scaled to Professional. The content generation feature alone has saved us thousands in copywriting costs.',
    rating: 5,
    metrics: [
      { label: 'Cost Savings', value: '$15K+' },
      { label: 'Content Output', value: '+400%' }
    ]
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Head of Growth',
    company: 'E-commerce Pro',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    content: 'The real-time optimization has been incredible for our e-commerce campaigns. We can now adjust our strategy on the fly based on AI insights. Customer lifetime value increased by 160% since implementation.',
    rating: 5,
    metrics: [
      { label: 'CLV Increase', value: '+160%' },
      { label: 'Conversion Rate', value: '+85%' }
    ]
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Marketing Operations Lead',
    company: 'ScaleUp Technologies',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
    content: 'The integration capabilities are outstanding. We connected all our marketing tools seamlessly. The unified dashboard gives us a complete view of our marketing performance across all channels.',
    rating: 5,
    metrics: [
      { label: 'Tools Integrated', value: '15+' },
      { label: 'Efficiency Gain', value: '+90%' }
    ]
  }
]

const TestimonialsSection: React.FC = () => {
  const createTestimonialCard = (testimonial: Testimonial) => (
    <Card 
      className="h-full relative overflow-hidden"
      padding="lg"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-brand-primary/20">
        <Quote className="w-12 h-12" />
      </div>
      
      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Metrics */}
      {testimonial.metrics && (
        <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          {testimonial.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-brand-primary">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
            width={56}
            height={56}
            className="object-cover"
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <span 
            className="absolute inset-0 text-sm font-semibold text-gray-600 flex items-center justify-center"
            style={{ display: 'none' }}
          >
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-gray-600">{testimonial.role}</div>
          <div className="text-brand-primary font-medium">{testimonial.company}</div>
        </div>
      </div>
    </Card>
  )

  const carouselItems = testimonials.map(testimonial => ({
    id: testimonial.id,
    content: createTestimonialCard(testimonial)
  }))

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-6">
            <Users className="w-4 h-4" />
            Customer Success Stories
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="gradient-text">10,000+</span>{' '}
            Marketing Teams
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses of all sizes are transforming their marketing 
            with our AI-powered suite and achieving remarkable results.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { value: '10,000+', label: 'Active Users', icon: Users },
            { value: '98%', label: 'Customer Satisfaction', icon: Star },
            { value: '250%', label: 'Average ROI Increase', icon: TrendingUp },
            { value: '24/7', label: 'Support Available', icon: Users },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mobile Testimonials - Single Card */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Carousel
            items={carouselItems}
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
          />
        </motion.div>

        {/* Desktop Testimonials - Grid Layout */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {createTestimonialCard(testimonial)}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Logos */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-500 mb-8">
            Trusted by industry leaders worldwide
          </h3>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              'TechFlow', 'GrowthLab', 'InnovateCorp', 
              'StartupVenture', 'E-commerce Pro', 'ScaleUp'
            ].map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-500">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
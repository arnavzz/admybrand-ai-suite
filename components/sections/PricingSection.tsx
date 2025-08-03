'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Star, ArrowRight } from 'lucide-react'
import PricingCard from '@/components/ui/PricingCard'
import Button from '@/components/ui/Button'
import PricingCalculator from '@/components/ui/PricingCalculator'

interface PricingTier {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: {
    category: string
    items: {
      name: string
      starter: boolean | string
      professional: boolean | string
      enterprise: boolean | string
    }[]
  }[]
  buttonText: string
  isPopular?: boolean
}

const pricingData: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses and startups getting started with AI marketing',
    monthlyPrice: 49,
    yearlyPrice: 39,
    buttonText: 'Start Free Trial',
    features: [],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses that need advanced AI capabilities',
    monthlyPrice: 149,
    yearlyPrice: 119,
    buttonText: 'Start Free Trial',
    isPopular: true,
    features: [],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Comprehensive solution for large organizations with custom needs',
    monthlyPrice: 399,
    yearlyPrice: 319,
    buttonText: 'Contact Sales',
    features: [],
  }
]

const featureCategories = [
  {
    category: 'Core AI Features',
    items: [
      { name: 'AI Campaign Intelligence', starter: true, professional: true, enterprise: true },
      { name: 'Precision Audience Targeting', starter: 'Basic', professional: 'Advanced', enterprise: 'Enterprise' },
      { name: 'Automated Campaign Management', starter: false, professional: true, enterprise: true },
      { name: 'Creative Performance Analysis', starter: false, professional: true, enterprise: true },
      { name: 'Intelligent Content Generation', starter: '10/month', professional: '100/month', enterprise: 'Unlimited' },
    ]
  },
  {
    category: 'Analytics & Reporting',
    items: [
      { name: 'Real-time Analytics Dashboard', starter: true, professional: true, enterprise: true },
      { name: 'Predictive Insights', starter: false, professional: true, enterprise: true },
      { name: 'Custom Reports', starter: false, professional: '5/month', enterprise: 'Unlimited' },
      { name: 'Advanced Attribution', starter: false, professional: false, enterprise: true },
      { name: 'White-label Reports', starter: false, professional: false, enterprise: true },
    ]
  },
  {
    category: 'Integration & Support',
    items: [
      { name: 'Platform Integrations', starter: '5', professional: '25', enterprise: 'Unlimited' },
      { name: 'API Access', starter: false, professional: 'Limited', enterprise: 'Full' },
      { name: 'Customer Support', starter: 'Email', professional: 'Priority', enterprise: 'Dedicated' },
      { name: 'Training & Onboarding', starter: false, professional: true, enterprise: true },
      { name: 'Custom Development', starter: false, professional: false, enterprise: true },
    ]
  },
  {
    category: 'Security & Compliance',
    items: [
      { name: 'Data Security', starter: 'Standard', professional: 'Enhanced', enterprise: 'Enterprise' },
      { name: 'SOC 2 Compliance', starter: false, professional: true, enterprise: true },
      { name: 'GDPR Compliance Tools', starter: false, professional: true, enterprise: true },
      { name: 'Custom Data Retention', starter: false, professional: false, enterprise: true },
      { name: 'Audit Logs', starter: false, professional: false, enterprise: true },
    ]
  }
]

const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false)

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600" />
      ) : (
        <X className="w-5 h-5 text-gray-300" />
      )
    }
    return <span className="text-sm font-medium text-gray-700">{value}</span>
  }

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent font-semibold mb-6">
            <Star className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="gradient-text">AI Marketing</span>{' '}
            Plan
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start with a free trial on any plan. No credit card required. 
            Upgrade, downgrade, or cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-brand-primary' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingData.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard
                title={tier.name}
                price={isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                period={isYearly ? 'year' : 'month'}
                description={tier.description}
                features={[
                  { text: 'AI Campaign Intelligence', included: true },
                  { text: 'Real-time Analytics', included: true },
                  { text: 'Email Support', included: true },
                  { text: 'Advanced Targeting', included: tier.id !== 'starter' },
                  { text: 'Automated Management', included: tier.id !== 'starter' },
                  { text: 'Priority Support', included: tier.id === 'enterprise' },
                  { text: 'Custom Development', included: tier.id === 'enterprise' },
                ]}
                isPopular={tier.isPopular}
                buttonText={tier.buttonText}
                className={tier.isPopular ? 'lg:-mt-4' : ''}
              />
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Feature Comparison
            </h3>
            <p className="text-gray-600 text-lg">
              See exactly what&apos;s included in each plan
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-6 font-semibold text-gray-900">Features</div>
              <div className="p-6 text-center font-semibold text-gray-900">Starter</div>
              <div className="p-6 text-center font-semibold text-gray-900 bg-blue-50 border-x border-blue-200">
                Professional
                <span className="block text-xs text-blue-600 font-normal mt-1">Most Popular</span>
              </div>
              <div className="p-6 text-center font-semibold text-gray-900">Enterprise</div>
            </div>

            {/* Feature Categories */}
            {featureCategories.map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="grid grid-cols-4 bg-gray-100/50 border-b border-gray-200">
                  <div className="p-4 font-semibold text-gray-800 col-span-4">
                    {category.category}
                  </div>
                </div>

                {/* Category Features */}
                {category.items.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className="grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="p-4 text-gray-700">{feature.name}</div>
                    <div className="p-4 text-center">
                      {renderFeatureValue(feature.starter)}
                    </div>
                    <div className="p-4 text-center bg-blue-50/30 border-x border-blue-100">
                      {renderFeatureValue(feature.professional)}
                    </div>
                    <div className="p-4 text-center">
                      {renderFeatureValue(feature.enterprise)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Pricing Calculator */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PricingCalculator />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-gray-600 mb-8">
              Start with our free trial or speak with our team to find the perfect solution for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Talk to Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
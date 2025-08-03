'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Users, Zap, TrendingUp } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import Badge from './Badge'

interface CalculatorConfig {
  users: number
  campaigns: number
  features: string[]
  period: 'monthly' | 'yearly'
}

const PricingCalculator: React.FC = () => {
  const [config, setConfig] = useState<CalculatorConfig>({
    users: 5,
    campaigns: 10,
    features: ['ai-analytics', 'automation'],
    period: 'monthly'
  })

  const [calculatedPrice, setCalculatedPrice] = useState(0)
  const [recommendedPlan, setRecommendedPlan] = useState('Professional')

  const calculatePrice = useCallback(() => {
    let basePrice = 49 // Starter base
    
    // Users pricing
    if (config.users <= 5) {
      basePrice = 49
    } else if (config.users <= 20) {
      basePrice = 149
    } else {
      basePrice = 399
    }
    
    // Campaign scaling
    const extraCampaigns = Math.max(0, config.campaigns - 10)
    basePrice += extraCampaigns * 5
    
    // Feature addons
    if (config.features.includes('advanced-analytics')) basePrice += 29
    if (config.features.includes('white-label')) basePrice += 49
    if (config.features.includes('custom-integrations')) basePrice += 79
    
    // Yearly discount
    if (config.period === 'yearly') {
      basePrice *= 0.8 // 20% discount
    }
    
    setCalculatedPrice(basePrice)
    
    // Recommend plan
    if (basePrice <= 60) setRecommendedPlan('Starter')
    else if (basePrice <= 200) setRecommendedPlan('Professional')
    else setRecommendedPlan('Enterprise')
  }, [config])

  useEffect(() => {
    calculatePrice()
  }, [config, calculatePrice])

  const features = [
    { id: 'ai-analytics', label: 'AI Analytics', price: 0, included: true },
    { id: 'automation', label: 'Campaign Automation', price: 0, included: true },
    { id: 'advanced-analytics', label: 'Advanced Analytics', price: 29 },
    { id: 'white-label', label: 'White Label Reports', price: 49 },
    { id: 'custom-integrations', label: 'Custom Integrations', price: 79 },
  ]

  return (
    <Card className="max-w-4xl mx-auto" padding="lg">
      <div className="text-center mb-8">
        <Badge variant="accent" icon={<Calculator className="w-4 h-4" />} className="mb-4">
          Interactive Calculator
        </Badge>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Calculate Your Perfect Plan
        </h3>
        <p className="text-gray-600">
          Customize your AI marketing suite based on your specific needs
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Configuration */}
        <div className="space-y-8">
          {/* Team Size */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Team Size: {config.users} users
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={config.users}
              onChange={(e) => setConfig(prev => ({ ...prev, users: parseInt(e.target.value) }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>25</span>
              <span>50+</span>
            </div>
          </div>

          {/* Campaigns */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Monthly Campaigns: {config.campaigns}
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={config.campaigns}
              onChange={(e) => setConfig(prev => ({ ...prev, campaigns: parseInt(e.target.value) }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>50</span>
              <span>100+</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Additional Features
            </label>
            <div className="space-y-3">
              {features.map((feature) => (
                <label key={feature.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.features.includes(feature.id) || feature.included}
                    disabled={feature.included}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setConfig(prev => ({ 
                          ...prev, 
                          features: [...prev.features, feature.id] 
                        }))
                      } else {
                        setConfig(prev => ({ 
                          ...prev, 
                          features: prev.features.filter(f => f !== feature.id) 
                        }))
                      }
                    }}
                    className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                  />
                  <span className="flex-1 text-sm text-gray-700">{feature.label}</span>
                  {feature.price > 0 && (
                    <span className="text-sm text-gray-500">+${feature.price}/mo</span>
                  )}
                  {feature.included && (
                    <Badge variant="success" size="sm">Included</Badge>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Billing Period */}
          <div>
            <label className="text-sm font-semibold text-gray-900 mb-4">
              Billing Period
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setConfig(prev => ({ ...prev, period: 'monthly' }))}
                className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
                  config.period === 'monthly'
                    ? 'bg-brand-primary text-white border-brand-primary'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setConfig(prev => ({ ...prev, period: 'yearly' }))}
                className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-colors relative ${
                  config.period === 'yearly'
                    ? 'bg-brand-primary text-white border-brand-primary'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Yearly
                <Badge variant="success" size="sm" className="absolute -top-2 -right-2">
                  20% Off
                </Badge>
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:sticky lg:top-8">
          <motion.div
            className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl p-8 text-white"
            key={calculatedPrice}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <div className="text-sm opacity-90 mb-2">Your Estimated Price</div>
              <div className="text-5xl font-bold mb-2">
                ${Math.round(calculatedPrice)}
              </div>
              <div className="text-sm opacity-90">
                per {config.period === 'yearly' ? 'month (billed yearly)' : 'month'}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Recommended Plan:</span>
                <Badge variant="accent">{recommendedPlan}</Badge>
              </div>
              
              {config.period === 'yearly' && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Yearly Savings:</span>
                  <span className="font-semibold text-green-300">
                    ${Math.round(calculatedPrice * 12 * 0.25)}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full bg-brand-accent hover:bg-amber-600"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-white/30 text-white hover:bg-white hover:text-brand-primary"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Card>
  )
}

export default PricingCalculator
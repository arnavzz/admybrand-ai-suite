'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Shield,
  ArrowRight,
  TrendingUp,
  Eye,
  MessageSquare
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
  benefits: string[]
  color: string
  bgGradient: string
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'AI-Powered Campaign Intelligence',
    description: 'Advanced machine learning algorithms analyze market trends, competitor strategies, and consumer behavior to optimize your campaigns in real-time.',
    benefits: ['Real-time optimization', 'Predictive analytics', 'Smart bidding'],
    color: 'text-purple-600',
    bgGradient: 'from-purple-500/10 to-indigo-500/10'
  },
  {
    icon: Target,
    title: 'Precision Audience Targeting',
    description: 'Leverage AI to identify and target your ideal customers across multiple channels with unprecedented accuracy and efficiency.',
    benefits: ['Smart segmentation', 'Behavioral analysis', 'Cross-platform reach'],
    color: 'text-blue-600',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics Dashboard',
    description: 'Get deep insights into campaign performance with AI-generated reports, predictive modeling, and actionable recommendations.',
    benefits: ['Real-time reporting', 'Predictive insights', 'Custom metrics'],
    color: 'text-green-600',
    bgGradient: 'from-green-500/10 to-emerald-500/10'
  },
  {
    icon: Zap,
    title: 'Automated Campaign Management',
    description: 'Streamline your workflow with intelligent automation that handles bidding, scheduling, and optimization while you focus on strategy.',
    benefits: ['Smart automation', 'Time savings', 'Cost optimization'],
    color: 'text-amber-600',
    bgGradient: 'from-amber-500/10 to-orange-500/10'
  },
  {
    icon: Users,
    title: 'Customer Journey Mapping',
    description: 'Visualize and optimize every touchpoint in your customer journey with AI-driven insights and personalization capabilities.',
    benefits: ['Journey visualization', 'Touchpoint optimization', 'Personalization'],
    color: 'text-rose-600',
    bgGradient: 'from-rose-500/10 to-pink-500/10'
  },
  {
    icon: Shield,
    title: 'Brand Safety & Compliance',
    description: 'Protect your brand reputation with AI-powered content screening, compliance monitoring, and risk assessment tools.',
    benefits: ['Content screening', 'Risk assessment', 'Compliance monitoring'],
    color: 'text-indigo-600',
    bgGradient: 'from-indigo-500/10 to-purple-500/10'
  }
]

const FeaturesSection: React.FC = () => {
  return (
    <div id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            AI-Powered Features
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Dominate</span> Your Market
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive AI suite provides cutting-edge tools and insights 
            to transform your marketing strategy and drive unprecedented growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                hover 
                className={`h-full relative overflow-hidden bg-gradient-to-br ${feature.bgGradient} border-0`}
                padding="lg"
              >
                <div className={`w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-0 h-auto font-semibold text-brand-primary hover:text-brand-accent"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl" />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Marketing?
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of marketers who have already revolutionized their campaigns with our AI-powered suite.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-brand-accent hover:bg-amber-600"
                >
                  Start Your Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-brand-primary"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturesSection
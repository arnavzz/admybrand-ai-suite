'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Monitor, Smartphone, Tablet } from 'lucide-react'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import Badge from '@/components/ui/Badge'

const DemoSection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState('dashboard')

  const demoScreens = {
    dashboard: {
      title: 'AI Analytics Dashboard',
      description: 'Real-time insights and predictive analytics at your fingertips',
      features: ['Live campaign performance', 'Predictive modeling', 'ROI optimization', 'Smart recommendations']
    },
    campaigns: {
      title: 'Campaign Management',
      description: 'Automate and optimize your campaigns with AI-powered intelligence',
      features: ['Auto-bidding optimization', 'Audience targeting', 'A/B testing', 'Performance tracking']
    },
    insights: {
      title: 'AI Insights Engine',
      description: 'Get actionable insights that drive marketing success',
      features: ['Market trend analysis', 'Competitor intelligence', 'Customer behavior', 'Growth opportunities']
    }
  }

  const mockData = [
    { label: 'Campaign ROI', value: '+247%', trend: 'up' },
    { label: 'Cost Reduction', value: '-38%', trend: 'down' },
    { label: 'Lead Quality', value: '+156%', trend: 'up' },
    { label: 'Conversion Rate', value: '+89%', trend: 'up' }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="primary" className="mb-6">
            Interactive Demo
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            See{' '}
            <span className="gradient-text">AI in Action</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience the power of our AI suite with interactive demos and real success stories from our customers.
          </p>

          <Button 
            variant="primary" 
            size="lg"
            icon={<Play className="w-5 h-5" />}
            onClick={() => setIsVideoModalOpen(true)}
            className="mb-8"
          >
            Watch Product Demo
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Demo Navigation */}
            <div className="flex gap-2 mb-6">
              {Object.entries(demoScreens).map(([key, screen]) => (
                <button
                  key={key}
                  onClick={() => setActiveDemo(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeDemo === key
                      ? 'bg-brand-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {screen.title}
                </button>
              ))}
            </div>

            {/* Demo Screen */}
            <motion.div
              className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
              key={activeDemo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Browser Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 bg-gray-700 rounded px-3 py-1 text-gray-300 text-xs flex-1">
                  app.admybrand.com/{activeDemo}
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Monitor className="w-4 h-4" />
                  <Tablet className="w-4 h-4" />
                  <Smartphone className="w-4 h-4" />
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[400px]">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {mockData.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="bg-white rounded-lg p-4 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                      <div className={`text-2xl font-bold ${
                        item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.value}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Chart */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-4">Performance Trend</div>
                  <div className="flex items-end gap-2 h-20">
                    {[20, 35, 45, 60, 55, 70, 85, 90].map((height, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-t from-brand-primary to-brand-secondary rounded-t flex-1"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Demo Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {demoScreens[activeDemo as keyof typeof demoScreens].title}
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {demoScreens[activeDemo as keyof typeof demoScreens].description}
                </p>

                <div className="space-y-4 mb-8">
                  {demoScreens[activeDemo as keyof typeof demoScreens].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-brand-accent rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg">
                    Try It Yourself
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Video Modal */}
        <Modal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          size="xl"
        >
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">Product Demo Video</p>
              <p className="text-sm opacity-75">
                This would be your actual demo video showing the platform in action
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}

export default DemoSection
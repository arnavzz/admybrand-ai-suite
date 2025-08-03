'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, TrendingUp, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'

const HeroSection: React.FC = () => {
  const floatingElements = [
    { icon: Sparkles, position: 'top-20 left-10', delay: 0 },
    { icon: TrendingUp, position: 'top-32 right-16', delay: 0.2 },
    { icon: Zap, position: 'bottom-32 left-20', delay: 0.4 },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-primary via-blue-700 to-brand-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-secondary/90" />
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '10%', left: '10%' }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-amber-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ bottom: '20%', right: '15%' }}
          />
        </div>

        {/* Floating Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-white/20`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <element.icon className="w-12 h-12" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform Your{' '}
              <span className="gradient-text bg-gradient-to-r from-brand-accent to-yellow-300 bg-clip-text text-transparent">
                Marketing
              </span>{' '}
              with AI Power
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Unlock unprecedented marketing success with our comprehensive AI-powered suite. 
              Intelligent automation, predictive analytics, and data-driven insights that 
              transform how you connect with customers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="hero-glow"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Play className="w-5 h-5" />}
                className="border-white/30 text-white hover:bg-white hover:text-brand-primary"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { value: '10,000+', label: 'Active Users' },
                { value: '150%', label: 'ROI Increase' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-brand-accent">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Hero Image/Animation */}
            <div className="relative z-10">
              <motion.div
                className="aspect-square max-w-lg mx-auto relative"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Central Core */}
                <div className="absolute inset-1/4 bg-gradient-to-br from-brand-accent to-yellow-400 rounded-full shadow-2xl hero-glow" />
                
                {/* Orbiting Elements */}
                {[0, 72, 144, 216, 288].map((rotation, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center"
                    style={{
                      transformOrigin: '200px 200px',
                      transform: `rotate(${rotation}deg) translateX(200px) rotate(-${rotation}deg)`,
                    }}
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.2
                    }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute top-8 -left-4 glass-morphism p-4 rounded-lg"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-sm font-semibold text-white mb-1">Campaign Performance</div>
              <div className="text-2xl font-bold text-brand-accent">+247%</div>
            </motion.div>

            <motion.div
              className="absolute bottom-12 -right-4 glass-morphism p-4 rounded-lg"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="text-sm font-semibold text-white mb-1">AI Insights</div>
              <div className="text-2xl font-bold text-brand-accent">Real-time</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
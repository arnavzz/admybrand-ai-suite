'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, MessageCircle, ArrowRight } from 'lucide-react'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const faqData = [
  {
    id: 'getting-started',
    question: 'How quickly can I get started with ADmyBRAND AI Suite?',
    answer: 'You can start using ADmyBRAND AI Suite immediately after signing up. Our Quick Start wizard guides you through the initial setup in under 10 minutes. Most users are running their first AI-optimized campaigns within the first hour, and our dedicated onboarding team is available to help you get the most out of the platform from day one.'
  },
  {
    id: 'ai-accuracy',
    question: 'How accurate are the AI predictions and recommendations?',
    answer: 'Our AI models are trained on billions of data points and achieve 94% accuracy in campaign performance predictions. The system continuously learns from your specific campaigns and industry, improving accuracy over time. We also provide confidence scores with each recommendation so you can make informed decisions about which insights to act upon.'
  },
  {
    id: 'data-security',
    question: 'Is my marketing data secure and compliant?',
    answer: 'Absolutely. We maintain SOC 2 Type II compliance, GDPR compliance, and enterprise-grade security measures. All data is encrypted in transit and at rest using AES-256 encryption. We never share your data with third parties, and you maintain full ownership and control of your information with the ability to export or delete it at any time.'
  },
  {
    id: 'integrations',
    question: 'Which platforms and tools does ADmyBRAND integrate with?',
    answer: 'We integrate with 100+ marketing platforms including Google Ads, Facebook Ads, LinkedIn, HubSpot, Salesforce, Shopify, and many more. Our API allows for custom integrations, and we\'re constantly adding new connectors based on customer requests. Most integrations can be set up in minutes without any technical expertise required.'
  },
  {
    id: 'pricing-changes',
    question: 'Can I change my plan or cancel anytime?',
    answer: 'Yes, you have complete flexibility. You can upgrade, downgrade, or cancel your subscription at any time from your account dashboard. Changes take effect at your next billing cycle, and if you cancel, you\'ll retain access to your plan features until the end of your current billing period. No contracts, no cancellation fees.'
  },
  {
    id: 'team-collaboration',
    question: 'How does team collaboration work?',
    answer: 'ADmyBRAND supports unlimited team members on Professional and Enterprise plans. You can set role-based permissions, create team workspaces, share campaigns and reports, and collaborate in real-time. Team members can leave comments, tag colleagues, and receive notifications about important campaign updates and AI insights.'
  },
  {
    id: 'ai-training',
    question: 'Do I need AI or technical expertise to use the platform?',
    answer: 'Not at all! ADmyBRAND is designed for marketers, not data scientists. Our intuitive interface provides AI insights in plain English with clear action recommendations. We also offer comprehensive training resources, video tutorials, and our Customer Success team provides personalized guidance to help you maximize the platform\'s potential.'
  },
  {
    id: 'custom-models',
    question: 'Can the AI be customized for my specific industry?',
    answer: 'Yes, our Enterprise plan includes custom AI model training for your specific industry, audience, and business goals. Our data science team works with you to incorporate your unique data sources and business logic. This typically results in 20-30% better performance compared to our standard models, with insights tailored to your market dynamics.'
  },
  {
    id: 'support-availability',
    question: 'What kind of support do you provide?',
    answer: 'Support varies by plan: Starter includes email support with 24-hour response time, Professional gets priority support with 4-hour response time plus live chat, and Enterprise customers get a dedicated Customer Success Manager with phone support and priority technical assistance. All plans include access to our comprehensive knowledge base and video tutorials.'
  },
  {
    id: 'migration-help',
    question: 'Can you help migrate my existing campaigns and data?',
    answer: 'Absolutely! Our Customer Success team provides free migration assistance for Professional and Enterprise customers. We can help transfer your existing campaigns, historical data, and set up integrations with your current tools. Most migrations are completed within 1-2 weeks, and we ensure zero disruption to your ongoing marketing activities.'
  }
]

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Got{' '}
            <span className="gradient-text">Questions?</span>{' '}
            We Have Answers
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* FAQ Accordion */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion items={faqData} />
          </motion.div>

          {/* Support Card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="sticky top-8 space-y-6">
              {/* Contact Support Card */}
              <Card className="text-center bg-gradient-to-br from-brand-primary to-brand-secondary text-white border-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Still Need Help?
                </h3>
                
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Our expert support team is available 24/7 to help you get the most 
                  out of your AI marketing suite.
                </p>
                
                <div className="space-y-3">
                  <Button 
                    variant="primary"
                    size="lg"
                    className="w-full bg-white text-brand-primary hover:bg-gray-50"
                  >
                    Contact Support
                  </Button>
                  
                  <Button 
                    variant="ghost"
                    size="lg"
                    className="w-full text-white hover:bg-white/10"
                  >
                    Schedule Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>

              {/* Resources Card */}
              <Card className="border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Helpful Resources
                </h4>
                
                <div className="space-y-4">
                  {[
                    { title: 'Documentation', description: 'Complete guides and API reference' },
                    { title: 'Video Tutorials', description: 'Step-by-step video guides' },
                    { title: 'Best Practices', description: 'Tips from successful customers' },
                    { title: 'Community Forum', description: 'Connect with other users' },
                  ].map((resource, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{resource.title}</div>
                        <div className="text-sm text-gray-600">{resource.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-gray-50 border-0">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Support Stats
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '<1 min', label: 'Avg Response Time' },
                    { value: '98%', label: 'Resolution Rate' },
                    { value: '24/7', label: 'Availability' },
                    { value: '4.9/5', label: 'Support Rating' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-brand-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Marketing with AI?
            </h3>
            <p className="text-gray-600 mb-8">
              Join thousands of successful marketers who have already revolutionized 
              their campaigns with our AI-powered suite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
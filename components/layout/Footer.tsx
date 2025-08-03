'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/utils'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'AI Analytics', href: '#' },
        { label: 'Campaign Optimization', href: '#' },
        { label: 'Smart Automation', href: '#' },
        { label: 'Performance Tracking', href: '#' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'For Agencies', href: '#' },
        { label: 'For Enterprises', href: '#' },
        { label: 'For Startups', href: '#' },
        { label: 'For E-commerce', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Blog', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#' },
      ]
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with AI Marketing Insights
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Get the latest trends, tips, and exclusive content delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="font-display font-bold text-2xl">
                ADmyBRAND AI Suite
              </span>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Transform your marketing with our comprehensive AI-powered suite. 
              Intelligent advertising, data analytics, and campaign optimization 
              for the modern marketer.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>{siteConfig.company.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>{siteConfig.company.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{siteConfig.company.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-400 text-sm">
              © {currentYear} {siteConfig.company.name}. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
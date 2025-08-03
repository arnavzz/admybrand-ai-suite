'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id]
      )
    } else {
      setOpenItems(prev =>
        prev.includes(id) ? [] : [id]
      )
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <motion.div
              animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openItems.includes(item.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default Accordion
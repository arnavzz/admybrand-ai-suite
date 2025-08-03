import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export const siteConfig = {
  name: 'ADmyBRAND AI Suite',
  description: 'Advanced AI-Powered Marketing Solutions',
  url: 'https://ai.admybrand.com',
  company: {
    name: 'ADmyBRAND',
    email: 'hello@admybrand.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Drive, Tech City, TC 12345',
  },
  social: {
    twitter: 'https://twitter.com/admybrand',
    linkedin: 'https://linkedin.com/company/admybrand',
    facebook: 'https://facebook.com/admybrand',
    instagram: 'https://instagram.com/admybrand',
  },
}
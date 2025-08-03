import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Advanced AI-Powered Marketing Solutions',
  description: 'Transform your marketing with our comprehensive AI-powered suite. Intelligent advertising, predictive analytics, and campaign optimization for the modern marketer.',
  keywords: ['AI marketing', 'marketing automation', 'campaign optimization', 'predictive analytics', 'digital marketing'],
  authors: [{ name: 'ADmyBRAND' }],
  creator: 'ADmyBRAND',
  metadataBase: new URL('https://ai.admybrand.com'),
  openGraph: {
    title: 'ADmyBRAND AI Suite - Advanced AI-Powered Marketing Solutions',
    description: 'Transform your marketing with our comprehensive AI-powered suite. Intelligent advertising, predictive analytics, and campaign optimization.',
    url: 'https://ai.admybrand.com',
    siteName: 'ADmyBRAND AI Suite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Advanced AI-Powered Marketing Solutions',
    description: 'Transform your marketing with our comprehensive AI-powered suite.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono } from 'next/font/google'
import './globals.css'
import SiteNav from '@/components/SiteNav'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://flipkit.co'),
  title: 'Flip — Live Without Your Phone',
  description:
    "A complete analog system for modern life. Seven days. Everything you need. Nothing you don't.",
  openGraph: {
    type: 'website',
    siteName: 'Flip',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable}`}>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}

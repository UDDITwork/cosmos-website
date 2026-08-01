import type { Metadata } from 'next'
import { Bodoni_Moda, Libre_Franklin, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Cosmos IP — Patent Drafting & Prosecution',
  description:
    'Exceptional patent drafting and prosecution services for AI, software, and computer-related inventions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${franklin.variable} ${plexMono.variable}`}
    >
      <body className="bg-white text-slate-800 font-body antialiased">
        {children}
      </body>
    </html>
  )
}

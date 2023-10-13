import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: ["400", "700", "800"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'FEM News Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " text-[calc(15_/_16_*_1rem)]"}>{children}</body>
    </html>
  )
}

'use client'

import Header from '@/components/Header'
import { usePathname } from 'next/navigation'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const rawPosition = segments[2] || ''
  const position = rawPosition.charAt(0).toUpperCase() + rawPosition.slice(1)

  return (
    <main className="min-h-full min-w-full main-bg bg-fixed">
      <div className="relative z-10 p-4 overflow-auto min-h-screen">
        <Header
          title={`Application's Final Round - Awesome ${position} Developer Hiring!`}
          description="We are excited to find exceptional Filipino talent! Your unique skills make you stand out. Please complete this form fully to be considered for the next stage. We look forward to reviewing your application!"
        />
        {children}
      </div>
    </main>
  )
}

import Header from '@/components/Header'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-full min-w-full main-bg bg-fixed">
      <div className="relative z-10 p-4 overflow-auto min-h-screen">
        <Header
          title="Loom Video Submissions - Delivery"
          description="The name, email, and photo associated with your Google account will be recorded when you upload files and submit this form"
        />
        {children}
      </div>
    </main>
  )
}

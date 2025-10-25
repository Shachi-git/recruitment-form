import Header from '@/components/Header'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-full min-w-full main-bg bg-fixed">
      <div className="relative z-10 p-4 overflow-auto min-h-screen">
        <Header
          title="Our Company is looking for you!"
          description="We are excited to review applications from talented Filipino professionals! Please ensure this form is fully completed, as ONLY native Filipino candidates who submit a thoroughly completed form will be considered for an interview. Thank you for showcasing your interest and commitment!"
        />
        {children}
      </div>
    </main>
  )
}

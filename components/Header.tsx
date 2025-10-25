type HeaderProps = {
  title: string
  description: string
}

export default function Header({ title, description }: HeaderProps) {
  return (
    <section className="w-full flex justify-center mb-5">
      <div className="w-full lg:w-1/2 border rounded-lg shadow-sm bg-white">
        <div className="border-b"></div>
        <div className="p-5">
          <h1 className="text-4xl font-semibold text-inherit mb-5">{title}</h1>

          <p className="text-gray-700 dark:text-gray-300 text-justify">
            {description}
          </p>
        </div>
        <div className="border-t">
          <p className="text-base text-red-600 p-5">
            * Indicates required question
          </p>
        </div>
      </div>
    </section>
  )
}

type NoteContainerProps = {
  title?: string
  note?: string | string[]
  isImportant?: boolean
}

export default function NoteContainer({
  title,
  note,
  isImportant,
}: NoteContainerProps) {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  const renderLine = (line: string, index: number) => {
    const parts = line.split(urlRegex)

    return (
      <p key={index} className="mb-2 text-inherit text-justify">
        {index === 0 && isImportant && (
          <span className="mr-1 font-semibold">IMPORTANT:</span>
        )}
        {parts.map((part, i) =>
          part.match(urlRegex) ? (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {part}
            </a>
          ) : (
            part
          )
        )}
      </p>
    )
  }

  return (
    <section className="w-full flex justify-center">
      <div className="w-full lg:w-1/2 border rounded-lg shadow-sm bg-white">
        <div className="p-5">
          {title && (
            <h2 className="text-xl font-semibold text-inherit mb-5">{title}</h2>
          )}
          {Array.isArray(note)
            ? note.map((line, i) => renderLine(line, i))
            : renderLine(note ?? '', 0)}
        </div>
      </div>
    </section>
  )
}

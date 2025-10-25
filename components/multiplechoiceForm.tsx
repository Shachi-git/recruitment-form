'use client'

import React, { forwardRef } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import Image from 'next/image'

type Option = {
  value: string
  label: string
}

type MultipleChoiceFormProps = {
  question: string
  options: Option[]
  value: string
  onChange?: (value: string) => void
  imageSrc?: string
  disabled?: boolean
  correctAnswer?: string
  isOutput?: boolean
  error?: string
}

export const MultipleChoiceForm = forwardRef<
  HTMLDivElement,
  MultipleChoiceFormProps
>(function MultipleChoiceForm(
  {
    question,
    options,
    value,
    onChange,
    imageSrc,
    disabled = false,
    isOutput = false,
    correctAnswer,
    error,
  },
  ref
) {
  const isCorrect = value === correctAnswer
  const showFeedback = disabled && correctAnswer

  return (
    <div ref={ref} className="w-full flex justify-center">
      <div className="w-full lg:w-1/2 border p-5 rounded-lg shadow-sm bg-white space-y-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            {showFeedback &&
              (isCorrect ? (
                <CheckCircle className="text-green-600 w-5 h-5" />
              ) : (
                <XCircle className="text-red-600 w-5 h-5" />
              ))}
            <p
              className={`font-medium ${
                showFeedback
                  ? isCorrect
                    ? 'text-green-700'
                    : 'text-red-700'
                  : 'text-gray-800'
              }`}
              aria-label={`${question} (required)`}
            >
              {question} <span className="text-red-500">*</span>
            </p>
          </div>
          <p className="text-gray-700 text-sm">
            {isOutput ? (isCorrect ? '5/5' : '0/5') : '5 points'}
          </p>
        </div>

        {imageSrc && (
          <div className="w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${imageSrc}`}
              //src={imageSrc}
              alt="Question visual"
              className="w-full rounded-md border"
              width={600}
              height={400}
            />
          </div>
        )}

        <div className="space-y-2">
          {options.map((opt) => {
            const isSelected = value === opt.value
            const isCorrectOption = correctAnswer === opt.value

            const showErrorBox = showFeedback && isSelected && !isCorrectOption

            return (
              <div
                key={opt.value}
                className={`flex items-center space-x-2 p-1 rounded-md ${
                  showErrorBox
                    ? 'bg-red-50 border border-red-400'
                    : isCorrectOption
                    ? 'border-green-400 bg-green-50 border'
                    : ''
                }`}
              >
                <input
                  type="radio"
                  id={`option-${opt.value}`}
                  name={`option-${opt.value}`}
                  value={opt.value}
                  checked={isSelected}
                  onChange={(e) => onChange?.(e.target.value)}
                  disabled={disabled}
                  className="h-4 w-4 text-blue-600"
                  required
                />
                <label
                  htmlFor={`option-${opt.value}`}
                  className="text-gray-700 flex-1"
                >
                  {opt.label}
                </label>
                <div className="flex flex-col items-center">
                  {showErrorBox && (
                    <XCircle className="text-red-600 w-5 h-5 flex-shrink-0" />
                  )}
                  {showFeedback && isCorrectOption && (
                    <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  )
})

export default MultipleChoiceForm

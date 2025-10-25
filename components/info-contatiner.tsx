'use client'

import React, { useState, forwardRef } from 'react'
import cn from 'classnames'
import { MdOutlineFileUpload } from 'react-icons/md'

type Option = {
  value: string
  label: string
  hasOther?: boolean
}

type InfoContainerProps = {
  question: string
  required?: boolean
  note?: string
  type?:
    | 'text'
    | 'email'
    | 'url'
    | 'select'
    | 'textarea'
    | 'checkbox'
    | 'number'
    | 'file'
    | 'radio'
  radioType?: 'optional' | 'rating'
  placeholder?: string
  id?: string
  options?: Option[]
  value?: string
  onChange?: (value: string) => void
  error?: string
  handleFileUpload?: (file: File) => void
  disabled?: boolean
}

export const InfoContainer = forwardRef<HTMLDivElement, InfoContainerProps>(
  (
    {
      question,
      required = false,
      type = 'text',
      placeholder,
      id,
      note,
      options = [],
      value,
      onChange,
      radioType = 'optional',
      error,
      handleFileUpload,
      disabled = false,
    },
    ref
  ) => {
    const [otherValue, setOtherValue] = useState('')
    const [uploadedFileName, setUploadedFileName] = useState('')

    return (
      <div ref={ref} className="w-full flex justify-center">
        <div className="w-full lg:w-1/2 border p-5 rounded-lg shadow-sm bg-white">
          {type === 'radio' && radioType === 'rating' ? (
            <p className="font-medium text-gray-700 mb-2">
              {question}{' '}
              {required && (
                <span className="text-red-500" aria-label="required">
                  *
                </span>
              )}
            </p>
          ) : (
            <label
              className={cn(
                'font-medium text-gray-700 mb-2',
                type === 'checkbox' ? 'hidden' : 'block'
              )}
              htmlFor={
                type === 'radio' ? `${id}-${value || options?.[0]?.value}` : id
              }
            >
              {question} {required && <span className="text-red-500">*</span>}
            </label>
          )}

          {type === 'radio' && radioType === 'optional' ? (
            <div className="space-y-2">
              {options.map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`${id}-${opt.value}`}
                    name={id}
                    aria-label={opt.value}
                    value={opt.value}
                    checked={
                      opt.hasOther
                        ? value?.startsWith('Other')
                        : value === opt.value
                    }
                    onChange={(e) => {
                      onChange?.(e.target.value)
                      if (opt.hasOther) setOtherValue('')
                    }}
                    disabled={disabled}
                    className="h-4 w-4 text-blue-600"
                  />
                  <label
                    htmlFor={`${id}-${opt.value}`}
                    className="text-gray-700"
                  >
                    {opt.label}
                  </label>
                </div>
              ))}

              {value?.startsWith('Other') && (
                <input
                  type="text"
                  id={`${id}-other`}
                  name={`${id}-other`}
                  required
                  className="mt-2 w-full border-b p-2 focus:outline-none focus:border-blue-500"
                  placeholder="Please specify"
                  value={otherValue}
                  onChange={(e) => {
                    const text = e.target.value
                    setOtherValue(text)
                    onChange?.(text ? `Other: ${text}` : 'Other')
                  }}
                  disabled={disabled}
                />
              )}
            </div>
          ) : type === 'radio' && radioType === 'rating' ? (
            <div className="flex justify-between items-center mx-auto w-full md:w-1/2 mt-5">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex flex-col items-center gap-5">
                  <label className="text-sm text-gray-700 flex flex-col items-center gap-2">
                    <span>{num}</span>
                    <input
                      type="radio"
                      id={`${id}-${num}`}
                      name={id}
                      value={String(num)}
                      checked={value === String(num)}
                      onChange={(e) => onChange?.(e.target.value)}
                      className="h-4 w-4 text-blue-600"
                      disabled={disabled}
                    />
                  </label>
                </div>
              ))}
            </div>
          ) : type === 'checkbox' ? (
            <label className="inline-flex items-center space-x-2 mt-2 text-gray-700 font-medium">
              <input
                type="checkbox"
                id={id}
                checked={value === 'true'}
                onChange={(e) =>
                  onChange?.(e.target.checked ? 'true' : 'false')
                }
                className="form-checkbox h-5 w-5 text-blue-600"
                disabled={disabled}
              />
              <span>
                {question}{' '}
                {required && (
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                )}
              </span>
            </label>
          ) : type === 'select' ? (
            <select
              id={id}
              className="w-1/2 lg:w-1/3 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            >
              <option value="" disabled={disabled}>
                Choose
              </option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={disabled}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : type === 'number' ? (
            <input
              id={id}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full lg:w-1/2 border-b p-2 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                const numeric = e.target.value.replace(/\D/g, '')
                onChange?.(numeric)
              }}
              disabled={disabled}
            />
          ) : type === 'textarea' ? (
            <textarea
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              disabled={disabled}
            />
          ) : type === 'file' ? (
            <div className="w-full lg:w-1/2">
              <p className="text-sm text-gray-600 mb-3">{note}</p>
              <div className="flex items-start justify-start flex-col gap-2">
                <label
                  htmlFor={`${id}-file`}
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 transition"
                >
                  <MdOutlineFileUpload className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-medium">Add file</span>
                </label>
                <input
                  type="file"
                  id={`${id}-file`}
                  accept=".txt"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      handleFileUpload?.(file)
                      setUploadedFileName(file.name)
                    }
                  }}
                  disabled={disabled}
                />
                {uploadedFileName && (
                  <div className="mb-2 text-base text-gray-700">
                    Uploaded:
                    <span className="font-medium ml-2">{uploadedFileName}</span>
                  </div>
                )}
              </div>
            </div>
          ) : type === 'text' && id === 'whatsapp' ? (
            <input
              id={id}
              type="text"
              maxLength={13}
              inputMode="numeric"
              className="w-full lg:w-1/2 border-b p-2 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^0-9+]/g, '')
                if (newValue.indexOf('+') > 1) {
                  newValue.replace(/\+/g, '')
                }
                onChange?.(newValue)
              }}
              disabled={disabled}
            />
          ) : type === 'text' ? (
            <input
              id={id}
              type="text"
              className="w-full lg:w-1/2 border-b p-2 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              disabled={disabled}
            />
          ) : (
            <input
              id={id}
              type={type}
              className="w-full lg:w-1/2 border-b p-2 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              disabled={disabled}
            />
          )}

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </div>
    )
  }
)

InfoContainer.displayName = 'InfoContainer'

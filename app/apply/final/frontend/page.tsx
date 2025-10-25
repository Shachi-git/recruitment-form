'use client'

import { InfoContainer } from '@/components/info-contatiner'
import GeneralSkills from '@/components/sections/final/frontend/general-skills'
import SpecificSkills from '@/components/sections/final/frontend/specific-skills'
import { Button } from '@/components/ui/button'
import { timeOption } from '@/lib/timeOption'
import React, { useState, useRef, useEffect } from 'react'
import { frontendFormSchema } from '@/lib/formSchema'
import { useToast } from '@/hooks/use-toast'
import cn from 'classnames'

const Page = () => {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { toast } = useToast()

  const fieldRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollToFirstError = (keys: string[]) => {
    for (const key of keys) {
      const el = fieldRefs.current[key]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break
      }
    }
  }

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    whatsapp: '',
    time: '',
    Q1: '',
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: '',
    Q6: '',
    Q7: '',
    Q8: '',
    Q9: '',
    Q10: '',
    Q11: '',
    Q12: '',
    Q13: '',
    Q14: '',
    Q15: '',
    Q16: '',
    R1: '',
    R2: '',
    R3: '',
    R4: '',
    R5: '',
    R6: '',
    R7: '',
    R8: '',
    R9: '',
    R10: '',
    R11: '',
    R12: '',
    R13: '',
    R14: '',
    R15: '',
  })

  const clearForm = () => {
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      whatsapp: '',
      time: '',
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      Q5: '',
      Q6: '',
      Q7: '',
      Q8: '',
      Q9: '',
      Q10: '',
      Q11: '',
      Q12: '',
      Q13: '',
      Q14: '',
      Q15: '',
      Q16: '',
      R1: '',
      R2: '',
      R3: '',
      R4: '',
      R5: '',
      R6: '',
      R7: '',
      R8: '',
      R9: '',
      R10: '',
      R11: '',
      R12: '',
      R13: '',
      R14: '',
      R15: '',
    })
  }

  const LOCAL_STORAGE_KEY = 'frontendFormData'
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))
  }, [formData])

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const handleNext = () => {
    const requiredFields =
      step === 1
        ? ['email', 'firstName', 'lastName', 'whatsapp', 'time']
        : step === 2
        ? [
            'Q1',
            'Q2',
            'Q3',
            'Q4',
            'Q5',
            'Q6',
            'Q7',
            'Q8',
            'Q9',
            'Q10',
            'Q11',
            'Q12',
            'Q13',
            'Q14',
            'Q16',
          ]
        : []

    const fieldErrors: Record<string, string> = {}

    requiredFields.forEach((key) => {
      if (formData[key as keyof typeof formData].trim() === '') {
        fieldErrors[key] = 'This field is required!'
      }
    })

    if (formData.whatsapp.trim() !== '') {
      const whatsappRegex = /^\+63\s?9\d{2}[ -]?\d{3}[ -]?\d{4}$/
      if (!whatsappRegex.test(formData.whatsapp.trim())) {
        fieldErrors.whatsapp = 'Please enter a valid WhatsApp number'
      }
    }

    if (step === 1 && formData.email.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        fieldErrors.email = 'Please enter a valid email address!'
      }
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      scrollToFirstError(Object.keys(fieldErrors))
      return
    }

    setErrors({})
    setStep((prev) => prev + 1)
  }

  const handleSubmit = async () => {
    const result = frontendFormSchema.safeParse(formData)

    if (!result.success) {
      const flatErrors = result.error.flatten().fieldErrors
      const formattedErrors: Record<string, string> = {}
      Object.entries(flatErrors).forEach(([key, value]) => {
        if (value && value.length > 0) formattedErrors[key] = value[0]
      })
      setErrors(formattedErrors)
      scrollToFirstError(Object.keys(formattedErrors))
      return
    }

    try {
      const res = await fetch('/api/final/frontend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      if (!res.ok) throw new Error('Failed to submit application')
      const data = await res.json()

      localStorage.removeItem(LOCAL_STORAGE_KEY)
      clearForm()
      setStep(1)
      toast({
        title: 'Application Sent Successfully!',
        description: data.message,
        variant: 'success',
      })
    } catch (error) {
      console.error('Submit error:', error)
      setErrors({
        general: 'Something went wrong while submitting. Please try again.',
      })
    }
  }

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      {step === 1 && (
        <div className="w-full flex flex-col gap-5">
          <InfoContainer
            id="email"
            question="Email address"
            required
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="Your answer"
            error={errors.email}
            ref={(el) => {
              fieldRefs.current['email'] = el
            }}
          />
          <InfoContainer
            id="firstName"
            question="First Name"
            required
            type="text"
            placeholder="Your answer"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            error={errors.firstName}
            ref={(el) => {
              fieldRefs.current['firstName'] = el
            }}
          />
          <InfoContainer
            id="lastName"
            question="Last Name"
            required
            type="text"
            placeholder="Your answer"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            error={errors.lastName}
            ref={(el) => {
              fieldRefs.current['lastName'] = el
            }}
          />
          <InfoContainer
            id="whatsapp"
            question="WhatsApp Phone Number (+639xxxxxxxxx)"
            required
            type="text"
            placeholder="Your answer"
            value={formData.whatsapp}
            onChange={handleChange('whatsapp')}
            error={errors.whatsapp}
            ref={(el) => {
              fieldRefs.current['whatsapp'] = el
            }}
          />
          <InfoContainer
            id="time"
            question="Choose your best usual working hours (Manila Time)?"
            required
            type="select"
            options={timeOption}
            value={formData.time}
            onChange={handleChange('time')}
            error={errors.time}
            ref={(el) => {
              fieldRefs.current['time'] = el
            }}
          />
        </div>
      )}

      {step === 2 && (
        <GeneralSkills
          {...formData}
          handleChange={handleChange}
          errors={errors}
          fieldRefs={fieldRefs}
        />
      )}

      {step === 3 && (
        <SpecificSkills
          {...formData}
          handleChange={handleChange}
          errors={errors}
          fieldRefs={fieldRefs}
        />
      )}

      <div
        className={cn(
          'w-full lg:w-1/2 mt-5 gap-2 flex',
          step > 1 ? 'justify-between' : 'justify-end'
        )}
      >
        {step > 1 && (
          <Button
            className="bg-white border justify text-inherit hover:bg-gray-200"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Back
          </Button>
        )}
        <div className="flex gap-2 justify-end">
          {step < 3 && (
            <Button
              className="bg-white border text-inherit hover:bg-gray-200"
              onClick={handleNext}
            >
              Next
            </Button>
          )}

          {step === 3 && (
            <Button
              className="bg-white border text-inherit hover:bg-gray-200"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page

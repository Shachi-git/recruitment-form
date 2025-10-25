'use client'

import { InfoContainer } from '@/components/info-contatiner'
import ResumeQuestions from '@/components/sections/initial/resume-questions'
import Speedtest from '@/components/sections/initial/speedtest'
import { Button } from '@/components/ui/button'
import { cityOptions } from '@/lib/city-options'
import { initialFormSchema } from '@/lib/formSchema'
import React, { useEffect, useRef, useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import cn from 'classnames'
import { openPositions } from '@/lib/applicationPosition'

const Page = () => {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const fieldRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    resumeLink: '',
    city: '',
    linkedin: '',
    whatsapp: '',
    position: '',
    speedUrl: '',
    downloadSpeed: '',
    uploadSpeed: '',
    aboutYou: '',
    pastExperience: '',
  })

  const clearForm = () => {
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      resumeLink: '',
      city: '',
      linkedin: '',
      whatsapp: '',
      position: '',
      speedUrl: '',
      downloadSpeed: '',
      uploadSpeed: '',
      aboutYou: '',
      pastExperience: '',
    })
  }

  const LOCAL_STORAGE_KEY = 'initialFormData'

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedData) {
      const parsed = JSON.parse(savedData)
      setFormData(parsed)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))
  }, [formData])

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const scrollToFirstError = (keys: string[]) => {
    for (const key of keys) {
      const el = fieldRefs.current[key]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break
      }
    }
  }

  const handleNext = () => {
    const requiredFields =
      step === 1
        ? [
            'email',
            'firstName',
            'lastName',
            'resumeLink',
            'city',
            'linkedin',
            'whatsapp',
            'position',
          ]
        : step === 2
        ? ['speedUrl', 'downloadSpeed', 'uploadSpeed']
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
    const parsedFormData = {
      ...formData,
      downloadSpeed: Number(formData.downloadSpeed),
      uploadSpeed: Number(formData.uploadSpeed),
    }

    const result = initialFormSchema.safeParse(parsedFormData)

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      const flattened = result.error.flatten()

      Object.entries(flattened.fieldErrors).forEach(([key, messages]) => {
        if (messages && messages.length > 0) {
          fieldErrors[key] = messages[0]
        }
      })

      setErrors(fieldErrors)
      scrollToFirstError(Object.keys(fieldErrors))
      return
    }

    setErrors({})
    try {
      const response = await fetch('/api/initial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedFormData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setErrors({ general: errorData.error || 'Something went wrong.' })
        return
      }

      localStorage.removeItem(LOCAL_STORAGE_KEY)
      clearForm()
      setStep(1)

      toast({
        title: 'Application Sent Successfully!',
        description:
          'Your application has been submitted successfully. Thank you for your time and interest.',
        variant: 'success',
      })
    } catch (error) {
      console.error(error)
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
            question="Your Best Email Address:"
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
            id="resumeLink"
            question="Please add your Resume Google Drive Link:"
            required
            type="url"
            placeholder="Your answer"
            value={formData.resumeLink}
            onChange={handleChange('resumeLink')}
            error={errors.resumeLink}
            ref={(el) => {
              fieldRefs.current['resumeLink'] = el
            }}
          />
          <InfoContainer
            id="city"
            question="In which city in the Philippines are you permanently located?"
            required
            type="select"
            placeholder="Choose your city"
            options={cityOptions}
            value={formData.city}
            onChange={handleChange('city')}
            error={errors.city}
            ref={(el) => {
              fieldRefs.current['city'] = el
            }}
          />
          <InfoContainer
            id="linkedin"
            question="Please add your LinkedIn Profile Link:"
            required
            type="text"
            placeholder="Your answer"
            value={formData.linkedin}
            onChange={handleChange('linkedin')}
            error={errors.linkedin}
            ref={(el) => {
              fieldRefs.current['linkedin'] = el
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
            id="position"
            question="This Application's Department is for:"
            required
            type="select"
            options={openPositions}
            value={formData.position}
            onChange={handleChange('position')}
            error={errors.position}
            ref={(el) => {
              fieldRefs.current['position'] = el
            }}
          />
        </div>
      )}

      {step === 2 && (
        <Speedtest
          {...formData}
          handleChange={handleChange}
          errors={errors}
          fieldRefs={fieldRefs}
        />
      )}
      {step === 3 && (
        <ResumeQuestions
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

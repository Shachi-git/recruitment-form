'use client'

import { InfoContainer } from '@/components/info-contatiner'
import React from 'react'
import NoteContainer from '@/components/noteContainer'
import { YandN } from '@/lib/options'

interface GeneralSkillsProps {
  Q1: string
  Q2: string
  Q3: string
  Q4: string
  Q5: string
  Q6: string
  Q7: string
  Q8: string
  Q9: string
  Q10: string
  Q11: string
  Q12: string

  handleChange: (
    field:
      | 'Q1'
      | 'Q2'
      | 'Q3'
      | 'Q4'
      | 'Q5'
      | 'Q6'
      | 'Q7'
      | 'Q8'
      | 'Q9'
      | 'Q10'
      | 'Q11'
      | 'Q12'
  ) => (value: string) => void

  errors?: Record<string, string>
  fieldRefs?: React.RefObject<Record<string, HTMLDivElement | null>>
}
const GeneralSkills: React.FC<GeneralSkillsProps> = ({
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  Q9,
  Q10,
  Q11,
  Q12,
  handleChange,
  errors,
  fieldRefs,
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <NoteContainer
        title="Awesome General Backend Skills"
        note="Yes-or-No Questions"
      />
      <InfoContainer
        id="Q1"
        question="Do you have any experience with Strapi (Headless CMS)?"
        value={Q1}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q1')}
        error={errors?.Q1}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q1'] = el
          }
        }}
      />
      <InfoContainer
        id="Q2"
        question="Do you have any experience with API integrations?"
        value={Q2}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q2')}
        error={errors?.Q2}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q2'] = el
          }
        }}
      />
      <InfoContainer
        id="Q3"
        question="Do you have any experience with GraphQL?"
        value={Q3}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q3')}
        error={errors?.Q3}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q3'] = el
          }
        }}
      />
      <InfoContainer
        id="Q4"
        question="Do you have any experience with GoHighLevel (GHL)?"
        value={Q4}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q4')}
        error={errors?.Q4}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q4'] = el
          }
        }}
      />
      <InfoContainer
        id="Q5"
        question="Do you have any experience with AWS EC2?"
        value={Q5}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q5')}
        error={errors?.Q5}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q5'] = el
          }
        }}
      />
      <InfoContainer
        id="Q6"
        question="Do you have any experience with PostgreSQL?"
        value={Q6}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q6')}
        error={errors?.Q6}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q6'] = el
          }
        }}
      />
      <InfoContainer
        id="Q7"
        question="Do you have any experience with Node.js?"
        value={Q7}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q7')}
        error={errors?.Q7}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q7'] = el
          }
        }}
      />
      <InfoContainer
        id="Q8"
        question="Do you have any experience with middleware development?"
        value={Q8}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q8')}
        error={errors?.Q8}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q8'] = el
          }
        }}
      />
      <InfoContainer
        id="Q9"
        question="Do you have any experience with Linux Terminal Commands?"
        value={Q9}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q9')}
        error={errors?.Q9}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q9'] = el
          }
        }}
      />
      <InfoContainer
        id="Q10"
        question="Do you have any experience with multi-tenancy in backend systems?"
        value={Q10}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q10')}
        error={errors?.Q10}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q10'] = el
          }
        }}
      />
      <InfoContainer
        id="Q11"
        question="Please outline any additional experience relevant to this section that may not have been fully covered in your responses to the yes-or-no questions above."
        value={Q11}
        placeholder="Your answer"
        type="text"
        onChange={handleChange('Q11')}
      />
      <InfoContainer
        id="Q12"
        question="How would you describe your usual role when working in backend development projects for a company?"
        value={Q12}
        required
        placeholder="Your answer"
        type="text"
        onChange={handleChange('Q12')}
        error={errors?.Q12}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q12'] = el
          }
        }}
      />
    </div>
  )
}

export default GeneralSkills

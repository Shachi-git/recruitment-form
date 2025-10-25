'use client'

import { InfoContainer } from '@/components/info-contatiner'
import React from 'react'
import NoteContainer from '../../noteContainer'

interface ResumeQuestionsProps {
  aboutYou: string
  pastExperience: string
  handleChange: (
    field: 'aboutYou' | 'pastExperience'
  ) => (value: string) => void

  errors?: Record<string, string>
  fieldRefs?: React.RefObject<Record<string, HTMLDivElement | null>>
}
const ResumeQuestions: React.FC<ResumeQuestionsProps> = ({
  aboutYou,
  pastExperience,
  handleChange,
  errors,
  fieldRefs,
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <NoteContainer
        title="RESUME QUESTIONS SECTION"
        isImportant={true}
        note="Please keep your response under 150 words."
      />
      <InfoContainer
        id="aboutYou"
        question="Write a brief introduction about yourself. Share a bit about your experience and explain why you believe you are a good fit for this role."
        value={aboutYou}
        placeholder="Your answer"
        required
        type="text"
        onChange={handleChange('aboutYou')}
        error={errors?.aboutYou}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['aboutYou'] = el
          }
        }}
      />
      <InfoContainer
        id="pastExperience"
        question="Please describe your past experience, focusing on the roles and responsibilities you LISTED ON YOUR RESUME."
        value={pastExperience}
        required
        placeholder="Your answer"
        type="text"
        onChange={handleChange('pastExperience')}
        error={errors?.pastExperience}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['pastExperience'] = el
          }
        }}
      />
    </div>
  )
}

export default ResumeQuestions

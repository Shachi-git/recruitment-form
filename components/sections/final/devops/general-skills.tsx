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
  Q13: string
  Q14: string
  Q15: string

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
      | 'Q13'
      | 'Q14'
      | 'Q15'
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
  Q13,
  Q14,
  Q15,
  handleChange,
  errors,
  fieldRefs,
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <NoteContainer
        title="Awesome General DevOps Skills"
        note="Yes-or-No Questions"
      />
      <InfoContainer
        id="Q1"
        question="  Do you have any experience with Linux Bash commands?"
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
        question="Do you have any experience with Dockerized container deployment?"
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
        question="Do you have experience with updating dependencies in a containerized environment?"
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
        question="Do you have experience hosting and managing third-party web applications on a VPS?"
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
        question="Do you have experience using SSH for remote server management?"
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
        question="Do you have any experience with Certbot for SSL certificate management?"
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
        question="Have you ever optimized VPS resources (e.g., CPU, memory, disk space)?"
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
        question="Do you have experience with Ubuntu OS in a DevOps environment?"
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
        question="Do you have experience with Fail2ban for security and firewall management?"
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
        question="Do you have experience with Cockpit for managing Linux systems?"
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
        question="Do you have any experience with Python in the context of system automation?"
        value={Q11}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q11')}
        error={errors?.Q11}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q11'] = el
          }
        }}
      />
      <InfoContainer
        id="Q12"
        question="Do you have experience deploying and maintaining Directus or headless CMS web applications?"
        value={Q12}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q12')}
        error={errors?.Q12}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q12'] = el
          }
        }}
      />
      <InfoContainer
        id="Q13"
        question="Do you have experience deploying and maintaining N8N web applications?"
        value={Q13}
        required
        options={YandN}
        type="radio"
        onChange={handleChange('Q13')}
        error={errors?.Q13}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q3'] = el
          }
        }}
      />
      <InfoContainer
        id="Q14"
        question="Please outline any additional experience relevant to this section that may not have been fully covered in your responses to the yes-or-no questions above."
        value={Q14}
        placeholder="Your answer"
        type="text"
        onChange={handleChange('Q14')}
      />
      <InfoContainer
        id="Q15"
        question="How would you describe your usual role when working in development projects for a company?"
        value={Q15}
        required
        placeholder="Your answer"
        type="text"
        onChange={handleChange('Q15')}
        error={errors?.Q15}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['Q15'] = el
          }
        }}
      />
    </div>
  )
}

export default GeneralSkills

'use client'

import { InfoContainer } from '@/components/info-contatiner'
import React from 'react'
import NoteContainer from '@/components/noteContainer'

interface SpecificSkillsProps {
  R1: string
  R2: string
  R3: string
  R4: string
  R5: string
  R6: string
  R7: string
  R8: string
  R9: string
  R10: string
  R11: string
  R12: string
  R13: string

  errors?: Record<string, string>
  fieldRefs?: React.RefObject<Record<string, HTMLDivElement | null>>

  handleChange: (
    field:
      | 'R1'
      | 'R2'
      | 'R3'
      | 'R4'
      | 'R5'
      | 'R6'
      | 'R7'
      | 'R8'
      | 'R9'
      | 'R10'
      | 'R11'
      | 'R12'
      | 'R13'
  ) => (value: string) => void
}

const SpecificSkills: React.FC<SpecificSkillsProps> = ({
  R1,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  R9,
  R10,
  R11,
  R12,
  R13,
  errors,
  fieldRefs,
  handleChange,
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <NoteContainer
        title="Awesome Specific DevOps Skills Questions"
        note="Please rate the following on a scale of 1 to 5, with 1 being the lowest and 5 being the highest."
      />

      <InfoContainer
        id="R1"
        question="Linux Bash commands"
        value={R1}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R1')}
        error={errors?.R1}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R1'] = el
          }
        }}
      />
      <InfoContainer
        id="R2"
        question="Dockerized container deployment"
        value={R2}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R2')}
        error={errors?.R2}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R2'] = el
          }
        }}
      />
      <InfoContainer
        id="R3"
        question="VPS management (including third-party web apps)"
        value={R3}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R3')}
        error={errors?.R3}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R3'] = el
          }
        }}
      />
      <InfoContainer
        id="R4"
        question="SSH"
        value={R4}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R4')}
        error={errors?.R4}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R4'] = el
          }
        }}
      />
      <InfoContainer
        id="R5"
        question="Certbot for SSL certificates"
        value={R5}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R5')}
        error={errors?.R5}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R5'] = el
          }
        }}
      />
      <InfoContainer
        id="R6"
        question="VPS resource optimization"
        value={R6}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R6')}
        error={errors?.R6}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R6'] = el
          }
        }}
      />
      <InfoContainer
        id="R7"
        question="Ubuntu OS"
        value={R7}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R7')}
        error={errors?.R7}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R7'] = el
          }
        }}
      />
      <InfoContainer
        id="R8"
        question="Fail2ban"
        value={R8}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R8')}
        error={errors?.R8}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R8'] = el
          }
        }}
      />
      <InfoContainer
        id="R9"
        question="Cockpit"
        value={R9}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R9')}
        error={errors?.R9}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R9'] = el
          }
        }}
      />
      <InfoContainer
        id="R10"
        question="Python for system automation"
        value={R10}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R10')}
        error={errors?.R10}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R10'] = el
          }
        }}
      />
      <InfoContainer
        id="R11"
        question="Python for system automation"
        value={R11}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R11')}
        error={errors?.R11}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R11'] = el
          }
        }}
      />
      <InfoContainer
        id="R12"
        question="Directus deployment"
        value={R12}
        required
        type="radio"
        radioType="rating"
        onChange={handleChange('R12')}
        error={errors?.R12}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['R12'] = el
          }
        }}
      />
      <InfoContainer
        id="R13"
        question="Final Comments: share anything you would like us to know about you or suggestions (Optional but recommended...)"
        value={R13}
        placeholder="Your answer"
        type="text"
        onChange={handleChange('R13')}
      />
    </div>
  )
}

export default SpecificSkills

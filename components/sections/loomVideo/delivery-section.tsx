'use client'

import { InfoContainer } from '@/components/info-contatiner'
import React from 'react'
import NoteContainer from '../../noteContainer'

interface ResumeQuestionsProps {
  loomVideo: string
  transcriptionText: string
  transcriptionLink: string
  handleChange: (
    field: 'loomVideo' | 'transcriptionText' | 'transcriptionLink'
  ) => (value: string) => void
  errors?: Record<string, string>
  fieldRefs?: React.RefObject<Record<string, HTMLDivElement | null>>
}

const DeliverySection: React.FC<ResumeQuestionsProps> = ({
  loomVideo,
  transcriptionText,
  transcriptionLink,
  handleChange,
  errors,
  fieldRefs,
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <NoteContainer
        title="DELIVERY SECTION"
        isImportant={true}
        note="Deliveries without the loom video transcription will be disqualified. Paste your loom's auto-transcription below."
      />
      <InfoContainer
        id="loomVideo"
        question="Please add your Loom Video Link:"
        value={loomVideo}
        placeholder="Your answer"
        required
        type="url"
        onChange={handleChange('loomVideo')}
        error={errors?.loomVideo}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['loomVideo'] = el
          }
        }}
      />
      <InfoContainer
        id="transcriptionText"
        question="Paste all your loom video transcription here without any edits."
        required
        type="text"
        onChange={handleChange('transcriptionText')}
        placeholder="Your answer"
        value={transcriptionText}
        error={errors?.transcriptionText}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['transcriptionText'] = el
          }
        }}
      />
      <InfoContainer
        id="transcriptionLink"
        question="Please paste your Loom Video Transcription Link:"
        required
        type="url"
        onChange={handleChange('transcriptionLink')}
        placeholder="Your answer"
        value={transcriptionLink}
        error={errors?.transcriptionLink}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['transcriptionLink'] = el
          }
        }}
      />
    </div>
  )
}

export default DeliverySection

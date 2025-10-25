'use client'

import { InfoContainer } from '@/components/info-contatiner'
import React from 'react'
import NoteContainer from '../../noteContainer'

interface SpeedtestProps {
  speedUrl: string
  downloadSpeed: string
  uploadSpeed: string
  handleChange: (
    field: 'speedUrl' | 'downloadSpeed' | 'uploadSpeed'
  ) => (value: string) => void

  errors?: Record<string, string>
  fieldRefs?: React.RefObject<Record<string, HTMLDivElement | null>>
}

const Speedtest: React.FC<SpeedtestProps> = ({
  speedUrl,
  downloadSpeed,
  uploadSpeed,
  handleChange,
  errors,
  fieldRefs,
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <NoteContainer
        title="INTERNET SPEED REQUIREMENTS SECTION"
        note="For the next two questions, please use https://app.screencast.com/ to take a screenshot:"
      />
      <NoteContainer
        note={[
          '1. Please check the speed of your internet connection and use Screencast to share your results:',
          'Speed Test: http://www.speedtest.net/',
        ]}
      />
      <InfoContainer
        id="speedUrl"
        question="Post the screenshot Screencast LINK of your SPEEDTEST RESULT on the field below:"
        value={speedUrl}
        placeholder="Your answer"
        required
        type="url"
        onChange={handleChange('speedUrl')}
        error={errors?.speedUrl}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['speedUrl'] = el
          }
        }}
      />
      <InfoContainer
        id="downloadSpeed"
        question="Enter your Speedtest DOWNLOAD SPEED result, rounded to the nearest whole number (e.g., 126)"
        value={downloadSpeed}
        placeholder="Your answer"
        required
        type="number"
        onChange={handleChange('downloadSpeed')}
        error={errors?.downloadSpeed}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['downloadSpeed'] = el
          }
        }}
      />

      <InfoContainer
        id="uploadSpeed"
        question="Enter your Speedtest UPLOAD SPEED result, rounded to the nearest whole number (e.g., 88)"
        placeholder="Your answer"
        value={uploadSpeed}
        required
        type="number"
        onChange={handleChange('uploadSpeed')}
        error={errors?.uploadSpeed}
        ref={(el) => {
          if (fieldRefs?.current) {
            fieldRefs.current['uploadSpeed'] = el
          }
        }}
      />
    </div>
  )
}

export default Speedtest

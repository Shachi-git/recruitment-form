import { z } from 'zod'

const ynOther = z.string().refine(
  val => val === 'Yes' || val === 'No' || val === 'Other' || val.startsWith('Other:'),
  { message: 'Required' }
)

//Frontend Final Round Form Schema
export const frontendFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  time: z.string().min(1, { message: 'Please select your working hours' }),
  whatsapp: z.string()
    .regex(/^\+?\d+$/, { message: 'Please enter a valid phone number (digits only)' }),
 
  Q1: ynOther,
  Q2: ynOther,
  Q3: ynOther,
  Q4: ynOther,
  Q5: ynOther,
  Q6: ynOther,
  Q7: ynOther,
  Q8: ynOther,
  Q9: ynOther,
  Q10: ynOther,
  Q11: ynOther,
  Q12: ynOther,
  Q13: ynOther,
  Q14: ynOther,
  Q15: z.string().optional(),
  Q16: z.string().min(1, { message: 'Required' }),

  R1: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R2: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R3: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R4: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R5: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R6: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R7: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R8: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R9: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R10: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R11: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R12: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R13: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R14: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R15: z.string().optional(),
})

//Backend Final Round Form Schema
export const backendFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  whatsapp: z.string()
    .regex(/^\+?\d+$/, { message: 'Please enter a valid phone number (digits only)' }),
  time: z.string().min(1, { message: 'Please select your working hours' }),

  Q1: ynOther,
  Q2: ynOther,
  Q3: ynOther,
  Q4: ynOther,
  Q5: ynOther,
  Q6: ynOther,
  Q7: ynOther,
  Q8: ynOther,
  Q9: ynOther,
  Q10: ynOther,
  Q11: z.string().optional(),
  Q12: z.string().min(1, { message: 'Required' }),

  R1: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R2: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R3: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R4: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R5: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R6: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R7: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R8: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R9: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R10: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R11: z.string().optional(),
})

//DevOps Final Round Form Schema
export const devopsFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  whatsapp: z.string()
    .regex(/^\+?\d+$/, { message: 'Please enter a valid phone number (digits only)' }),
  time: z.string().min(1, { message: 'Please select your working hours' }),

  Q1: ynOther,
  Q2: ynOther,
  Q3: ynOther,
  Q4: ynOther,
  Q5: ynOther,
  Q6: ynOther,
  Q7: ynOther,
  Q8: ynOther,
  Q9: ynOther,
  Q10: ynOther,
  Q11: ynOther,
  Q12: ynOther,
  Q13: ynOther,
  Q14: z.string().optional(),
  Q15: z.string().min(1, { message: 'Required' }),

  R1: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R2: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R3: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R4: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R5: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R6: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R7: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R8: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R9: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R10: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R11: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R12: z.enum(['1', '2', '3', '4', '5'], { message: 'Required' }),
  R13: z.string().optional(),
})


export const initialFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  firstName: z.string().min(1, { message: 'This field is required!' }),
  lastName: z.string().min(1, { message: 'This field is required!' }),
  resumeLink: z.string().min(1, { message: 'This field is required!' })
  .url({ message: 'Please enter a valid URL' }),
  city: z.string().min(1, { message: 'City is required' }),
  linkedin: z.string().min(1, { message: 'This field is required!' })
  .url({ message: 'Please enter a valid LinkedIn URL' }),
  whatsapp: z.string()
    .regex(/^\+?\d+$/, { message: 'Please enter a valid phone number (digits only)' }),
  position: z.string().min(1, { message: 'Please select a position' }),
  speedUrl: z.string().min(1, { message: 'This field is required!' })
  .url({ message: 'Please enter a valid speed test URL' }),
  downloadSpeed:  z.coerce.number().min(1, { message: 'This field is required!' }),
  uploadSpeed:  z.coerce.number().min(1, { message: 'This field is required!' }),
  aboutYou: z.string().min(1, { message: 'This field is required!' }),
  pastExperience: z.string().min(1, { message: 'This field is required!' }),
})


export const loomVideoFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  firstName: z.string().min(1, { message: 'This field is required!' }),
  lastName: z.string().min(1, { message: 'This field is required!' }),
  whatsapp: z.string()
    .regex(/^\+?\d+$/, { message: 'Please enter a valid phone number (digits only)' }),
  position: z.string().min(1, { message: 'Please select a position' }),
  loomVideo: z.string().url({ message: 'Please enter a valid Loom video URL' }),
  transcriptionText: z.string().min(1, { message: 'This field is required!' }),
  transcriptionLink: z.string().url({ message: 'Please enter a valid Loom video URL' }),
})
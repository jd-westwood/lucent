'use client'

import { Container, Typography, Button, Box, Stack } from '@mui/material'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import validator from 'validator'
import { useCallback, useMemo } from 'react'
import BridalInformation from './BridalInformation'
import WeddingPartyServices from './WeddingPartyServices'
import OptionalExtras from './OptionalExtras'
import Location from './Location'
import PersonalDetails from './PersonalDetails'
import FormSection from './FormSection'
import CostFooter from './CostFooter'
import { calculateTotalCost, FormValues } from '../utils/costCalculation'
import { textConfig } from '../config/text'

interface FormContentProps {
  errors: Record<string, string>
  touched: Record<string, boolean>
  isSubmitting: boolean
  values: FormValues
  setFieldValue: (field: string, value: unknown) => void
  status: { type: string; message: string } | null
  validateForm: () => Promise<Record<string, string>>
  setTouched: (touched: Record<string, boolean>) => void
  submitForm: () => void
  handleSubmitWithValidation: (
    validateForm: () => Promise<Record<string, string>>,
    setTouched: (touched: Record<string, boolean>) => void,
    submitForm: () => void,
    e: React.FormEvent
  ) => void
}

function FormContent({
  errors,
  touched,
  isSubmitting,
  values,
  setFieldValue,
  status,
  validateForm,
  setTouched,
  submitForm,
  handleSubmitWithValidation,
}: FormContentProps) {
  const totalCost = useMemo(() => {
    return calculateTotalCost(values as FormValues)
  }, [values])

  return (
    <>
      <Form
        onSubmit={(e) =>
          handleSubmitWithValidation(validateForm, setTouched, submitForm, e)
        }
      >
        <Box sx={{ mt: 3 }}>
          {/* Personal Details */}
          <Stack spacing={3}>
            <FormSection>
              <PersonalDetails errors={errors} touched={touched} />
            </FormSection>

            {/* Bridal Information */}
            <FormSection>
              <BridalInformation errors={errors} touched={touched} />
            </FormSection>

            {/* Wedding Party Services */}
            <FormSection>
              <WeddingPartyServices />
            </FormSection>

            {/* Optional Extras */}
            <FormSection>
              <OptionalExtras values={values} setFieldValue={setFieldValue} />
            </FormSection>

            {/* Location */}
            <FormSection>
              <Location errors={errors} touched={touched} />
            </FormSection>
          </Stack>

          {/* Status Messages */}
          {status && (
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  p: 2,
                  borderRadius: 1,
                  backgroundColor:
                    status.type === 'success' ? '#d4edda' : '#f8d7da',
                  color: status.type === 'success' ? '#155724' : '#721c24',
                  border:
                    status.type === 'success'
                      ? '1px solid #c3e6cb'
                      : '1px solid #f5c6cb',
                }}
              >
                {status.message}
              </Typography>
            </Box>
          )}

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            fullWidth
            sx={{ mt: 2, py: 2, mb: 10 }}
          >
            {isSubmitting
              ? textConfig.form.buttons.submitting
              : textConfig.form.buttons.submit}
          </Button>
        </Box>
      </Form>
      <CostFooter totalCost={totalCost} />
    </>
  )
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email(textConfig.form.validation.invalidEmail)
    .required(textConfig.form.validation.required),
  numberOfBrides: yup.string().required(textConfig.form.validation.required),
  bridalServices: yup.string().required(textConfig.form.validation.required),
  bridalPackage: yup.string().required(textConfig.form.validation.required),
  bridalPreview: yup.string().required(textConfig.form.validation.required),
  location: yup
    .string()
    .test(
      'is-valid-postcode',
      textConfig.form.validation.invalidPostcode,
      (value) => {
        if (!value) return true // Allow empty values
        return validator.isPostalCode(value, 'GB')
      }
    ),
})

export default function SampleForm() {
  const handleSubmitWithValidation = useCallback(
    async (
      validateForm: () => Promise<Record<string, string>>,
      setTouched: (touched: Record<string, boolean>) => void,
      submitForm: () => void,
      e: React.FormEvent
    ) => {
      e.preventDefault()

      // Validate the form and get errors
      const formErrors = await validateForm()

      // If there are validation errors, mark all fields as touched and scroll to first error
      if (Object.keys(formErrors).length > 0) {
        // Mark all fields as touched to show validation errors
        setTouched({
          email: true,
          numberOfBrides: true,
          bridalServices: true,
          bridalPackage: true,
          bridalPreview: true,
          location: true,
        })

        const firstErrorField = Object.keys(formErrors)[0]
        const errorElement = document.querySelector(
          `[name="${firstErrorField}"]`
        )
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
        return
      }

      // If no errors, submit the form using Formik's submitForm
      submitForm()
    },
    []
  )

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mt: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {textConfig.form.title}
          </Typography>
          <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
            {textConfig.form.instructions.map((instruction, index) => (
              <li key={index}>
                <Typography variant="body2">{instruction}</Typography>
              </li>
            ))}
          </Box>
        </Box>

        <Formik
          initialValues={{
            email: '',
            numberOfBrides: '1',
            bridalServices: 'hairMakeup',
            bridalPackage: 'essential',
            bridalPreview: 'yes',
            rehearsalDinner: false,
            postWedding: false,
            weddingPartyPreview: {
              hairMakeup: 0,
              hairOnly: 0,
              makeupOnly: 0,
            },
            weddingDay: {
              hairMakeup: 0,
              hairOnly: 0,
              makeupOnly: 0,
              juniorBridesmaid: 0,
              flowerGirl: 0,
              blowDryShort: 0,
            },
            additionalArtists: 0,
            stayOnService: 0,
            extraTime: 0,
            outOfHours: 0,
            eveningRestyle: [],
            stripLashes: 0,
            touchUpKit: 0,
            clipInExtensions: 'no',
            splitLocation: 'no',
            overnightAccommodation: 'no',
            location: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setStatus }) => {
            try {
              setStatus(null)

              const response = await fetch('/api/submit-quote', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
              })

              const data = await response.json()

              if (response.ok) {
                setStatus({
                  type: 'success',
                  message: textConfig.form.status.success,
                })
              } else {
                setStatus({
                  type: 'error',
                  message: data.error || 'Failed to send quote request.',
                })
              }
            } catch {
              setStatus({
                type: 'error',
                message: textConfig.form.status.networkError,
              })
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {(formikProps) => (
            <FormContent
              {...formikProps}
              handleSubmitWithValidation={handleSubmitWithValidation}
            />
          )}
        </Formik>
      </Box>
    </Container>
  )
}

'use client'

import {
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Stack,
  Box,
} from '@mui/material'
import { Field, FieldProps } from 'formik'
import { textConfig } from '../config/text'

interface PersonalDetailsProps {
  errors: Record<string, string>
  touched: Record<string, boolean>
}

export default function PersonalDetails({
  errors,
  touched,
}: PersonalDetailsProps) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        {textConfig.form.fieldsets.personalDetails.title}
      </FormLabel>

      <Stack spacing={4}>
        <Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {textConfig.form.fieldsets.personalDetails.description}
          </Typography>

          <Field name="email">
            {({ field }: FieldProps) => (
              <TextField
                {...field}
                fullWidth
                type="email"
                label={
                  textConfig.form.fieldsets.personalDetails.fields.email.label
                }
                placeholder={
                  textConfig.form.fieldsets.personalDetails.fields.email
                    .placeholder
                }
                sx={{}}
                error={!!(errors.email && touched.email)}
                helperText={errors.email && touched.email && errors.email}
              />
            )}
          </Field>
        </Box>
      </Stack>
    </FormControl>
  )
}

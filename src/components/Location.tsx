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

interface LocationInformationProps {
  errors: Record<string, string>
  touched: Record<string, boolean>
}

export default function Location({
  errors,
  touched,
}: LocationInformationProps) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        {textConfig.form.fieldsets.location.title}
      </FormLabel>

      <Stack spacing={4}>
        <Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {textConfig.form.fieldsets.location.description}
          </Typography>

          <Field name="location">
            {({ field }: FieldProps) => (
              <TextField
                {...field}
                fullWidth
                label={textConfig.form.fieldsets.location.fields.location.label}
                placeholder={
                  textConfig.form.fieldsets.location.fields.location.placeholder
                }
                sx={{}}
                error={!!(errors.location && touched.location)}
                helperText={
                  errors.location && touched.location && errors.location
                }
              />
            )}
          </Field>
        </Box>
      </Stack>
    </FormControl>
  )
}

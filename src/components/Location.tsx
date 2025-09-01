'use client';

import {
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Stack,
  Box
} from '@mui/material';
import { Field, FieldProps } from 'formik';

interface LocationInformationProps {
  errors: any;
  touched: any;
}

export default function Location({ errors, touched }: LocationInformationProps) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Location Information</FormLabel>

      <Stack spacing={4}>
        <Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Please provide your bridal preparation location.
        </Typography>

        <Field name="location">
        {({ field }: FieldProps) => (
          <TextField
            {...field}
            fullWidth
            label="Bridal prep location / postcode"
            placeholder="Enter location or UK postcode (e.g., SW1A 1AA)"
            sx={{}}
            error={errors.location && touched.location}
            helperText={errors.location && touched.location && errors.location}
          />
        )}
        </Field>
        </Box>
      </Stack>
    </FormControl>
  );
}
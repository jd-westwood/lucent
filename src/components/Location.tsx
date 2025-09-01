'use client';

import {
  FormControl,
  FormLabel,
  TextField,
  Typography
} from '@mui/material';
import { Field, FieldProps } from 'formik';

interface LocationInformationProps {
  errors: any;
  touched: any;
}

export default function Location({ errors, touched }: LocationInformationProps) {
  return (
    <FormControl component="fieldset" sx={{ mb: 3 }}>
      <FormLabel component="legend">Location Information</FormLabel>
      
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
            sx={{ mb: 3 }}
            error={errors.location && touched.location}
            helperText={errors.location && touched.location && errors.location}
          />
        )}
      </Field>
    </FormControl>
  );
}
'use client';

import {
  FormControl,
  FormLabel,
  TextField,
  Typography
} from '@mui/material';
import { Field, FieldProps } from 'formik';

interface PersonalDetailsProps {
  errors: any;
  touched: any;
}

export default function PersonalDetails({ errors, touched }: PersonalDetailsProps) {
  return (
    <FormControl component="fieldset" sx={{ mb: 3 }}>
      <FormLabel component="legend">Personal Details</FormLabel>
      
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Please provide your contact information to receive your detailed quote.
      </Typography>

      <Field name="email">
        {({ field }: FieldProps) => (
          <TextField
            {...field}
            fullWidth
            type="email"
            label="Email Address"
            placeholder="Enter your email for the detailed quote"
            sx={{ mb: 3 }}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
          />
        )}
      </Field>
    </FormControl>
  );
}
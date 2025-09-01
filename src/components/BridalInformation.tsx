'use client';

import {
  FormControl,
  FormLabel,
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox
} from '@mui/material';
import { Field, FieldProps } from 'formik';

interface BridalInformationProps {
  errors: any;
  touched: any;
}

export default function BridalInformation({ errors, touched }: BridalInformationProps) {
  return (
    <FormControl component="fieldset" sx={{ mb: 3 }}>
      <FormLabel component="legend">Bridal Information</FormLabel>
      
      {/* Number of Brides */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>Number of Brides</Typography>
        <Field name="numberOfBrides">
          {({ field }: FieldProps) => (
            <FormControl fullWidth size="small" sx={{ maxWidth: 300 }}>
              <InputLabel>Number of Brides</InputLabel>
              <Select {...field} label="Number of Brides">
                <MenuItem value="1">One Bride</MenuItem>
                <MenuItem value="2">Two Brides</MenuItem>
              </Select>
            </FormControl>
          )}
        </Field>
        {errors.numberOfBrides && touched.numberOfBrides && (
          <Typography color="error" variant="caption">{errors.numberOfBrides}</Typography>
        )}
      </Box>

      {/* Bridal Services */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Bridal Services (Prices start from £420)</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Select the services required for each bride.
        </Typography>
        <Field name="bridalServices">
          {({ field }: FieldProps) => (
            <RadioGroup {...field}>
              <FormControlLabel value="hairMakeup" control={<Radio />} label="Hair & Makeup" />
              <FormControlLabel value="hairOnly" control={<Radio />} label="Hair only" />
              <FormControlLabel value="makeupOnly" control={<Radio />} label="Makeup only" />
            </RadioGroup>
          )}
        </Field>
        {errors.bridalServices && touched.bridalServices && (
          <Typography color="error" variant="caption">{errors.bridalServices}</Typography>
        )}
      </Box>

      {/* Bridal Package */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Bridal Package (Packages start from £420)</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Select your desired bridal package.{' '}
          <a 
            href="https://www.lucenthairandmakeup.co.uk/price-list" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Find out more here
          </a>
        </Typography>
        <Field name="bridalPackage">
          {({ field }: FieldProps) => (
            <RadioGroup {...field}>
              <FormControlLabel value="essential" control={<Radio />} label="Essential Radiance" />
              <FormControlLabel value="elevated" control={<Radio />} label="Elevated Glow" />
              <FormControlLabel value="lucent" control={<Radio />} label="Lucent Luxe" />
            </RadioGroup>
          )}
        </Field>
        {errors.bridalPackage && touched.bridalPackage && (
          <Typography color="error" variant="caption">{errors.bridalPackage}</Typography>
        )}
      </Box>

      {/* Bridal Preview */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Is a bridal preview (trial) required?</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Previews are highly recommended. Prices start from £190.
        </Typography>
        <Field name="bridalPreview">
          {({ field }: FieldProps) => (
            <RadioGroup {...field} row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          )}
        </Field>
        {errors.bridalPreview && touched.bridalPreview && (
          <Typography color="error" variant="caption">{errors.bridalPreview}</Typography>
        )}
      </Box>

      {/* Additional Services */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>Additional Services</Typography>
        
        <Field name="rehearsalDinner">
          {({ field }: FieldProps) => (
            <FormControlLabel 
              control={<Checkbox {...field} />} 
              label="Rehearsal Dinner Hair & Makeup (£250)" 
              sx={{ mb: 2, display: 'block' }}
            />
          )}
        </Field>

        <Field name="postWedding">
          {({ field }: FieldProps) => (
            <FormControlLabel 
              control={<Checkbox {...field} />} 
              label="After Wedding Thank You Brunch Hair & Makeup (£250)" 
              sx={{ mb: 3, display: 'block' }}
            />
          )}
        </Field>
      </Box>
    </FormControl>
  );
}
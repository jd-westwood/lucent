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
  Checkbox,
  Stack
} from '@mui/material';
import { Field, FieldProps } from 'formik';
import { pricingConfig } from '../config/pricing';

interface BridalInformationProps {
  errors: any;
  touched: any;
}

export default function BridalInformation({ errors, touched }: BridalInformationProps) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Bridal Information</FormLabel>

      <Stack spacing={4}>
        <Box>
        {/* Number of Brides */}
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

        <Box>
      {/* Bridal Services */}
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
          Bridal Services (Prices start from £{pricingConfig.bridal.services.hairMakeup.basePrice})
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Select the services required for each bride.
        </Typography>
        <Field name="bridalServices">
          {({ field }: FieldProps) => (
            <RadioGroup {...field}>
              {Object.entries(pricingConfig.bridal.services).map(([key, service]) => (
                <FormControlLabel 
                  key={key}
                  value={key} 
                  control={<Radio />} 
                  label={service.label} 
                />
              ))}
            </RadioGroup>
          )}
        </Field>
        {errors.bridalServices && touched.bridalServices && (
          <Typography color="error" variant="caption">{errors.bridalServices}</Typography>
        )}
        </Box>

        <Box>
      {/* Bridal Package */}
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
          Bridal Package (Packages start from £{pricingConfig.bridal.packages.essential.price})
        </Typography>
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
              {Object.entries(pricingConfig.bridal.packages).map(([key, pkg]) => (
                <FormControlLabel 
                  key={key}
                  value={key} 
                  control={<Radio />} 
                  label={`${pkg.label} (£${pkg.price})`} 
                />
              ))}
            </RadioGroup>
          )}
        </Field>
        {errors.bridalPackage && touched.bridalPackage && (
          <Typography color="error" variant="caption">{errors.bridalPackage}</Typography>
        )}
        </Box>

        <Box>
      {/* Bridal Preview */}
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Is a bridal preview (trial) required?</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Previews are highly recommended. Prices start from £{pricingConfig.bridal.preview.price}.
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

        <Box>
      {/* Additional Services */}
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>Additional Services</Typography>
        
        <Field name="rehearsalDinner">
          {({ field }: FieldProps) => (
            <FormControlLabel 
              control={<Checkbox {...field} />} 
              label={`Rehearsal Dinner Hair & Makeup (£${pricingConfig.bridal.additionalServices.rehearsalDinner})`}
              sx={{ display: 'block' }}
            />
          )}
        </Field>

        <Field name="postWedding">
          {({ field }: FieldProps) => (
            <FormControlLabel 
              control={<Checkbox {...field} />} 
              label={`After Wedding Thank You Brunch Hair & Makeup (£${pricingConfig.bridal.additionalServices.postWedding})`}
              sx={{ display: 'block' }}
            />
          )}
        </Field>
        </Box>
      </Stack>
    </FormControl>
  );
}
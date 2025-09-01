'use client';

import {
  FormControl,
  FormLabel,
  Box,
  Typography,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio
} from '@mui/material';
import { Field, FieldProps } from 'formik';

interface OptionalExtrasProps {
  values: any;
  setFieldValue: (field: string, value: any) => void;
}

export default function OptionalExtras({ values, setFieldValue }: OptionalExtrasProps) {
  return (
    <FormControl component="fieldset" sx={{ mb: 3 }}>
      <FormLabel component="legend">Optional Extras</FormLabel>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Please check our Bridal Packages for package inclusions.
      </Typography>

      <Box sx={{ mb: 3 }}>
        {/* Additional Artist */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Additional Artist</strong><br />
            Generally required for more than 6 hair and/or makeup services. Prices start from £150 per artist.
          </Typography>
          <Field name="additionalArtists">
            {({ field }: FieldProps) => (
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                </Select>
              </FormControl>
            )}
          </Field>
        </Box>

        {/* Stay On Service */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wedding Day Bridal 'Stay On' Service</strong><br />
            For post-ceremony bridal touch-ups. £70 per additional hour (this is included in the Lucent Luxe Bridal Package)
          </Typography>
          <Field name="stayOnService">
            {({ field }: FieldProps) => (
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0 hours</MenuItem>
                  <MenuItem value="1">1 hour</MenuItem>
                  <MenuItem value="2">2 hours</MenuItem>
                  <MenuItem value="3">3 hours</MenuItem>
                  <MenuItem value="4">4 hours</MenuItem>
                  <MenuItem value="5">5 hours</MenuItem>
                  <MenuItem value="6">6 hours</MenuItem>
                </Select>
              </FormControl>
            )}
          </Field>
        </Box>

        {/* Extra Time */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Extra time</strong><br />
            If your look requires more than the suggested timing guide - £70 per hour
          </Typography>
          <Field name="extraTime">
            {({ field }: FieldProps) => (
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0 hours</MenuItem>
                  <MenuItem value="1">1 hour</MenuItem>
                  <MenuItem value="2">2 hours</MenuItem>
                  <MenuItem value="3">3 hours</MenuItem>
                  <MenuItem value="4">4 hours</MenuItem>
                  <MenuItem value="5">5 hours</MenuItem>
                  <MenuItem value="6">6 hours</MenuItem>
                </Select>
              </FormControl>
            )}
          </Field>
        </Box>

        {/* Out of Hours Surcharge */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Out of hours surcharge</strong><br />
            If your artist is required to start prior to 6am or depart home prior to 5am - £70 per hour
          </Typography>
          <Field name="outOfHours">
            {({ field }: FieldProps) => (
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0 hours</MenuItem>
                  <MenuItem value="1">1 hour</MenuItem>
                  <MenuItem value="2">2 hours</MenuItem>
                  <MenuItem value="3">3 hours</MenuItem>
                  <MenuItem value="4">4 hours</MenuItem>
                  <MenuItem value="5">5 hours</MenuItem>
                  <MenuItem value="6">6 hours</MenuItem>
                </Select>
              </FormControl>
            )}
          </Field>
        </Box>

        {/* Evening Re-style */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Evening Re-style – POA</strong><br />
            This is included within the Lucent Luxe Bridal Package. Prices start from £150.
          </Typography>
          <Field name="eveningRestyle">
            {({ field }: FieldProps) => (
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel 
                    control={<Checkbox />} 
                    label="Hair Restyle (£150)" 
                    onChange={(e) => {
                      const checked = (e.target as HTMLInputElement).checked;
                      const newServices = checked 
                        ? [...values.eveningRestyle, 'hairRestyle']
                        : values.eveningRestyle.filter((s: string) => s !== 'hairRestyle');
                      setFieldValue('eveningRestyle', newServices);
                    }}
                  />
                  <FormControlLabel 
                    control={<Checkbox />} 
                    label="Makeup Restyle (£150)" 
                    onChange={(e) => {
                      const checked = (e.target as HTMLInputElement).checked;
                      const newServices = checked 
                        ? [...values.eveningRestyle, 'makeupRestyle']
                        : values.eveningRestyle.filter((s: string) => s !== 'makeupRestyle');
                      setFieldValue('eveningRestyle', newServices);
                    }}
                  />
                  <FormControlLabel 
                    control={<Checkbox />} 
                    label="Hair & Makeup Restyle (£250)" 
                    onChange={(e) => {
                      const checked = (e.target as HTMLInputElement).checked;
                      const newServices = checked 
                        ? [...values.eveningRestyle, 'hairMakeupRestyle']
                        : values.eveningRestyle.filter((s: string) => s !== 'hairMakeupRestyle');
                      setFieldValue('eveningRestyle', newServices);
                    }}
                  />
                </FormGroup>
              </FormControl>
            )}
          </Field>
        </Box>

        {/* Strip Lashes */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wedding Party Strip Lashes</strong><br />
            £8 per person. * All bridal makeup services include individual eyelash application (if required).
          </Typography>
          <Field name="stripLashes">
            {({ field }: FieldProps) => (
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="9">9</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                </Select>
              </FormControl>
            )}
          </Field>
        </Box>

        {/* Touch-up Kit */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Wedding party touch-up kit</strong><br />
            £15 per person
          </Typography>
          <Field name="touchUpKit">
            {({ field }: FieldProps) => (
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="9">9</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                </Select>
              </FormControl>
            )}
          </Field>
        </Box>

        {/* Clip-in Extensions */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Clip-in hair extension application/styling</strong><br />
            From £40. This is included in Elevated Glow and Lucent Luxe Bridal Package.
          </Typography>
          <Field name="clipInExtensions">
            {({ field }: FieldProps) => (
              <RadioGroup {...field} row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            )}
          </Field>
        </Box>

        {/* Split Location Fee */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Split Location Fee</strong><br />
            Required if there are multiple bridal prep locations. Pricing from £40 per location change (plus travel if applicable)
          </Typography>
          <Field name="splitLocation">
            {({ field }: FieldProps) => (
              <RadioGroup {...field} row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            )}
          </Field>
        </Box>

        {/* Overnight Accommodation */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Overnight Accommodation</strong><br />
            £80-£100 to cover accommodation for the night before, required for early start times or if travel exceeds 90 minutes from your artist's home.
          </Typography>
          <Field name="overnightAccommodation">
            {({ field }: FieldProps) => (
              <RadioGroup {...field} row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            )}
          </Field>
        </Box>
      </Box>
    </FormControl>
  );
}
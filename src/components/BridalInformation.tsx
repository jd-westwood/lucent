'use client'

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
  Stack,
} from '@mui/material'
import { Field, FieldProps } from 'formik'
import { pricingConfig } from '../config/pricing'
import { textConfig } from '../config/text'

interface BridalInformationProps {
  errors: Record<string, string>
  touched: Record<string, boolean>
}

export default function BridalInformation({
  errors,
  touched,
}: BridalInformationProps) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        {textConfig.form.fieldsets.bridalInformation.title}
      </FormLabel>

      <Stack spacing={4}>
        <Box>
          {/* Number of Brides */}
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
            {
              textConfig.form.fieldsets.bridalInformation.fields.numberOfBrides
                .label
            }
          </Typography>
          <Field name="numberOfBrides">
            {({ field }: FieldProps) => (
              <FormControl fullWidth size="small" sx={{ maxWidth: 300 }}>
                <InputLabel>
                  {
                    textConfig.form.fieldsets.bridalInformation.fields
                      .numberOfBrides.label
                  }
                </InputLabel>
                <Select {...field} label="Number of Brides">
                  <MenuItem value="1">
                    {
                      textConfig.form.fieldsets.bridalInformation.fields
                        .numberOfBrides.options.one
                    }
                  </MenuItem>
                  <MenuItem value="2">
                    {
                      textConfig.form.fieldsets.bridalInformation.fields
                        .numberOfBrides.options.two
                    }
                  </MenuItem>
                </Select>
              </FormControl>
            )}
          </Field>
          {errors.numberOfBrides && touched.numberOfBrides && (
            <Typography color="error" variant="caption">
              {errors.numberOfBrides}
            </Typography>
          )}
        </Box>

        <Box>
          {/* Bridal Services */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
            {
              textConfig.form.fieldsets.bridalInformation.fields.bridalServices
                .subtitle
            }{' '}
            (Prices start from £
            {pricingConfig.bridal.services.hairMakeup.basePrice})
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {
              textConfig.form.fieldsets.bridalInformation.fields.bridalServices
                .description
            }
          </Typography>
          <Field name="bridalServices">
            {({ field }: FieldProps) => (
              <RadioGroup {...field}>
                {Object.entries(pricingConfig.bridal.services).map(
                  ([key, service]) => (
                    <FormControlLabel
                      key={key}
                      value={key}
                      control={<Radio />}
                      label={service.label}
                    />
                  )
                )}
              </RadioGroup>
            )}
          </Field>
          {errors.bridalServices && touched.bridalServices && (
            <Typography color="error" variant="caption">
              {errors.bridalServices}
            </Typography>
          )}
        </Box>

        <Box>
          {/* Bridal Package */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
            {
              textConfig.form.fieldsets.bridalInformation.fields.bridalPackage
                .subtitle
            }{' '}
            (Packages start from £
            {pricingConfig.bridal.packages.essential.price})
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {
              textConfig.form.fieldsets.bridalInformation.fields.bridalPackage
                .description
            }{' '}
            <a
              href="https://www.lucenthairandmakeup.co.uk/price-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                textConfig.form.fieldsets.bridalInformation.fields.bridalPackage
                  .linkText
              }
            </a>
          </Typography>
          <Field name="bridalPackage">
            {({ field }: FieldProps) => (
              <RadioGroup {...field}>
                {Object.entries(pricingConfig.bridal.packages).map(
                  ([key, pkg]) => (
                    <FormControlLabel
                      key={key}
                      value={key}
                      control={<Radio />}
                      label={`${pkg.label} (£${pkg.price})`}
                    />
                  )
                )}
              </RadioGroup>
            )}
          </Field>
          {errors.bridalPackage && touched.bridalPackage && (
            <Typography color="error" variant="caption">
              {errors.bridalPackage}
            </Typography>
          )}
        </Box>

        <Box>
          {/* Bridal Preview */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
            {
              textConfig.form.fieldsets.bridalInformation.fields.bridalPreview
                .label
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {
              textConfig.form.fieldsets.bridalInformation.fields.bridalPreview
                .description
            }{' '}
            Prices start from £{pricingConfig.bridal.preview.price}.
          </Typography>
          <Field name="bridalPreview">
            {({ field }: FieldProps) => (
              <RadioGroup {...field} row>
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label={
                    textConfig.form.fieldsets.bridalInformation.fields
                      .bridalPreview.options.yes
                  }
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label={
                    textConfig.form.fieldsets.bridalInformation.fields
                      .bridalPreview.options.no
                  }
                />
              </RadioGroup>
            )}
          </Field>
          {errors.bridalPreview && touched.bridalPreview && (
            <Typography color="error" variant="caption">
              {errors.bridalPreview}
            </Typography>
          )}
        </Box>

        <Box>
          {/* Additional Services */}
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Additional Services
          </Typography>

          <Field name="rehearsalDinner">
            {({ field }: FieldProps) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label={`${textConfig.form.fieldsets.bridalInformation.fields.rehearsalDinner.label} (£${pricingConfig.bridal.additionalServices.rehearsalDinner})`}
                sx={{ display: 'block' }}
              />
            )}
          </Field>

          <Field name="postWedding">
            {({ field }: FieldProps) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label={`${textConfig.form.fieldsets.bridalInformation.fields.postWedding.label} (£${pricingConfig.bridal.additionalServices.postWedding})`}
                sx={{ display: 'block' }}
              />
            )}
          </Field>
        </Box>
      </Stack>
    </FormControl>
  )
}

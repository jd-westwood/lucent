'use client'

import {
  FormControl,
  FormLabel,
  Box,
  Typography,
  Select,
  MenuItem,
  Stack,
} from '@mui/material'
import { Field, FieldProps } from 'formik'
import { pricingConfig } from '../config/pricing'
import { textConfig } from '../config/text'

export default function WeddingPartyServices() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        {textConfig.form.fieldsets.weddingPartyServices.title}
      </FormLabel>

      <Stack spacing={4}>
        <Box>
          {/* Preview (Trial) */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
            {
              textConfig.form.fieldsets.weddingPartyServices.sections.preview
                .subtitle
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {
              textConfig.form.fieldsets.weddingPartyServices.sections.preview
                .description
            }{' '}
            Prices start from £{pricingConfig.weddingParty.preview.hairOnly}.
          </Typography>

          <Stack spacing={2}>
            <Field name="weddingPartyPreview.hairMakeup">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .preview.fields.hairMakeup.label
                    }{' '}
                    (£{pricingConfig.weddingParty.preview.hairMakeup}) - Select
                    total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£{pricingConfig.weddingParty.preview.hairMakeup})
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£{pricingConfig.weddingParty.preview.hairMakeup * 2})
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£{pricingConfig.weddingParty.preview.hairMakeup * 3})
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£{pricingConfig.weddingParty.preview.hairMakeup * 4})
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>

            <Field name="weddingPartyPreview.hairOnly">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .preview.fields.hairOnly.label
                    }{' '}
                    (£{pricingConfig.weddingParty.preview.hairOnly}) - Select
                    total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£{pricingConfig.weddingParty.preview.hairOnly})
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£{pricingConfig.weddingParty.preview.hairOnly * 2})
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£{pricingConfig.weddingParty.preview.hairOnly * 3})
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£{pricingConfig.weddingParty.preview.hairOnly * 4})
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>

            <Field name="weddingPartyPreview.makeupOnly">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .preview.fields.makeupOnly.label
                    }{' '}
                    (£{pricingConfig.weddingParty.preview.makeupOnly}) - Select
                    total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£{pricingConfig.weddingParty.preview.makeupOnly})
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£{pricingConfig.weddingParty.preview.makeupOnly * 2})
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£{pricingConfig.weddingParty.preview.makeupOnly * 3})
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£{pricingConfig.weddingParty.preview.makeupOnly * 4})
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>
          </Stack>
        </Box>
        <Box>
          {/* Wedding Day */}
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
            {
              textConfig.form.fieldsets.weddingPartyServices.sections.weddingDay
                .subtitle
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {
              textConfig.form.fieldsets.weddingPartyServices.sections.weddingDay
                .description
            }{' '}
            Prices start from £
            {pricingConfig.weddingParty.weddingDay.flowerGirl}.
          </Typography>

          <Stack spacing={2}>
            <Field name="weddingDay.hairMakeup">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .weddingDay.fields.hairMakeup.label
                    }{' '}
                    – £{pricingConfig.weddingParty.weddingDay.hairMakeup} -
                    Select total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£{pricingConfig.weddingParty.weddingDay.hairMakeup})
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£
                        {pricingConfig.weddingParty.weddingDay.hairMakeup * 2})
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£
                        {pricingConfig.weddingParty.weddingDay.hairMakeup * 3})
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£
                        {pricingConfig.weddingParty.weddingDay.hairMakeup * 4})
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>

            <Field name="weddingDay.hairOnly">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .weddingDay.fields.hairOnly.label
                    }{' '}
                    – £{pricingConfig.weddingParty.weddingDay.hairOnly} - Select
                    total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£{pricingConfig.weddingParty.weddingDay.hairOnly})
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£{pricingConfig.weddingParty.weddingDay.hairOnly * 2}
                        )
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£{pricingConfig.weddingParty.weddingDay.hairOnly * 3}
                        )
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£{pricingConfig.weddingParty.weddingDay.hairOnly * 4}
                        )
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>

            <Field name="weddingDay.makeupOnly">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .weddingDay.fields.makeupOnly.label
                    }{' '}
                    – £{pricingConfig.weddingParty.weddingDay.makeupOnly} -
                    Select total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£{pricingConfig.weddingParty.weddingDay.makeupOnly})
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£
                        {pricingConfig.weddingParty.weddingDay.makeupOnly * 2})
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£
                        {pricingConfig.weddingParty.weddingDay.makeupOnly * 3})
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£
                        {pricingConfig.weddingParty.weddingDay.makeupOnly * 4})
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>

            <Field name="weddingDay.juniorBridesmaid">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .weddingDay.fields.juniorBridesmaid.label
                    }{' '}
                    – £{pricingConfig.weddingParty.weddingDay.juniorBridesmaid}{' '}
                    - Select total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£
                        {pricingConfig.weddingParty.weddingDay.juniorBridesmaid}
                        )
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£
                        {pricingConfig.weddingParty.weddingDay
                          .juniorBridesmaid * 2}
                        )
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£
                        {pricingConfig.weddingParty.weddingDay
                          .juniorBridesmaid * 3}
                        )
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£
                        {pricingConfig.weddingParty.weddingDay
                          .juniorBridesmaid * 4}
                        )
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>

            <Field name="weddingDay.flowerGirl">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .weddingDay.fields.flowerGirl.label
                    }{' '}
                    – £{pricingConfig.weddingParty.weddingDay.flowerGirl} -
                    Select total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£{pricingConfig.weddingParty.weddingDay.flowerGirl})
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£
                        {pricingConfig.weddingParty.weddingDay.flowerGirl * 2})
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£
                        {pricingConfig.weddingParty.weddingDay.flowerGirl * 3})
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£
                        {pricingConfig.weddingParty.weddingDay.flowerGirl * 4})
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>

            <Field name="weddingDay.blowDryShort">
              {({ field }: FieldProps) => (
                <Box>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {
                      textConfig.form.fieldsets.weddingPartyServices.sections
                        .weddingDay.fields.blowDryShort.label
                    }{' '}
                    – £{pricingConfig.weddingParty.weddingDay.blowDryShort} -
                    Select total number required
                  </Typography>
                  <FormControl size="small" sx={{ width: 150 }}>
                    <Select {...field} displayEmpty>
                      <MenuItem value="0">0</MenuItem>
                      <MenuItem value="1">
                        1 (£{pricingConfig.weddingParty.weddingDay.blowDryShort}
                        )
                      </MenuItem>
                      <MenuItem value="2">
                        2 (£
                        {pricingConfig.weddingParty.weddingDay.blowDryShort * 2}
                        )
                      </MenuItem>
                      <MenuItem value="3">
                        3 (£
                        {pricingConfig.weddingParty.weddingDay.blowDryShort * 3}
                        )
                      </MenuItem>
                      <MenuItem value="4">
                        4 (£
                        {pricingConfig.weddingParty.weddingDay.blowDryShort * 4}
                        )
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}
            </Field>
          </Stack>
        </Box>
      </Stack>
    </FormControl>
  )
}

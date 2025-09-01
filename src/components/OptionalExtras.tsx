'use client'

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
  Radio,
  Stack,
} from '@mui/material'
import { Field, FieldProps } from 'formik'
import { pricingConfig } from '../config/pricing'
import { textConfig } from '../config/text'

interface OptionalExtrasProps {
  values: Record<string, unknown>
  setFieldValue: (field: string, value: unknown) => void
}

export default function OptionalExtras({
  values,
  setFieldValue,
}: OptionalExtrasProps) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        {textConfig.form.fieldsets.optionalExtras.title}
      </FormLabel>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        {textConfig.form.fieldsets.optionalExtras.description}
      </Typography>

      <Stack spacing={4}>
        <Stack spacing={4}>
          <Box>
            {/* Additional Artist */}
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Additional Artist</strong>
              <br />
              Generally required for more than 6 hair and/or makeup services.
              Prices start from £
              {
                pricingConfig.optionalExtras.additionalArtists.pricePerArtist
              }{' '}
              per artist.
            </Typography>
            <Field name="additionalArtists">
              {({ field }: FieldProps) => (
                <FormControl size="small" sx={{ width: 150 }}>
                  <Select {...field} displayEmpty>
                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">
                      1 (£
                      {
                        pricingConfig.optionalExtras.additionalArtists
                          .pricePerArtist
                      }
                      )
                    </MenuItem>
                    <MenuItem value="2">
                      2 (£
                      {pricingConfig.optionalExtras.additionalArtists
                        .pricePerArtist * 2}
                      )
                    </MenuItem>
                    <MenuItem value="3">
                      3 (£
                      {pricingConfig.optionalExtras.additionalArtists
                        .pricePerArtist * 3}
                      )
                    </MenuItem>
                    <MenuItem value="4">
                      4 (£
                      {pricingConfig.optionalExtras.additionalArtists
                        .pricePerArtist * 4}
                      )
                    </MenuItem>
                    <MenuItem value="5">
                      5 (£
                      {pricingConfig.optionalExtras.additionalArtists
                        .pricePerArtist * 5}
                      )
                    </MenuItem>
                    <MenuItem value="6">
                      6 (£
                      {pricingConfig.optionalExtras.additionalArtists
                        .pricePerArtist * 6}
                      )
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>

          <Box>
            {/* Stay On Service */}
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Wedding Day Bridal &lsquo;Stay On&rsquo; Service</strong>
              <br />
              For post-ceremony bridal touch-ups. £
              {pricingConfig.optionalExtras.stayOnService.pricePerHour} per
              additional hour (this is included in the Lucent Luxe Bridal
              Package)
            </Typography>
            <Field name="stayOnService">
              {({ field }: FieldProps) => (
                <FormControl size="small" sx={{ width: 150 }}>
                  <Select {...field} displayEmpty>
                    <MenuItem value="0">0 hours</MenuItem>
                    <MenuItem value="1">
                      1 hour (£
                      {pricingConfig.optionalExtras.stayOnService.pricePerHour})
                    </MenuItem>
                    <MenuItem value="2">
                      2 hours (£
                      {pricingConfig.optionalExtras.stayOnService.pricePerHour *
                        2}
                      )
                    </MenuItem>
                    <MenuItem value="3">
                      3 hours (£
                      {pricingConfig.optionalExtras.stayOnService.pricePerHour *
                        3}
                      )
                    </MenuItem>
                    <MenuItem value="4">
                      4 hours (£
                      {pricingConfig.optionalExtras.stayOnService.pricePerHour *
                        4}
                      )
                    </MenuItem>
                    <MenuItem value="5">
                      5 hours (£
                      {pricingConfig.optionalExtras.stayOnService.pricePerHour *
                        5}
                      )
                    </MenuItem>
                    <MenuItem value="6">
                      6 hours (£
                      {pricingConfig.optionalExtras.stayOnService.pricePerHour *
                        6}
                      )
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Extra time</strong>
              <br />
              If your look requires more than the suggested timing guide - £
              {pricingConfig.optionalExtras.extraTime.pricePerHour} per hour
            </Typography>
            <Field name="extraTime">
              {({ field }: FieldProps) => (
                <FormControl size="small" sx={{ width: 150 }}>
                  <Select {...field} displayEmpty>
                    <MenuItem value="0">0 hours</MenuItem>
                    <MenuItem value="1">
                      1 hour (£
                      {pricingConfig.optionalExtras.extraTime.pricePerHour})
                    </MenuItem>
                    <MenuItem value="2">
                      2 hours (£
                      {pricingConfig.optionalExtras.extraTime.pricePerHour * 2})
                    </MenuItem>
                    <MenuItem value="3">
                      3 hours (£
                      {pricingConfig.optionalExtras.extraTime.pricePerHour * 3})
                    </MenuItem>
                    <MenuItem value="4">
                      4 hours (£
                      {pricingConfig.optionalExtras.extraTime.pricePerHour * 4})
                    </MenuItem>
                    <MenuItem value="5">
                      5 hours (£
                      {pricingConfig.optionalExtras.extraTime.pricePerHour * 5})
                    </MenuItem>
                    <MenuItem value="6">
                      6 hours (£
                      {pricingConfig.optionalExtras.extraTime.pricePerHour * 6})
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Out of hours surcharge</strong>
              <br />
              If your artist is required to start prior to 6am or depart home
              prior to 5am - £
              {pricingConfig.optionalExtras.outOfHours.pricePerHour} per hour
            </Typography>
            <Field name="outOfHours">
              {({ field }: FieldProps) => (
                <FormControl size="small" sx={{ width: 150 }}>
                  <Select {...field} displayEmpty>
                    <MenuItem value="0">0 hours</MenuItem>
                    <MenuItem value="1">
                      1 hour (£
                      {pricingConfig.optionalExtras.outOfHours.pricePerHour})
                    </MenuItem>
                    <MenuItem value="2">
                      2 hours (£
                      {pricingConfig.optionalExtras.outOfHours.pricePerHour * 2}
                      )
                    </MenuItem>
                    <MenuItem value="3">
                      3 hours (£
                      {pricingConfig.optionalExtras.outOfHours.pricePerHour * 3}
                      )
                    </MenuItem>
                    <MenuItem value="4">
                      4 hours (£
                      {pricingConfig.optionalExtras.outOfHours.pricePerHour * 4}
                      )
                    </MenuItem>
                    <MenuItem value="5">
                      5 hours (£
                      {pricingConfig.optionalExtras.outOfHours.pricePerHour * 5}
                      )
                    </MenuItem>
                    <MenuItem value="6">
                      6 hours (£
                      {pricingConfig.optionalExtras.outOfHours.pricePerHour * 6}
                      )
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Evening Re-style – POA</strong>
              <br />
              This is included within the Lucent Luxe Bridal Package. Prices
              start from £
              {pricingConfig.optionalExtras.eveningRestyle.hairRestyle}.
            </Typography>
            <Field name="eveningRestyle">
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {({ field: _field }: FieldProps) => (
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={`Hair Restyle (£${pricingConfig.optionalExtras.eveningRestyle.hairRestyle})`}
                      onChange={(e) => {
                        const checked = (e.target as HTMLInputElement).checked
                        const currentServices = values.eveningRestyle as string[]
                        const newServices = checked
                          ? [...currentServices, 'hairRestyle']
                          : currentServices.filter(
                              (s: string) => s !== 'hairRestyle'
                            )
                        setFieldValue('eveningRestyle', newServices)
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={`Makeup Restyle (£${pricingConfig.optionalExtras.eveningRestyle.makeupRestyle})`}
                      onChange={(e) => {
                        const checked = (e.target as HTMLInputElement).checked
                        const currentServices = values.eveningRestyle as string[]
                        const newServices = checked
                          ? [...currentServices, 'makeupRestyle']
                          : currentServices.filter(
                              (s: string) => s !== 'makeupRestyle'
                            )
                        setFieldValue('eveningRestyle', newServices)
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label={`Hair & Makeup Restyle (£${pricingConfig.optionalExtras.eveningRestyle.hairMakeupRestyle})`}
                      onChange={(e) => {
                        const checked = (e.target as HTMLInputElement).checked
                        const currentServices = values.eveningRestyle as string[]
                        const newServices = checked
                          ? [...currentServices, 'hairMakeupRestyle']
                          : currentServices.filter(
                              (s: string) => s !== 'hairMakeupRestyle'
                            )
                        setFieldValue('eveningRestyle', newServices)
                      }}
                    />
                  </FormGroup>
                </FormControl>
              )}
            </Field>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Wedding Party Strip Lashes</strong>
              <br />£{
                pricingConfig.optionalExtras.stripLashes.pricePerPerson
              }{' '}
              per person. * All bridal makeup services include individual
              eyelash application (if required).
            </Typography>
            <Field name="stripLashes">
              {({ field }: FieldProps) => (
                <FormControl size="small" sx={{ width: 150 }}>
                  <Select {...field} displayEmpty>
                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">
                      1 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson})
                    </MenuItem>
                    <MenuItem value="2">
                      2 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        2}
                      )
                    </MenuItem>
                    <MenuItem value="3">
                      3 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        3}
                      )
                    </MenuItem>
                    <MenuItem value="4">
                      4 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        4}
                      )
                    </MenuItem>
                    <MenuItem value="5">
                      5 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        5}
                      )
                    </MenuItem>
                    <MenuItem value="6">
                      6 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        6}
                      )
                    </MenuItem>
                    <MenuItem value="7">
                      7 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        7}
                      )
                    </MenuItem>
                    <MenuItem value="8">
                      8 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        8}
                      )
                    </MenuItem>
                    <MenuItem value="9">
                      9 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        9}
                      )
                    </MenuItem>
                    <MenuItem value="10">
                      10 (£
                      {pricingConfig.optionalExtras.stripLashes.pricePerPerson *
                        10}
                      )
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Wedding party touch-up kit</strong>
              <br />£{
                pricingConfig.optionalExtras.touchUpKit.pricePerPerson
              }{' '}
              per person
            </Typography>
            <Field name="touchUpKit">
              {({ field }: FieldProps) => (
                <FormControl size="small" sx={{ width: 150 }}>
                  <Select {...field} displayEmpty>
                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">
                      1 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson})
                    </MenuItem>
                    <MenuItem value="2">
                      2 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        2}
                      )
                    </MenuItem>
                    <MenuItem value="3">
                      3 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        3}
                      )
                    </MenuItem>
                    <MenuItem value="4">
                      4 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        4}
                      )
                    </MenuItem>
                    <MenuItem value="5">
                      5 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        5}
                      )
                    </MenuItem>
                    <MenuItem value="6">
                      6 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        6}
                      )
                    </MenuItem>
                    <MenuItem value="7">
                      7 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        7}
                      )
                    </MenuItem>
                    <MenuItem value="8">
                      8 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        8}
                      )
                    </MenuItem>
                    <MenuItem value="9">
                      9 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        9}
                      )
                    </MenuItem>
                    <MenuItem value="10">
                      10 (£
                      {pricingConfig.optionalExtras.touchUpKit.pricePerPerson *
                        10}
                      )
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            </Field>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Clip-in hair extension application/styling</strong>
              <br />
              From £{pricingConfig.optionalExtras.clipInExtensions.basePrice}.
              This is included in Elevated Glow and Lucent Luxe Bridal Package.
            </Typography>
            <Field name="clipInExtensions">
              {({ field }: FieldProps) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              )}
            </Field>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Split Location Fee</strong>
              <br />
              Required if there are multiple bridal prep locations. Pricing from
              £{pricingConfig.optionalExtras.splitLocation.basePrice} per
              location change (plus travel if applicable)
            </Typography>
            <Field name="splitLocation">
              {({ field }: FieldProps) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              )}
            </Field>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Overnight Accommodation</strong>
              <br />£
              {pricingConfig.optionalExtras.overnightAccommodation.minPrice}-£
              {pricingConfig.optionalExtras.overnightAccommodation.maxPrice} to
              cover accommodation for the night before, required for early start
              times or if travel exceeds 90 minutes from your artist&rsquo;s
              home.
            </Typography>
            <Field name="overnightAccommodation">
              {({ field }: FieldProps) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              )}
            </Field>
          </Box>
        </Stack>
      </Stack>
    </FormControl>
  )
}

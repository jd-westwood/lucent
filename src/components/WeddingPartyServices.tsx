'use client';

import {
  FormControl,
  FormLabel,
  Box,
  Typography,
  Select,
  MenuItem
} from '@mui/material';
import { Field, FieldProps } from 'formik';

export default function WeddingPartyServices() {
  return (
    <FormControl component="fieldset" sx={{ mb: 3 }}>
      <FormLabel component="legend">Wedding Party Services</FormLabel>
      
      {/* Preview (Trial) */}
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Preview (Trial)</Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        For bridesmaids, mother of the bride/groom, or additional attendants. Prices start from £90.
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Field name="weddingPartyPreview.hairMakeup">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Hair & Makeup (£150) - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="weddingPartyPreview.hairOnly">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Hair Only (£90) - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="weddingPartyPreview.makeupOnly">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Makeup Only (£90) - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>
      </Box>

      {/* Wedding Day */}
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>Wedding Day</Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        For bridesmaids, mother of the bride/groom, or additional attendants. Prices start from £40.
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Field name="weddingDay.hairMakeup">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Hair & Makeup – £160 - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="weddingDay.hairOnly">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Hair Only – £100 - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="weddingDay.makeupOnly">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Makeup Only – £100 - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="weddingDay.juniorBridesmaid">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Junior Bridesmaid Hair and Light Touch of Makeup (10-15 yrs) – £65 - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="weddingDay.flowerGirl">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Flower Girl Hair (under 10 yrs) – £40 - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>

        <Field name="weddingDay.blowDryShort">
          {({ field }: FieldProps) => (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>Blow-dry Only - Short Hair – £65 - Select total number required</Typography>
              <FormControl size="small" sx={{ width: 300 }}>
                <Select {...field} displayEmpty>
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Field>
      </Box>
    </FormControl>
  );
}
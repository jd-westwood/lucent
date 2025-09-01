'use client';

import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  FormControl, 
  FormLabel, 
  Checkbox, 
  TextField, 
  Select, 
  MenuItem, 
  InputLabel,
  FormGroup,
  Divider
} from '@mui/material';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as yup from 'yup';
import validator from 'validator';
import BridalInformation from './BridalInformation';
import WeddingPartyServices from './WeddingPartyServices';
import OptionalExtras from './OptionalExtras';
import Location from './Location';
import PersonalDetails from './PersonalDetails';
import FormSection from './FormSection';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  numberOfBrides: yup.string().required('Number of brides is required'),
  bridalServices: yup.string().required('Please select a bridal service'),
  bridalPackage: yup.string().required('Bridal package is required'),
  bridalPreview: yup.string().required('Please specify if bridal preview is required'),
  location: yup.string()
    .required('Location/postcode is required')
    .test('is-valid-postcode', 'Please enter a valid UK postcode (e.g., SW1A 1AA)', (value) => {
      if (!value) return false;
      return validator.isPostalCode(value, 'GB');
    }),
});

export default function SampleForm() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mt: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Cost Calculator
          </Typography>
          <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
            <li>
              <Typography variant="body2">
                <strong>Select Options:</strong> Choose from available packages, add-ons, or customisations to tailor your costs.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Review Costs:</strong> The calculator will automatically display the estimated total cost based on your inputs.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Adjust If Needed:</strong> Modify your selections or inputs to see how changes impact the total cost.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Enter Your Email Address:</strong> Input your email address to receive the detailed quote directly in your inbox for future reference.
              </Typography>
            </li>
          </Box>
        </Box>
        

        <Formik
          initialValues={{ 
            email: '',
            numberOfBrides: '1',
            bridalServices: 'hairMakeup',
            bridalPackage: 'essential',
            bridalPreview: '',
            rehearsalDinner: false,
            postWedding: false,
            weddingPartyPreview: {
              hairMakeup: 0,
              hairOnly: 0,
              makeupOnly: 0
            },
            weddingDay: {
              hairMakeup: 0,
              hairOnly: 0,
              makeupOnly: 0,
              juniorBridesmaid: 0,
              flowerGirl: 0,
              blowDryShort: 0
            },
            additionalArtists: 0,
            stayOnService: 0,
            extraTime: 0,
            outOfHours: 0,
            eveningRestyle: [],
            stripLashes: 0,
            touchUpKit: 0,
            clipInExtensions: '',
            splitLocation: '',
            overnightAccommodation: '',
            location: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting, values, setFieldValue }) => (
            <Form>
              <Box sx={{ mt: 3 }}>
                {/* Personal Details */}
                <FormSection>
                  <PersonalDetails errors={errors} touched={touched} />
                </FormSection>

                {/* Bridal Information */}
                <FormSection>
                  <BridalInformation errors={errors} touched={touched} />
                </FormSection>

                {/* Wedding Party Services */}
                <FormSection>
                  <WeddingPartyServices />
                </FormSection>

                {/* Optional Extras */}
                <FormSection>
                  <OptionalExtras values={values} setFieldValue={setFieldValue} />
                </FormSection>

                {/* Location */}
                <FormSection>
                  <Location errors={errors} touched={touched} />
                </FormSection>

                
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  fullWidth
                  sx={{ mt: 2, py: 2 }}
                >
                  Get Quote
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
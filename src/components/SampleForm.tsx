'use client';

import { Container, Typography, Button, Box } from '@mui/material';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  name: yup.string().required('Name is required'),
});

export default function SampleForm() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Next.js + Material-UI + Formik + Yup
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your setup is complete! Here&apos;s a sample form demonstrating all technologies working together.
        </Typography>
        
        <Formik
          initialValues={{ email: '', name: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Box sx={{ mt: 3 }}>
                <Field name="name">
                  {({ field }: FieldProps) => (
                    <Box sx={{ mb: 2 }}>
                      <input
                        {...field}
                        placeholder="Name"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          fontSize: '16px',
                        }}
                      />
                      {errors.name && touched.name && (
                        <Typography color="error" variant="caption" display="block">
                          {errors.name}
                        </Typography>
                      )}
                    </Box>
                  )}
                </Field>
                
                <Field name="email">
                  {({ field }: FieldProps) => (
                    <Box sx={{ mb: 2 }}>
                      <input
                        {...field}
                        type="email"
                        placeholder="Email"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          fontSize: '16px',
                        }}
                      />
                      {errors.email && touched.email && (
                        <Typography color="error" variant="caption" display="block">
                          {errors.email}
                        </Typography>
                      )}
                    </Box>
                  )}
                </Field>
                
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
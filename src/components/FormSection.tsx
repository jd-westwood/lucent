'use client';

import { Card, CardContent } from '@mui/material';
import { ReactNode } from 'react';

interface FormSectionProps {
  children: ReactNode;
}

export default function FormSection({ children }: FormSectionProps) {
  return (
    <Card 
      sx={{ 
        mb: 3, 
        backgroundColor: 'rgb(244, 243, 239)'
      }}
    >
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
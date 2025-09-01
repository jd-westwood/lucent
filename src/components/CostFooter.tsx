'use client'

import { Box, Typography, Paper } from '@mui/material'
import { formatCurrency } from '../utils/costCalculation'

interface CostFooterProps {
  totalCost: number
}

export default function CostFooter({ totalCost }: CostFooterProps) {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'primary.main', // Uses the green theme color
        zIndex: 1000,
        py: 2,
        px: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 'sm',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Estimated Total:
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {formatCurrency(totalCost)}
        </Typography>
      </Box>
    </Paper>
  )
}

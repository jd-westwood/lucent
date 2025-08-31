'use client';

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(48, 72, 72)',
    },
    background: {
      default: 'rgb(244, 243, 239)',
      paper: 'rgb(244, 243, 239)',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Calmetta, var(--font-geist-sans), sans-serif',
  },
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
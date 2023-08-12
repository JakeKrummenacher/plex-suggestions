import { createTheme } from '@mui/material';

// Check if user has set their system to dark mode
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = createTheme({
  palette: {
    mode: prefersDarkMode ? 'dark' : 'light',
    ...(prefersDarkMode
      ? {
          // You can customize the dark theme colors here
          primary: { main: '#90caf9' }, // example color
          secondary: { main: '#f48fb1' }, // example color
        }
      : {
          // You can customize the light theme colors here
          primary: { main: '#1976d2' }, // example color
          secondary: { main: '#e91e63' }, // example color
        }),
  },
});

export default theme;

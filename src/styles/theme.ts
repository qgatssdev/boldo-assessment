import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#0A2640',
        light: '#777',
      },
      secondary: {
        main: '#65E4A3'
      }
    },
    typography: {
      manrope: {
        fontFamily: 'Manrope',
      },
      openSans: {
        fontFamily: 'Open Sans',
      },
    },
  })
);

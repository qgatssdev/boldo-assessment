import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#0A2640',
        light: '#777',
      },
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

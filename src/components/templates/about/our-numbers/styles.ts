import { styled } from '@mui/material';

export const StyledONWrapper = styled('div')({
  paddingTop: '70px',
  paddingBottom: '100px',
});

export const StyledONHeader = styled('h1')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  lineHeight: '32px',
  color: theme.palette.primary.main,
  textAlign: 'center',
}));

export const StyledONInfo = styled('p')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  lineHeight: '75px',
  color: theme.palette.primary.main,
  textAlign: 'center',
  maxWidth: '842px',
  margin: '0 auto',
  marginTop: '10px',

  '@media (max-width:576px)': {
    fontSize: '18px',
    lineHeight: '32px',
  },

  '@media (min-width:576px) and max-width:992px)': {
    fontSize: '28px',
    lineHeight: '32px',
  },
}));

export const StyledStatContainer = styled('div')(() => ({
  marginLeft: '10%',
  marginRight: '10%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',

  '@media (max-width:992px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
}));

export const StyledStatItems = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

export const StyledStatCount = styled('p')(({ theme }) => ({
  fontSize: '96px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  color: theme.palette.primary.main,
}));

export const StyledStatText = styled('p')(({ theme }) => ({
  fontSize: '24px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  color: theme.palette.primary.main,

  '@media (max-width:992px)': {
    textAlign: 'center',
  },
}));

import { styled } from '@mui/material';

export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: '100px',
  paddingBottom: '100px',
}));

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  color: theme.palette.common.white,
  textAlign: 'center',
}));

export const StyledSub = styled('p')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  color: theme.palette.common.white,
  textAlign: 'center',
  maxWidth: '842px',
  margin: '0 auto',
  marginTop: '10px',
  padding: '10px',

  '@media (max-width: 576px)': {
    fontSize: '28px',
    textAlign: 'center',
  },
}));

export const StyledHR = styled('hr')({
  marginLeft: '10%',
  marginRight: '10%',
  marginTop: '50px',
});

export const StyledClaimWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  marginLeft: '10%',
  marginRight: '10%',
  flexDirection: 'column',
  gap: '40px',
}));

export const StyledClaimContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '100px',

  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const StyledClaim = styled('p')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  color: theme.palette.common.white,
  display: 'flex',
  gap: '8px',

  '@media (max-width: 576px)': {
    fontSize: '28px',
    textAlign: 'center',
    gap: '5px',
  },
}));

export const StyledClaimSpan = styled('p')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  color: '#69E6A6',

  '@media (max-width: 576px)': {
    fontSize: '28px',
    textAlign: 'center',
  },
}));

export const StyledClaimText = styled('p')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  color: '#F1F1F1',
  maxWidth: '510px',

  '@media (max-width: 576px)': {
    fontSize: '16px',
    textAlign: 'center',
  },

  '@media (min-width: 576px) and (max-width: 1200px)': {
    textAlign: 'center',
  },
}));

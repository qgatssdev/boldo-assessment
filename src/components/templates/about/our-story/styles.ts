import { styled } from '@mui/material';

export const StyledOSContainer = styled('div')(({ theme }) => ({
  paddingLeft: '15%',
  paddingRight: '15%',
  background: theme.palette.primary.main,
  paddingTop: '100px',
  paddingBottom: '100px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  color: theme.palette.common.white,
}));

export const StyledSubtitle = styled('h1')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  lineHeight: '72px',
  color: theme.palette.common.white,
  maxWidth: '842px',

  '@media (max-width: 768px)': {
    fontSize: '28px',
    lineHeight: '42px',
  },
}));

export const StyledSubtText = styled('h1')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  lineHeight: '32px',
  color: '#F1F1F1',
  maxWidth: '800px',

  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeight: '22px',
  },
}));

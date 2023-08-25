import { styled } from '@mui/material';

export const StyledServiceContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: '5%',
  paddingBottom: '5%',
}));

export const StyledHeader = styled('h1')(({ theme }) => ({
  color: '#F1F1F1',
  fontSize: '20px',
  fontWeight: '400',
  textAlign: 'center',
  fontFamily: theme.typography.openSans.fontFamily,
}));

export const StyledTitle = styled('p')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '48px',
  fontWeight: '400',
  maxWidth: '842px',
  margin: '0 auto',
  textAlign: 'center',
  lineHeight: '72px',
  marginTop: '10px',
  fontFamily: theme.typography.manrope.fontFamily,

  '@media (max-width: 576px)': {
    fontSize: '20px',
    lineHeight: '42px',
    padding: '10px',
  },

  '@media (min-width: 576px) and  (max-width: 768px)': {
    fontSize: '28px',
    lineHeight: '42px',
    padding: '10px',
  },

  '@media (min-width: 768px) and (max-width: 992px)': {
    fontSize: '38px',
  },
}));

export const StyledServiceMockContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '7%',
  marginRight: '7%',
  marginTop: '70px',

  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    gap: '100px',
  },
});

export const StyledImage = styled('img')({
  maxWidth: '300px',
  maxHeight: '354px',
});

export const StyledServiceWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const StyledText = styled('p')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '24px',
  fontWeight: '400',
  marginTop: '24px',
  fontFamily: theme.typography.openSans.fontFamily,

  '@media (max-width: 1200px)': {
    textAlign: 'center',
  },
}));

export const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '20px',
  fontWeight: '700',
  marginTop: '28px',
  paddingBottom: '10px',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.common.white}`,
  width: 'fit-content',
  cursor: 'pointer',
  transition: '0.5s',
  fontFamily: theme.typography.openSans.fontFamily,

  '@media (max-width: 1200px)': {
    alignSelf: 'center',
  },

  '&:hover': {
    textDecoration: 'none',
    gap: '20px',
  },
}));

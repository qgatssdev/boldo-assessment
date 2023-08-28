import { styled } from '@mui/material';

export const StyledMetricContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '120px',
  gap: '150px',
});

export const StyledContainer = styled('div')({
  display: 'flex',

  '@media (max-width: 992px)': {
    flexDirection: 'column',
    gap: '50px',
  },
});

export const StyledImageContainerOne = styled('div')({
  flexBasis: '50%',
  display: 'flex',
  justifyContent: 'center',
});

export const StyledRelativeContainer = styled('div')({
  position: 'relative',
  flexBasis: '50%',
  maxWidth: '434px',
});

export const StyledImage = styled('img')({
  maxHeight: '440px',
  maxWidth: '434px',
  height: '100%',

  '@media (max-width: 576px)': {
    width: '100%',
  },
});

export const StyledBarChart = styled('img')({
  position: 'absolute',
  maxHeight: '388px',
  maxWidth: '251px',
  right: '13%',
  bottom: '-8%',
  height: '100%',

  '@media (max-width: 576px)': {
    bottom: '-40%',
  },

  '@media (min-width: 576px) and  (max-width: 992px)': {
    bottom: '-25%',
  },
});

export const StyledImageContainerTwo = styled('div')({
  flexBasis: '50%',
  display: 'flex',
  marginTop: '50px',
  justifyContent: 'center',
});

export const StyledRelativeContainerTwo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',

  '@media (max-width: 576px)': {
    paddingLeft: '12px',
    paddingRight: '12px',
  },
});

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontSize: '34px',
  color: theme.palette.common.black,
  fontFamily: theme.typography.manrope.fontFamily,
  lineHeight: '56px',
  fontWeight: 400,
  maxWidth: '493px',
  padding: '10px',

  '@media (max-width: 576px)': {
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: '26px',
  },
}));

export const StyledListContainer = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '40px',
  marginBottom: '50px',
});

export const StyledListItems = styled('li')(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  fontSize: '20px',
  alignItems: 'center',
  listStyle: 'none',
  fontFamily: theme.typography.openSans.fontFamily,

  '@media (max-width: 576px)': {
    marginLeft: '10%',
    fontSize: '16px',
  },
}));

export const StyledButtonContainer = styled('div')({
  '@media (max-width: 576px)': {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const StyledConnectContainerOne = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
});

export const StyledBarsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  paddingLeft: '10px',
  paddingRight: '10px',
});

export const StyledBar = styled('div')(({ theme }) => ({
  maxWidth: '500px',
  height: '68px',
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '4px',
  background: theme.palette.primary.main,
  boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.08)',
  color: theme.palette.common.white,
  fontFamily: theme.typography.openSans.fontFamily,

  '@media (max-width: 576px)': {
    fontSize: '12px',
  },
}));

export const StyledBarWhite = styled('div')(({ theme }) => ({
  maxWidth: '500px',
  height: '68px',
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '4px',
  background: theme.palette.common.white,
  boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.08)',
  color: theme.palette.common.black,
  fontFamily: theme.typography.openSans.fontFamily,

  '@media (max-width: 576px)': {
    fontSize: '14px',
  },
}));

export const StyledConnectContainerTwo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
});

export const StyledImageTwo = styled('img')({
  maxHeight: '440px',
  maxWidth: '394px',

  '@media (max-width: 576px)': {
    width: '100%',
    height: '100%',
  },
});

export const StyledPieChart = styled('img')({
  position: 'absolute',
  maxHeight: '388px',
  maxWidth: '291px',
  left: '6%',
  bottom: '-30%',

  '@media (max-width: 576px)': {
    width: '100%',
    height: '100%',
    maxWidth: '241px',
    bottom: '-50%',
  },
});

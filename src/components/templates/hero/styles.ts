import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')({
  display: 'flex',
  marginLeft: '7%',
  marginRight: '7%',
  gap: '100px',
  alignItems: 'center',
  paddingTop: '5%',
});

export const StyledContainerOne = styled('div')({
  flexBasis: '50%',
  '@media (max-width: 992px)': {
    flexBasis: '100%',
  },
});

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 400,
  marginTop: '16px',
  color: theme.palette.primary.main,
  lineHeight: '72px',
  maxWidth: '600px',
  fontFamily: theme.typography.manrope.fontFamily,

  '@media (max-width: 576px)': {
    fontSize: '38px',
    lineHeight: '52px',
  },
}));

export const StyledSubtitle = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  marginTop: '16px',
  lineHeight: '28px',
  color: theme.palette.primary.light,
  maxWidth: '600px',
  fontFamily: theme.typography.openSans.fontFamily,

  '@media (max-width: 576px)': {
    fontSize: '12px',
  },
}));

export const StyledButtonContainer = styled('div')({
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  marginTop: 50,
});

export const StyledContainerTwo = styled('div')({
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '594px',
  gap: '20px',

  '@media (max-width: 992px)': {
    display: 'none',
  },
});

export const StyledImageOne = styled('img')({
  maxWidth: '594px',
  maxHeight: '300px',
  width: '100%',
});

export const StyledBottomContainer = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  maxWidth: '594px',
});

export const StyledImageTwo = styled('img')({
  maxWidth: '292px',
  maxHeight: '165px',
  width: '40%',
  marginRight: '20px',
});

export const StyledImageThree = styled('img')({
  maxWidth: '315px',
  maxHeight: '165px',
  width: '60%',
});

export const StyledMarqueeContainer = styled('div')({
  marginTop: '5%',
  marginLeft: '7%',
  marginRight: '7%',

  '@media (max-width: 992px)': {
    paddingBottom: '5%',
    paddingTop: '5%',
  },
});

export const StyledMarqueeWrapper = styled('div')({
  display: 'flex',
});

export const StyledMarquee = styled('div')({
  marginLeft: '50px',
  marginRight: '50px',
});

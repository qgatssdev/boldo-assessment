import { styled } from '@mui/material';

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  lineHeight: '72px',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginTop: '30px',
}));

export const StyledThoughts = styled('h1')(({ theme }) => ({
  fontSize: '64px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  lineHeight: '72px',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginTop: '10px',

  '@media (max-width:576px)': {
    fontSize: '34px',
  },
}));

export const StyledContainer = styled('div')({
  display: 'flex',
  marginTop: '60px',
  marginLeft: '7%',
  marginRight: '7%',
  gap: '100px',
  alignItems: 'center',

  '@media (max-width:1200px)': {
    flexDirection: 'column',
    gap: '50px',
  },
});

export const StyledHeroImage = styled('img')({
  maxWidth: '550px',
  maxHeight: '386px',
  width: '100%',
  height: '100%',
});

export const StyledFlexContainer = styled('div')({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
});

export const StyledCategory = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 700,
  lineHeight: '72px',
  color: theme.palette.primary.main,
}));

export const StyledDate = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 700,
  lineHeight: '72px',
  color: theme.palette.primary.light,
}));

export const StyledTitle = styled('p')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  color: theme.palette.common.black,
  maxWidth: '550px',
  lineHeight: '72px',
  marginBottom: '30px',

  '@media (max-width:576px)': {
    fontSize: '28px',
    lineHeight: '42px',
  },
}));

export const StyledAvatar = styled('img')(({ theme }) => ({
  width: '32px',
  height: '32px',
}));

export const StyledName = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  color: theme.palette.common.black,
  maxWidth: '550px',
}));

export const StyledHR = styled('hr')(({ theme }) => ({
  marginLeft: '7%',
  marginRight: '7%',
  marginTop: '70px',
  color: theme.palette.primary.main,
}));

export const StyledHeadingTwo = styled('h1')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  lineHeight: '72px',
  marginTop: '80px',
  textAlign: 'center',
}));

export const StyledButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '80px',
});

export const StyledPostsContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '80px 0',
  marginTop: '50px',
  marginLeft: '10%',
  marginRight: '10%',

  '@media (max-width:992px)': {
    gridTemplateColumns: '1fr',
  },

  '@media (min-width:992px) and (max-width:1200px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

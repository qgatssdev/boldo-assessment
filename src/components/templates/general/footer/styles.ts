import { styled } from '@mui/material';

export const StyledFooterContainer = styled('div')({
  marginLeft: '10%',
  marginRight: '10%',
  paddingTop: '10%',
  paddingBottom: '5%',
});

export const StyledFooterBox = styled('div')(({ theme }) => ({
  width: '100%',
  height: '400px',
  position: 'relative',
  background: theme.palette.primary.main,
  zIndex: 1,
  borderRadius: '12px',
  marginBottom: '15%',
  padding: '5px',
}));

export const StyledEclipse = styled('img')({
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: -1,

  '@media (max-width:768px)': {
    display: 'none',
  },
});

export const StyledHeader = styled('h1')(({ theme }) => ({
  fontSize: '48px',
  fontWeight: '400px',
  lineHeight: '72px',
  fontFamily: theme.typography.manrope.fontFamily,
  maxWidth: '716px',
  margin: '0 auto',
  textAlign: 'center',
  color: theme.palette.common.white,
  paddingTop: '100px',

  '@media (max-width:576px)': {
    fontSize: '18px',
    lineHeight: '22px',
  },

  '@media (min-width:576px) and (max-width:992px)': {
    fontSize: '28px',
    lineHeight: '42px',
  },
}));

export const StyledInputContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  paddingTop: '40px',

  '@media (max-width:576px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const StyledInput = styled('input')(({ theme }) => ({
  width: '370px',
  border: `2px solid ${theme.palette.common.white}`,
  background: theme.palette.common.white,
  borderRadius: '370px',
  paddingLeft: '30px',
  fontSize: '20px',
  color: theme.palette.common.black,

  '&:focus': {
    outline: 'none',
  },

  '@media (max-width:768px)': {
    width: '270px',
    fontSize: '12px',
    height: '40px',
  },
}));

export const StyledButton = styled('button')(({ theme }) => ({
  border: `2px solid ${theme.palette.secondary.main}`,
  background: theme.palette.secondary.main,
  borderRadius: '56px',
  padding: '16px 56px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontSize: '20px',
  cursor: 'pointer',

  '@media (max-width:768px)': {
    width: '130px',
    fontSize: '12px',
    height: '40px',
    padding: '10px 36px',
  },
}));

export const StyledListContainer = styled('div')({
  display: 'flex',
  gap: '200px',

  '@media (max-width:992px)': {
    flexDirection: 'column-reverse',
    gap: '50px',
  },

  '@media (min-width: 992px and max-width:1200px)': {
    gap: '50px',
  },
});

export const StyledSectionOne = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
});

export const StyledValues = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '400px',
  lineHeight: '28px',
  fontFamily: theme.typography.openSans.fontFamily,
  maxWidth: '300px',
  color: theme.palette.primary.light,

  '@media (max-width:576px)': {
    fontSize: '12px',
  },
}));

export const StyledRightsReserved = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '400px',
  lineHeight: '28px',
  fontFamily: theme.typography.openSans.fontFamily,
  color: theme.palette.primary.light,
  marginTop: '20px',

  '@media (max-width:576px)': {
    fontSize: '12px',
  },
}));

export const StyledSectionTwo = styled('div')({
  display: 'flex',
  gap: '150px',

  '@media (max-width:992px)': {
    gap: '50px',
  },

  '@media (min-width: 992px and max-width:1200px)': {
    gap: '70px',
  },
});

export const StyledlistHeader = styled('p')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '700px',
  fontFamily: theme.typography.openSans.fontFamily,

  '@media (max-width:992px)': {
    fontSize: '14px',
  },
}));

export const StyledUl = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  cursor: 'pointer',

  '@media (max-width:992px)': {
    gap: '22px',
  },
});

export const StyledLi = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  fontSize: '16px',
  fontWeight: '400px',
  fontFamily: theme.typography.openSans.fontFamily,
  color: theme.palette.primary.light,
  position: 'relative',

  '@media (max-width:992px)': {
    fontSize: '12px',
  },
}));

export const StyledHiring = styled('div')(({ theme }) => ({
  width: '72px',
  height: '30px',
  borderRadius: '120px',
  background: theme.palette.secondary.main,
  textAlign: 'center',
  paddingTop: '6px',
  color: theme.palette.common.black,
  fontSize: '13px',
  fontWeight: '700px',
  position: 'absolute',
  top: -3,
  left: '70px',

  '@media (max-width:992px)': {
    left: '50px',
    fontSize: '10px',
    width: '52px',
    height: '20px',
    paddingTop: '3px',
  },
}));

import { styled } from '@mui/material';

type Props = {
  active: boolean;
};

export const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingLeft: '10%',
  paddingRight: '10%',
  marginTop: '250px',
  paddingBottom: '100px',
  paddingTop: '60px',
}));

export const StyledFlexContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',

  '@media (max-width: 992px)': {
    flexDirection: 'column',
    gap: '20px',
  },
});

export const StyledHeading = styled('p')(({ theme }) => ({
  fontSize: '48px',
  fontWeight: '400',
  fontFamily: theme.typography.manrope.fontFamily,
  lineHeight: '72px',
  maxWidth: '716px',
  color: theme.palette.common.white,

  '@media (max-width: 576px)': {
    fontSize: '28px',
    lineHeight: '32px',
  },
}));

export const StyledButtonContainer = styled('div')(() => ({
  display: 'flex',
  gap: '10px',
}));

export const StyledCardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  marginTop: '50px',

  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const StyledCard = styled('div', {
  shouldForwardProp: (prop) => prop !== 'active',
})<Props>(({ theme, active }) => ({
  padding: '40px',
  background: theme.palette.common.white,
  boxShadow: '0px 12px 32px 0px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  borderRadius: '12px',
  height: active ? '350px' : '310px',
  transition: 'transform 0.3s ease-in-out',
  maxWidth: '350px',
}));

export const StyledCardText = styled('p')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: '400',
  fontFamily: theme.typography.openSans.fontFamily,
  lineHeight: '36px',
  maxWidth: '270px',

  '@media (max-width: 576px)': {
    fontSize: '18px',
    lineHeight: '32px',
  },
}));

export const StyledCardFooterContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '10px',
}));

export const StyledFooterWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

export const StyledCardAvatar = styled('img')(({ theme }) => ({
  width: '56px',
  height: '56px',
}));

export const StyledCardName = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  fontFamily: theme.typography.openSans.fontFamily,
  color: theme.palette.primary.main,
}));

export const StyledCardTitle = styled('p')(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '400',
  fontFamily: theme.typography.openSans.fontFamily,
  color: theme.palette.primary.main,
}));

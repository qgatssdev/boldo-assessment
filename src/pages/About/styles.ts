import { styled } from '@mui/material';

export const StyledHeaderContainer = styled('div')({
  background: '#65E4A3',
  paddingBottom: '100px',
});

export const StyledWrapper = styled('div')({
  marginLeft: '7%',
  marginRight: '7%',
});

export const StyledAboutTitle = styled('p')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  lineHeight: '32px',
  color: theme.palette.primary.main,
  marginTop: '100px',
}));

export const StyledTextsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '50px',
  },
});

export const StyledTextOne = styled('p')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  lineHeight: '72px',
  color: theme.palette.common.black,
  maxWidth: '600px',
  marginRight: '5px',

  '@media (min-width: 768px) and (max-width: 992px)': {
    fontSize: '28px',
    lineHeight: '42px',
  },

  '@media (min-width: 992px) and (max-width: 1200px)': {
    fontSize: '38px',
    lineHeight: '52px',
  },
}));

export const StyledTextTwo = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  lineHeight: '28px',
  color: theme.palette.primary.main,
  maxWidth: '455px',
  marginLeft: '5px',

  '@media (max-width: 1200px)': {
    fontSize: '14px',
    lineHeight: '220x',
  },
}));

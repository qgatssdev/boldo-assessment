import { styled } from '@mui/material';

export const StyledOTContainer = styled('div')({
  paddingTop: '100px',
  paddingBottom: '100px',
});

export const StyledTextsContainer = styled('div')({
  marginLeft: '15%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const StyledTextHeading = styled('h1')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  color: theme.palette.primary.light,
}));

export const StyledSubtitle = styled('p')(({ theme }) => ({
  fontSize: '48px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
}));

export const StyledInfo = styled('p')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  color: theme.palette.primary.light,
  lineHeight: '32px',
  maxWidth: '800px',
}));

export const StyledGMContainer = styled('div')({
  marginLeft: '10%',
  marginRight: '10%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '60px',

  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
});

export const StyledGMItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const StyledGMImage = styled('img')({
  width: '250px',
  height: '250px',
});

export const StyledName = styled('p')(({ theme }) => ({
  fontSize: '28px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
}));

export const StyledTitle = styled('p')(({ theme }) => ({
  fontSize: '20px',
  fontFamily: theme.typography.openSans.fontFamily,
  fontWeight: 400,
  color: theme.palette.primary.light,
}));

export const StyledMContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  marginLeft: '10%',
  marginRight: '10%',
  gap: '46px 10px',
  marginTop: '80px',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});

export const StyledMImage = styled('img')({
  width: '120px',
  height: '120px',
});

export const StyledMItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

export const StyledInfosContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

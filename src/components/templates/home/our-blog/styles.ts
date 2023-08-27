import { styled } from '@mui/material';

export const StyledBlogContainer = styled('div')({
  paddingTop: '10%',
});

export const StyledImageHero = styled('img')({
  maxHeight: '403px',
  width: '80%',
  height: '100%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const StyledWrapper = styled('div')({
  marginTop: '50px',
  display: 'flex',
  marginLeft: '10%',
  marginRight: '10%',
  justifyContent: 'space-between',

  '@media (max-width:1200px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',
  },
});

export const StyledParagraph = styled('p')(({ theme }) => ({
  fontSize: '36px',
  lineHeight: '56px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  maxWidth: '500px',

  '@media (max-width:576px)': {
    fontSize: '24px',
    lineHeight: '42px',
  },

  '@media (max-width:1200px)': {
    textAlign: 'center',
  },
}));

export const StyledOurBlogContainer = styled('div')({
  marginTop: '200px',
  width: '100%',
});

export const StyledBlogHeading = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '32px',
  textAlign: 'center',
}));

export const StyledBlogSubtitle = styled('p')(({ theme }) => ({
  fontFamily: theme.typography.manrope.fontFamily,
  fontSize: '48px',
  fontWeight: 400,
  lineHeight: '72px',
  maxWidth: '842px',
  margin: '0 auto',
  textAlign: 'center',

  '@media (max-width:576px)': {
    fontSize: '24px',
    lineHeight: '42px',
  },
}));

export const StyledAccordionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});

export const StyledBlogPostsContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '80px 0',
  marginTop: '80px',
  marginLeft: '10%',
  marginRight: '10%',

  '@media (max-width:992px)': {
    gridTemplateColumns: '1fr',
  },

  '@media (min-width:992px) and (max-width:1200px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

export const StyledButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '80px',
});

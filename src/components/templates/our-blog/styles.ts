import { styled } from '@mui/material';
import { textAlign, width } from '@mui/system';

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
});

export const StyledParagraph = styled('div')(({ theme }) => ({
  fontSize: '36px',
  lineHeight: '56px',
  fontFamily: theme.typography.manrope.fontFamily,
  fontWeight: 400,
  maxWidth: '500px',
}));

export const StyledOurBlogContainer = styled('div')({
  marginTop: '10%',
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
}));

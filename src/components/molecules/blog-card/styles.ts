import { styled } from '@mui/material';

export const StyledBlogCardWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const StyledBlogCardContainer = styled('div')({
  maxWidth: '300px',
});

export const StyledBlogImage = styled('img')({
  width: '300px',
  height: '209px',
  marginBottom: '24px',
});

export const StyledFlexContainer = styled('div')({
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
});

export const StyledCategoryHeader = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 700,
  fontFamily: theme.typography.openSans.fontFamily,
  color: theme.palette.primary.main,
}));

export const StyledCategoryText = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: theme.typography.openSans.fontFamily,
  color: theme.palette.primary.light,
}));

export const StyledTitle = styled('p')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 400,
  height: '100px',
  fontFamily: theme.typography.openSans.fontFamily,
  lineHeight: '32px',
  marginBottom: '12px',
  marginTop: '12px',
}));

export const StyledAvatar = styled('img')({
  width: '32px',
  height: '32px',
});

export const StyledAuthor = styled('p')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: theme.typography.openSans.fontFamily,
}));

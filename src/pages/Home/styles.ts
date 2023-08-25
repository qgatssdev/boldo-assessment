import { styled } from '@mui/material';

export const StyledContainer = styled('div')({
  position: 'relative',
});

export const StyledHeroContainer = styled('div')({
  position: 'relative',
  height: '100vh',

  '@media (max-width: 992px)': {
    height: '100%',
  },
});

export const StyledEclipse = styled('img')({
  position: 'absolute',
  zIndex: -1,
  top: 0,
  right: 0,
});

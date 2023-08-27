import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledHeaderContainer = styled('div')({
  marginLeft: '7%',
  marginRight: '7%',
  paddingTop: '1%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledContainer = styled('div')({
  overflow: 'hidden',
});

export const StyledZIndexContainer = styled('div')({
  zIndex: 65,
});

export const StyledHeaderSection = styled('section')({
  margin: 0,
  padding: 0,
  backgroundColor: '#fff',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  minHeight: '100vh',
  zIndex: 50,
});

export const StyledListContainer = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'center',
  marginTop: '150px',
});

export const StyledNavlink = styled(NavLink)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontFamily: theme.typography.manrope.fontFamily,
  textDecoration: 'none',

  '&.active': {
    textDecoration: 'underline',
  },
}));

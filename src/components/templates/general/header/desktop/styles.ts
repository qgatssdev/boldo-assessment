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

export const StyledListContainer = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  gap: '30px',
  alignItems: 'center',
});

export const StyledNavlink = styled(NavLink)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontFamily: theme.typography.manrope.fontFamily,
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },

  '&.active': {
    textDecoration: 'underline',
  },
}));

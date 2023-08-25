import { styled } from '@mui/material';

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

export const StyledListItems = styled('li')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontFamily: theme.typography.manrope.fontFamily,
}));

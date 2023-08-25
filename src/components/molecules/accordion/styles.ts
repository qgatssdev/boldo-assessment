import { styled } from '@mui/material';

export const StyledAccordionItem = styled('div')({
  borderBottom: '1px solid #C4C4C4',
  paddingBottom: '10px',
  width: '500px',
  cursor: 'pointer',

  '@media (max-width:576px)': {
    width: '350px',
  },
});

export const StyledAccordionText = styled('p')(({ theme }) => ({
  fontFamily: theme.typography.openSans.fontFamily,
  fontSize: '20px',
  fontWeight: 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media (max-width:576px)': {
    fontSize: '14px',
  },
}));

export const StyledAccordionContent = styled('p')(({ theme }) => ({
  fontFamily: theme.typography.openSans.fontFamily,
  fontSize: '14px',
  fontWeight: 400,
  marginTop: '30px',

  '@media (max-width:576px)': {
    fontSize: '10px',
  },
}));

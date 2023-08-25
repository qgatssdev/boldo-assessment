import { styled } from '@mui/material';

type Props = {
  transparent: boolean;
};

const ButtonConstant = styled('button')(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  textAlign: 'center',
  cursor: 'pointer',
  fontWeight: 700,
  fontFamily: theme.typography.openSans.fontFamily,
}));

export const StyledSmallButton = styled(ButtonConstant, {
  shouldForwardProp: (prop) => prop !== 'transparent',
})<Props>(({ theme, transparent }) => ({
  width: '128px',
  height: '40px',
  borderRadius: '24px',
  background: transparent ? 'none' : theme.palette.primary.main,
  color: transparent ? 'none' : theme.palette.common.white,
  fontSize: '16px',
}));

export const StyledMediumButton = styled(ButtonConstant, {
  shouldForwardProp: (prop) => prop !== 'transparent',
})<Props>(({ theme, transparent }) => ({
  width: '187px',
  height: '60px',
  borderRadius: '56px',
  background: transparent ? 'none' : theme.palette.primary.main,
  color: transparent ? 'none' : theme.palette.common.white,
  fontSize: '20px',
}));

export const StyledLargeButton = styled(ButtonConstant, {
  shouldForwardProp: (prop) => prop !== 'transparent',
})<Props>(({ theme, transparent }) => ({
  width: '247px',
  height: '60px',
  borderRadius: '56px',
  background: transparent ? 'none' : theme.palette.primary.main,
  color: transparent ? 'none' : theme.palette.common.white,
  fontSize: '20px',
}));

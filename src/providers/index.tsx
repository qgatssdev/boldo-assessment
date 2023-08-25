import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

type WithChildren<T = any> = T & {
  children: React.ReactNode | JSX.Element | JSX.Element[];
};

export const AppThemeProvider = ({ children }: WithChildren) => (
  <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

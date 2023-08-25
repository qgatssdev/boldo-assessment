import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    manrope: React.CSSProperties;
    openSans: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    manrope?: React.CSSProperties;
    openSans?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    manrope: true;
    openSans: true;
  }
}

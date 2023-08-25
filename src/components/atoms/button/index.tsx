import {
  StyledSmallButton,
  StyledMediumButton,
  StyledLargeButton,
} from './styles';

enum Sizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

type Size = 'sm' | 'md' | 'lg';

type Props = {
  size: Size;
  label: string;
  transparent?: boolean;
};

const SmallButton = ({ label, transparent = false }: Props) => {
  return (
    <StyledSmallButton transparent={transparent}>{label}</StyledSmallButton>
  );
};

const MediumButton = ({ label, transparent = false }: Props) => {
  return (
    <StyledMediumButton transparent={transparent}>{label}</StyledMediumButton>
  );
};

const LargeButton = ({ label, transparent = false }: Props) => {
  return (
    <StyledLargeButton transparent={transparent}>{label}</StyledLargeButton>
  );
};

export const Button = ({ size, ...rest }: Props) => {
  switch (size) {
    case Sizes.sm:
      return <SmallButton size={size} {...rest} />;
    case Sizes.md:
      return <MediumButton size={size} {...rest} />;
    case Sizes.lg:
      return <LargeButton size={size} {...rest} />;
    default:
      return <SmallButton size={size} {...rest} />;
  }
};

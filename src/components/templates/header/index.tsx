import {
  StyledHeaderContainer,
  StyledListContainer,
  StyledListItems,
} from './styles';
import { BoldoLogo } from '@atoms/icons';
import { Button } from '@atoms/button';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <BoldoLogo />
      <StyledListContainer>
        <StyledListItems>Product</StyledListItems>
        <StyledListItems>Services</StyledListItems>
        <StyledListItems>About</StyledListItems>
        <StyledListItems>
          <Button size={'sm'} label='Log in' transparent />
        </StyledListItems>
      </StyledListContainer>
    </StyledHeaderContainer>
  );
};

export default Header;

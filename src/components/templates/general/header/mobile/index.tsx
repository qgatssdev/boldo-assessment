import { BoldoLogo } from 'components/atoms/icons';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Button } from 'components/atoms/button';
import { useNavigate } from 'react-router-dom';
import {
  StyledContainer,
  StyledZIndexContainer,
  StyledHeaderContainer,
  StyledHeaderSection,
  StyledListContainer,
  StyledNavlink,
} from './styles';

const MobileHeader = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const toggled = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledZIndexContainer>
          <BoldoLogo fontSize={30} onClick={() => navigate('/')} />
        </StyledZIndexContainer>
        <StyledZIndexContainer>
          <Hamburger color='#0A2640' duration={0.8} onToggle={toggled} />
        </StyledZIndexContainer>
      </StyledHeaderContainer>
      {isOpen && (
        <StyledHeaderSection>
          <StyledListContainer>
            <StyledNavlink to={'/'}>Product</StyledNavlink>
            <StyledNavlink to={'/blog'}>Blog</StyledNavlink>
            <StyledNavlink to='/about'>About</StyledNavlink>
            <StyledNavlink to={''}>
              <Button size='sm' label='Log in' />
            </StyledNavlink>
          </StyledListContainer>
        </StyledHeaderSection>
      )}
    </StyledContainer>
  );
};

export default MobileHeader;

import {
  StyledHeaderContainer,
  StyledListContainer,
  StyledNavlink,
} from './styles';
import { BoldoLogo } from 'components/atoms/icons';
import { Button } from 'components/atoms/button';
import { useNavigate } from 'react-router-dom';

const DesktopHeader = () => {
  const navigate = useNavigate()

  return (
    <StyledHeaderContainer>
      <BoldoLogo onClick={() => navigate('/')} />
      <StyledListContainer>
        <StyledNavlink to={'/'}>Product</StyledNavlink>
        <StyledNavlink to={'/blog'}>Blog</StyledNavlink>
        <StyledNavlink to={'/about'}>About</StyledNavlink>
        <StyledNavlink to='/'>
          <Button size={'sm'} label='Log in' transparent />
        </StyledNavlink>
      </StyledListContainer>
    </StyledHeaderContainer>
  );
};

export default DesktopHeader;

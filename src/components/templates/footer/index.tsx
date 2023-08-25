import { BoldoLogo } from '@atoms/icons';
import {
  StyledButton,
  StyledEclipse,
  StyledFooterBox,
  StyledFooterContainer,
  StyledHeader,
  StyledHiring,
  StyledInput,
  StyledInputContainer,
  StyledLi,
  StyledListContainer,
  StyledlistHeader,
  StyledRightsReserved,
  StyledSectionOne,
  StyledSectionTwo,
  StyledUl,
  StyledValues,
} from './styles';

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterBox>
        <StyledHeader>
          An enterprise template to ramp up your company website
        </StyledHeader>
        <StyledInputContainer>
          <StyledInput placeholder='Your email address' />
          <StyledButton>Start now</StyledButton>
        </StyledInputContainer>
        <StyledEclipse
          src={require('../../../assets/eclipse.svg').default}
          alt='eclipse'
        />
      </StyledFooterBox>
      <StyledListContainer>
        <StyledSectionOne>
          <BoldoLogo fontSize={36} />
          <StyledValues>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </StyledValues>
          <StyledRightsReserved>All rights reserved</StyledRightsReserved>
        </StyledSectionOne>
        <StyledSectionTwo>
          <StyledUl>
            <StyledlistHeader>Landings</StyledlistHeader>
            <StyledLi>Home</StyledLi>
            <StyledLi>Products</StyledLi>
            <StyledLi>Services</StyledLi>
          </StyledUl>
          <StyledUl>
            <StyledlistHeader>Company</StyledlistHeader>
            <StyledLi>Home</StyledLi>
            <StyledLi>Careers
                <StyledHiring>Hiring!</StyledHiring>
            </StyledLi>
            <StyledLi>Services</StyledLi>
          </StyledUl>
          <StyledUl>
            <StyledlistHeader>Resources</StyledlistHeader>
            <StyledLi>Blog</StyledLi>
            <StyledLi>Products</StyledLi>
            <StyledLi>Services</StyledLi>
          </StyledUl>
        </StyledSectionTwo>
      </StyledListContainer>
    </StyledFooterContainer>
  );
};

export default Footer;

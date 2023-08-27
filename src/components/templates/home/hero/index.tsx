import { Button } from 'components/atoms/button';
import Marquee from 'react-fast-marquee';
import { BoldoLogo } from 'components/atoms/icons';
import { PrestoLogo } from 'components/atoms/icons';
import { useMediaQuery } from 'react-responsive';
import {
  StyledContainer,
  StyledContainerOne,
  StyledHeading,
  StyledSubtitle,
  StyledButtonContainer,
  StyledContainerTwo,
  StyledImageOne,
  StyledBottomContainer,
  StyledImageTwo,
  StyledImageThree,
  StyledMarqueeContainer,
  StyledMarqueeWrapper,
  StyledMarquee,
} from './styles';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  const logos = [
    { id: 1, logo: <BoldoLogo fontSize={36} /> },
    { id: 2, logo: <PrestoLogo fontSize={36} /> },
    { id: 3, logo: <BoldoLogo fontSize={36} /> },
    { id: 4, logo: <PrestoLogo fontSize={36} /> },
    { id: 5, logo: <BoldoLogo fontSize={36} /> },
    { id: 6, logo: <PrestoLogo fontSize={36} /> },
    { id: 7, logo: <BoldoLogo fontSize={36} /> },
  ];

  return (
    <div>
      <StyledContainer>
        <StyledContainerOne>
          <StyledHeading data-animation='header'>
            Save time by building fast with Boldo Template
          </StyledHeading>
          <StyledSubtitle data-animation='header'>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </StyledSubtitle>
          <StyledButtonContainer>
            <Button label='Buy Template' size={isMobile ? 'sm' : 'lg'} />
            <Button label='Explore' size={isMobile ? 'sm' : 'md'} transparent />
          </StyledButtonContainer>
        </StyledContainerOne>
        <StyledContainerTwo>
          <StyledImageOne src={require('assets/Frame 219.png')} alt='' />
          <StyledBottomContainer>
            <StyledImageTwo src={require('assets/Group 299.png')} alt='' />
            <StyledImageThree src={require('assets/Group 264.png')} alt='' />
          </StyledBottomContainer>
        </StyledContainerTwo>
      </StyledContainer>
      <StyledMarqueeContainer>
        <Marquee>
          <StyledMarqueeWrapper>
            {logos.map((logo, id) => (
              <StyledMarquee key={id}>{logo.logo}</StyledMarquee>
            ))}
          </StyledMarqueeWrapper>
        </Marquee>
      </StyledMarqueeContainer>
    </div>
  );
};

export default Hero;

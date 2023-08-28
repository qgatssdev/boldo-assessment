import { sliderData } from 'mockdata/slider';
import {
  StyledButtonContainer,
  StyledCard,
  StyledCardAvatar,
  StyledCardContainer,
  StyledCardFooterContainer,
  StyledCardName,
  StyledCardText,
  StyledCardTitle,
  StyledContainer,
  StyledFlexContainer,
  StyledFooterWrapper,
  StyledHeading,
} from './styles';

const Slider = () => {
  return (
    <StyledContainer>
      <StyledFlexContainer>
        <StyledHeading>
          An enterprise template to ramp up your company website
        </StyledHeading>
        <StyledButtonContainer>
          <img
            src={require('assets/rowleft.svg').default}
            alt=''
          />
          <img
            src={require('assets/rowright.svg').default}
            alt=''
          />
        </StyledButtonContainer>
      </StyledFlexContainer>
      <StyledCardContainer>
        {sliderData.map((slider) => (
          <StyledCard active={slider.id === 2} key={slider.id}>
            <StyledCardText>{slider.text}</StyledCardText>
            <StyledCardFooterContainer>
              <StyledCardAvatar src={slider.image} alt='' />
              <StyledFooterWrapper>
                <StyledCardName>{slider.name}</StyledCardName>
                <StyledCardTitle>{slider.title}</StyledCardTitle>
              </StyledFooterWrapper>
            </StyledCardFooterContainer>
          </StyledCard>
        ))}
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default Slider;

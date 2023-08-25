import { RightArrow } from '@atoms/icons';
import { serviceMock } from './service-mock';
import {
  StyledServiceContainer,
  StyledHeader,
  StyledTitle,
  StyledServiceMockContainer,
  StyledImage,
  StyledServiceWrapper,
  StyledText,
  StyledLink,
} from './styles';

const Services = () => {
  return (
    <StyledServiceContainer>
      <StyledHeader>Our services</StyledHeader>
      <StyledTitle>
        Handshake infographic mass market crowdfunding iteration.
      </StyledTitle>
      <StyledServiceMockContainer>
        {serviceMock.map((service, id) => (
          <StyledServiceWrapper key={id}>
            <StyledImage src={service.image} alt={service.title} />
            <StyledText>{service.title}</StyledText>
            <StyledLink>
              Explore page
              <span>
                <RightArrow />
              </span>
            </StyledLink>
          </StyledServiceWrapper>
        ))}
      </StyledServiceMockContainer>
    </StyledServiceContainer>
  );
};

export default Services;

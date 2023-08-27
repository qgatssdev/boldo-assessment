import { RightArrow } from 'components/atoms/icons';
import { serviceMock } from '../../../../mockdata/service-mock';
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
      <StyledHeader data-animation='header'>Our services</StyledHeader>
      <StyledTitle data-animation='header'>
        Handshake infographic mass market crowdfunding iteration.
      </StyledTitle>
      <StyledServiceMockContainer>
        {serviceMock.map((service, id) => (
          <StyledServiceWrapper key={id}>
            <StyledImage src={service.image} alt={service.title} />
            <StyledText data-animation='paragraph'>{service.title}</StyledText>
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

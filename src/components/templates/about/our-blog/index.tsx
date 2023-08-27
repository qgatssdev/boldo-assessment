import {
  StyledContainer,
  StyledHeading,
  StyledSub,
  StyledHR,
  StyledClaimWrapper,
  StyledClaimContainer,
  StyledClaim,
  StyledClaimText,
  StyledClaimSpan,
} from './styles';

const OurBlog = () => {
  return (
    <StyledContainer>
      <StyledHeading>Our Blog</StyledHeading>
      <StyledSub data-animation='header'>
        Value proposition accelerator product management venture
      </StyledSub>
      <StyledHR />
      <StyledClaimWrapper>
        <StyledClaimContainer>
          <StyledClaim>
            We are <StyledClaimSpan>commited</StyledClaimSpan>
          </StyledClaim>
          <StyledClaimText>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration.{' '}
          </StyledClaimText>
        </StyledClaimContainer>
        <StyledClaimContainer>
          <StyledClaim>
            We are <StyledClaimSpan>responsible.</StyledClaimSpan>
          </StyledClaim>
          <StyledClaimText>
            Mass market iPhone buzz conversion analytics stock iteration
            responsive web design user experience business plan handshake.
            Return on investment seed round MVP backing supply chain.{' '}
          </StyledClaimText>
        </StyledClaimContainer>
        <StyledClaimContainer>
          <StyledClaim>
            We aim for <StyledClaimSpan>progress.</StyledClaimSpan>
          </StyledClaim>
          <StyledClaimText>
            Bootstrapping rockstar first mover advantage business model canvas
            alpha deployment launch party beta facebook metrics gamification
            growth hacking customer focus.{' '}
          </StyledClaimText>
        </StyledClaimContainer>
      </StyledClaimWrapper>
    </StyledContainer>
  );
};

export default OurBlog;

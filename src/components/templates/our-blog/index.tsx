import {
  StyledBlogContainer,
  StyledImageHero,
  StyledWrapper,
  StyledParagraph,
  StyledOurBlogContainer,
  StyledBlogHeading,
  StyledBlogSubtitle,
} from './styles';

const OurBlog = () => {
  return (
    <StyledBlogContainer>
      <StyledImageHero src={require('@assets/office.png')} alt='office' />
      <StyledWrapper>
        <StyledParagraph>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </StyledParagraph>
        <div></div>
      </StyledWrapper>
      <StyledOurBlogContainer>
        <StyledBlogHeading>Our Blog</StyledBlogHeading>
        <StyledBlogSubtitle>
          Value proposition accelerator product management venture
        </StyledBlogSubtitle>
      </StyledOurBlogContainer>
    </StyledBlogContainer>
  );
};

export default OurBlog;

import Header from '@templates/general/header';
import Footer from '@templates/general/footer';
import OurNumbers from '@templates/about/our-numbers';
import OurStory from '@templates/about/our-story';
import OurTeam from '@templates/about/our-team';
import OurBlog from '@templates/about/our-blog';
import {
  StyledAboutTitle,
  StyledHeaderContainer,
  StyledTextOne,
  StyledTextsContainer,
  StyledTextTwo,
  StyledWrapper,
} from './styles';

const About = () => {
  return (
    <div>
      <StyledHeaderContainer>
        <Header />
        <StyledWrapper>
          <StyledAboutTitle>About</StyledAboutTitle>
          <StyledTextsContainer>
            <StyledTextOne>
              We love to make great things, things that matter.
            </StyledTextOne>
            <StyledTextTwo>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </StyledTextTwo>
          </StyledTextsContainer>
        </StyledWrapper>
      </StyledHeaderContainer>
      <OurNumbers />
      <OurStory />
      <OurTeam />
      <OurBlog />
      <Footer />
    </div>
  );
};

export default About;

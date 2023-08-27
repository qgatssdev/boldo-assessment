import Header from 'components/templates/general/header';
import Footer from 'components/templates/general/footer';
import OurNumbers from 'components/templates/about/our-numbers';
import OurStory from 'components/templates/about/our-story';
import OurTeam from 'components/templates/about/our-team';
import OurBlog from 'components/templates/about/our-blog';
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

import Header from '@templates/general/header';
import Hero from '@templates/home/hero';
import Metrics from '@templates/home/metrics';
import Services from '@templates/home/services';
import OurBlog from '@templates/home/our-blog';
import Footer from '@templates/general/footer';
import scroll from '@animations/scroll';
import {
  StyledContainer,
  StyledEclipse,
  StyledHeroContainer,
} from './styles';
scroll();

const Home = () => {
  return (
    <StyledContainer>
      <StyledEclipse src={require('@assets/Ellipse 9.svg').default} alt='eclipse' />
      <StyledHeroContainer>
        <Header />
        <Hero />
      </StyledHeroContainer>
      <Services />
      <Metrics />
      <OurBlog />
      <Footer />
    </StyledContainer>
  );
};

export default Home;

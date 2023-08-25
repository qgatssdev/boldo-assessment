import Header from '@templates/header';
import Hero from '@templates/hero';
import Metrics from '@templates/metrics';
import Services from '@templates/services';
import OurBlog from '@templates/our-blog';
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
    </StyledContainer>
  );
};

export default Home;

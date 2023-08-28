import { useEffect } from 'react';
import { split } from 'animations/text';
import Header from 'components/templates/general/header';
import Hero from 'components/templates/home/hero';
import Metrics from 'components/templates/home/metrics';
import Services from 'components/templates/home/services';
import OurBlog from 'components/templates/home/our-blog';
import Footer from 'components/templates/general/footer';
import Slider from 'components/templates/home/slider';
import { StyledContainer, StyledEclipse, StyledHeroContainer } from './styles';

const Home = () => {
  useEffect(() => {
    split();
    document.title = 'Home | Save time by building fast with Boldo Template';
  });

  return (
    <StyledContainer>
      <StyledEclipse
        src={require('assets/Ellipse 9.svg').default}
        alt='eclipse'
      />
      <StyledHeroContainer>
        <Header />
        <Hero />
      </StyledHeroContainer>
      <Services />
      <Metrics />
      <Slider />
      <OurBlog />
      <Footer />
    </StyledContainer>
  );
};

export default Home;

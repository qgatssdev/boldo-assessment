import { useEffect } from 'react';
import { split } from 'animations/text';
import Header from 'components/templates/general/header';
import Hero from 'components/templates/home/hero';
import Metrics from 'components/templates/home/metrics';
import Services from 'components/templates/home/services';
import OurBlog from 'components/templates/home/our-blog';
import Footer from 'components/templates/general/footer';
import { StyledContainer, StyledEclipse, StyledHeroContainer } from './styles';

const Home = () => {
  useEffect(() => {
    split();
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
      <OurBlog />
      <Footer />
    </StyledContainer>
  );
};

export default Home;

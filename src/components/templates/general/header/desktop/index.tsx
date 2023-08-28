import { useEffect, useRef } from 'react';
import { BoldoLogo } from 'components/atoms/icons';
import gsap from 'gsap';
import { Button } from 'components/atoms/button';
import { useNavigate } from 'react-router-dom';
import {
  StyledHeaderContainer,
  StyledListContainer,
  StyledNavlink,
} from './styles';
import { setHoverAnimation } from 'animations/general';

const DesktopHeader = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const aboutRef = useRef<HTMLAnchorElement | null>(null);
  const blogRef = useRef<HTMLAnchorElement | null>(null);
  const productRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const aboutCleanup = setHoverAnimation(aboutRef.current);
      const blogCleanup = setHoverAnimation(blogRef.current);
      const productCleanup = setHoverAnimation(productRef.current);

      return () => {
        aboutCleanup();
        blogCleanup();
        productCleanup();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [aboutRef, blogRef, productRef]);

  return (
    <StyledHeaderContainer ref={containerRef}>
      <BoldoLogo onClick={() => navigate('/')} />
      <StyledListContainer>
        <StyledNavlink to={'/'} ref={productRef}>
          Product
        </StyledNavlink>
        <StyledNavlink to={'/blog'} ref={blogRef}>
          Blog
        </StyledNavlink>
        <StyledNavlink to={'/about'} ref={aboutRef}>
          About
        </StyledNavlink>
        <StyledNavlink to='/'>
          <Button size={'sm'} label='Log in' transparent />
        </StyledNavlink>
      </StyledListContainer>
    </StyledHeaderContainer>
  );
};

export default DesktopHeader;

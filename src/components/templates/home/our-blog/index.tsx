import Accordion from 'components/molecules/accordion';
import BlogCard from 'components/molecules/blog-card';
import { Button } from 'components/atoms/button';
import { blogPosts, BlogPostsProps } from 'mockdata/blogposts';
import { AccordionData, accordionData } from 'mockdata/accordionData';
import {
  StyledBlogContainer,
  StyledImageHero,
  StyledWrapper,
  StyledParagraph,
  StyledOurBlogContainer,
  StyledBlogHeading,
  StyledBlogSubtitle,
  StyledAccordionContainer,
  StyledBlogPostsContainer,
  StyledButtonContainer,
} from './styles';

const OurBlog = () => {
  return (
    <StyledBlogContainer>
      <StyledImageHero src={require('assets/office.png')} alt='office' />
      <StyledWrapper>
        <StyledParagraph data-animation='paragraph'>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </StyledParagraph>
        <StyledAccordionContainer>
          {accordionData.map(({ title, content, id }: AccordionData) => (
            <Accordion key={id} title={title} content={content} />
          ))}
        </StyledAccordionContainer>
      </StyledWrapper>
      <StyledOurBlogContainer>
        <StyledBlogHeading>Our Blog</StyledBlogHeading>
        <StyledBlogSubtitle data-animation='paragraph'>
          Value proposition accelerator product management venture
        </StyledBlogSubtitle>
        <StyledBlogPostsContainer>
          {blogPosts
            .slice(0, 3)
            .map(
              ({
                id,
                blogImage,
                category,
                title,
                avatar,
                author,
              }: BlogPostsProps) => (
                <BlogCard
                  key={id}
                  blogImage={blogImage}
                  category={category}
                  title={title}
                  avatar={avatar}
                  author={author}
                />
              )
            )}
        </StyledBlogPostsContainer>
        <StyledButtonContainer>
          <Button label='Load more' transparent size='md' />
        </StyledButtonContainer>
      </StyledOurBlogContainer>
    </StyledBlogContainer>
  );
};

export default OurBlog;

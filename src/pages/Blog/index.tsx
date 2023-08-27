import Header from 'components/templates/general/header';
import Footer from 'components/templates/general/footer';
import { Button } from 'components/atoms/button';
import BlogCard from 'components/molecules/blog-card';
import { blogPosts, BlogPostsProps } from 'mockdata/blogposts';
import {
  StyledAvatar,
  StyledButtonContainer,
  StyledCategory,
  StyledContainer,
  StyledDate,
  StyledFlexContainer,
  StyledHeading,
  StyledHeadingTwo,
  StyledHeroImage,
  StyledHR,
  StyledName,
  StyledPostsContainer,
  StyledThoughts,
  StyledTitle,
} from './styles';

const Blog = () => {
  return (
    <div>
      <Header />
      <StyledHeading>Blog</StyledHeading>
      <StyledThoughts>Thoughts and wirds</StyledThoughts>
      <StyledContainer>
        <StyledHeroImage src={require('assets/heroimage.png')} />
        <div>
          <StyledFlexContainer>
            <StyledCategory>Category</StyledCategory>
            <StyledDate>November 22, 2021</StyledDate>
          </StyledFlexContainer>
          <StyledTitle>
            Pitch termsheet backing validation focus release.
          </StyledTitle>
          <StyledFlexContainer>
            <StyledAvatar
              src={require('assets/blogposts/chandler bling.png')}
              alt='chandler'
            />
            <StyledName>Chandler Bing</StyledName>
          </StyledFlexContainer>
        </div>
      </StyledContainer>
      <StyledHR />
      <div>
        <StyledHeadingTwo>Latest news</StyledHeadingTwo>
        <StyledPostsContainer>
          {blogPosts.map(
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
        </StyledPostsContainer>
        <StyledButtonContainer>
          <Button size='md' label='Load more' transparent />
        </StyledButtonContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

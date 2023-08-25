import {
  StyledAvatar,
  StyledBlogCardContainer,
  StyledBlogImage,
  StyledCategoryHeader,
  StyledCategoryText,
  StyledFlexContainer,
  StyledTitle,
  StyledAuthor,
  StyledBlogCardWrapper,
} from './styles';

type Props = {
  blogImage: string;
  category: string;
  title: string;
  avatar: string;
  author: string;
};

const BlogCard = ({blogImage, category, title, avatar, author}: Props) => {
  return (
    <StyledBlogCardWrapper>
      <StyledBlogCardContainer>
        <StyledBlogImage
          src={blogImage}
          alt={title}
        />
        <StyledFlexContainer>
          <StyledCategoryHeader>Category</StyledCategoryHeader>
          <StyledCategoryText>{category}</StyledCategoryText>
        </StyledFlexContainer>
        <StyledTitle>
          {title}
        </StyledTitle>
        <StyledFlexContainer>
          <StyledAvatar
            src={avatar}
            alt=''
          />
          <StyledAuthor>{author}</StyledAuthor>
        </StyledFlexContainer>
      </StyledBlogCardContainer>
    </StyledBlogCardWrapper>
  );
};

export default BlogCard;

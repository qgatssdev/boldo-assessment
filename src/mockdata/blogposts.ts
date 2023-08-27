export type BlogPostsProps = {
  id: number;
  blogImage: string;
  category: string;
  title: string;
  avatar: string;
  author: string;
};

export const blogPosts: BlogPostsProps[] = [
  {
    id: 1,
    blogImage: require('assets/blogposts/officeman.png'),
    category: 'November 22 2021',
    title: 'Pitch termsheet backing validation focus release.',
    avatar: require('assets/blogposts/chandler bling.png'),
    author: 'Chandler Bling',
  },
  {
    id: 2,
    blogImage: require('assets/blogposts/woman on phone.png'),
    category: 'November 22 2021',
    title:
      'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    avatar: require('assets/blogposts/rachel green.png'),
    author: 'Rachel Green',
  },
  {
    id: 3,
    blogImage: require('assets/blogposts/folder man.png'),
    category: 'November 22 2021',
    title:
      'Beta prototype sales iPad gen-z marketing network effects value proposition',
    avatar: require('assets/blogposts/monica geller.png'),
    author: 'Monica Geller',
  },
  {
    id: 4,
    blogImage: require('assets/blogposts/man on phone.png'),
    category: 'November 22 2021',
    title: 'Pitch termsheet backing validation focus release.',
    avatar: require('assets/blogposts/chandler bling.png'),
    author: 'Chandler Bling',
  },
  {
    id: 5,
    blogImage: require('assets/blogposts/office.png'),
    category: 'November 22 2021',
    title:
      'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    avatar: require('assets/blogposts/chandler bling.png'),
    author: 'Rachel Green',
  },
  {
    id: 6,
    blogImage: require('assets/blogposts/agreement.png'),
    category: 'November 22 2021',
    title:
      'Beta prototype sales iPad gen-z marketing network effects value proposition',
    avatar: require('assets/blogposts/monica geller.png'),
    author: 'Monica Geller',
  },
];

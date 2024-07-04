import { Id } from "../../convex/_generated/dataModel";

interface Post {
  _id: Id<"posts">;
  title: string;
  slug: string;
  image: string;
  content: string;
  excerpt: string;
  published: boolean;
  category: string;
  author: string;
  authorId: string;
  authorImageUrl: string;
}

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const truncateExcerpt = (content: string, maxLength: number = 150): string => {
  if (content.length <= maxLength) return content;
  return content.slice(0, maxLength) + '...';
};

export const categorizesPosts = (posts: Post[]): Record<string, Post[]> => {
  return posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, Post[]>);
};

export const sortPostsByDate = (posts: Post[], order: 'asc' | 'desc' = 'desc'): Post[] => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a._id.toString()).getTime();
    const dateB = new Date(b._id.toString()).getTime();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });
};

export const filterPublishedPosts = (posts: Post[]): Post[] => {
  return posts.filter(post => post.published);
};
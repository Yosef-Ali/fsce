// components/PostCard.tsx
import React, { FC } from 'react';
import { Post } from '../types'; // Assuming you have a Post type defined

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div>
      <img className="w-full h-auto rounded mb-5" src={post.image} alt={post.title} />
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        <a href={`/article/${post.slug}`}>{post.title}</a>
      </h2>
      <span className="text-sm text-muted-foreground">
        By {post.author.name}, {post._creationTime}
      </span>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {post.excerpt}
      </p>
      <a href={`/article/${post.slug}`} className="inline-block pt-5 text-sm font-medium tracking-wider">
        Read More...
      </a>
    </div>
  );
};

export default PostCard;
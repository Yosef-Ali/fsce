import React, { FC } from 'react';
import { Post } from '@/types';
import { Id } from '../../convex/_generated/dataModel';

const recentPosts: Post[] = [
  {
    _id: '1' as Id<"posts">,
    title: 'Use Travel To Make Someone Fall In Love With You',
    slug: 'use-travel-to-make-someone-fall-in-love-with-you',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    author: {
      id: '1',
      name: 'Jane Smith'
    },
    _creationTime: 1576368000000,
    updatedAt: 1576368000000,
    content: 'Full content goes here...',
    excerpt: 'Far far away, behind the word mountains, far from the countries...',
    status: 'published',
    category: 'Travel'
  },
  {
    _id: '2' as Id<"posts">,
    title: 'The Hidden Mystery Behind Travel',
    slug: 'the-hidden-mystery-behind-travel',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    author: {
      id: '2',
      name: 'John Doe'
    },
    _creationTime: 1571702400000,
    updatedAt: 1571702400000,
    content: 'Full content goes here...',
    excerpt: 'Far far away, behind the word mountains, far from the countries...',
    status: 'published',
    category: 'Travel'
  },
  {
    _id: '3' as Id<"posts">,
    title: 'Do You Make These Simple Mistakes In Travel?',
    slug: 'do-you-make-these-simple-mistakes-in-travel',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    author: {
      id: '2',
      name: 'John Doe'
    },
    _creationTime: 1570665600000,
    updatedAt: 1570665600000,
    content: 'Full content goes here...',
    excerpt: 'Far far away, behind the word mountains, far from the countries...',
    status: 'published',
    category: 'Travel'
  }
];

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const RecentPosts: FC = () => {
  return (
    <div>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-center mb-5">Recent Posts</h2>
      <ul>
        {recentPosts.map((post) => (
          <li key={post._id} className="">
            <a href={`/article/${post.slug}`} className="flex">
              <div className="w-1/3">
                <img className="rounded" src={post.image} alt={post.title} />
              </div>
              <div className="w-2/3 pl-2">
                <h3 className="text-sm text-muted-foreground mb-2">{post.title}</h3>
                <span className="text-xs text-foreground font-thin block mb-5">{formatDate(post._creationTime)}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
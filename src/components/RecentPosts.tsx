// components/RecentPosts.tsx
import React, { FC } from 'react';
import { Post } from '../types';

const recentPosts: Post[] = [
  {
    title: 'Use Travel To Make Someone Fall In Love With You',
    slug: 'use-travel-to-make-someone-fall-in-love-with-you',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    author: 'Jane Smith',
    date: 'December 15, 2019',
    excerpt: 'Far far away, behind the word mountains, far from the countries...'
  },
  {
    title: 'The Hidden Mystery Behind Travel',
    slug: 'the-hidden-mystery-behind-travel',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    author: 'John Doe',
    date: 'October 22, 2019',
    excerpt: 'Far far away, behind the word mountains, far from the countries...'
  },
  {
    title: 'Do You Make These Simple Mistakes In Travel?',
    slug: 'do-you-make-these-simple-mistakes-in-travel',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
    author: 'John Doe',
    date: 'October 10, 2019',
    excerpt: 'Far far away, behind the word mountains, far from the countries...'
  }
];

const RecentPosts: FC = () => {
  return (
    <div>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-center mb-5">Recent Posts</h2>
      <ul>
        {recentPosts.map((post, index) => (
          <li key={index} className="">
            <a href={`/article/${post.slug}`} className="flex">
              <div className="w-1/3">
                <img className="rounded" src={post.image} alt={post.title} />
              </div>
              <div className="w-2/3 pl-2 ">
                <h3 className="text-sm text-muted-foreground mb-2">{post.title}</h3>
                <span className="text-xs text-foreground font-thin block mb-5">{post.date}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
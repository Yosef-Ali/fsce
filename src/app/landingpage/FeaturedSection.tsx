// components/FeaturedSection.tsx
"use client";
import React, { FC } from 'react';

interface FeaturedSectionProps {
  featuredPosts: {
    title: string;
    slug: string;
    image: string;
    category: string;
    excerpt: string;
  }[];
}

const FeaturedSection: FC<FeaturedSectionProps> = ({ featuredPosts }) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto pt-10 pb-10">
        <ul className="flex flex-wrap -mx-2 overflow-hidden">
          {featuredPosts.map((post, index) => (
            <li
              key={index}
              className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3"
            >
              <a href={`/article/${post.slug}`}>
                <div
                  className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
                  style={{ height: '400px', backgroundImage: `url(${post.image})` }}
                >
                  <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
                  <div className="relative z-20 text-center p-5">
                    <span className="inline-block text-white uppercase text-xs tracking-wide">
                      {post.category}
                    </span>
                    <h2 className="text-white font-semibold font-serif text-xl my-5">
                      {post.title}
                    </h2>
                    <span className="inline-block text-xs text-white font-sans">
                      {post.excerpt}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedSection;
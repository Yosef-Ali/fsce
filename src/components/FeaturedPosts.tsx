
import React, { FC } from 'react';
import PostCard from './PostCard';

const FeaturedPosts: FC = () => {
  const featuredPosts = [

    {
      title: 'How To Make More Travel By Doing Less',
      slug: 'how-to-make-more-travel-by-doing-less',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
      author: 'Page',
      date: 'December 02, 2019',
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast...'
    },
    {
      title: 'Do You Make These Simple Mistakes In Travel?',
      slug: 'do-you-make-these-simple-mistakes-in-travel',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80',
      author: 'John Doe',
      date: 'October 10, 2019',
      excerpt: 'Far far away, behind the word mountains, far from the countries...'
    },
    {
      title: 'Use Travel To Make Someone Fall In Love With You',
      slug: 'use-travel-to-make-someone-fall-in-love-with-you',
      image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80',
      author: 'Jane Smith',
      date: 'December 15, 2019',
      excerpt: 'Far far away, behind the word mountains, far from the countries...'
    }
  ];

  return (
    <div className="mr-2 md:mr-4 ml-2">
      {featuredPosts.map((post, index) => (
        <div key={index} className="pb-10">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedPosts;
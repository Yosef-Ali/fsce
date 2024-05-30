'use client';

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FeaturedPosts from "@/components/FeaturedPosts";
import PostCard from "@/components/PostCard";

interface Post {
  title: string;
  slug: string;
  image: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
}




export default function NewsAndEventsPage() {
  const NewsPosts: Post[] = [
    {
      title: 'FSCE Achieves 91% of Target in Reaching Vulnerable Children and Youth',
      slug: 'fsce-achieves-91-percent-target',
      image: '/images/fsce-achieves-91-percent-target.jpeg',
      category: 'News',
      excerpt: 'FSCE announces the successful achievement of 91% of its target in reaching 29,768 vulnerable children and youth across its core programs in 2023.',
      author: 'John Doe', // Add author
      date: '2023-05-01', // Add date
    },
    {
      title: 'FSCE Reunites Over 1,300 Children with Families',
      slug: 'fsce-reunites-over-1300-children',
      image: '/images/child-reunion.jpeg',
      category: 'News',
      excerpt: 'FSCE has reunited or reintegrated 1,305 children in difficult situations with their families or communities in 2023, ensuring they lead dignified and protected lives.',
      author: 'Jane Smith', // Add author
      date: '2023-04-15', // Add date
    },
    {
      title: 'FSCE to Host Youth Advocacy Training Workshop',
      slug: 'fsce-youth-advocacy-training-workshop',
      image: '/images/youth-advocacy.jpeg',
      category: 'Event',
      excerpt: 'FSCE is organizing a three-day Youth Advocacy Training Workshop in Addis Ababa from June 15-17, 2023, to enhance the capacity of youth for advocacy and agency.',
      author: 'John Doe', // Add author
      date: '2023-06-01', // Add date
    },
    {
      title: 'FSCE Celebrates International Youth Day with Youth-Led Community Interventions',
      slug: 'fsce-international-youth-day',
      image: '/images/youth-community.jpeg',
      category: 'Event',
      excerpt: 'On August 12, 2023, FSCE will mark International Youth Day by showcasing youth-led community interventions across Dire Dawa, Harar, and Jigjiga cities.',
      author: 'Jane Smith', // Add author
      date: '2023-08-01', // Add date
    },
    {
      title: 'FSCE\'s Livelihood Support Empowers Families, Improves Child Protection',
      slug: 'fsce-livelihood-support-empowers-families',
      image: '/images/livelihood-support.jpeg',
      category: 'News',
      excerpt: 'FSCE\'s livelihood improvement interventions have empowered 901 vulnerable women and child- headed families, enabling them to better care for and protect their children.',
      author: 'John Doe', // Add author
      date: '2023-03-15', // Add date
    }
  ];

  return (
    <>

      <div className="mr-2 md:mr-4 ml-2">
        {NewsPosts.map((post, index) => (
          <div key={index} className="pb-10">

            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
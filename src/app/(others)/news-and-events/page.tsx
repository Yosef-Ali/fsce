'use client';

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FeaturedPosts from "@/components/FeaturedPosts";
import PostCard from "@/components/PostCard";
import { Post } from '@/types'; // Adjust this path according to your project structure

export default function NewsAndEventsPage() {
  const NewsPosts: Post[] = [
    {
      _id: '1',
      _creationTime: 1683072000000, // May 1, 2023
      updatedAt: 1685654400000, // June 1, 2023
      title: 'FSCE Achieves 91% of Target in Reaching Vulnerable Children and Youth',
      slug: 'fsce-achieves-91-percent-target',
      image: '/images/fsce-achieves-91-percent-target.jpeg',
      content: 'Full content of the first post',
      excerpt: 'FSCE announces the successful achievement of 91% of its target in reaching 29,768 vulnerable children and youth across its core programs in 2023.',
      status: 'published',
      category: 'News',
      author: {
        id: '1',
        name: 'John Doe',
        imageUrl: '/images/authors/john-doe.jpeg'
      },
    },
    {
      _id: '2',
      _creationTime: 1677619200000, // March 1, 2023
      updatedAt: 1681516800000, // April 15, 2023
      title: 'FSCE Reunites Over 1,300 Children with Families',
      slug: 'fsce-reunites-over-1300-children',
      image: '/images/child-reunion.jpeg',
      content: 'Full content of the second post',
      excerpt: 'FSCE has reunited or reintegrated 1,305 children in difficult situations with their families or communities in 2023, ensuring they lead dignified and protected lives.',
      status: 'published',
      category: 'News',
      author: {
        id: '2',
        name: 'Jane Smith',
        imageUrl: '/images/authors/jane-smith.jpeg'
      },
    },
    {
      _id: '3',
      _creationTime: 1683072000000, // May 1, 2023
      updatedAt: 1685654400000, // June 1, 2023
      title: 'FSCE to Host Youth Advocacy Training Workshop',
      slug: 'fsce-youth-advocacy-training-workshop',
      image: '/images/youth-advocacy.jpeg',
      content: 'Full content of the third post',
      excerpt: 'FSCE is organizing a three-day Youth Advocacy Training Workshop in Addis Ababa from June 15-17, 2023, to enhance the capacity of youth for advocacy and agency.',
      status: 'published',
      category: 'Event',
      author: {
        id: '1',
        name: 'John Doe',
        imageUrl: '/images/authors/john-doe.jpeg'
      },
    },
    {
      _id: '4',
      _creationTime: 1685616000000, // June 1, 2023
      updatedAt: 1690848000000, // August 1, 2023
      title: 'FSCE Celebrates International Youth Day with Youth-Led Community Interventions',
      slug: 'fsce-international-youth-day',
      image: '/images/youth-community.jpeg',
      content: 'Full content of the fourth post',
      excerpt: 'On August 12, 2023, FSCE will mark International Youth Day by showcasing youth-led community interventions across Dire Dawa, Harar, and Jigjiga cities.',
      status: 'published',
      category: 'Event',
      author: {
        id: '2',
        name: 'Jane Smith',
        imageUrl: '/images/authors/jane-smith.jpeg'
      },
    },
    {
      _id: '5',
      _creationTime: 1675209600000, // February 1, 2023
      updatedAt: 1678838400000, // March 15, 2023
      title: 'FSCE\'s Livelihood Support Empowers Families, Improves Child Protection',
      slug: 'fsce-livelihood-support-empowers-families',
      image: '/images/livelihood-support.jpeg',
      content: 'Full content of the fifth post',
      excerpt: 'FSCE\'s livelihood improvement interventions have empowered 901 vulnerable women and child-headed families, enabling them to better care for and protect their children.',
      status: 'published',
      category: 'News',
      author: {
        id: '1',
        name: 'John Doe',
        imageUrl: '/images/authors/john-doe.jpeg'
      },
    }
  ];

  return (
    <div className="mr-2 md:mr-4 ml-2">
      {NewsPosts.map((post, index) => (
        <div key={index} className="pb-10">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}



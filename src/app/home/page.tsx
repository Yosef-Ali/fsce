'use client'
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import FeaturedPosts from "./FeaturedPosts"
import Sidebar from "@/components/Sidebar"
import FeaturedSection from "./FeaturedPosts"
import CarouselSection from "@/components/carousel"
import Partners from "@/components/partners"

const featuredPosts = [
  {
    title: 'FSCE Achieves 91% of Target in Reaching Vulnerable Children and Youth',
    slug: 'fsce-achieves-91-percent-target',
    image: '/images/fsce-achieves-91-percent-target.jpeg',
    category: 'News',
    excerpt: 'FSCE announces the successful achievement of 91% of its target in reaching 29,768 vulnerable children and youth across its core programs in 2023.'
  },
  {
    title: 'FSCE Reunites Over 1,300 Children with Families',
    slug: 'fsce-reunites-over-1300-children',
    image: '/images/Child-reunion.jpeg',
    category: 'News',
    excerpt: 'FSCE has reunited or reintegrated 1,305 children in difficult situations with their families or communities in 2023, ensuring they lead dignified and protected lives.'
  },
  {
    title: 'FSCE to Host Youth Advocacy Training Workshop',
    slug: 'fsce-youth-advocacy-training-workshop',
    image: '/images/youth-advocacy.jpeg',
    category: 'Event',
    excerpt: 'FSCE is organizing a three-day Youth Advocacy Training Workshop in Addis Ababa from June 15-17, 2023, to enhance the capacity of youth for advocacy and agency.'
  },
  {
    title: 'FSCE\'s Livelihood Support Empowers Families, Improves Child Protection',
    slug: 'fsce-livelihood-support-empowers-families',
    image: '/images/old-women-2.webp',
    category: 'News',
    excerpt: 'FSCE\'s livelihood improvement interventions have empowered 901 vulnerable women and child- headed families, enabling them to better care for and protect their children.'
  }
];



export default function HomePosts() {
  //const stars = await getGitHubStars()

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-5xl mx-auto pt-8 pb-8">
          <div className="flex flex-wrap -mx-2 ">
            <CarouselSection />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-10">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full  overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
            {/* Pass the featuredPosts array to the FeaturedPosts component */}
            <FeaturedPosts posts={featuredPosts} />
          </div>
          <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
            <Sidebar />
          </div>
        </div>
        <div className="flex w-full">
          <Partners />
        </div>
      </div>
    </>
  )
}

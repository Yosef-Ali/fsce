'use client'
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import FeaturedPosts from "@/components/FeaturedPosts"
import Sidebar from "@/components/Sidebar"
import FeaturedSection from "./FeaturedSection"

const featuredPosts = [
  {
    title: 'Places to stay in the island on your visit',
    slug: 'places-to-stay-in-the-island',
    image: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    category: 'Hotels',
    excerpt: 'Comfort and views'
  },
  {
    title: 'Diving for Sharks, the best experience in the country',
    slug: 'diving-for-sharks',
    image: 'https://images.unsplash.com/photo-1602199926649-2e5e447bab97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    category: 'Diving',
    excerpt: 'Every day of the week'
  },
  {
    title: 'Take your tastebuds for a ride with these places',
    slug: 'take-your-tastebuds-for-a-ride',
    image: 'https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    category: 'Food',
    excerpt: 'Different cuisine'
  }
];

export default function LandingPage() {
  //const stars = await getGitHubStars()

  return (
    <>
      <FeaturedSection featuredPosts={featuredPosts} />
      <div className="max-w-5xl mx-auto pb-10 pt-10">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
            <FeaturedPosts />
          </div>
          <div className="w-full overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}
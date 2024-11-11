'use client'

import React from 'react'
import { useQuery } from "convex/react"
import { api } from "../../../../../convex/_generated/api"
import { Id } from "../../../../../convex/_generated/dataModel"
import FSCESkeleton from '@/components/FSCESkeleton'
import Partners from '@/components/partners'
import Merits from '@/components/merits'
import Overview from '@/components/Overview'
import CarouselSection from "@/components/carousel"
import { EmptyState } from '@/components/EmptyState'
import { AlertCircle } from "lucide-react"

type Post = {
  _id: Id<"posts">
  _creationTime: number
  title: string
  image?: string
  excerpt?: string
  content?: string
  updatedAt: number
}

type QueryResult = Post[] | null | undefined

export default function Component() {
  const result = useQuery(api.posts.getMerits)

  if (result === undefined) {
    return (
      <div>
        <FSCESkeleton />
      </div>
    )
  }

  if (result === null || result.length === 0) {
    return <div className="text-center py-8">No merits found. Please check your database.</div>
  }

  return (
    <>
      <CarouselSection />
      <Overview
        data={[]}
        title="Merits"  // changed from Title to title
        firstImageAlt="Description of image 1"
        secondImageAlt="Description of image 2"
      />
      {result.length > 0 ? (
        <Merits merits={result.map(post => ({
          _id: post._id,
          title: post.title,
          imageUrl: post.image || '/default-image-url.png',
          description: post.excerpt || post.content || "No description available",
          slug: post.title.toLowerCase().replace(/ /g, '-')
        }))} />
      ) : (
        <EmptyState
          icon={AlertCircle}
          title="No Merit Posts Available Yet"
          messages={[
            "We're currently working on adding our achievements and recognitions.",
            "Please check back soon to see our latest accomplishments!"
          ]}
        />
      )}
      <Partners />
    </>
  )
}
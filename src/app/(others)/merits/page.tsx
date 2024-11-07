'use client'

import React from 'react'
import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"
import { Id } from "../../../../convex/_generated/dataModel"
import FSCESkeleton from '@/components/FSCESkeleton'
import Partners from '@/components/partners'
import Merits from '@/components/merits'
import Overview from '@/components/Overview'
import CarouselSection from "@/components/carousel"
import { Card, CardContent } from "@/components/ui/card"
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
        <p>Loading all merits...</p>
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
        homeTitle="Merits"
        firstImageAlt="Description of image 1"
        secondImageAlt="Description of image 2"
      />
      {result.length > 0 ? (
        <Merits merits={result.map(post => ({
          _id: post._id,
          title: post.title,
          imageUrl: post.image || '/default-image-url.png',
          description: post.excerpt || post.content || "No description available",
        }))} />
      ) : (
        <Card className="w-full max-w-2xl mx-auto my-8">
          <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
            <AlertCircle className="w-12 h-12 text-yellow-500" />
            <h2 className="text-2xl font-semibold text-primary">No Merit Posts Available Yet</h2>
            <p className="text-muted-foreground">
              We're currently working on adding our achievements and recognitions.
            </p>
            <p className="text-muted-foreground">
              Please check back soon to see our latest accomplishments!
            </p>
          </CardContent>
        </Card>
      )}
      <Partners />
    </>
  )
}
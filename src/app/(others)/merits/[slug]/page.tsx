"use client";
import React from 'react';
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import FSCESkeleton from '@/components/FSCESkeleton';
import Partners from '@/components/partners';
import Merits from '@/components/merits';
import Overview from '@/components/Overview';
import CarouselSection from "@/components/carousel";

export default function IndividualMeritPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  console.log("Current slug:", slug); // Debugging log

  const result = useQuery(api.posts.getBySlug, { slug });

  console.log("Query result:", result); // Debugging log

  if (result === undefined) {
    return (
      <div>
        <p>Loading data for merit: {slug}</p>
        <FSCESkeleton />
      </div>
    );
  }

  if (result === null) {
    return <div className="text-center py-8">No content available for merit: {slug}</div>;
  }

  const { category, posts } = result;

  if (!category || !posts || posts.length === 0) {
    return <div className="text-center py-8">No posts available for merit: {category?.title || slug}</div>;
  }

  const mappedMerits = posts.map(post => ({
    ...post,
    imageUrl: post.image || '/default-image-url.png',
    description: post.excerpt || post.content || "No description available",
  }));

  return (
    <>
      <CarouselSection />
      <Overview
        data={posts}
        homeTitle={category.title || "Merit Details"}
        firstImageAlt="Description of image 1"
        secondImageAlt="Description of image 2"
      />
      <Merits merits={mappedMerits} />
      <Partners />
    </>
  );
}
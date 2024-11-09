"use client";
import React from 'react';
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import FSCESkeleton from '@/components/FSCESkeleton';
import Partners from '@/components/partners';
import Merits from '@/components/merits';
import Overview from '@/components/Overview';
import CarouselSection from "@/components/carousel";

export default function MeritPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const meritsData = useQuery(api.posts.getMerits);

  if (meritsData === undefined) {
    return <FSCESkeleton />;
  }

  if (!meritsData || meritsData.length === 0) {
    return <div className="text-center py-8">No merits found</div>;
  }

  // Find the specific merit data based on slug
  const currentMerit = meritsData.find(merit => merit.slug === slug);
  
  // Format data for Overview component
  const overviewData = currentMerit ? [{
    slug: 'overview',
    content: currentMerit.content,
    title: currentMerit.title
  }] : [];

  // Map merits data for the Merits component
  const mappedMerits = meritsData.map(merit => ({
    _id: merit._id.toString(),
    title: merit.title,
    description: merit.excerpt || merit.content,
    imageUrl: merit.image || '/default-merit-image.jpg',
    slug: merit.slug
  }));

  if (!currentMerit) {
    return <div className="text-center py-8">Merit not found: {slug}</div>;
  }

  return (
    <>
      <CarouselSection />
      <Overview
        data={overviewData}
        title={currentMerit.title}
        firstImageAlt={`${currentMerit.title} first image`}
        secondImageAlt={`${currentMerit.title} second image`}
      />
      <Merits merits={mappedMerits} />
      <Partners />
    </>
  );
}
"use client";

import React from 'react';
import { useQuery } from "convex/react";
import Sidebar from "@/components/Sidebar";
import CarouselSection from "@/components/carousel";
import MapComponent from "@/components/ethiopian-map";

import VisionMissionGoals from '@/components/VisionMissionGoals';

import FSCESkeleton from '@/components/FSCESkeleton';
import GoodGovernance from '@/components/good-governance';
import Affiliations from '@/components/affiliations';
import Partners from '@/components/partners';
import { api } from '../../convex/_generated/api';
import MainLayout from '@/components/Layout/MainLayout';
import Overview from '@/components/Overview';

export default function AboutPage() {
  const about = useQuery(api.Posts.getAbout);

  console.log("Client: About data:", about);

  if (about === undefined) {
    return <FSCESkeleton />;
  }

  if (about.length === 0) {
    return <div className="text-center py-8">{`No about content available. Please check the database for posts with category 'about' and status 'published'.`}</div>;
  }

  return (
    <>
      <MainLayout>
        <CarouselSection />
        <Overview data={about} />
        <VisionMissionGoals aboutData={about} />
        <GoodGovernance aboutData={about} />
        <MapComponent />
        <Partners />
      </MainLayout>
    </>
  );
}
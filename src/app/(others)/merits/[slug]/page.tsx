"use client";
import React from 'react';
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import FSCESkeleton from '@/components/FSCESkeleton';

export default function MeritPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const result = useQuery(api.posts.getBySlug, { slug });

  if (result === undefined) {
    return (
      <div>
        <p>Loading merit details...</p>
        <FSCESkeleton />
      </div>
    );
  }

  if (!result) {
    return <div className="text-center py-8">Merit not found: {slug}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{result.title}</h1>
      <div className="prose max-w-none">
        {result.image && (
          <img
            src={result.image}
            alt={result.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: result.content }} />
      </div>
    </div>
  );
}
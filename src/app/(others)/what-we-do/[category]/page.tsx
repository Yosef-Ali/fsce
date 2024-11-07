'use client';
import type { FC } from 'react';
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import FSCESkeleton from "@/components/FSCESkeleton";
import { ErrorBoundary } from 'react-error-boundary';

interface CategoryPageProps {
    params: {
        category: string;
    };
}

const CategoryPage: FC<CategoryPageProps> = ({ params }) => {
    const categoryData = useQuery(api.categories.getBySlug, {
        slug: params.category
    });

    // Early return for loading state
    if (typeof categoryData === 'undefined') {
        return <FSCESkeleton />;
    }

    // Handle not found case
    if (categoryData === null) {
        notFound();
        // Return a fallback UI in case notFound() doesn't redirect
        return <div>Category not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div>
                <h1 className="text-3xl font-bold mb-4">{categoryData.title}</h1>
                <p className="mb-6">{categoryData.description}</p>
            </div>
            {categoryData.posts && categoryData.posts.length > 0 ? (
                <ArticleCard
                    posts={categoryData.posts}
                    title={categoryData.title}
                />
            ) : (
                <p className="text-center text-gray-600">No articles found in this category.</p>
            )}
        </div>
    );
};

export default function WhatWeDoPags(props: CategoryPageProps) {
    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <CategoryPage {...props} />
        </ErrorBoundary>
    );
}
"use client"
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { BreadcrumbNavigation } from "@/components/dashboard/breadcrumb-navigation";
import { PostDetailsForm } from "@/components/dashboard/post-details-form";
import { PostStatusSelect } from "@/components/dashboard/post-status-select";
import { ImageUploader } from "@/components/dashboard/image-uploader";
import { useQuery } from 'convex/react';
import { api } from '../../../../../../convex/_generated/api';

type PostStatus = "draft" | "published" | "archived";

export default function EditPost({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState<PostStatus>('draft');


  const existingPost = useQuery(api.posts.getPostBySlug, { slug: params.slug });

  const handleStatusChange = (newStatus: PostStatus) => {
    setStatus(newStatus);
  };

  const handleImageUrlChange = (url: string) => {
    setImageUrl(url);
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Saving post with slug:', params.slug);
  };

  const handleDraft = () => {
    // Implement draft logic here
    console.log('Saving as draft with slug:', params.slug);
  };

  const formattedPost = existingPost ? {
    title: existingPost.title,
    content: existingPost.content,
    slug: existingPost.slug,
    excerpt: existingPost.excerpt,
    category: existingPost.category,
    image: existingPost.image,
    _id: existingPost._id, // Include this for updating the correct post
  } : undefined;

  console.log('Formatted Post:', formattedPost);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 flex-1 overflow-y-auto pt-14 lg:pt-[60px]">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <BreadcrumbNavigation />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => router.back()}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Edit Post: {params.slug}
              </h1>
              {/* <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm" onClick={handleDraft}>
                  Draft
                </Button>
                <Button size="sm" onClick={handleSave}>Save changes</Button>
              </div> */}
            </div>
            <div className="grid gap-4 lg:grid-cols-3 md:gap-8">
              {/* This div will be full width on small screens and 1/3 width on md and up, appearing first on md+ */}
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-1 lg:order-2">
                <PostStatusSelect initialStatus={status} onStatusChange={handleStatusChange} />
                <ImageUploader imageUrl={imageUrl || formattedPost?.image || ''} />
              </div>

              {/* This div will be full width on small screens and 2/3 width on md and up, appearing second on md+ */}
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:order-1">
                {formattedPost ? (
                  <PostDetailsForm
                    onImageUrlChange={handleImageUrlChange}
                    postStatus={status}
                    post={formattedPost}
                    mode="edit"
                  />
                ) : (
                  <div>Loading post data...</div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm" onClick={() => handleStatusChange('draft')}>
                Draft
              </Button>
              <Button size="sm" onClick={handleSave}>Save Post</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


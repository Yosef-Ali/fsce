"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { BreadcrumbNavigation } from "@/components/dashboard/breadcrumb-navigation";
import { PostDetailsForm } from "@/components/dashboard/post-details-form";
import { PostStatusSelect } from "@/components/dashboard/post-status-select";
import { ImageUploader } from "@/components/dashboard/image-uploader";
import { useToast } from "@/components/ui/use-toast";

type PostStatus = "draft" | "published" | "archived";

export default function AddPost() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState<PostStatus>('draft');
  const { toast } = useToast();

  const handleStatusChange = (newStatus: PostStatus) => {
    setStatus(newStatus);
  };

  const handleImageUrlChange = (url: string) => {
    setImageUrl(url);
  };

  const handleSave = () => {
    toast({
      title: "Saving post...",
      description: "Please wait while we create your post.",
    });
    // This function is now just for showing the toast
    // The actual saving is handled in PostDetailsForm
  };

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
                Add New Post
              </h1>

            </div>
            <div className="grid gap-4 lg:grid-cols-3 md:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-1 lg:order-2">
                <PostStatusSelect initialStatus={status} onStatusChange={handleStatusChange} />
                <ImageUploader imageUrl={imageUrl} />
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:order-1">
                <PostDetailsForm
                  onImageUrlChange={handleImageUrlChange}
                  postStatus={status}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
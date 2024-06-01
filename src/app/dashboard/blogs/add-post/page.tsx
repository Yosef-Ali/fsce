"use client";
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Upload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { useRouter } from "next/navigation"
import { BreadcrumbNavigation } from "@/components/dashboard/breadcrumb-navigation";
import { PostDetailsForm } from "@/components/dashboard/post-details-form";
import { CategorySelect } from "@/components/dashboard/category-select";
import { PostStatusSelect } from "@/components/dashboard/post-status-select";
import { ImageUploader } from "@/components/dashboard/image-uploader";

const categories = [
  { value: "about", label: "About" },
  { value: "programs", label: "Programs" },
  { value: "event", label: "Event" },
  { value: "news", label: "News" },
  { value: "other", label: "Other" },
];

export default function AddPost() {
  const router = useRouter();
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
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Back to Blogs</h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Draft
                </Button>
                <Button size="sm">Save changes</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <PostDetailsForm />
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                    <CardDescription>Choose categories for your blog post.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 w-full">
                      <CategorySelect options={categories} />
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <PostStatusSelect />
                <ImageUploader />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


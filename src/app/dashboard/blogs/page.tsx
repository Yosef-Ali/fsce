"use client";

import React, { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { useRouter } from "next/navigation";
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePlusIcon, FileIcon, ListFilterIcon } from "lucide-react";
import PostTable from '@/components/dashboard/posts-table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const POSTS_PER_PAGE = 5;

export default function Blogs() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"all" | "draft" | "published" | "archived">("all");
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [currentCursor, setCurrentCursor] = useState<Id<"posts"> | undefined>(undefined);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Id<"posts"> | null>(null);

  const queryArgs = {
    status: activeTab !== "all" ? activeTab : undefined,
    category,
    limit: POSTS_PER_PAGE,
    cursor: currentCursor,
  };

  const query = useQuery(api.posts.listPosts, queryArgs);
  const isLoading = query === undefined;
  const { posts, nextCursor } = query || { posts: [], nextCursor: null };

  const deletePost = useMutation(api.posts.deletePost);

  const handleAddPost = () => {
    router.push('/dashboard/blogs/add-post');
  };

  const handleEditPost = (slug: string) => {
    const post = posts.find(p => p.slug === slug);
    if (post) {
      router.push(`/dashboard/blogs/edit-post/${post.slug}`);
    }
  };

  const handleDeletePost = (id: Id<"posts">) => {
    setPostToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeletePost = async () => {
    if (postToDelete) {
      try {
        await deletePost({ id: postToDelete });
        setIsDeleteDialogOpen(false);
        setPostToDelete(null);
      } catch (error) {
        console.error('Failed to delete post:', error);
      }
    }
  };

  const handleNextPage = () => {
    if (nextCursor) {
      setCurrentCursor(nextCursor);
    }
  };

  const handlePreviousPage = () => {
    setCurrentCursor(undefined);
  };

  const renderPostTable = (tabValue: string) => (
    <PostTable
      posts={posts}
      isLoading={isLoading}
      handleEditPost={handleEditPost}
      handleDeletePost={handleDeletePost}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      hasNextPage={!!nextCursor}
      hasPreviousPage={!!currentCursor}
    />
  );

  return (
    <main className="grid flex-1 items-start gap-4 px-4 sm:px-6 py-24 md:gap-8">
      <Tabs defaultValue="all" onValueChange={(value) => {
        setActiveTab(value as "all" | "draft" | "published" | "archived");
        setCurrentCursor(undefined);
      }}>
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger className="hidden sm:flex" value="archived">Archived</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="h-8 gap-1" size="sm" variant="outline">
                  <ListFilterIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={category === undefined} onClick={() => setCategory(undefined)}>
                  All Categories
                </DropdownMenuCheckboxItem>
                {/* Add more category options here */}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="h-8 gap-1" size="sm" variant="outline">
              <FileIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
            </Button>
            <Button className="h-8 gap-1" size="sm" onClick={handleAddPost}>
              <CirclePlusIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Post</span>
            </Button>
          </div>
        </div>
        <TabsContent value="all">{renderPostTable("all")}</TabsContent>
        <TabsContent value="published">{renderPostTable("published")}</TabsContent>
        <TabsContent value="draft">{renderPostTable("draft")}</TabsContent>
        <TabsContent value="archived">{renderPostTable("archived")}</TabsContent>
      </Tabs>
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Post</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this post? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={confirmDeletePost}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
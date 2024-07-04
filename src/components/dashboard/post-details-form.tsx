"use client";

import { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutation, useQuery } from "convex/react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JSONContent } from '@tiptap/core';
import { useRouter } from 'next/navigation'; // Add this import


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import ImageUploader from "./form/image-uploader";
import CategorySelector from "./form/category-selecter";
import NovelEditor, { EditorContent } from "./novel-text-editor";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "Slug must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
  excerpt: z.string().min(2, {
    message: "Excerpt must be at least 2 characters.",
  }),
  image: z.string().optional(),
  category: z.string().min(1, {
    message: "Please select a category.",
  })
});

type FormData = z.infer<typeof formSchema>;

interface PostDetailsFormProps {
  onImageUrlChange: (imageUrl: string) => void;
  post?: FormData & { _id: Id<"posts"> };
  postStatus: "draft" | "published" | "archived";
}

export const PostDetailsForm: React.FC<PostDetailsFormProps> = ({ onImageUrlChange, post, postStatus }) => {
  const [content, setContent] = useState<JSONContent>(
    post?.content ? (typeof post.content === 'string' ? JSON.parse(post.content) : post.content)
      : { type: 'doc', content: [] }
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addPost = useMutation(api.posts.addPost);
  const updatePost = useMutation(api.posts.updatePost);
  const categories = useQuery(api.categories.list) || [];
  const [resetTrigger, setResetTrigger] = useState(0);
  const novelEditorRef = useRef<{ clearContent: () => void } | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      excerpt: post?.excerpt || "",
      image: post?.image || "",
      content: post?.content || "",
      category: post?.category || "",
    },
  });


  useEffect(() => {
    if (categories.length > 0) {
      form.setValue("category", categories[0].title);
    }
  }, [categories, form]);

  const handleImageId = (imageId: string | null) => {
    const imageUrl = imageId ?? "";
    form.setValue("image", imageUrl);
    onImageUrlChange(imageUrl);
  };

  const handleContentChange = (newContent: EditorContent) => {
    let parsedContent: JSONContent;

    if (typeof newContent === 'string') {
      try {
        parsedContent = JSON.parse(newContent);
      } catch (error) {
        console.error('Error parsing content:', error);
        return;
      }
    } else {
      parsedContent = newContent;
    }

    setContent(parsedContent);
    form.setValue("content", JSON.stringify(parsedContent));
  };

  const resetForm = () => {
    form.reset({
      title: "",
      slug: "",
      excerpt: "",
      image: "",
      content: "",
      category: categories[0]?.title || "",
    });

    setContent({ type: 'doc', content: [] });
    onImageUrlChange("");

    if (novelEditorRef.current) {
      novelEditorRef.current.clearContent();
    }
    setResetTrigger(prev => prev + 1);
  };

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    toast({
      title: post ? "Updating post..." : "Creating post...",
      description: `Please wait while we ${post ? 'update' : 'create'} your post.`,
    });

    try {
      let result;
      if (post) {
        result = await updatePost({
          id: post._id,
          ...values,
          status: postStatus,
        });
      } else {
        result = await addPost({
          ...values,
          status: postStatus,
        });
      }

      resetForm();
      router.push('/dashboard/blogs');

      toast({
        title: "Success",
        description: `Post ${post ? 'updated' : 'created'} successfully!`,
        variant: "default",
      });
    } catch (error) {
      console.error(post ? "Error updating post:" : "Error creating post:", error);
      toast({
        title: "Error",
        description: `Failed to ${post ? 'update' : 'create'} post. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { watch } = form;
  const title = watch("title");

  useEffect(() => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    form.setValue("slug", slug);
  }, [title, form]);

  useEffect(() => {
    if (content) {
      const cleanedContent = JSON.stringify(content).replace(/<[^>]*>?/gm, '').replace(/[^\w\s.]/g, '');
      const words = cleanedContent.split(' ');
      let excerpt = words.slice(0, 15).join(' ');
      if (excerpt.charAt(excerpt.length - 1) !== '.') {
        excerpt = excerpt.slice(0, excerpt.lastIndexOf(' '));
      }

      form.setValue("excerpt", excerpt);
    }
  }, [content, form]);

  useEffect(() => {
    if (categories.length > 0 && !form.getValues('category')) {
      form.setValue('category', categories[0].title, { shouldValidate: true, shouldDirty: true });
    }
  }, [categories, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
            <CardDescription>Create a new post</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormDescription>This is your post title.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="Slug" {...field} />
                  </FormControl>
                  <FormDescription>This is your post slug.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <p className="pb-2">Content</p>
              <NovelEditor onContentChange={handleContentChange} content={content} ref={novelEditorRef} />
            </div>
            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Excerpt" {...field} />
                  </FormControl>
                  <FormDescription>This is your post excerpt.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Image</CardTitle>
            <CardDescription className="text-sm text-red">Upload an image (optional)</CardDescription>
          </CardHeader>
          <CardContent>
            <ImageUploader control={form.control} onImageId={handleImageId} resetTrigger={resetTrigger} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Category</CardTitle>
            <CardDescription>Select a category</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <CategorySelector control={form.control} categories={categories} />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <div className="text-right">
          <div className="text-right">
            <Button
              type="submit"
              variant="default"
              style={{ backgroundColor: "#000", color: "#fff" }}
              disabled={isSubmitting || !form.formState.isDirty}
            >
              {isSubmitting ? "Submitting..." : (post ? "Update" : "Submit")}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};



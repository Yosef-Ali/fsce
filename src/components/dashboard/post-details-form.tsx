"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ImageUploader from "./form/image-uploader";
import * as z from "zod";


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
import CategorySelector from "./form/category-selecter";
import NovelEditor from "./novel-text-editor";

//const NovelEditor = dynamic(() => import("./novel-text-editor"), { ssr: false });


const categories = {
  ABOUT: 'about',
  PROGRAMS: 'programs',
  NEWS: 'news',
  EVENTS: 'events',
  OTHERS: 'others',
} as const;

export const formSchema = z.object({
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
  imageUrl: z.string().url({
    message: "Please enter a valid URL.",
  }).optional(),
  category: z.string().min(1, {
    message: "Please select a category.",
  })
});


export const PostDetailsForm = ({ onImageUrlChange: onImageUrlChange }: { onImageUrlChange: (imageUrl: string) => void }) => {
  const [imageId, setImageId] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [content, setContent] = useState<string>();



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      imageUrl: "",
      content: "",
      category: Object.values(categories)[2],
    },
  });

  const handleImageId = (imageId: string | null) => {
    setImageId(imageId);
    form.setValue("imageUrl", imageId ?? "");
    onImageUrlChange(imageId ?? "");
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    console.log("Category value:", values.category);

    // Add a check to see if the form values are empty
    if (Object.values(values).every(value => value === "")) {
      console.log("Form values are empty");
    }
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    // Update the form value for content
    form.setValue("content", newContent);
    console.log("Updated content:", newContent);
    // Log the updated content
  };

  const { watch } = form;
  const title = watch("title");

  // Use useEffect to update the slug field when the title field changes
  useEffect(() => {
    // Convert the title to lowercase and replace spaces with hyphens
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    // Update the slug field
    form.setValue("slug", slug);
  }, [title, form]);

  // Watch the content field for changes



  useEffect(() => {
    // Get the content from the state variable
    const postContent = content;
    console.log("postContent:", postContent);
    // Check if postContent is defined
    if (postContent) {
      // Remove HTML tags and special characters
      const cleanedContent = postContent.replace(/<[^>]*>?/gm, '').replace(/[^\w\s.]/g, '');
      // Split the cleanedContent into words
      const words = cleanedContent.split(' ');
      // Take the first 25 words
      let excerpt = words.slice(0, 25).join(' ');
      // If the last word is not a full word, remove it
      if (excerpt.charAt(excerpt.length - 1) !== '.') {
        excerpt = excerpt.slice(0, excerpt.lastIndexOf(' '));
      }
      // Add an ellipsis to the end of the excerpt
      excerpt += '...';
      // Update the excerpt field
      form.setValue("excerpt", excerpt);
    }
  }, [content]);




  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card >
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
              <CardDescription>create a new post</CardDescription>
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
                    <FormDescription>
                      This is your post title.
                    </FormDescription>
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
                    <FormDescription>
                      This is your post slug.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <p className="pb-2" >Content</p>
                <NovelEditor onContentChange={handleContentChange} />
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
                    <FormDescription>
                      This is your post excerpt.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Image</CardTitle>
              <CardDescription className="text-sm text-red">Upload an image</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUploader control={form.control} onImageId={handleImageId} />
            </CardContent>
          </Card>
          <Card >
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
                    <CategorySelector control={form.control} />
                    <FormDescription>
                      Select a category for your post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          {/* Repeat the above FormField for other fields */}
          <div className="text-right">
            <Button type="submit" variant="default" style={{ backgroundColor: "#000", color: "#fff" }}>Submit</Button>
          </div>
        </form>
      </Form >
    </>
  );
};

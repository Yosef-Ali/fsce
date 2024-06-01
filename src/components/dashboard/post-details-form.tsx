import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const PostDetailsForm = () => {
  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <CardTitle>Post Details</CardTitle>
        <CardDescription>create a new post</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Title</Label>
            <Input id="name" type="text" className="w-full" placeholder="Add title here" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name">Slug</Label>
            <Input id="name" type="text" className="w-full" placeholder="Add slug here" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Contents</Label>
            <Textarea id="content" placeholder="Add content here" className="min-h-60" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Excerpt</Label>
            <Textarea id="excerpt" className="min-h-32" placeholder="Add excerpt here" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
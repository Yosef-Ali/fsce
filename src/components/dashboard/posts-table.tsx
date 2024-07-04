import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { MoreHorizontal } from 'lucide-react';
import { Id } from '../../../convex/_generated/dataModel';
import SkeletonRow from './skeleton-row';
import { formatDate } from '@/util/dateUtils';

interface Post {
  _id: Id<"posts">;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  status: "draft" | "published" | "archived";
  _creationTime: number;
  author: {
    name: string;
  };
}

interface PostTableProps {
  posts?: Post[];
  isLoading: boolean;
  handleEditPost: (slug: string) => void;
  handleDeletePost: (postId: Id<"posts">) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const PostTable: React.FC<PostTableProps> = ({
  posts,
  isLoading,
  handleEditPost,
  handleDeletePost,
  handleNextPage,
  handlePreviousPage,
  hasNextPage,
  hasPreviousPage
}) => {


  const truncateExcerpt = (content: string, maxLength: number = 100): string => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + '...';
  };


  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Blog Posts</CardTitle>
        <CardDescription>Recent blog posts from your site.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Title</TableHead>
              <TableHead className="hidden sm:table-cell w-1/6">Category</TableHead>
              <TableHead className="hidden sm:table-cell w-1/6">Status</TableHead>
              <TableHead className="hidden md:table-cell w-1/6">Date</TableHead>
              <TableHead className="hidden md:table-cell w-1/6">Author</TableHead>
              <TableHead className="w-1/12">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <SkeletonRow key={index} />
              ))
            ) : (
              posts?.map((post) => (
                <TableRow key={post._id}>
                  <TableCell>
                    <div className="font-medium">{post.title}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {truncateExcerpt(post.excerpt)}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{post.category}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant={post.status === "published" ? "secondary" : "outline"}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{formatDate(post._creationTime)}</TableCell>
                  <TableCell className="">{post.author.name}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEditPost(post.slug)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeletePost(post._id)}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (hasPreviousPage) handlePreviousPage();
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (hasNextPage) handleNextPage();
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default PostTable;
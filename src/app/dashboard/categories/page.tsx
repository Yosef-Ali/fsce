
"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CirclePlusIcon, Copy, FileIcon, ListFilterIcon, MoreHorizontal, MoveHorizontalIcon } from "lucide-react"
import { CategoriesDialog } from "@/components/dashboard/categories-dialog";
import { useState } from "react";

export default function Categories() {
  const [openCategories, setOpenCategories] = useState(false);

  const [categories, setCategories] = useState([
    { title: "About", description: "The Introduction to FSCE", date: "2023-06-23" },
    { title: "Programs", description: "Explore all of our programs", date: "2023-06-24" },
    { title: "News", description: "Explore all of our news", date: "2023-06-25" },
    { title: "Events", description: "Explore all of our events", date: "2023-06-24" },
  ]);

  const handleCategories = () => {
    setOpenCategories(true);
  };

  return (
    <>
      <main className="grid px-4 sm:px-6 py-24 gap-4">
        <div className="flex items-center">
          <div className="ml-auto flex items-center">
            <Button className="h-8 gap-1" size="sm" onClick={handleCategories}>
              <CirclePlusIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">New Category</span>
            </Button>
          </div>
        </div>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Categories</CardTitle>
            <CardDescription>All categories from your site.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="hidden md:table-cell">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category, index) => (
                  <TableRow key={index} className="hover:bg-muted">
                    <TableCell>
                      <div className="font-medium">{category.title}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {category.description}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{category.date}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <CategoriesDialog open={openCategories} setOpen={setOpenCategories} />
      </main>
    </>
  )
}


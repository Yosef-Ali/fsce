
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
// import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"

// export default function Component() {
//   return (
//     <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
//       <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
//         <div className="flex h-full max-h-screen flex-col gap-2">
//           <div className="flex h-[60px] items-center border-b px-6">
//             <Link className="flex items-center gap-2 font-semibold" href="#">
//               <BookIcon className="h-6 w-6" />
//               <span className="">Novel Editor</span>
//             </Link>
//             <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
//               <BellIcon className="h-4 w-4" />
//               <span className="sr-only">Toggle notifications</span>
//             </Button>
//           </div>
//           <div className="flex-1 overflow-auto py-2">
//             <nav className="grid items-start px-4 text-sm font-medium">
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 bg-gray-100 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <Grid3x3Icon className="h-4 w-4" />
//                 Dashboard
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <BookOpenIcon className="h-4 w-4" />
//                 Blog
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <TagIcon className="h-4 w-4" />
//                 Categories
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <UsersIcon className="h-4 w-4" />
//                 Users
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <ImageIcon className="h-4 w-4" />
//                 Media
//               </Link>
//             </nav>
//           </div>
//           <div className="mt-auto p-4">
//             <Card>
//               <CardHeader className="pb-4">
//                 <CardTitle>Upgrade to Pro</CardTitle>
//                 <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Button className="w-full" size="sm">
//                   Upgrade
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
//           <Link className="lg:hidden" href="#">
//             <BookIcon className="h-6 w-6" />
//             <span className="sr-only">Home</span>
//           </Link>
//           <div className="flex-1">
//             <h1 className="font-semibold text-lg md:text-2xl">Dashboard</h1>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
//                 size="icon"
//                 variant="ghost"
//               >
//                 <img
//                   alt="Avatar"
//                   className="rounded-full"
//                   height="32"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "32/32",
//                     objectFit: "cover",
//                   }}
//                   width="32"
//                 />
//                 <span className="sr-only">Toggle user menu</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </header>
//         <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Published Posts</CardTitle>
//                 <CardDescription>View and manage your published blog posts.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center justify-between">
//                   <span className="text-4xl font-bold">24</span>
//                   <Button size="sm">View Posts</Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Draft Posts</CardTitle>
//                 <CardDescription>View and manage your draft blog posts.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center justify-between">
//                   <span className="text-4xl font-bold">8</span>
//                   <Button size="sm">View Drafts</Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Categories</CardTitle>
//                 <CardDescription>View and manage your blog post categories.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center justify-between">
//                   <span className="text-4xl font-bold">12</span>
//                   <Button size="sm">View Categories</Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Users</CardTitle>
//                 <CardDescription>View and manage your blog users and their roles.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center justify-between">
//                   <span className="text-4xl font-bold">16</span>
//                   <Button size="sm">View Users</Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Media</CardTitle>
//                 <CardDescription>View and manage your uploaded media assets.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center justify-between">
//                   <span className="text-4xl font-bold">142</span>
//                   <Button size="sm">View Media</Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="border shadow-sm rounded-lg">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Title</TableHead>
//                   <TableHead>Author</TableHead>
//                   <TableHead>Category</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 <TableRow>
//                   <TableCell>
//                     <Link className="font-medium" href="#">
//                       The Enchanted Forest
//                     </Link>
//                   </TableCell>
//                   <TableCell>John Doe</TableCell>
//                   <TableCell>Fantasy</TableCell>
//                   <TableCell>
//                     <Badge variant="success">Published</Badge>
//                   </TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button size="icon" variant="ghost">
//                           <MoveHorizontalIcon className="w-4 h-4" />
//                           <span className="sr-only">Actions</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Unpublish</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>
//                     <Link className="font-medium" href="#">
//                       The Secrets of the Universe
//                     </Link>
//                   </TableCell>
//                   <TableCell>Jane Smith</TableCell>
//                   <TableCell>Science</TableCell>
//                   <TableCell>
//                     <Badge variant="success">Published</Badge>
//                   </TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button size="icon" variant="ghost">
//                           <MoveHorizontalIcon className="w-4 h-4" />
//                           <span className="sr-only">Actions</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Unpublish</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>
//                     <Link className="font-medium" href="#">
//                       The Rise of the Machines
//                     </Link>
//                   </TableCell>
//                   <TableCell>Michael Johnson</TableCell>
//                   <TableCell>Technology</TableCell>
//                   <TableCell>
//                     <Badge variant="warning">Draft</Badge>
//                   </TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button size="icon" variant="ghost">
//                           <MoveHorizontalIcon className="w-4 h-4" />
//                           <span className="sr-only">Actions</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Publish</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell>
//                     <Link className="font-medium" href="#">
//                       The Mysteries of the Deep
//                     </Link>
//                   </TableCell>
//                   <TableCell>Sarah Lee</TableCell>
//                   <TableCell>Nature</TableCell>
//                   <TableCell>
//                     <Badge variant="success">Published</Badge>
//                   </TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button size="icon" variant="ghost">
//                           <MoveHorizontalIcon className="w-4 h-4" />
//                           <span className="sr-only">Actions</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>Edit</DropdownMenuItem>
//                         <DropdownMenuItem>Unpublish</DropdownMenuItem>
//                         <DropdownMenuItem>Delete</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// function BellIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   )
// }


// function BookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
//     </svg>
//   )
// }


// function BookOpenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//     </svg>
//   )
// }


// function Grid3x3Icon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="18" x="3" y="3" rx="2" />
//       <path d="M3 9h18" />
//       <path d="M3 15h18" />
//       <path d="M9 3v18" />
//       <path d="M15 3v18" />
//     </svg>
//   )
// }


// function ImageIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//       <circle cx="9" cy="9" r="2" />
//       <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
//     </svg>
//   )
// }


// function MoveHorizontalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="18 8 22 12 18 16" />
//       <polyline points="6 8 2 12 6 16" />
//       <line x1="2" x2="22" y1="12" y2="12" />
//     </svg>
//   )
// }





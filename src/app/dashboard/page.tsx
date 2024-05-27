

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/igeH1iWqfxD
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
// import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

// export default function Component() {
//   return (
//     <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
//       <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
//         <div className="flex h-full max-h-screen flex-col gap-2">
//           <div className="flex h-[60px] items-center border-b px-6">
//             <Link className="flex items-center gap-2 font-semibold" href="#">
//               <PencilIcon className="h-6 w-6" />
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
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <HomeIcon className="h-4 w-4" />
//                 Dashboard
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <FileIcon className="h-4 w-4" />
//                 Posts
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
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <LineChartIcon className="h-4 w-4" />
//                 Analytics
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <SettingsIcon className="h-4 w-4" />
//                 Settings
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
//             <PencilIcon className="h-6 w-6" />
//             <span className="sr-only">Home</span>
//           </Link>
//           <div className="w-full flex-1">
//             <form>
//               <div className="relative">
//                 <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
//                 <Input
//                   className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
//                   placeholder="Search posts, categories, users..."
//                   type="search"
//                 />
//               </div>
//             </form>
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
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Support</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </header>
//         <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <Card>
//               <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
//                 <FileIcon className="h-8 w-8 text-primary" />
//                 <div className="text-2xl font-bold">125</div>
//                 <p className="text-gray-500 dark:text-gray-400">Total Posts</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
//                 <FileTextIcon className="h-8 w-8 text-primary" />
//                 <div className="text-2xl font-bold">32</div>
//                 <p className="text-gray-500 dark:text-gray-400">Drafts</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
//                 <FileCheckIcon className="h-8 w-8 text-primary" />
//                 <div className="text-2xl font-bold">93</div>
//                 <p className="text-gray-500 dark:text-gray-400">Published</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
//                 <UsersIcon className="h-8 w-8 text-primary" />
//                 <div className="text-2xl font-bold">12</div>
//                 <p className="text-gray-500 dark:text-gray-400">Authors</p>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Posts</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Title</TableHead>
//                       <TableHead>Status</TableHead>
//                       <TableHead>Author</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>
//                         <Link className="font-medium" href="#">
//                           The Future of AI in Content Creation
//                         </Link>
//                       </TableCell>
//                       <TableCell>
//                         <Badge
//                           className="bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400"
//                           variant="outline"
//                         >
//                           Published
//                         </Badge>
//                       </TableCell>
//                       <TableCell>John Doe</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <Link className="font-medium" href="#">
//                           Mastering Responsive Design with CSS Grid
//                         </Link>
//                       </TableCell>
//                       <TableCell>
//                         <Badge
//                           className="bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400"
//                           variant="outline"
//                         >
//                           Draft
//                         </Badge>
//                       </TableCell>
//                       <TableCell>Jane Smith</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <Link className="font-medium" href="#">
//                           The Rise of Headless CMS: Unlocking Endless Possibilities
//                         </Link>
//                       </TableCell>
//                       <TableCell>
//                         <Badge
//                           className="bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400"
//                           variant="outline"
//                         >
//                           Published
//                         </Badge>
//                       </TableCell>
//                       <TableCell>Alex Johnson</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Categories</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Posts</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>
//                         <Link className="font-medium" href="#">
//                           Technology
//                         </Link>
//                       </TableCell>
//                       <TableCell>42</TableCell>
//                       <TableCell>
//                         <div className="flex items-center gap-2">
//                           <Button size="icon" variant="ghost">
//                             <DeleteIcon className="h-4 w-4" />
//                             <span className="sr-only">Edit</span>
//                           </Button>
//                           <Button size="icon" variant="ghost">
//                             <TrashIcon className="h-4 w-4" />
//                             <span className="sr-only">Delete</span>
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <Link className="font-medium" href="#">
//                           Design
//                         </Link>
//                       </TableCell>
//                       <TableCell>28</TableCell>
//                       <TableCell>
//                         <div className="flex items-center gap-2">
//                           <Button size="icon" variant="ghost">
//                             <DeleteIcon className="h-4 w-4" />
//                             <span className="sr-only">Edit</span>
//                           </Button>
//                           <Button size="icon" variant="ghost">
//                             <TrashIcon className="h-4 w-4" />
//                             <span className="sr-only">Delete</span>
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <Link className="font-medium" href="#">
//                           Marketing
//                         </Link>
//                       </TableCell>
//                       <TableCell>19</TableCell>
//                       <TableCell>
//                         <div className="flex items-center gap-2">
//                           <Button size="icon" variant="ghost">
//                             <DeleteIcon className="h-4 w-4" />
//                             <span className="sr-only">Edit</span>
//                           </Button>
//                           <Button size="icon" variant="ghost">
//                             <TrashIcon className="h-4 w-4" />
//                             <span className="sr-only">Delete</span>
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Users</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Name</TableHead>
//                       <TableHead>Role</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>
//                         <div className="flex items-center gap-2">
//                           <Avatar className="h-8 w-8">
//                             <AvatarImage alt="John Doe" src="/placeholder-user.jpg" />
//                             <AvatarFallback>JD</AvatarFallback>
//                           </Avatar>
//                           <span className="font-medium">John Doe</span>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <Badge
//                           className="bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-400"
//                           variant="outline"
//                         >
//                           Admin
//                         </Badge>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex items-center gap-2">
//                           <Button size="icon" variant="ghost">
//                             <DeleteIcon className="h-4 w-4" />
//                             <span className="sr-only">Edit</span>
//                           </Button>
//                           <Button size="icon" variant="ghost">
//                             <TrashIcon className="h-4 w-4" />
//                             <span className="sr-only">Delete</span>
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <div className="flex items-center gap-2">
//                           <Avatar className="h-8 w-8">
//                             <AvatarImage alt="Jane Smith" src="/placeholder-user.jpg" />
//                             <AvatarFallback>JS</AvatarFallback>
//                           </Avatar>
//                           <span className="font-medium">Jane Smith</span>
//                         </div>
//                       </TableCell>
//                       <TableCell />
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
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


// function DeleteIcon(props) {
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
//       <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
//       <line x1="18" x2="12" y1="9" y2="15" />
//       <line x1="12" x2="18" y1="9" y2="15" />
//     </svg>
//   )
// }


// function FileCheckIcon(props) {
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
//       <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="m9 15 2 2 4-4" />
//     </svg>
//   )
// }


// function FileIcon(props) {
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
//       <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//     </svg>
//   )
// }


// function FileTextIcon(props) {
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
//       <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="M10 9H8" />
//       <path d="M16 13H8" />
//       <path d="M16 17H8" />
//     </svg>
//   )
// }


// function HomeIcon(props) {
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
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
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


// function LineChartIcon(props) {
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
//       <path d="M3 3v18h18" />
//       <path d="m19 9-5 5-4-4-3 3" />
//     </svg>
//   )
// }


// function PencilIcon(props) {
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
//       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
//       <path d="m15 5 4 4" />
//     </svg>
//   )
// }


// function SearchIcon(props) {
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
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }


// function SettingsIcon(props) {
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
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   )
// }


// function TagIcon(props) {
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
//       <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
//       <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
//     </svg>
//   )
// }


// function TrashIcon(props) {
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
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
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
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }
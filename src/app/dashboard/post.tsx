// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/ECevUC36L6F
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

// export default function Component() {
//   return (
//     <>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Edit Blog Post</h1>
//         <Button>New</Button>
//       </div>
//       <div className="max-w-3xl mx-auto space-y-6">
//         <div className="space-y-2">
//           <Label htmlFor="title">Title</Label>
//           <Input className="w-full" id="title" placeholder="Enter blog post title" />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="slug">Slug</Label>
//           <Input className="w-full" id="slug" placeholder="Enter blog post slug" />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="content">Content</Label>
//           <Textarea className="w-full min-h-[400px]" id="content" placeholder="Start writing your blog post..." />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="category">Category</Label>
//           <Select className="w-full" id="category">
//             <SelectTrigger>
//               <SelectValue placeholder="Select a category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="category1">Category 1</SelectItem>
//               <SelectItem value="category2">Category 2</SelectItem>
//               <SelectItem value="category3">Category 3</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="space-y-2">
//           <Label>Cover Image</Label>
//           <div>
//             <div className="flex flex-col items-center justify-center h-48 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
//               <UploadIcon className="w-8 h-8 text-gray-400" />
//               <p className="mt-2 text-sm text-gray-400">Drag and drop your image here or click to upload</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <Button>Save</Button>
//         </div>
//       </div>
//     </>
//   )
// }


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CirclePlusIcon, FileIcon, ListFilterIcon, MoreHorizontal, MoveHorizontalIcon } from "lucide-react"

type User = {
  id: number;
  name: string;
  role: string;
  status: string;
  avatar: string;
}

type UsersProps = {
  users: User[];
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://github.com/shadcn.png'
  },
  {
    id: 2,
    name: 'Mary Jackson',
    role: 'Author',
    status: "Active",
    avatar: 'https://github.com/shadcn.png'
  },
  {
    id: 3,
    name: 'Tom cruise',
    role: 'User',
    status: "Blocked",
    avatar: 'https://github.com/shadcn.png'
  }
]


export default function Users() {

  return (
    <>
      <main className="grid flex-1 items-start gap-4 px-4 sm:px-6 py-24 md:gap-8">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Users</CardTitle>
            <CardDescription>All users in your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Role</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id} className="hover:bg-muted">
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                          <AvatarImage alt="Avatar" src={user.avatar} />
                          <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{user.name}</div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{user.role}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.status}</TableCell>
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
      </main>
    </>
  )
}


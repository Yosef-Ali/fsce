
import Link from "next/link"
import {
  BookOpenIcon,
  ImageIcon,
  Package2,
  Settings,
  TagIcon,
  UsersIcon,
} from "lucide-react"

import { Badge } from "../ui/badge"
import IsAdminsOnly from "./is-admin"
import NotificationsComponent from "./notifications"

const Aside: React.FC = () => {

  return (

    <div className=" hidden h-full w-full border-r bg-muted/40 md:block">
      <div className="fixed inset-0 md:w-[220px] lg:w-[280px]">
        <div className="flex h-full max-h-screen flex-col gap-2 ">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <img src="/logo.svg" alt="logo" className="h-8" />
            </Link>
            <div className="relative ml-auto h-8 w-8 ">
              <NotificationsComponent />
            </div>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard/blogs"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <BookOpenIcon className="h-4 w-4" />
                Blogs
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="/dashboard/categories"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <TagIcon className="h-4 w-4" />
                Categories
              </Link>
              {/*  call to the component is-admin.tsx to check if the user is an admin or not and if it is, show the link to the users page */}
              <IsAdminsOnly >
                <Link
                  href="/dashboard/users"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <UsersIcon className="h-4 w-4" />
                  Users
                </Link>
              </IsAdminsOnly>
              <Link
                href="/dashboard/media"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ImageIcon className="h-4 w-4" />
                Media
              </Link>
            </nav>
          </div>
          <div className="mt-auto px-4">
            <Link
              href=""
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
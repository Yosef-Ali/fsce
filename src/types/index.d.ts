
import { Id } from "../convex/_generated/dataModel";
import type { Icon } from "lucide-react"
import { Icons } from "@/components/icons"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
    | {
      href: string
      items?: never
    }
    | {
      href?: string
      items: NavLink[]
    }
  )

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    facebook: string
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type LandingPageConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}




export interface Category {
  _id: Id<"categories">;
  _creationTime: number;
  title: string;
  description: string;
}

export interface User {
  _id: Id<"users">;
  _creationTime: number;
  active?: "active" | "inactive" | undefined;
  role?: string | undefined;
  email: string;
  imageUrl: string;
  clerkId: string;
  name: string;
}

export interface Post {
  _id: Id<"posts">;
  _creationTime: number;
  updatedAt: number;
  title: string;
  slug: string;
  image?: string;
  content: any;
  excerpt: string;
  status: 'draft' | 'published' | 'achieved';
  category: string;
  author: {
    id: string;
    name: string;
    imageUrl?: string;
  };
}


export type CustomJSONContent = {
  type: string;
  content?: CustomJSONContent[];
  text?: string;
  attrs?: Record<string, any>;
};

export type EditorContent = string | CustomJSONContent;


export type UserRole = "author" | "user" | "admin" | "org:admin";
export type UserStatus = "active" | "inactive";

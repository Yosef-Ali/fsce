"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import { ModeToggle } from "@/app/mode-toggle"
import Logo from "../logo"

const menuItems = [
  {
    title: "Who We Are",
    href: "/who-we-are",
    items: [
      { title: "Values and Principles", href: "/who-we-are", description: "Our core beliefs and guiding principles" },
      { title: "Board Members", href: "/board-members", description: "Meet our leadership team" },
      { title: "Partners", href: "/partners", description: "Our collaborators and supporters" },
      { title: "Merits", href: "/merits", description: "Our achievements and recognitions" },
    ],
  },
  {
    title: "What We Do",
    href: "/what-we-do",
    items: [
      { title: "Prevention and Promotion Program", href: "/what-we-do/prevention-promotion", description: "Proactive measures for child welfare" },
      { title: "Protection", href: "/what-we-do/protection", description: "Safeguarding children's rights and safety" },
      { title: "Rehabilitation and Reintegration", href: "/what-we-do/rehabilitation", description: "Supporting children's recovery and social integration" },
      { title: "Child Resource Center", href: "/what-we-do/resource-center", description: "Educational and support facilities for children" },
    ],
  },
  {
    title: "Where We Work",
    href: "/where-we-work",
    items: [
      { title: "City Area Program Offices", href: "/city-offices", description: "Our urban program locations" },
      { title: "Regional Area Program Offices", href: "/regional-offices", description: "Our presence across different regions" },
    ],
  },
  {
    title: "News and Events",
    href: "/news-and-events",
  },
  {
    title: "Resources",
    hrf: "/resources",
    items: [
      { title: "Reports and Reviews", href: "/reports", description: "Our published findings and evaluations" },
      { title: "FSCE Publications", href: "/publications", description: "Official documents and literature" },
      { title: "Case Stories", href: "/case-stories", description: "Real-life impact stories" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
]

export function Header() {
  const pathname = usePathname()
  const { isSignedIn, isLoaded } = useUser()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="w-full bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col lg:flex-row">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <div className="relative group">
                        <Link href={item.href ?? "#"} passHref>
                          <NavigationMenuLink
                            className={`font-medium ${pathname === item.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                              }`}
                          >
                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                          </NavigationMenuLink>
                        </Link>

                        <div className="absolute left-0 top-full hidden group-hover:block z-[9999]">
                          <NavigationMenuContent className="absolute z-50">
                            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                              {item.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </div>
                      </div>
                    ) : (
                      <Link href={item.href} passHref>
                        <NavigationMenuLink className={`font-medium ${pathname === item.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-4">
            {!isLoaded ? (
              <Button variant="ghost" disabled>Loading...</Button>
            ) : isSignedIn ? (
              <>
                <Link href="/dashboard/blogs">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                {/* <SignUpButton mode="modal">
                  <Button variant="outline">Sign Up</Button>
                </SignUpButton> */}
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
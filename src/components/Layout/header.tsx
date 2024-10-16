"use client"

import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import Logo from '../logo'
import { ModeToggle } from '@/app/mode-toggle'

const navigationItems = [
  { href: "/", label: "Who we are" },
  { href: "/programs", label: "What we do" },
  { href: "/news-and-events", label: "News & Events" },
  { href: "/contact", label: "Contact" },
]

export const Header: React.FC = () => {
  const pathname = usePathname()
  const { isSignedIn, isLoaded } = useUser()

  return (
    <header className="w-full bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${pathname === item.href ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {!isLoaded ? (
              <Button variant="ghost" disabled>Loading...</Button>
            ) : isSignedIn ? (
              <>
                <Link href="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="outline">Sign Up</Button>
                </SignUpButton>
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
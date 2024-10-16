"use client"

import React, { useEffect, useState } from 'react'
import { UserButton, useUser, useClerk } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import Logo from '../logo'
import { ModeToggle } from '@/app/mode-toggle'
import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"
interface LinkProps {
  href: string
  children: React.ReactNode
}

const ActiveLink: React.FC<LinkProps> = ({ href, children }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`text-nowrap ${isActive ? 'font-bold' : ''}`}>
      {children}
    </Link>
  )
}

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isSignedIn, isLoaded, user } = useUser()
  const { signOut } = useClerk()
  const { toast } = useToast()

  const hasAccessToDashboard = useQuery(
    api.users.checkAccess,
    isLoaded && user?.id ? { clerkId: user.id } : "skip"
  )

  const navigationItems = [
    { href: "/", label: "Who we are" },
    { href: "/programs", label: "What we do" },
    { href: "/news-and-events", label: "News & Events" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isLoaded && isSignedIn && hasAccessToDashboard && hasAccessToDashboard.hasAccess === false) {
      toast({
        title: "You do not have access to this dashboard",
        description: "Please contact the administrator to request access.",
        variant: "destructive",
        duration: 5000,
      })
    }
  }, [isLoaded, isSignedIn, hasAccessToDashboard, toast])

  const handleSignIn = () => {
    toast({
      title: "Internal Use Only",
      description: "Sign-in is restricted to authorized personnel. If you need access, please contact the administrator.",
      duration: 5000,
    })
  }

  return (
    <>
      <header className={`w-full left-0 right-0 z-50 sticky top-0 ${isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-background'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" aria-label="Home">
                <Logo />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <ActiveLink key={item.href} href={item.href}>
                  {item.label}
                </ActiveLink>
              ))}
              {isLoaded && isSignedIn && hasAccessToDashboard?.hasAccess && (
                <ActiveLink href="/dashboard">Dashboard</ActiveLink>
              )}
            </nav>
            <div className="flex items-center space-x-4">
              {!isLoaded ? (
                <Button variant="ghost" disabled>Loading...</Button>
              ) : isSignedIn ? (
                <>
                  {hasAccessToDashboard?.hasAccess ? (
                    <Button variant="outline" onClick={() => signOut()}>Logout</Button>
                  ) : (
                    <Button variant="outline" onClick={() => signOut()}>Logout</Button>
                  )}
                  <UserButton afterSignOutUrl="/" />
                </>
              ) : (
                <Button onClick={handleSignIn}>Sign In</Button>
              )}
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
      <Toaster />
    </>
  )
}
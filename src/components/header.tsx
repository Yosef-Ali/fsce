"use client";
import React, { useEffect, useState } from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";
import Link from "next/link";
import Logo from './logo';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '../app/mode-toggle';
import Image from 'next/image';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const ActiveLink: React.FC<LinkProps> = ({ href, children }) => {

  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior>
      <a className="text-nowrap">
        {children}
      </a>
    </Link>
  );
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useSession();
  const isDashboard = pathname === "/dashboard";

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/news-and-events", label: "News & Events" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Update state on scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <div className={`w-full left-0 right-0 z-50 sticky top-0 ${isScrolled ? 'bg-white bg-opacity-75 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'}`}>
        {/* Rest of your header content */}
        <div
          className="header flex items-center justify-between max-w-5xl mx-auto"
        >
          <div
            className="px-2 w-full overflow-hidden md:w-1/6 lg:w-1/4 xl:w-1/4 text-center md:text-left cursor-pointer"
          >
            <Link href="/" legacyBehavior>
              <Logo />
            </Link>
          </div>
          <nav className="nav ">
            <ul className="flex items-center">
              {navigationItems.map((item) => (
                <li
                  key={item.href}
                  className="py-8 px-4 border-b border-gray-300 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer"
                >
                  <ActiveLink href={item.href}>{item.label}</ActiveLink>
                </li>
              ))}
              {isSignedIn && (
                <li
                  className="py-8 px-4 border-b border-gray-300 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer"
                >
                  <ActiveLink href="/dashboard">Dashboard</ActiveLink>
                </li>
              )}
            </ul>
          </nav>
          <div
            className="px-2 w-full overflow-hidden md:w-1/6 lg:w-1/4 xl:w-1/4 flex gap-4 items-center justify-end"
          >
            {isSignedIn ? <UserButton /> : <SignInButton />}
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};




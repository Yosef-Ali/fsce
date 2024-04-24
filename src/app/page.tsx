"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import LandingPage from "./landingpage/page";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { SignInButton, SignOutButton, auth } from "@clerk/nextjs";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <LandingPage />
    </main>
  );
}


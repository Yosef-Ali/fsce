"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Skeleton } from "./ui/skeleton";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";

type Props = { children: React.ReactNode };

export default function Authenticated({ children }: Props) {
  const { user, isLoaded } = useUser();
  const { toast } = useToast();

  const hasAccessToDashboard = useQuery(
    api.users.checkAccess,
    isLoaded && user?.id ? { clerkId: user.id } : "skip"
  );

  useEffect(() => {
    if (isLoaded && user && hasAccessToDashboard && hasAccessToDashboard.hasAccess === false) {
      toast({
        title: "You do not have access to this dashboard",
        description: "Please contact the administrator to request access.",
        variant: "destructive",
        duration: 10000, // Duration in milliseconds
      });
    }
  }, [isLoaded, user, hasAccessToDashboard, toast]);

  if (!isLoaded) {
    return <Skeleton />; // Show a loading state
  }

  if (!user) {
    return <div>User data not available.</div>; // Handle user data not available
  }

  if (hasAccessToDashboard === undefined) {
    return <Skeleton />; // Still loading access information
  }

  if (hasAccessToDashboard.hasAccess === false) {
    return null; // Handle no access case
  }

  return <>{children}</>;
}
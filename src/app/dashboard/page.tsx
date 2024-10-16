import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@clerk/nextjs';

export default function BlogsPage() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && userId) {
      router.push('/dashboard/blogs');
    }
  }, [isLoaded, userId, router]);

  return (
    <div className="container max-w-5xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
    </div>
  );
}
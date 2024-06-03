"use client";
import { Heart } from 'lucide-react';
import { CldImage } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { SearchResult } from './page';
import { startTransition, useEffect, useState } from 'react';
import { setAsFavoriteAction } from './actions';

// ... rest of your code

export default function CloudinaryImage(props: any & {
  imageData: SearchResult;
  path: string;
  onUnfavorited: () => void;
}) {
  const router = useRouter();
  const { imageData } = props;
  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    startTransition(() => {
      setAsFavoriteAction(imageData.public_id, !isFavorited);
    });
    // Refresh the page
    router.refresh();
    console.log(isFavorited ? "Unfavorited" : "Favorited");
  };


  useEffect(() => {
    // Refresh the page when isFavorited changes
    router.refresh();
    console.log(isFavorited ? "Unfavorited" : "Favorited");
  }, [isFavorited, router]);

  return (
    <div className="relative">
      <CldImage
        {...props}
        src={imageData.public_id}
        className="rounded-lg"
      />
      <Heart
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 hover:text-red-500 cursor-pointer text-white"
        fill={isFavorited ? "red" : "none"}
      />
    </div>
  );
}

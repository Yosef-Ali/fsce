import Image from "next/image";
import { Upload, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CldUploadButton } from "next-cloudinary";
import { useState, useEffect } from "react";

type ImageProps = {
  onImagesChange?: (images: string[]) => void;
  maxImages?: number;
  initialImages?: string[]; // Add support for initial images
};

export const ImageUploaderCard = ({
  onImagesChange,
  maxImages = 3,
  initialImages = []
}: ImageProps) => {
  // Initialize with an array of fixed length filled with empty strings
  const [uploadedImages, setUploadedImages] = useState<string[]>(() => {
    const images = new Array(maxImages).fill('');
    // Fill in any initial images
    initialImages.forEach((img, index) => {
      if (index < maxImages) images[index] = img;
    });
    return images;
  });

  useEffect(() => {
    if (initialImages?.length) {
      const images = new Array(maxImages).fill('');
      initialImages.forEach((img, index) => {
        if (index < maxImages) images[index] = img;
      });
      setUploadedImages(images);
    }
  }, [initialImages, maxImages]);

  const handleUpload = (result: any) => {
    if (result.event === "success" && result.info) {
      const nextEmptyIndex = uploadedImages.findIndex(img => !img);
      if (nextEmptyIndex !== -1) {
        const newImages = [...uploadedImages];
        newImages[nextEmptyIndex] = result.info.secure_url;
        setUploadedImages(newImages);
        onImagesChange?.(newImages.filter(img => img !== ''));
      }
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...uploadedImages];
    newImages[index] = '';
    setUploadedImages(newImages);
    onImagesChange?.(newImages.filter(img => img !== ''));
  };

  const getEmptySlots = () => {
    return uploadedImages.filter(img => !img).length;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Images</CardTitle>
        <CardDescription>Upload up to {maxImages} images</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {/* Main image display */}
          {uploadedImages[0] ? (
            <div className="relative">
              <Image
                alt="Main product image"
                className="aspect-square w-full rounded-md object-cover"
                height={300}
                src={uploadedImages[0]}
                width={300}
              />
              <button
                onClick={() => removeImage(0)}
                className="absolute top-2 right-2 p-1 bg-red-500 rounded-full"
              >
                <XCircle className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <Image
              alt="Product placeholder"
              className="aspect-square w-full rounded-md object-cover"
              height={300}
              src="/images/placeholder.svg"
              width={300}
            />
          )}

          {/* Thumbnail grid */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2].map((index) => (
              <div key={index} className="relative">
                {uploadedImages[index] ? (
                  <>
                    <Image
                      alt={`Product image ${index + 1}`}
                      className="aspect-square w-full rounded-md object-cover"
                      height={84}
                      src={uploadedImages[index]}
                      width={84}
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 p-0.5 bg-red-500 rounded-full"
                    >
                      <XCircle className="w-3 h-3 text-white" />
                    </button>
                  </>
                ) : (
                  <Image
                    alt={`Product placeholder ${index + 1}`}
                    className="aspect-square w-full rounded-md object-cover"
                    height={84}
                    src="/images/placeholder.svg"
                    width={84}
                  />
                )}
              </div>
            ))}

            {getEmptySlots() > 0 && (
              <CldUploadButton
                onSuccess={handleUpload}
                uploadPreset="fsce2024"
                className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed hover:bg-gray-50 transition-colors"
              >
                <Upload className="h-4 w-4 text-muted-foreground" />
                <span className="sr-only">Upload</span>
              </CldUploadButton>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
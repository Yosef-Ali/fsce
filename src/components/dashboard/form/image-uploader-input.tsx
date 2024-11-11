import React, { useEffect, useState } from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UploadButton from "../upload-button";
import { CheckCircle, XCircle } from 'lucide-react';
import { Control } from 'react-hook-form';

interface ImageUploaderProps {
  control: Control<any>;
  onImageIds: (imageIds: string[]) => void; // Update to handle multiple IDs
  resetTrigger: number;
  maxImages?: number; // Add max images limit
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  control,
  onImageIds,
  resetTrigger,
  maxImages = 5
}) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isValidUrl, setIsValidUrl] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Replace this with your actual Cloudinary cloud name
  const ACTUAL_CLOUD_NAME = 'dd9mce0qr'; // Replace this with your actual Cloudinary cloud name

  // Reset uploaded images and validation state when the resetTrigger changes
  useEffect(() => {
    if (resetTrigger > 0) {
      setUploadedImages([]);
      onImageIds([]);
      setIsValidUrl(null);
    }
  }, [resetTrigger, onImageIds]);

  // Normalize Cloudinary URLs to ensure consistency
  const normalizeCloudinaryUrl = (url: string): string => {
    const regex = /^https:\/\/res\.cloudinary\.com\/([^/]+)\/image\/upload\/(v\d+\/)?(.*?)$/;
    const match = url.match(regex);
    if (match) {
      let [, cloudName, version, publicIdWithFormat] = match;
      // Replace 'demo' with the actual cloud name
      if (cloudName === 'demo') {
        cloudName = ACTUAL_CLOUD_NAME;
      }
      // Include version in the URL if it exists
      const versionPart = version ? version : '';
      return `https://res.cloudinary.com/${cloudName}/image/upload/${versionPart}${publicIdWithFormat}`;
    }
    return url;
  };

  // Validate image URLs to ensure they point to valid images
  const validateImageUrl = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  // Handle changes in the image URL input field
  const handleUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    if (url) {
      setIsLoading(true);
      const normalizedUrl = normalizeCloudinaryUrl(url);
      const isValid = await validateImageUrl(normalizedUrl);
      setIsValidUrl(isValid);
      setIsLoading(false);
      if (isValid) {
        handleUpload(normalizedUrl);
      }
    } else {
      setIsValidUrl(null);
      setIsLoading(false);
    }
  };

  // Handle image uploads using the UploadButton component
  const handleUpload = (imageId: string) => {
    if (uploadedImages.length < maxImages) {
      const newImages = [...uploadedImages, imageId];
      setUploadedImages(newImages);
      onImageIds(newImages);
    }
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    onImageIds(newImages);
  };

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="image"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Image URL</FormLabel>
            <div className="flex items-center space-x-2">
              <FormControl>
                <div className="relative w-full">
                  <Input
                    placeholder="Add image URL here"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleUrlChange(e);
                    }}
                    className={`pr-10 ${isValidUrl === false ? 'border-red-500' : ''}`}
                  />
                  {isLoading && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                    </div>
                  )}
                  {!isLoading && isValidUrl !== null && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {isValidUrl ? (
                        <CheckCircle className="text-green-500" size={20} />
                      ) : (
                        <XCircle className="text-red-500" size={20} />
                      )}
                    </div>
                  )}
                </div>
              </FormControl>
              {uploadedImages.length < maxImages && (
                <UploadButton onImageId={handleUpload} />
              )}
            </div>
            <FormDescription className="text-sm">Enter a public image URL or use the upload button.</FormDescription>
            {isValidUrl === false && <FormMessage className="text-sm text-red-500">The provided URL is not a valid image. Please check the URL and try again.</FormMessage>}
          </FormItem>
        )}
      />
      <div className="grid grid-cols-3 gap-4">
        {uploadedImages.map((imageId, index) => (
          <div key={index} className="relative">
            <img
              src={imageId}
              alt={`Uploaded ${index + 1}`}
              className="aspect-square w-full rounded-md object-cover"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 p-1 bg-red-500 rounded-full"
            >
              <XCircle className="w-4 h-4 text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
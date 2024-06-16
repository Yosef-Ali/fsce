"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadButton, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadButton({ onImageId }: { onImageId: (imageId: string) => void }) {
  const [imageId, setImageId] = useState<string | null>(null);

  const router = useRouter();
  return (
    <Button asChild size="sm" className="h-10 gap-1 cursor-pointer" >
      <div className="flex items-center gap-3">
        <Upload className="h-4 w-4" />
        <CldUploadButton
          onSuccess={(results: CloudinaryUploadWidgetResults) => {
            if (results.event === "success" && results.info) {
              const info = results.info as CloudinaryUploadWidgetInfo;
              setImageId(info.secure_url);
              onImageId(info.secure_url);
            } else {
              console.error("Image upload failed:", results.event);
            }
            setTimeout(() => {
              router.refresh();
            }, 1000);
          }}
          uploadPreset="fsce2024"
        />
      </div>
    </Button>
  );
}
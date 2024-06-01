"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Upload } from 'lucide-react';
import { CldImage, CldUploadButton, CloudinaryUploadWidgetResults, CloudinaryUploadWidgetInfo } from 'next-cloudinary';
import { useState } from "react";

export default function Media() {
  const [imageId, setImageId] = useState<string | null>(null);

  return (
    // <main className="grid px-4 sm:px-6 py-24 gap-4">
    //   <div className="flex items-center">
    //     <CldUploadButton
    //       onSuccess={(results: CloudinaryUploadWidgetResults) => {
    //         if (results.event === "success" && results.info) {
    //           const info = results.info as CloudinaryUploadWidgetInfo;
    //           setImageId(info.secure_url);
    //         } else {
    //           console.error("Image upload failed:", results.event);
    //         }
    //       }}
    //       uploadPreset="fsce2024"
    //     />
    //   </div>
    //   {imageId && (
    //     <CldImage
    //       width="960"
    //       height="600"
    //       src={imageId}
    //       sizes="100vw"
    //       alt="Description of my image"
    //     />
    //   )}
    // </main>

    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-24 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">Gallery</TabsTrigger>
            <TabsTrigger value="active">Favorite</TabsTrigger>
            <TabsTrigger value="draft">Video</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">

            <Button asChild size="sm" className="h-8 gap-1" >
              <div className="flex items-center gap-1">
                <Upload className="h-3.5 w-3.5" />
                <CldUploadButton
                  onSuccess={(results: CloudinaryUploadWidgetResults) => {
                    if (results.event === "success" && results.info) {
                      const info = results.info as CloudinaryUploadWidgetInfo;
                      setImageId(info.secure_url);
                    } else {
                      console.error("Image upload failed:", results.event);
                    }
                  }}
                  uploadPreset="fsce2024"
                />
              </div>
            </Button>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-05-chunk-3">Car image </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselSection() {
  const imageList = [
    "/images/hero-img-1.webp",
    "/images/hero-img-2.webp",
    "/images/hero-img-3.webp",
    "/images/hero-img-4.webp",
    "/images/hero-img-5.webp",
  ];
  const imagePath = "/images/hero - image -";
  return (
    <Carousel className="w-full max-w-5xl max-h-[450px]">
      <CarouselContent>
        {imageList.map((imagePath, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div>
                <div className="flex items-center justify-center ">
                  <img
                    src={imagePath}
                    alt={`carousel-image-${index}`}
                    className="w-full h-full rounded"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

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

  const slideContent = [
    { h1: 'Child Protection', h3: 'Protecting children from abuse, exploitation, and neglect.' },
    { h1: 'Youth Empowerment', h3: 'Empowering youth through education, skills, and livelihood support.' },
    { h1: 'Advocacy', h3: "Advocating for children's and youth's rights and welfare." },
    { h1: 'Humanitarian Response', h3: 'Responding to humanitarian crises, providing relief and support.' },
    { h1: 'Community Development', h3: 'Developing communities through sustainable development programs.' },
  ];

  const imagePath = "/images/hero - image -";

  return (
    <Carousel className="w-full max-w-5xl max-h-[450px]">
      <CarouselContent>
        {imageList.map((imagePath, index) => (
          <CarouselItem key={index}>
            <div className="relative">
              <img
                src={imagePath}
                alt={`carousel-image-${index}`}
                className="w-full h-full rounded"
              />
              <div
                className="absolute bottom-0 left-0 p-8 text-white  animate-fadeIn duration-500 delay-200"
                style={{ bottom: 0, left: 0 }} // Add this style
              >
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-balance">
                  {slideContent[index].h1}
                </h1>
                <p className="max-w-[750px] text-lg font-light text-muted shadow">
                  {slideContent[index].h3}
                </p>
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


import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export default function Partners() {
  return (

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid  gap-4 px-4 py-8 text-center md:px-6 lg:gap-10">
        <div className="space-y-3 ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">Our Partners</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {`We're proud to work with these amazing organization.`}
          </p>
        </div>
        <div className="w-full">
          <Carousel className="w-full max-w-6xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-6 p-6 ">
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/images/The_World_Bank_logo_PNG2.png"
                    width={140}
                  />
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/images/Unicef_logo_PNG5.png"
                    width={140}
                  />
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/images/usaid.png"
                    width={140}
                  />
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/images/Save_The_Children_logo_PNG1.png"
                    width={140}
                  />
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/images/oak_correct.png"
                    width={140}
                  />

                </div>
              </CarouselItem>
              <CarouselItem>

                <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-6 p-6 ">
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/placeholder.svg"
                    width={140}
                  />
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/placeholder.svg"
                    width={140}
                  />
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/placeholder.svg"
                    width={140}
                  />
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/placeholder.svg"
                    width={140}
                  />
                  <img
                    alt=""
                    className="aspect-[2/1] object-contain opacity-50 transition-opacity hover:opacity-100"
                    height={70}
                    src="/placeholder.svg"
                    width={140}
                  />

                </div>

              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}


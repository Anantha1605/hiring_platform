import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Link } from 'react-router-dom'


const categories = [
    { name: 'Plumber', image: 'https://cdn.pixabay.com/photo/2024/03/22/21/32/ai-generated-8650513_640.jpg' },
    { name: 'Pest Control', image: './images/pest_control.jpg' },
    { name: 'Cleaning', image: './images/cleaning.jpg' },
    { name: 'Electrician', image: './images/electrician.jpg' },
    { name: 'Teacher', image: './images/teacher.jpg' },
  ]

function BrowseByCategory() {
  return (
<section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Browse by category</h2>
            <Link to="#" className="text-blue-600">View all</Link>
          </div>
          <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[90%] ml-[3vw]"
    >
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-[23%]">
              <a
                key={category.name}
                href="#"
                className="relative group rounded-lg overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full aspect-square object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all rounded-lg">
                  <span className="absolute bottom-3 left-3 text-white font-medium">
                    {category.name}
                  </span>
                </div>
              </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
          

          
        </div>
      </section>
  )
}

export default BrowseByCategory



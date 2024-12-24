import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { CircleUser } from "lucide-react";

const professionals = [
    {name:'Rakesh Jariwala', profession:'Electrician', photo:<CircleUser className="h-24 w-24"/>, ratings:4.5},
    {name:'Lokesh Sharma', profession:'Teacher', photo:<CircleUser className="h-24 w-24"/>, ratings:5},
    {name:'Pankaj Mistry', profession:'Carpenter', photo:<CircleUser className="h-24 w-24"/>, ratings:4.2},
    {name:'Suresh H.', profession:'Plumber', photo:<CircleUser className="h-24 w-24"/>, ratings:4.6},
    {name:'Mahesh R.', profession:'Garage', photo:<CircleUser className="h-24 w-24"/>, ratings:4.8}
]

function FeaturedProfessionals() {
return (
    <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
                Top Rated Professionals in Your Area
            </h2>
            <div className="flex overflow-x-auto space-x-6 pb-4">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-[90%] ml-[3vw]"
                >
                    <CarouselContent>
                        {professionals.map((pro, index) => {
                            const roundedRatings = Math.round(pro.ratings);
                            return (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-[23%]"
                                >
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-md p-6 w-64 flex-shrink-0"
                                    >
                                        {pro.photo}
                                        <h3 className="text-xl font-semibold mb-2">{pro.name}</h3>
                                        <p className="text-gray-600 mb-2">{pro.profession}</p>
                                        <div className="flex items-center justify-start mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    className={`w-5 h-5 ${star <= roundedRatings ? 'text-yellow-500' : 'text-gray-300'} fill-current`}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                            <span className="ml-2 text-gray-600">({pro.ratings})</span>
                                        </div>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                                            View Profile
                                        </button>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    </section>
);
}

export default FeaturedProfessionals;

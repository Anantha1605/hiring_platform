import { Armchair, Cable, Drill, Droplet, GraduationCap, Hammer, PaintRoller, Wrench } from 'lucide-react'
import React from 'react'

const popularServices = [
  { name: 'Electrical & Wire Repairing', icon: <Cable className="w-full h-full"/> },
  { name: 'Teaching', icon: <GraduationCap  className="w-full h-full"/> },
  { name: 'Carpentery', icon: <Hammer  className="w-full h-full"/> },
  { name: 'Construction', icon: <Drill  className="w-full h-full"/> },
  { name: 'Wall Painting', icon: <PaintRoller  className="w-full h-full"/> },
  { name: 'House Cleaning & Maid', icon: <Armchair  className="w-full h-full"/> },
  { name: 'Plumber', icon: <Droplet  className="w-full h-full"/> },
  { name: 'Local Installation', icon: <Wrench  className="w-full h-full"/> },
  // { name: 'Architects & Engineers', icon: '/placeholder.svg?height=48&width=48' },
  // { name: 'Teacher', icon: <GraduationCap  className="w-full h-full"/> },
  // { name: 'Carpentry', icon: '/placeholder.svg?height=48&width=48' },
  // { name: 'Carpet', icon: '/placeholder.svg?height=48&width=48' },
  // { name: 'Cleaning & Pest', icon: '/placeholder.svg?height=48&width=48' },
  // { name: 'Concrete, Brick & Stone', icon: '/placeholder.svg?height=48&width=48' },
  // { name: 'Decks & Porches', icon: '/placeholder.svg?height=48&width=48' },
  // { name: 'Driveways & Patios', icon: '/placeholder.svg?height=48&width=48' },
]


function PopularServices() {
  return (
    <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center  justify-between mb-6">
        <h2 className="text-xl  font-semibold">Popular Services</h2>
        {/* <button className="text-white bg-blue-600 px-4 py-2 rounded-full text-sm">
          Browse all services
        </button> */}
      </div>
      <div className="grid grid-cols-4 gap-8">
        {popularServices.map((service) => (
          <a
            key={service.name}
            href="#"
            className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 mb-3">
              {/* <img src={service.icon} alt={service.name} className="w-full h-full" /> */}
              {service.icon}
            </div>
            <span className="text-center text-sm">{service.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
  )
}

export default PopularServices

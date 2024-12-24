import { CircleUser } from 'lucide-react'
import React from 'react'

function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((testimonial) => (
          <div key={testimonial} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {/* <img src={`/user-${testimonial}.jpg`} alt={`User ${testimonial}`} width={50} height={50} className="rounded-full mr-4" /> */}
                <CircleUser width={50} height={50} className="rounded-full mr-4"/>              
              <div>
                <h3 className="font-semibold">Jane Smith</h3>
                <p className="text-gray-600 text-sm">Hired a Plumber</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">"Great service! The plumber was professional and fixed the issue quickly."</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials

import React from 'react'

function ServiceGrid() {
  return (
    <section className="py-10">
    <h2 className="text-xl font-bold text-center">Popular services in Los Angeles, California.</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 px-4">
        <div className="p-4 border rounded-md text-center">Home Cleaning</div>
        <div className="p-4 border rounded-md text-center">Handyman</div>
        <div className="p-4 border rounded-md text-center">Electrical</div>
        <div className="p-4 border rounded-md text-center">Interior Painting</div>
    </div>
    </section>
  )
}

export default ServiceGrid

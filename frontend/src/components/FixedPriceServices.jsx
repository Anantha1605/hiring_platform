import React from 'react'

function FixedPriceServices() {
  return (
    <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-xl p-8 flex items-center">
            <div className="w-1/4">
              <img
                src="./images/electrician.jpg"
                alt="Service professional"
                className="rounded-lg"
              />
            </div>
            <div className="w-2/3 pl-12">
              <h2 className="text-2xl font-bold mb-4">Looking to book a fixed price service?</h2>
              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-600" />
                  <span>See your price</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-600" />
                  <span>Book online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-600" />
                  <span>Pay online</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                Book Services
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FixedPriceServices

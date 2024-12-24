import React from 'react'
import {MagnifyingGlassIcon, MapPinIcon} from '@heroicons/react/24/outline'

function HeroSection() {
  const handleLocationChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setLocation(value);
    }
  };

  const [location, setLocation] = React.useState('');

  return (
    <section className="relative bg-navy-900 text-black">
      <div className="container mx-auto px-4 py-16 flex">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-8">
            Get the right local<br />pro for any home<br />project.
          </h1>
          <div className="flex w-full max-w-4xl border rounded-lg" style={{borderColor:'rgb(125, 147, 207)'}}>
            <div className="flex-1 relative w-3/5 border-r" style={{borderColor:'rgb(125, 147, 207)'}}> 
              <input
                type="text"
                placeholder="What can we help you with?"
                className="w-full px-4 py-3 pr-10 rounded-l-lg text-gray-900"
              />
              {/* <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" /> */}
            </div>
            <div className="flex w-2/5">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full px-4 py-3 pl-10 rounded-r-none text-gray-900"
                  value={location}
                  onChange={handleLocationChange}
                />
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <button style={{backgroundColor: '#1D4ED8'}} className="text-white px-6 py-3 rounded-r-lg font-medium">
                Find Pros
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection

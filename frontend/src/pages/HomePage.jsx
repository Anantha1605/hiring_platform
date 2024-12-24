import BrowseByCategory from '@/components/BrowseByCategory'
import FeaturedProffesionals from '@/components/FeaturedProffesionals'
import FixedPriceServices from '@/components/FixedPriceServices'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import PopularServices from '@/components/PopularServices'
import Testimonials from '@/components/Testimonials'
import { Button } from '@/components/ui/button'
import React from 'react'



function HomePage() {
  return (
    <div className="min-h-screen bg-white mx-28">
      <HeroSection/>
      <BrowseByCategory/>
      <PopularServices/>
      <FeaturedProffesionals/>      
      <FixedPriceServices/>
      <Testimonials/>
    </div>
  )
}

export default HomePage

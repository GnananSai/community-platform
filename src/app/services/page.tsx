import ServicesCreate from '@/components/ServicesCreate'
import ServicesFeed from '@/components/ServicesFeed'
import ServicesHero from '@/components/ServicesHero'
import ServicesSearch from '@/components/ServicesSearch'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <ServicesHero />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ServicesFeed />
        </div>
        <div className="space-y-4">
          <ServicesSearch/>
          <ServicesCreate />
        </div>
      </div>
    </div>
  )
}

export default page

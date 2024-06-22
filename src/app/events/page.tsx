import EventCreate from '@/components/EventCreate'
import EventFeed from '@/components/EventFeed'
import EventHero from '@/components/EventHero'
import EventSearch from '@/components/EventSearch'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <EventHero />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <EventFeed />
        </div>
        <div className="space-y-4">
          <EventSearch />
          <EventCreate />
        </div>
      </div>
    </div>
  )
}

export default page

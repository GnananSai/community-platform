import React from 'react'
import dynamic from 'next/dynamic'

const EventPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:mt-0 lg:col-span-6 m-5 transition ease-in-out hover:scale-105">
            <img 
              src="/event-pic.webp"
              alt="Community"
              className="rounded-lg"
            />
          </div>
          <div className="mr-auto px-4 w-full lg:ml-10 lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800">
              Event Name
            </h1>
            <p className='flex justify-end'>Posted by - Username</p>
            <div className='my-6'>
                <p className="max-w-2xl font-light text-gray-500 mb-4 lg:mb-8 md:text-lg lg:text-xl ">
                Lorem ipsum dolor sit amet. Qui adipisci quos vel possimus esse non laudantium voluptates aut expedita reprehenderit. Ut quia nisi et inventore repudiandae sed provident natus ad explicabo cupiditate ex voluptatibus tempore sit ducimus omnis et Quis consequuntur. Ut nemo labore qui ipsa sunt qui esse expedita et blanditiis dicta aut praesentium harum id provident nulla.
                </p>

                <div className='flex flex-col gap-2 font-bold text-lg'>
                    <p>
                        Location: 
                    </p>
                    <p>
                        Price: 
                    </p>
                    <p>
                        Date:
                    </p>
                    <p>
                        Seats left:
                    </p>
                </div>
                
                
                
            </div>
            <div className="flex gap-5 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
                >
                  Book
                </a>
            </div>

          </div>
        </div>
      </section>
  )
}

export default EventPage
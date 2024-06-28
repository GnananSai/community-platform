'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Modal from '@/components/Modal/modal'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { IEvent } from '@/models/Event'


const EventPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [event, setEvent] = useState<IEvent>({} as any);
  const router = useRouter();
  const searchParams = useParams();
  const { id } = useParams();
  
  console.log(id)

  useEffect(() => {
    if (id) {
      fetch(`/api/event/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setEvent(data.event); // Ensure the correct data structure is used
          }
        });
    }
  }, [id]);
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:mt-0 lg:col-span-6 m-5 transition ease-in-out hover:scale-105">
            <img 
              src={event?.image_url || "/community-pic.jpg"}
              alt="Community"
              className="rounded-lg"
            />
          </div>
          <div className="mr-auto px-4 w-full lg:ml-10 lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800">
              {event.name}
            </h1>
            <p className='flex justify-end'>Posted by - Username</p>
            <div className='my-6'>
                <p className="max-w-2xl font-light text-gray-500 mb-4 lg:mb-8 md:text-lg lg:text-xl ">
                {event.description}
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
                  className="inline-flex gap-2 items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
                >
                <img src="/backarrow.png" className='h-5'/>
                  Go Back
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
                  onClick={() => setShowModal(true)}
                >
                  Book
                </a>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} confirmMessage={"Are you sure you want to register for the event?"}/>
            

          </div>
        </div>
      </section>
  )
}

export default EventPage
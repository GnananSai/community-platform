"use client";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal/modal";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ICommunity } from "@/models/Community";
import Link from "next/link";
import { join } from "path";
import PostFeed from "@/components/Post/PostFeed";
import PostCreate from "@/components/Post/CreatePost";

const CommunityPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [community, setCommunity] = useState<ICommunity>({} as any);
  const [joined, setJoined] = useState(true);
  const router = useRouter();
  const { id } = useParams();

  const posts=[
    {
      
    }
  ]

  useEffect(() => {
    if (id) {
      fetch(`/api/community/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setCommunity(data.community); // Update community state with fetched data
          }
        })
        .catch((error) => {
          console.error("Error fetching community:", error);
        });
    }
  }, [id]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mt-0 lg:col-span-6 m-5 transition ease-in-out hover:scale-105">
          <img
            src={community.image_url || "/community-pic.jpg"}
            alt="Community"
            className="rounded-lg"
          />
        </div>
        <div className="mr-auto px-4 w-full lg:ml-10 lg:col-span-5">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-800">
            {community.name}
          </h1>
          <p className="flex justify-end">Created by - </p>
          <div className="my-6">
            <p className="max-w-2xl font-light text-gray-500 mb-4 lg:mb-8 md:text-lg lg:text-xl ">
              {community.description}
            </p>

            <div className="flex flex-col gap-2 font-bold text-lg">
              <p>Conditions:</p>
              <p>Members: {}</p>
            </div>
          </div>
          <div className="flex gap-5 justify-center">
            <Link
              href="#"
              className="inline-flex gap-2 items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
            >
              <img src="/backarrow.png" className="h-5" />
              Go Back
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-blue-gray-800 text-white border border-gray-800 rounded-lg hover:bg-white hover:text-gray-800 focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105"
              onClick={() => {setShowModal(true);setJoined(!joined)}}
            >
              {joined? "Leave": "Join Community"}
            </Link>
          </div>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            confirmMessage={"Are you sure you want to join the community?"}
          />
        </div>
      </div>
      <div className="w-4/5 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <PostFeed posts={posts} home={false} />
        </div>
        <div className="space-y-4">
          <div >
            {/* <CommunitySearch /> */}
            <PostCreate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPage;

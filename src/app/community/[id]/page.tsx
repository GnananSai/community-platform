"use client";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal/modal";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ICommunity } from "@/models/Community";
import { IUser } from "@/models/User";
import Link from "next/link";
import PostFeed from "@/components/Post/PostFeed";
import PostCreate from "@/components/Post/CreatePost";
import { useUser } from "@/context/UserContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import { IPost } from "@/models/Posts";

const CommunityPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [community, setCommunity] = useState<ICommunity>({} as any);
  const [owner, setOwner] = useState<IUser>({} as IUser);
  const [posts, setPosts] = useState([]);
  const { user } = useUser();
  const userId = user?._id as string;
  const [joined, setJoined] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/community/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setCommunity(data.community);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching community:", error);
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (community._id && userId) {
      setJoined(community.members.includes(userId));
    }
  }, [community, userId]);

  useEffect(() => {
    if (community._id) {
      fetch(`/api/post/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setPosts(
              data.posts.sort(
                (a: IPost, b: IPost) =>
                  +new Date(b.createdAt) - +new Date(a.createdAt)
              )
            );
          }
        });
    }
  }, [community, id]);

  useEffect(() => {
    if (community.owner) {
      fetch(`/api/profile/?id=${community.owner}`)
        .then((res) => res.json())
        .then((data) => {
          setOwner(data.user);
        });
    }
  }, [community.owner]);

  const confirmJoinorLeave = () => {
    if (joined) {
      fetch(`/api/community/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, join: false }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setJoined(false);
          }
        });
    } else {
      fetch(`/api/community/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, join: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setJoined(true);
          }
        });
    }
  };

  if (loading) {
    return (
      <section className="bg-white dark:bg-gray-900 flex flex-col items-center w-full gap-5 min-h-[75vh]">
        <LoadingSpinner />
      </section>
    );
  } else {
    return (
      <section className="bg-white dark:bg-gray-900 flex flex-col items-center w-full gap-5 min-h-[75vh]">
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
            <p className="flex">Created by - {owner?.name}</p>
            <p className="flex">
              Members - {community.members ? community.members.length : 0}
            </p>
            <div className="my-6">
              <p className="max-w-2xl font-light text-gray-500 mb-4 lg:mb-8 md:text-lg lg:text-xl ">
                {community.description}
              </p>
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
                onClick={() => {
                  setShowModal(true);
                }}
              >
                {joined ? "Leave" : "Join Community"}
              </Link>
            </div>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              confirmAction={confirmJoinorLeave}
              confirmMessage={
                joined
                  ? "Are you sure you want to leave?"
                  : "Are you sure you want to join?"
              }
            />
          </div>
        </div>

        {joined && (
          <div className="w-4/5 max-w-6xl flex lg:flex-row flex-col justify-between gap-5 lg:gap-0">
            <PostFeed posts={posts} home={false} />
            <div className="space-y-4 w-full">
              <PostCreate />
            </div>
          </div>
        )}
      </section>
    );
  }
};

export default CommunityPage;

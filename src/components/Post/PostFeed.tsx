import React from "react";
import Link from "next/link";
import Post from "./Post"; // Ensure Post component is correctly imported
import { IPost } from "@/models/Posts";

interface ICommunityFeed {
  posts: IPost[];
  home: boolean;
}

const PostFeed: React.FC<ICommunityFeed> = ({ posts, home }) => {
  return (
    <section className="flex flex-wrap flex-col items-center gap-5 md:gap-10 rounded-2xl w-full lg:mb-10 lg:px-8">
      <article className="flex justify-between items-center w-full px-5 ">
        <h1 className="text-2xl font-bold md:text-4xl ">Top Posts</h1>
        {home ? (
          <Link
            href="/posts"
            className="inline-flex items-center justify-center text-base px-2 font-small text-center text-gray-800 border border-gray-800 rounded-lg hover:bg-blue-gray-800 hover:text-white focus:ring-4 focus:ring-gray-100 transition ease-in-out hover:scale-105 md:px-5 py-3 font-medium"
          >
            More
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        ) : (
          <></>
        )}
      </article>
      <article className="flex flex-col gap-5 sm:w-11/12 h-fit justify-center items-center">
        {posts.map((post, idx) => (
          <Post key={idx} post={post} />
        ))}
      </article>
    </section>
  );
};

export default PostFeed;

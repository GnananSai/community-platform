import React, { useState } from 'react';
import { IPost } from "@/models/Posts"; // Make sure to update the path as needed
import { FaThumbsUp } from 'react-icons/fa';

interface PostProps {
  post: IPost;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const initialLikes = post.likes.length; // Ensure initialLikes is correctly typed as number
  const [likes, setLikes] = useState<number>(initialLikes);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1); // Update likes count by incrementing
    // Here you can add additional logic to handle the like action, like sending a request to the server
  };

  return (
    <section className="w-fit h-fit shadow-blue-gray-800 shadow-lg p-5 rounded-lg mb-3 md:w-full col-span-6">
      <article color="blue-gray" className="relative h-56">
        <img
          src={post.img_url}
          alt="post-image"
          className="w-fit h-full sm:w-full sm:h-full rounded-lg object-cover"
        />
      </article>
      <article>
        <h1 className="mb-2 mt-4 font-bold text-blue-gray-800 text-xl">
          {post.title}
        </h1>
        <p className="text-blue-gray-600">{post.description}</p>
      </article>
      <article className="pt-3 flex justify-between items-center">
        <button
          className="flex items-center bg-blue-gray-800 text-white px-3 py-2 rounded-xl hover:bg-blue-gray-700 font-bold"
          onClick={handleLike}
        >
          <FaThumbsUp className="mr-2" /> Like
        </button>
        <span className="text-blue-gray-800 font-bold">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </article>
    </section>
  );
};

export default PostCard;

import React, { useEffect } from "react";
import { IPost } from "@/models/Posts";

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [profile, setProfile] = React.useState<{ name: string } | null>(null);
  useEffect(() => {
    fetch(`api/profile/?id=${post.userId}`)
      .then((res) => res.json())
      .then((data) => setProfile(data.user));
  });
  return (
    <div className="p-4 mb-4 bg-white shadow-md rounded-lg">
      <img
        src={post.img_url}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>By {profile?.name}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Like <span>{post.likes ? post.likes.length : 0}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;

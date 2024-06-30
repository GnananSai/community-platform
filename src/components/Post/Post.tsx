import React, { useEffect, useState } from "react";
import { IPost } from "@/models/Posts"; // Make sure to update the path as needed
import { FaThumbsUp } from "react-icons/fa";
import { useUser } from "@/context/UserContext";

interface PostProps {
  post: IPost;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const { user } = useUser();
  const userId = user?._id as string;
  const [like, setLike] = useState<boolean | undefined>(undefined);
  const [likes, setLikes] = useState<number>(0);
  const [author, setAuthor] = useState<string>("Unknown Author");

  useEffect(() => {
    fetch(`/api/profile/?id=${post.userId}`)
      .then((res) => res.json())
      .then((data) => setAuthor(data.user.name));
  }, []);

  useEffect(() => {
    if (post.likes && userId) {
      setLike(post.likes.includes(userId));
      setLikes(post.likes.length ? post.likes.length : 0);
    }
  }, [post.likes, userId]);

  const handleLike = () => {
    fetch(`/api/post/${post._id}`, {
      method: "PUT",
      body: JSON.stringify({ userId: userId, like: like }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLike(!like);
        }
      });
    setLikes(like ? likes - 1 : likes + 1);
  };

  return (
    <section className="w-fit h-fit shadow-blue-gray-800 shadow-lg p-5 rounded-lg mb-3 md:w-full col-span-6">
      {post.img_url && (
        <article color="blue-gray" className="relative h-56 mb-4">
          <img
            src={post.img_url}
            alt="post-image"
            className="w-fit h-full sm:w-full sm:h-full rounded-lg object-cover"
          />
        </article>
      )}
      <article>
        <div className="mb-2 flex justify-between items-center">
          <h1 className="font-bold text-blue-gray-800 text-2xl">
            {post.title}
          </h1>
          <h1
            className={`font-bold text-white text-xl p-2 rounded-lg ${
              post.type === "report" ? `bg-red-300` : `bg-light-green-300`
            }`}
          >
            {post.type === "report" ? "Report" : "Post"}
          </h1>
        </div>
        <h2 className="mb-2  text-blue-gray-800 text-md">Author: {author}</h2>
        <p className="text-blue-gray-800">{post.description}</p>
      </article>
      <article className="pt-3 flex justify-between items-center">
        <button
          className={`flex items-center text-white px-3 py-2 rounded-xl  font-bold ${
            like
              ? `bg-light-green-300 hover:bg-light-green-700`
              : `bg-blue-gray-800 hover:bg-blue-gray-700`
          }`}
          onClick={handleLike}
        >
          <FaThumbsUp className="mr-2" /> {like ? "Liked" : "Like"}
        </button>
        <span className="text-blue-gray-800 font-bold">{likes}</span>
      </article>
    </section>
  );
};

export default PostCard;

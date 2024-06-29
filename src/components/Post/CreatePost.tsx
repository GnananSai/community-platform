import React, { useState } from "react";
import { IPost } from "@/models/Posts";
import { useUser } from "@/context/UserContext";
import Upload from "../Upload";
const initialPostValues = {
  title: "",
  describtion: "",
  img_url: "",
  userId: "",
  communityId: "",
  type: "post",
  createdAt: new Date(),
  likes: [],
};

interface CreateProps {
  communityId: string;
}

const CreatePost: React.FC<CreateProps> = ({ communityId }) => {
  const { user } = useUser();
  const [post, setPost] = useState(initialPostValues);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    setPost({ ...post, userId: JSON.stringify(user._id) });
    setPost({ ...post, communityId: communityId });
    e.preventDefault();
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            onChange={(e) => handleChange(e)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={(e) => handleChange(e)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            rows={5}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imgUrl"
          >
            Image URL
          </label>
          <Upload onUpload={(url) => setPost({ ...post, img_url: url })} />
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Type
          </span>
          <select name="type" id="type" onChange={(e) => handleChange(e)}>
            <option value="post">Post</option>
            <option value="report">Report</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

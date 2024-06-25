import { ICommunity } from "@/models/Community";

interface CommunityCardProps {
  data: ICommunity;
}

const CommunityCard = ({ data }: CommunityCardProps) => {
  return (
    <section className="w-fit h-fit shadow-blue-gray-800 shadow-lg p-5 rounded-lg mb-3 md:w-full col-span-6">
      <article color="blue-gray" className="relative h-56">
        <img
          src={data.image_url}
          alt="card-image"
          className="w-fit h-full sm:w-full sm:h-full rounded-lg object-cover"
        />
      </article>
      <article>
        <h1 className="mb-2 mt-4 font-bold text-blue-gray-800 text-xl">
          {data.name}
        </h1>
        <p>{data.description}</p>
        <h2>Members: {data.members ? data.members.length : 0}</h2>
      </article>
      <article className="pt-3">
        <button className="bg-blue-gray-800 text-white px-3 py-2 rounded-xl hover:bg-blue-gray-700 font-bold">
          View
        </button>
      </article>
    </section>
  );
};

export default CommunityCard;

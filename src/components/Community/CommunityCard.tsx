import { ICommunity } from "@/models/Community";
import { useRouter } from "next/navigation";

interface CommunityCardProps {
  data: ICommunity;
}

const CommunityCard = ({ data }: CommunityCardProps) => {
  const router = useRouter();
  return (
    <section className="w-fit h-fit shadow-blue-gray-800 shadow-lg p-5 rounded-lg mb-3 md:w-full col-span-6 transition ease-in-out hover:scale-105">
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
        <p>
          {" "}
          {data.description.length > 100
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </p>
        <div className="flex justify-between mt-2">
          <h1>Owner: {data.owner ? data.owner : "Unknown"}</h1>
          <h2>Members: {data.members ? data.members.length : 0}</h2>
        </div>
      </article>
      <article className="pt-3">
        <button
          className="bg-blue-gray-800 text-white px-3 py-2 rounded-xl hover:bg-blue-gray-700 font-bold"
          onClick={() => {
            router.push(`/community/${data._id}`);
          }}
        >
          View
        </button>
      </article>
    </section>
  );
};

export default CommunityCard;

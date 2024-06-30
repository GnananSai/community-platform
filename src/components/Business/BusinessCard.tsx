import { IBusiness } from "@/models/Business";
interface BusinessCardProps {
  data: IBusiness;
}

const BusinessCard = ({ data }: BusinessCardProps) => {
  return (
    <section className="w-fit h-fit shadow-blue-gray-800 shadow-lg p-5 rounded-lg mb-3 md:w-full col-span-6 transition ease-in-out hover:scale-105">
      <article color="blue-gray" className="relative h-56">
        <img
          src={data.image_url || "/BusinessCart.jpg"}
          alt="card-image"
          className="w-fit h-full sm:w-full sm:h-full rounded-lg object-cover"
        />
      </article>
      <article className="flex flex-col gap-2">
        <h1 className="mt-3 font-bold text-blue-gray-800 text-xl">
          {data.name}
        </h1>
        <h2 className="">
          {" "}
          {data.description.length > 100
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </h2>
      </article>
    </section>
  );
};

export default BusinessCard;

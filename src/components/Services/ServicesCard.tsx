import { IService } from "@/models/Service";

interface ServicesCardProps {
  data: IService;
}

const ServicesCard = ({ data }: ServicesCardProps) => {
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
        <h2>
          {data.description.length > 100
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </h2>
      </article>
    </section>
  );
};

export default ServicesCard;

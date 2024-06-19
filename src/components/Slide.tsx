import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
}

const Slide: React.FC<propsType> = ({ img }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="outline-none border-none relative md:w-[70%] flex justify-center items-center">
        <Image
          className="w-fit md:w-full h-[300px] md:h-auto rounded-xl object-cover"
          src={img}
          alt="banner"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Slide;

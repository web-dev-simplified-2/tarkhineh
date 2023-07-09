import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
}

function MenuItemCard({ title, image }: Props) {
  return (
    <div className="  bg-primary my-12 w-full rounded-lg flex flex-col items-center  relative lg:h-[160px] lg:max-w-[287.5px] h-[80px] justify-center">
      <Image
        src={image}
        alt="title"
        width={1080}
        height={1080}
        className="  w-auto h-[120px]   lg:-mt-32  -mt-20   lg:h-[240px] "
      />
      <button className=" bg-white font-primary  flex items-center justify-center lg:h-[48px] lg:w-[155px] h-[32px] w-[96px] absolute  left-1/2 -translate-x-1/2 -bottom-5 text-[#353535] shadow-lg whitespace-nowrap rounded-[4px] py-2 px-4">
        {title}
      </button>
    </div>
  );
}

export default MenuItemCard;

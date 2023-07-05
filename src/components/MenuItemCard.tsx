import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
}

function MenuItemCard({ title, image }: Props) {
  return (
    <div className="  bg-primary my-16 w-full rounded-lg flex flex-col items-center  relative md:h-[160px] md:max-w-[287.5px] h-[80px] justify-center">
        <Image src={image} alt="title" width={1080} height={1080} className="  w-auto h-[120px]   md:-mt-32  -mt-20   md:h-[240px] "/>
        <button
        className=" bg-white font-primary  flex items-center justify-center md:h-[48px] md:w-[155px] h-[32px] w-[96px] absolute  left-1/2 -translate-x-1/2 -bottom-5 text-[#353535] shadow-md whitespace-nowrap rounded-[4px] py-2 px-4"
        >
            {title}
        </button>
    </div>
  );
}

export default MenuItemCard;

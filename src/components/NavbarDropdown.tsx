import React, { useState } from "react";
import MotionDiv from "./MotionDiv";
import { ArrowDown2 } from "iconsax-react";
import { motion } from "framer-motion";

interface Props {
  items: { title: string; href: string }[];
  mainTitle: string;
}

function NavbarDropDown({ items, mainTitle }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [dynamicTitle, setDynamicTitle] = useState("");

  const isActive = () => true;

  const handleToggle = (title: string) => {
    setDynamicTitle(title);

    setIsOpen(false);
  };

  return (
    <MotionDiv>
      <div
        onClick={() => setIsOpen((state) => !state)}
        className=" cursor-pointer relative h-[36px] flex items-center justify-center ml-[24px]  "
      >
        <p
          className={`text-[20px] text-center font-[700] ${
            isActive() ? "text-[#417F56]" : "text-[#717171]"
          }
          href
        )}`}
        >
          {dynamicTitle ? dynamicTitle : mainTitle}
        </p>
        <ArrowDown2
          className={`w-[16px] mt-[5px] mr-[4px] ${
            isActive() ? "text-[#417F56]" : "text-[#717171]"
          }`}
        />
      </div>

      {isOpen && (
        <motion.div className=" absolute -bottom-24 bg-white flex flex-col items-center shadow-md rounded-md">
          {items.map((item, index) => {
            return (
              <div
                onClick={() => handleToggle(item.title)}
                key={index}
                className={` py-1 font-primary px-4 border-b cursor-pointer border-gray-200 text-gray-700  `}
              >
                {item.title}
              </div>
            );
          })}
        </motion.div>
      )}
    </MotionDiv>
  );
}

export default NavbarDropDown;

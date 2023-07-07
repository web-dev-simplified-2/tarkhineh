import React, { useCallback, useState } from "react";
import MotionDiv from "./MotionDiv";
import { ArrowDown2 } from "iconsax-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface Props {
  items: { title: string; href: string }[];
  mainTitle: string;
  href: string;
}

function NavbarDropDown({ items, mainTitle, href }: Props) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [dynamicTitle, setDynamicTitle] = useState("");

  const path = usePathname();

  const isActive = useCallback((href: string) => path === href, [path]);

  const handleToggle = (title: string) => {
    setDynamicTitle(title);
    router.push(href);

    setIsOpen(false);
  };

  return (
    <MotionDiv>
      <div
        onClick={() => setIsOpen((state) => !state)}
        className=" cursor-pointer relative h-[36px] flex items-center justify-center ml-[24px]  "
      >
        <p
          className={`text-[20px] text-center font-primary ${
            isActive(href) ? "text-[#417F56] font-primarySemiBold" : "text-[#717171]"
          }
          href
        )}`}
        >
          {dynamicTitle ? dynamicTitle : mainTitle}
        </p>
        <ArrowDown2
          className={`w-[16px] mt-[5px] mr-[4px] ${
            isActive(href) ? "text-[#417F56]" : "text-[#717171]"
          }`}
        />

        {isActive(href) && (
          <motion.span
            layoutId="underline"
            className="absolute top-[36px] right-0 h-[1px] w-full bg-primary"
          />
        )}
      </div>

      {isOpen && (
        <motion.div className=" absolute -bottom-24 bg-white flex flex-col items-center shadow-md rounded-md">
          {items.map((item, index) => {
            return (
              <div
                onClick={() => handleToggle(item.title)}
                key={index}
                className={` py-1 font-primary px-8 border-b cursor-pointer border-gray-200 text-gray-700  `}
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

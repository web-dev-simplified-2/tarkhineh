import React from "react";
import mainFood from "../assets/MenuSection/mainFood.png";
import drinks from "../assets/MenuSection/drinks.png";
import dessert from "../assets/MenuSection/dessert.png";
import appetizer from "../assets/MenuSection/appetizer.png";
import MenuItemCard from "./MenuItemCard";

function MenuSection() {
  const menuList = [
    {
      name: "غذای اصلی",
      iamge: mainFood,
    },
    {
      name: "پیش غذا",
      iamge: appetizer,
    },
    {
      name: "دسر",
      iamge: dessert,
    },
    {
      name: "نوشیدنی",
      iamge: drinks,
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center my-8 w-full mx-auto max-w-7xl">
      <h1 className=" font-primarySemiBold text-xl mb-12 lg:mb-20">منوی رستوران</h1>

      <div className=" grid grid-cols-2 w-full px-4 rtl  lg:flex gap-4">
        {menuList.map((item, index) => {
          return (
            <MenuItemCard
              key={index}
              image={item.iamge.src}
              title={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MenuSection;

import React, { useState } from "react";
import Image from "next/image";
import aghdasie from "../assets/tarkhine-gardi/aghdasie.png";
import vanak from "../assets/tarkhine-gardi/vanak.png";
import chalos from "../assets/tarkhine-gardi/chalos.png";
import ekbatan from "../assets/tarkhine-gardi/ekbatan.png";
import { ArrowLeft2, Gallery } from "iconsax-react";
import TarkhineGardiModal from "./modals/TarkhineGardiModal";

const TarkhineGardi = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center items-center relative h-[550px] bg-[#FFFFFF]">
      <h3 className="absolute top-[5%] font-primary font-bold text-xl">
        ترخینه گردی
      </h3>
      <section className="flex font-primary space-x-3">
        <div
          className="w-[288px] h-[344px] bg-[#FFFFFF] border-solid border-2 border-[#315F41]  rounded-lg flex items-center justify-center relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={vanak}
            alt="vanak"
            className={`absolute top-0 w-[288px] ${
              isHovered ? "h-[190px]" : "h-[230px]"
            }`}
          />
          <div
            className={`absolute ${
              isHovered ? "bottom-[60px]" : "bottom-[20px]"
            } text-center`}
          >
            <h3 className="font-bold">شعبه ونک</h3>
            <p className="w-[272px] h-[50px] text-[#717171]">
              میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
            </p>
          </div>
          {isHovered && (
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="w-[140px] h-[40px] bg-transparent font-primary border-solid border-2 border-[#315F41] rounded text-center absolute bottom-3"
            >
              <ArrowLeft2
                className="inline-block mr-2 text-[#315F41]"
                name="arrow-left"
              />
              صفحه شعبه
            </button>
          )}
        </div>

        <div
          className="w-[288px] h-[344px] bg-[#FFFFFF] border-solid border-2 border-[#315F41] rounded-lg flex items-center justify-center relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={aghdasie}
            alt="aghdasie"
            className={`absolute top-0 w-[288px] ${
              isHovered ? "h-[190px]" : "h-[230px]"
            }`}
          />
          <div
            className={`absolute ${
              isHovered ? "bottom-[60px]" : "bottom-[20px]"
            } text-center`}
          >
            <h3 className="font-bold">شعبه اقدسیه</h3>
            <p className="w-[272px] h-[50px] text-[#717171]">
              خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
            </p>
          </div>
          {isHovered && (
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="w-[140px] h-[40px] bg-transparent font-primary border-solid border-2 border-[#315F41] rounded text-center absolute bottom-3"
            >
              <ArrowLeft2
                className="inline-block mr-2 text-[#315F41]"
                name="arrow-left"
              />
              صفحه شعبه
            </button>
          )}
        </div>

        <div
          className="w-[288px] h-[344px] bg-[#FFFFFF] border-solid border-2 border-[#315F41]  rounded-lg flex items-center justify-center relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={chalos}
            alt="chalos"
            className={`absolute top-0 w-[288px] ${
              isHovered ? "h-[190px]" : "h-[230px]"
            }`}
          />
          <div
            className={`absolute ${
              isHovered ? "bottom-[60px]" : "bottom-[20px]"
            } text-center`}
          >
            <h3 className="font-bold">شعبه چالوس</h3>
            <p className="w-[272px] h-[50px] text-[#717171]">
              چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی
            </p>
          </div>
          {isHovered && (
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="w-[140px] h-[40px] bg-transparent font-primary border-solid border-2 border-[#315F41] rounded text-center absolute bottom-3"
            >
              <ArrowLeft2
                className="inline-block mr-2 text-[#315F41]"
                name="arrow-left"
              />
              صفحه شعبه
            </button>
          )}
        </div>

        <div
          className="w-[288px] h-[344px] bg-[#FFFFFF] border-solid border-2 border-[#315F41] rounded-lg flex items-center justify-center relative "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={ekbatan}
            alt="ekbatan"
            className={`absolute top-0 w-[288px] ${
              isHovered ? "h-[190px]" : "h-[230px]"
            }`}
          />
          <div
            className={`absolute ${
              isHovered ? "bottom-[60px]" : "bottom-[20px]"
            } text-center`}
          >
            <h3 className="font-bold">شعبه اکباتان</h3>
            <p className="w-[272px] h-[50px] text-[#717171]">
              شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
            </p>
          </div>
          {isHovered && (
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="w-[140px] h-[40px] bg-transparent font-primary border-solid border-2 border-[#315F41] rounded text-center absolute bottom-3"
            >
              <ArrowLeft2
                className="inline-block mr-2 text-[#315F41]"
                name="arrow-left"
              />
              صفحه شعبه
            </button>
          )}
        </div>
      </section>
      <TarkhineGardiModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};
export default TarkhineGardi;

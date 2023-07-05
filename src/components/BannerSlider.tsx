"use client";

import React, { useEffect, useState } from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import RightArrow from "../assets/BannerSlider/RightArrow.jsx";
import LeftArrow from "../assets/BannerSlider/LeftArrow.jsx";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionDiv from "./MotionDiv";

interface BannerSliderProps {
  images: string[];
}

function BannerSlider({ images }: BannerSliderProps) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width, height);

  function heightHandler(height: number, width: number) {
    if (width >= 768) {
      return width / 336;
    } else {
      return width / 176;
    }
  }

  return (
    <MotionDiv>
      <CarouselProvider
        naturalSlideHeight={1}
        naturalSlideWidth={heightHandler(height, width)}
        totalSlides={images.length}
        className=" md:h-[336px] h-[176px] relative"
      >
        <Slider className="  relative">
          {images.map((image, index) => {
            return (
              <Slide
                key={index}
                index={index}
                className=" w-full  relative md:max-h-[336px] h-[176px]"
              >
                <div className=" md:h-[336px] h-[176px] w-full bg-black/40 absolute left-0 right-0 top-0 " />
                <div className=" md:h-[336px] h-[176px] w-full bg-[#21402B]/50 absolute left-0 right-0 top-0 " />

                <div className="  absolute left-0 right-0 flex items-center justify-center top-0 md:h-[336px] h-[176px] ">
                  <div className="  flex flex-col items-center ">
                    <p className=" text-white lg:text-4xl md:text-2xl  text-xl  font-primaryBold ">
                      یک ماجراجویی آشپزی برای تمام حواس
                    </p>

                    <button className=" md:font-primary  text-sm md:text-base  font-primaryThin bg-primary py-2 text-white px-3 md:px-8 rounded-md mt-5 md:mt-10">
                      سفارش آنلاین غذا
                    </button>
                  </div>
                </div>

                <Image
                  src={image}
                  alt="image"
                  width={1080}
                  height={1080}
                  className=" md:h-[336px] h-[176px] w-full object-cover"
                />
              </Slide>
            );
          })}
        </Slider>
        <div className="  absolute  left-0 right-0 flex items-end justify-center bottom-0 ">
          <div className="  md:w-[154px] md:h-[33px] h-[19px] w-[82px]  flex items-center justify-center  bg-no-repeat bg-[url('../assets/BannerSlider/Rectangle-mobile.png')] bg-top md:bg-[url('../assets/BannerSlider/Rectangle-desktop.png')]">
            {images.map((_, index) => {
              return (
                <div key={index} className=" flex  items-center justify-center">
                  <Dot
                    slide={index}
                    className=" h-1 w-1 md:w-2 md:h-2 mx-[2px]  disabled:bg-primary md:disabled:h-4 md:disabled:w-4 disabled:h-2 disabled:w-2 disabled:border-2 disabled:border-[#e5f2e9] rounded-full bg-[#adadad]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <ButtonBack className=" absolute left-8 z-10 disabled:opacity-0 hidden md:block text-white   top-[50%] ">
          <LeftArrow />
        </ButtonBack>

        <ButtonNext className=" absolute right-8 z-10 hidden disabled:opacity-0 md:block text-white  top-[50%] ">
          <RightArrow />
        </ButtonNext>
      </CarouselProvider>
    </MotionDiv>
  );
}

export default BannerSlider;

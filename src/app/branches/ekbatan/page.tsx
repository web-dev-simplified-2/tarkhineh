"use client"
import React from 'react';
import EkbatanBranchSlider from "../../../components/EkbatanBranchSlider";
import branchpicture from "../../../assets/BannerSlider/branchpicture.png";
import FoodSlider from "../../../components/FoodSlider";
import FoodSliderSecond from "../../../components/FoodSliderSecond";
import FoodSliderThird from "../../../components/FoodSliderThird";
import CommentSlider from '@/components/CommentSlider';

import bannerSlider from "../assets/BannerSlider/bannerSlider.jpg";
import bannerSlider2 from "../assets/BannerSlider/bannerSlider2.jpg";
import bannerSlider3 from "../assets/BannerSlider/bannerSlider3.jpg";
import bannerSlider4 from "../assets/BannerSlider/bannerSlider4.jpg";
import BannerSlider from "@/components/BannerSlider";



const page = () => {
  const images = [
    branchpicture.src,
    branchpicture.src,
    branchpicture.src,
    branchpicture.src
  ];

  return (
    <div>
      <BannerSlider images={images}/>
      <FoodSlider  />
      <FoodSliderSecond/>
      <FoodSliderThird/>
      <EkbatanBranchSlider images={images} />
      <CommentSlider/>
      
    </div>
  )
}

export default page;

import React from 'react';
import EkbatanBranchSlider from "../../../components/EkbatanBranchSlider";
import branchpicture from "../../../assets/BannerSlider/branchpicture.png";


const page = () => {
  const images = [
    branchpicture.src,
    branchpicture.src,
    branchpicture.src,
    branchpicture.src
  ];
  
  return (
    <div>
      <EkbatanBranchSlider images={images}/>
    </div>
  )
}

export default page;

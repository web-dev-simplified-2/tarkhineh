"client page";

import Image from "next/image";
import bannerSlider from "../assets/BannerSlider/bannerSlider.jpg";
import bannerSlider2 from "../assets/BannerSlider/bannerSlider2.jpg";
import bannerSlider3 from "../assets/BannerSlider/bannerSlider3.jpg";
import bannerSlider4 from "../assets/BannerSlider/bannerSlider4.jpg";
import BannerSlider from "@/components/BannerSlider";
import InfoSection from "../components/InfoSection";

const images = [
  bannerSlider.src,
  bannerSlider2.src,
  bannerSlider3.src,
  bannerSlider4.src,
];

export default function Home() {
  return (
    <div className=" min-h-screen w-full">
      
        {/* banner Slider */}
        <BannerSlider images={images} />
        <InfoSection/>

    </div>
  );
}

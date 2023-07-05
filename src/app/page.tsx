"use client";

import Image from "next/image";
import bannerSlider from "../assets/BannerSlider/bannerSlider.jpg";
import bannerSlider2 from "../assets/BannerSlider/bannerSlider2.jpg";
import bannerSlider3 from "../assets/BannerSlider/bannerSlider3.jpg";
import bannerSlider4 from "../assets/BannerSlider/bannerSlider4.jpg";
import BannerSlider from "@/components/BannerSlider";

import InfoSection from "../components/InfoSection";

import RegisterModal from "@/components/modals/RegisterModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useSession } from "next-auth/react";

const images = [
  bannerSlider.src,
  bannerSlider2.src,
  bannerSlider3.src,
  bannerSlider4.src,
];

export default function Home() {
  const registerModal = useRegisterModal();

  const { data: session } = useSession();

  return (
    <div className=" min-h-screen  w-full">
      {/* banner Slider */}

      <BannerSlider images={images} />
      <InfoSection />

      

      <button
        className=" p-5 bg-slate-800 text-white"
        onClick={() => registerModal.onOpen()}
      >
        open
      </button>

      <div className=" w-full overflow-x-auto">{JSON.stringify(session)}</div>

      <RegisterModal />
    </div>
  );
}

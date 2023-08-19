import React from 'react';
import Image from 'next/image';
import pic from "../../assets/BannerSlider/contact-us.png";
import InfoCard from '@/components/InfoCard';

function page() {
  return (
    <>
      {/* Banner */}
      <section className="font-primary relative">
        <Image
            src={pic}
            alt="image"
            width={1080}
            height={1080}
            className="h-[336px] w-full object-cover"
            /> 
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <p className="font-bold text-[#FFFFFF] text-[38px] bg-opacity-50 p-4">
                !  با ترخینه در تماس باشید
                </p>
            </div>
        </section>

      {/* Addresses */}
      <section className="flex flex-col space-y-6 my-[5%]">
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
      </section>
    </>
  )
}

export default page

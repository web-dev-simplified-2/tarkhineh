import React from "react";
import Img from "../assets/InfoSection/about.png";
import Image from "next/image";
import { ArrowLeft2, Diagram, User, MenuBoard, HomeWifi } from "iconsax-react";

const InfoSection = () => {
  return (
    <section className="w-full h-[390px] relative">
      <Image
        src={Img}
        alt="info"
        className=" md:h-[336px] h-[176px] w-full object-cover brightness-50"
      />
      <section className="flex justify-between space-x-30 pt-6">
        <div className=" space-y-4 absolute top-6 right-11 p-4 text-white text-right">
          <h4 className=" text-xl font-primaryBold ">
            رستوران های زنجیره ای ترخینه
          </h4>

          <p className="max-[1100px]:text-[18px] max-[1100px]:w-[490px] max-[947px]:text-[15px] max-[947px]:w-[361px] font-primary text-lg w-[600px]">

            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <button className="w-[184px] h-[40px] bg-transparent font-primary border-solid border-2 border-white rounded text-center absolute left-14">
            <ArrowLeft2 className="inline-block mr-2" name="arrow-left" />
            اطلاعات بیشتر
          </button>
        </div>

        <div className="w-[392px] h-[280px] font-primary text-lg absolute top-11 p-4 text-white">
          <div className="w-[392px] h-[136px] flex space-x-1">
            <div className="w-[184px] h-[136px] flex flex-col items-center">
              <Diagram />
              کیفیت بالای غذاها
            </div>
            <div className="w-[184px] h-[136px] flex flex-col items-center">
              <User />
              پرسنلی مجرب و حرفه‌ای
            </div>
          </div>

          <div className="w-[392px] h-[136px] flex space-x-1">
            <div className="w-[184px] h-[136px] flex flex-col items-center">
              <MenuBoard />
              منوی متنوع
            </div>
            <div className="w-[184px] h-[136px] flex flex-col items-center">
              <HomeWifi />
              محیطی دلنشین و آرام
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default InfoSection;
{
  /*

       
*/
}

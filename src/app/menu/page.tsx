import React from "react";
import BannerSlider from "@/components/BannerSlider";
import bannerSlider from "../../assets/BannerSlider/bannerSlider.jpg";
import bannerSlider2 from "../../assets/BannerSlider/bannerSlider2.jpg";
import bannerSlider3 from "../../assets/BannerSlider/bannerSlider3.jpg";
import bannerSlider4 from "../../assets/BannerSlider/bannerSlider4.jpg";
import FoodsCardComponent from "@/components/FoodsCardComponent";



const images = [
  bannerSlider.src,
  bannerSlider2.src,
  bannerSlider3.src,
  bannerSlider4.src,
];

const page = () => {
  
  return (
  <div className="font-primary">

    {/* Nav */}
      <BannerSlider images={images} />
      <div className="w-full h-[64px] flex justify-end bg-[#EDEDED] text-[#717171]  ">
        <ul className="flex space-x-5 mr-4 items-center ">
          <li className="hover:text-[#417F56] hover:font-bold hover:border-b-2 hover:border-[#417F56] cursor-pointer">نوشیدنی</li>
          <li className="hover:text-[#417F56] hover:font-bold hover:border-b-2 hover:border-[#417F56] cursor-pointer">دسر</li>
          <li className="hover:text-[#417F56] hover:font-bold hover:border-b-2 hover:border-[#417F56] cursor-pointer">پیش غذا</li>
          <li className="hover:text-[#417F56] hover:font-bold hover:border-b-2 hover:border-[#417F56] cursor-pointer">غذای اصلی</li>
        </ul>
      </div>
      {/*Section-Content*/}
      <section className="flex justify-around mt-5 mx-[5%] space-x-4">
      <div className="relative flex-grow">
                <div className="absolute top-2 left-4 flex items-center pr-3 pointer-events-none">
                
                    <svg
                      className="cursor-pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                        fill="#353535"
                      />
                      <path
                        d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                        fill="#353535"
                      />
                    </svg>
                </div>

                <input
                  type="text"
                  placeholder="جستجو"
                  className="text-right text-sm w-[496px] h-[40px] border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-3"
                  
                />
      </div>
      {/* Filters */}
      <div className="flex space-x-2 justify-end">
          <div className="w-[126px] h-[32px] bg-[#EDEDED] rounded-3xl flex items-center px-2">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 13.78C10.3734 13.78 10.2467 13.7333 10.1467 13.6333L5.80002 9.28668C5.09335 8.58001 5.09335 7.42001 5.80002 6.71335L10.1467 2.36668C10.34 2.17335 10.66 2.17335 10.8534 2.36668C11.0467 2.56001 11.0467 2.88001 10.8534 3.07335L6.50669 7.42001C6.18669 7.74001 6.18669 8.26001 6.50669 8.58001L10.8534 12.9267C11.0467 13.12 11.0467 13.44 10.8534 13.6333C10.7534 13.7267 10.6267 13.78 10.5 13.78Z" fill="#353535"/>
          </svg>
          <p className="text-[14px]">غذاهای ایرانی</p>
      </div>
    </div>
    <div className="flex space-x-2 justify-end">
          <div className="w-[126px] h-[32px] bg-[#EDEDED] rounded-3xl flex items-center px-2">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 13.78C10.3734 13.78 10.2467 13.7333 10.1467 13.6333L5.80002 9.28668C5.09335 8.58001 5.09335 7.42001 5.80002 6.71335L10.1467 2.36668C10.34 2.17335 10.66 2.17335 10.8534 2.36668C11.0467 2.56001 11.0467 2.88001 10.8534 3.07335L6.50669 7.42001C6.18669 7.74001 6.18669 8.26001 6.50669 8.58001L10.8534 12.9267C11.0467 13.12 11.0467 13.44 10.8534 13.6333C10.7534 13.7267 10.6267 13.78 10.5 13.78Z" fill="#353535"/>
          </svg>
          <p className="text-[14px]">اقتصادی‌ترین</p>
      </div>
    </div>
    <div className="flex space-x-2 justify-end">
          <div className="w-[126px] h-[32px] bg-[#EDEDED] rounded-3xl flex items-center px-2">
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 13.78C10.3734 13.78 10.2467 13.7333 10.1467 13.6333L5.80002 9.28668C5.09335 8.58001 5.09335 7.42001 5.80002 6.71335L10.1467 2.36668C10.34 2.17335 10.66 2.17335 10.8534 2.36668C11.0467 2.56001 11.0467 2.88001 10.8534 3.07335L6.50669 7.42001C6.18669 7.74001 6.18669 8.26001 6.50669 8.58001L10.8534 12.9267C11.0467 13.12 11.0467 13.44 10.8534 13.6333C10.7534 13.7267 10.6267 13.78 10.5 13.78Z" fill="#353535"/>
          </svg>
          <p className="text-[14px]">پرفروش‌ترین</p>
      </div>
    </div>
    </section>

    {/* Menu */}
    <section className="p-[5%]" >

    <div className="flex justify-between">
    <button className="w-[184px] h-[40px] border border-[#417F56] rounded-[4px] flex items-center pl-8">
              تکمیل خرید
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.69 17.75H8.03999C7.04999 17.75 6.09999 17.33 5.42999 16.6C4.75999 15.87 4.42 14.89 4.5 13.9L5.33 3.94C5.36 3.63 5.24999 3.33001 5.03999 3.10001C4.82999 2.87001 4.54 2.75 4.23 2.75H2.5C2.09 2.75 1.75 2.41 1.75 2C1.75 1.59 2.09 1.25 2.5 1.25H4.24001C4.97001 1.25 5.65999 1.56 6.14999 2.09C6.41999 2.39 6.62 2.74 6.73 3.13H19.22C20.23 3.13 21.16 3.53 21.84 4.25C22.51 4.98 22.85 5.93 22.77 6.94L22.23 14.44C22.12 16.27 20.52 17.75 18.69 17.75ZM6.78 4.62L6 14.02C5.95 14.6 6.14 15.15 6.53 15.58C6.92 16.01 7.45999 16.24 8.03999 16.24H18.69C19.73 16.24 20.67 15.36 20.75 14.32L21.29 6.82001C21.33 6.23001 21.14 5.67001 20.75 5.26001C20.36 4.84001 19.82 4.60999 19.23 4.60999H6.78V4.62Z" fill="#417F56"/>
        <path d="M16.75 22.75C15.65 22.75 14.75 21.85 14.75 20.75C14.75 19.65 15.65 18.75 16.75 18.75C17.85 18.75 18.75 19.65 18.75 20.75C18.75 21.85 17.85 22.75 16.75 22.75ZM16.75 20.25C16.47 20.25 16.25 20.47 16.25 20.75C16.25 21.03 16.47 21.25 16.75 21.25C17.03 21.25 17.25 21.03 17.25 20.75C17.25 20.47 17.03 20.25 16.75 20.25Z" fill="#417F56"/>
        <path d="M8.75 22.75C7.65 22.75 6.75 21.85 6.75 20.75C6.75 19.65 7.65 18.75 8.75 18.75C9.85 18.75 10.75 19.65 10.75 20.75C10.75 21.85 9.85 22.75 8.75 22.75ZM8.75 20.25C8.47 20.25 8.25 20.47 8.25 20.75C8.25 21.03 8.47 21.25 8.75 21.25C9.03 21.25 9.25 21.03 9.25 20.75C9.25 20.47 9.03 20.25 8.75 20.25Z" fill="#417F56"/>
        <path d="M21.5 8.75H9.5C9.09 8.75 8.75 8.41 8.75 8C8.75 7.59 9.09 7.25 9.5 7.25H21.5C21.91 7.25 22.25 7.59 22.25 8C22.25 8.41 21.91 8.75 21.5 8.75Z" fill="#417F56"/>
      </svg>
    </button>
          <h2 className="text-right font-bold text-[24px] mb-2">غذاهای ایرانی</h2>
    </div>
        
      <section className="mt-[3%]">
        {/* First Menu */}
      <div className="w-full flex flex-wrap justify-between">
          <FoodsCardComponent />
          <FoodsCardComponent />
      </div> 
        {/* Second Menu */}
      <h2 className="text-right font-bold text-[24px] mb-2">غذاهای غیر ایرانی</h2>
        <div className="w-full flex flex-wrap justify-between">
          <FoodsCardComponent />
          <FoodsCardComponent />
      </div>
      {/* Third Menu */}
      <h2 className="text-right font-bold text-[24px] mb-2">پیتزاها</h2>
        <div className="w-full flex flex-wrap justify-between">
          <FoodsCardComponent />
          <FoodsCardComponent />
      </div>
      {/* Fourth Menu */}
      <h2 className="text-right font-bold text-[24px] mb-2">ساندویچ‌ها</h2>
        <div className="w-full flex flex-wrap justify-between">
          <FoodsCardComponent />
          <FoodsCardComponent />
      </div> 

      </section>
    </section>
  </div>
  )
};

export default page;

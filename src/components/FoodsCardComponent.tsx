import React from 'react';
import { Heart } from "iconsax-react";
import Image from "next/image";
import pic1 from "../assets/FoodCard/Food Picture.png";

function FoodsCardComponent() {
  return (
        <div className="font-primary w-[600px] h-[158px] flex justify-between rounded-[8px] border border-[#ADADAD] shadow-md mb-[3%]">
            <div className="flex flex-col justify-between p-2">
            <div className="flex justify-between items-center">
            <Heart className="w-[16px] h-[16px] text-[#ADADAD]"/>
            <h3 className="font-bold text-lg">کوفته برنجی</h3>
            </div>
            {/* About */}
                <div className="h-[61px] w-[383px] flex">
                <div className="flex-col w-[92px] h-[48px] mr-4">
                <div className='text-[15px] mb-3'>
                    <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[12px] px-2 rounded-lg text-[#C30000] mr-2'>%۸</span>
                    <span className="font-primary text-[#7e7a7a] text-[13px] line-through">۲۲۰٬۰۰۰</span>
                </div>
                    <p className="text-[14px] font-bold">۲۰۹٬۰۰۰ تومان</p>
                </div>
                    <p className="w-[263px] h-[50px] text-right">
                        برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز
                    </p>
                </div>
                {/* button - stars */}
                <div className="w-[383px] h-[40px] flex justify-between">
                <button className="w-[244px] h-[40px] bg-[#417F56] text-white font-bold text-[16px] rounded-[4px]">افزودن به سبد خرید</button>
                    <div className="flex w-[115px] justify-end items-center">
                        {/* star-1 */}
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#F4B740"/>
                        </svg>
                        {/* star-2 */}
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#F4B740"/>
                        </svg>
                        {/* star-3 */}
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#F4B740"/>
                        </svg>
                        {/* star-4 */}
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0L14.1942 8.2918H22.9127L15.8593 13.4164L18.5534 21.7082L11.5 16.5836L4.44658 21.7082L7.14074 13.4164L0.0873222 8.2918H8.80583L11.5 0Z" fill="#F4B740"/>
                        </svg>
                    </div>
                </div>
            </div>
                <div className="relative w-[169px] h-[158px]">
                    <Image
                        src={pic1}
                        alt="product 1"
                        width={1080}
                        height={1080}
                        className="absolute inset-0 w-full h-full"
                    />
                </div>
        </div>
    )
}

export default FoodsCardComponent;
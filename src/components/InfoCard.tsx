import React from 'react';
import Image from 'next/image';
import pics from "../assets/Cards/ekbatan.png";

function InfoCard() {
  return (
    <section className="flex justify-center">
        <div className="font-primary w-[1224px] h-[280px] flex justify-between border border-[#CBCBCB] shadow-md">
      
        <div className="flex justify-center">
            <div className='flex flex-col justify-center space-y-4 items-center ml-[100px]'>
          <h3 className="font-bold text-lg pb-5">شعبه اکباتان</h3>
          <p>آدرس: شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
          <p>۰۲۱-۵۴۸۹۱۲۵۰-۵۱  :  شماره تماس </p>
          <p> ساعت کاری: همه‌روزه از ساعت<span>۱۲ تا ۲۳</span>بجز روز‌های تعطیل </p>

          <div className="flex justify-center space-x-4 items-center">
                <button className="w-[128px] h-[40px] bg-[#417F56] text-[#FFFFFF] rounded-md">دیدن در نقشه</button>
                <button className="w-[128px] h-[40px] border border-[#417F56] text-[#417F56] rounded-md">صفحه شعبه</button>
            </div>
        </div>
        </div>
      <Image
      src={pics}
      alt="image"
      width={1080}
      height={1080}
      className="w-[602px] h-[280px] rounded-md"
      />
</div>
    </section>
  )
}

export default InfoCard;
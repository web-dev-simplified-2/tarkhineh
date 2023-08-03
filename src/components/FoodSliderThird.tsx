import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import pic1 from "../assets/foodSlider/third/pic1.png";
import pic2 from "../assets/foodSlider/third/pic2.png";
import pic3 from "../assets/foodSlider/third/pic3.png";
import pic4 from "../assets/foodSlider/third/pic4.png";
import pic5 from "../assets/foodSlider/third/pic5.png";

const FoodSliderThird = () => {
  const responsive = {
    Desktop: {
      breakpoint: { max: 3000, min: 1208 },
      items: 4
    },
    Desktop2: {
      breakpoint: { max: 1208, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

    return (
    <section className="w-ful h-[555px] my-[5%]">
        <h2 className="font-primary text-[24px] font-bold text-right pt-[2%] mb-7 mr-[11%]">غذاهای غیر ایرانی</h2>
        <div className='flex justify-center'>
        <Carousel responsive={responsive} className="w-[1224px] h-[433px]">

          {/* 1 */}
            <div className="w-[288px] h-[433px] bg-[#FFFFFF] rounded-md border border-[#5e5b5b] ml-1 relative"> 
                <Image src={pic1}
                    alt="product 1"
                    width={1080}
                    height={1080}
                    className="w-[288px] h-[256px] "/>  
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">سوشی</h2>
                  <div className="flex font-primary justify-center mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] mr-4"> 
                        <div className='text-[15px] mb-3'>
                        <span id="formattedNumber" className='bg-[#FFF2F2] w-[32px] h-[16px] text-[12px] px-2 rounded-lg text-[#C30000] mr-2'>%۱۵</span>
                            <span className="font-primary text-[#7e7a7a] text-[13px] line-through">۱۰۰٬۰۰۰</span>
                        </div>
                            <p className="text-[14px] ">۸۵٬۰۰۰ تومان</p>
                        </section>
                        {/* Right */}
                        <section  className="flex flex-col w-[113px] h-[49px] " >
                          <div className="flex justify-end ">
                          <p className="text-[9px] text-[#7e7a7a] pr-1">افزودن به علاقه مندی ها </p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
                            </svg>
                          </div>
                          <div className="flex justify-end mt-4">
                          <p className="text-[10px] text-[#7e7a7a] ">(۷۰ امتیاز)<span className="text-[12px] font-bold px-1">۴</span></p>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                          </svg>
                            
                          </div>
                        </section>
                  </div>
                    
                    <div className='flex justify-center'>
                        <button className="w-[258px] h-[48px] mb-3 font-primary bg-[#417F56] text-[#FFFFFF] text-lg rounded-md absolute bottom-0">افزودن به سبد خرید</button>
                    </div>
            </div>

            {/* 2 */}
            <div className="w-[288px] h-[433px] bg-[#FFFFFF] rounded-md border border-[#5e5b5b] ml-1  relative"> 
                <Image src={pic2}
                    alt="product 1"
                    width={1080}
                    height={1080}
                    className="w-[288px] h-[256px] "/>  
                    {/* lg:-mt-32 -mt-20 lg:h-[240px] */}
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">راتاتویی</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                        <div className='text-[15px] mb-3'>
                        <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[12px] px-2 rounded-lg text-[#C30000]'>%۴۵</span>
                            <span className="font-primary text-[#7e7a7a] text-[13px] line-through">۱۸۰٬۰۰۰</span>
                        </div>
                            <p className="text-[14px] ">۹۵٬۰۰۰ تومان</p>
                        </section>
                        {/* Right */}
                        <section className="flex flex-col w-[113px] h-[49px] " >
                          <div className="flex justify-end ">
                          <p className="text-[9px] text-[#7e7a7a] pr-1">افزودن به علاقه مندی ها </p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
                            </svg>
                          </div>
                          <div className="flex justify-end mt-4">
                          <p className="text-[10px] text-[#7e7a7a] ">(۶۰ امتیاز)<span className="text-[12px] font-bold px-1">۴</span></p>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                          </svg>
                            
                          </div>
                        </section>
                  </div>
                    
                    <div className='flex justify-center'>
                        <button className="w-[258px] h-[48px] mb-3 font-primary bg-[#417F56] text-[#FFFFFF] text-lg rounded-md absolute bottom-0">افزودن به سبد خرید</button>
                    </div>
            </div>

            {/* 3 */}
            <div className="w-[288px] h-[433px] bg-[#FFFFFF] rounded-md border border-[#5e5b5b] ml-1 relative"> 
                <Image src={pic3}
                    alt="product 1"
                    width={1080}
                    height={1080}
                    className="w-[288px] h-[256px] "/>  
                    {/* lg:-mt-32 -mt-20 lg:h-[240px] */}
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">پاکورا سبزیجات</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                        <div className='text-[15px] mb-3'>
                        <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[12px] px-2 rounded-lg text-[#C30000]'>%۸</span>
                            <span className="font-primary text-[#7e7a7a] text-[13px] line-through">۱۲۵٬۰۰۰</span>
                        </div>
                            <p className="text-[14px] "> ۱۱۰٬۰۰۰ تومان</p>
                        </section>
                        {/* Right */}
                        <section className="flex flex-col w-[113px] h-[49px] " >
                          <div className="flex justify-end ">
                          <p className="text-[9px] text-[#7e7a7a] pr-1">افزودن به علاقه مندی ها </p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
                            </svg>
                          </div>
                          <div className="flex justify-end mt-4">
                          <p className="text-[10px] text-[#7e7a7a] ">(۷۵ امتیاز)<span className="text-[12px] font-bold px-1">۴</span></p>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                          </svg>
                            
                          </div>
                        </section>
                  </div>
                    
                    <div className='flex justify-center'>
                        <button className="w-[258px] h-[48px] mb-3 font-primary bg-[#417F56] text-[#FFFFFF] text-lg rounded-md absolute bottom-0">افزودن به سبد خرید</button>
                    </div>
            </div>

            {/* 4 */}
            <div className="w-[288px] h-[433px] bg-[#FFFFFF] rounded-md border border-[#5e5b5b] ml-1 relative"> 
                <Image src={pic4}
                    alt="product 1"
                    width={1080}
                    height={1080}
                    className="w-[288px] h-[256px] "/>  
                    {/* lg:-mt-32 -mt-20 lg:h-[240px] */}
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">لازانیا</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                            <p className="text-[14px] ">۱۵۰٬۰۰۰ تومان</p>
                        </section>
                        {/* Right */}
                        <section className="flex flex-col w-[113px] h-[49px] " >
                          <div className="flex justify-end ">
                          <p className="text-[9px] text-[#7e7a7a] pr-1">افزودن به علاقه مندی ها </p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
                            </svg>
                          </div>
                          <div className="flex justify-end mt-4">
                          <p className="text-[10px] text-[#7e7a7a] ">(۴۸ امتیاز)<span className="text-[12px] font-bold px-1">۵</span></p>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                          </svg>
                            
                          </div>
                        </section>
                  </div>
                    
                    <div className='flex justify-center'>
                        <button className="w-[258px] h-[48px] mb-3 font-primary bg-[#417F56] text-[#FFFFFF] text-lg rounded-md absolute bottom-0">افزودن به سبد خرید</button>
                    </div>
            </div>
            
            {/* 5 */}
            <div className="w-[288px] h-[433px] bg-[#FFFFFF] rounded-md border border-[#5e5b5b] ml-1 relative"> 
                <Image src={pic5}
                    alt="product 1"
                    width={1080}
                    height={1080}
                    className="w-[288px] h-[256px] "/>  
                    {/* lg:-mt-32 -mt-20 lg:h-[240px] */}
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">سالاد خانگی</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                        <div className='text-[15px] mb-3'>
                        <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[12px] px-2 rounded-lg text-[#C30000]'>%۲۰</span>
                            <span className="font-primary text-[#7e7a7a] text-[13px] line-through">۱۷۵۰۰۰</span>
                        </div>
                            <p className="text-[14px] ">۱۵۰۰۰۰ تومان</p>
                        </section>
                        {/* Right */}
                        <section className="flex flex-col w-[113px] h-[49px] " >
                          <div className="flex justify-end ">
                          <p className="text-[9px] text-[#7e7a7a] pr-1">افزودن به علاقه مندی ها </p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
                            </svg>
                          </div>
                          <div className="flex justify-end mt-4">
                          <p className="text-[10px] text-[#7e7a7a] ">(۵۹ امتیاز)<span className="text-[12px] font-bold px-1">۵</span></p>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                          </svg>
                            
                          </div>
                        </section>
                  </div>
                    
                    <div className='flex justify-center'>
                        <button className="w-[258px] h-[48px] mb-3 font-primary bg-[#417F56] text-[#FFFFFF] text-lg rounded-md absolute bottom-0">افزودن به سبد خرید</button>
                    </div>
            </div>
            {/* 6 */}
            <div className="w-[288px] h-[433px] bg-[#FFFFFF] rounded-md border border-[#5e5b5b] ml-1 relative"> 
                <Image src={pic3}
                    alt="product 1"
                    width={1080}
                    height={1080}
                    className="w-[288px] h-[256px] "/>  
                    {/* lg:-mt-32 -mt-20 lg:h-[240px] */}
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">پاکورا سبزیجات</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                        <div className='text-[15px] mb-3'>
                        <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[12px] px-2 rounded-lg text-[#C30000]'>%۸</span>
                            <span className="font-primary text-[#7e7a7a] text-[13px] line-through">۱۲۵٬۰۰۰</span>
                        </div>
                            <p className="text-[14px] "> ۱۱۰٬۰۰۰ تومان</p>
                        </section>
                        {/* Right */}
                        <section className="flex flex-col w-[113px] h-[49px] " >
                          <div className="flex justify-end ">
                          <p className="text-[9px] text-[#7e7a7a] pr-1">افزودن به علاقه مندی ها </p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
                            </svg>
                          </div>
                          <div className="flex justify-end mt-4">
                          <p className="text-[10px] text-[#7e7a7a] ">(۷۵ امتیاز)<span className="text-[12px] font-bold px-1">۴</span></p>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                          </svg>
                            
                          </div>
                        </section>
                  </div>
                    
                    <div className='flex justify-center'>
                        <button className="w-[258px] h-[48px] mb-3 font-primary bg-[#417F56] text-[#FFFFFF] text-lg rounded-md absolute bottom-0">افزودن به سبد خرید</button>
                    </div>
            </div>
            {/* 7 */}
            <div className="w-[288px] h-[433px] bg-[#FFFFFF] rounded-md border border-[#5e5b5b] ml-1 relative"> 
                <Image src={pic1}
                    alt="product 1"
                    width={1080}
                    height={1080}
                    className="w-[288px] h-[256px] "/>  
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">سوشی</h2>
                  <div className="flex font-primary justify-center mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] mr-4"> 
                        <div className='text-[15px] mb-3'>
                        <span id="formattedNumber" className='bg-[#FFF2F2] w-[32px] h-[16px] text-[12px] px-2 rounded-lg text-[#C30000] mr-2'>%۱۵</span>
                            <span className="font-primary text-[#7e7a7a] text-[13px] line-through">۱۰۰٬۰۰۰</span>
                        </div>
                            <p className="text-[14px] ">۸۵٬۰۰۰ تومان</p>
                        </section>
                        {/* Right */}
                        <section  className="flex flex-col w-[113px] h-[49px] " >
                          <div className="flex justify-end ">
                          <p className="text-[9px] text-[#7e7a7a] pr-1">افزودن به علاقه مندی ها </p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
                            </svg>
                          </div>
                          <div className="flex justify-end mt-4">
                          <p className="text-[10px] text-[#7e7a7a] ">(۷۰ امتیاز)<span className="text-[12px] font-bold px-1">۴</span></p>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                          </svg>
                            
                          </div>
                        </section>
                  </div>
                    
                    <div className='flex justify-center'>
                        <button className="w-[258px] h-[48px] mb-3 font-primary bg-[#417F56] text-[#FFFFFF] text-lg rounded-md absolute bottom-0">افزودن به سبد خرید</button>
                    </div>
            </div>
        </Carousel>
        </div>
       <div className="flex justify-center my-[3%]">
       <button  className="font-primary flex space-x-2 border border-[#417F56] text-[#417F56] font-bold  rounded-s p-2 mb-[3%]">
            <p >مشاهده منوی کامل </p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 22.75H8C4.98 22.75 3.25 21.02 3.25 18V8.25C3.25 5.1 4.85 3.5 8 3.5C8.41 3.5 8.75 3.84 8.75 4.25C8.75 4.65 8.91 5.03 9.19 5.31C9.47 5.59 9.85 5.75 10.25 5.75H13.75C14.58 5.75 15.25 5.08 15.25 4.25C15.25 3.84 15.59 3.5 16 3.5C19.15 3.5 20.75 5.1 20.75 8.25V18C20.75 21.02 19.02 22.75 16 22.75ZM7.34998 5.02C5.76998 5.15 4.75 5.86 4.75 8.25V18C4.75 20.22 5.78 21.25 8 21.25H16C18.22 21.25 19.25 20.22 19.25 18V8.25C19.25 5.86 18.23 5.16 16.65 5.02C16.31 6.3 15.14 7.25 13.75 7.25H10.25C9.45 7.25 8.70001 6.94 8.13 6.37C7.75 5.99 7.48998 5.53 7.34998 5.02Z" fill="#417F56"/>
                <path d="M13.75 7.25H10.25C9.45 7.25 8.7 6.94 8.13 6.37C7.56 5.79999 7.25 5.05 7.25 4.25C7.25 2.6 8.6 1.25 10.25 1.25H13.75C14.55 1.25 15.3 1.56 15.87 2.13C16.44 2.7 16.75 3.45 16.75 4.25C16.75 5.9 15.4 7.25 13.75 7.25ZM10.25 2.75C9.42 2.75 8.75 3.42 8.75 4.25C8.75 4.65 8.91 5.03 9.19 5.31C9.47 5.59 9.85 5.75 10.25 5.75H13.75C14.58 5.75 15.25 5.08 15.25 4.25C15.25 3.85 15.09 3.47 14.81 3.19C14.53 2.91 14.15 2.75 13.75 2.75H10.25Z" fill="#417F56"/>
                <path d="M12 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H12C12.41 12.25 12.75 12.59 12.75 13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#417F56"/>
                <path d="M16 17.75H8C7.59 17.75 7.25 17.41 7.25 17C7.25 16.59 7.59 16.25 8 16.25H16C16.41 16.25 16.75 16.59 16.75 17C16.75 17.41 16.41 17.75 16 17.75Z" fill="#417F56"/>
                </svg>
        </button>
       </div>
    </section>
      
      );
    
  };
  
  export default FoodSliderThird;
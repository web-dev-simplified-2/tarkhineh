import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import pic1 from "../assets/foodSlider/second/pic1.png";
import pic2 from "../assets/foodSlider/second/pic2.png";
import pic3 from "../assets/foodSlider/second/pic3.png";
import pic4 from "../assets/foodSlider/second/pic4.png";
import pic5 from "../assets/foodSlider/second/pic5.png";

const FoodSliderSecond = () => {
    const responsive = {
        Desktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      function getRandomNumber() {
        const randomNum = Math.floor(Math.random() * 10) + 10;
        return randomNum;
      }
      const discount = getRandomNumber();

      function getRandomPrice() {
        const randomNum = Math.floor(Math.random() * 1000000) + 7000;
        return randomNum;
      }
      
      function Discount() {
        const randomNum = Math.floor(Math.random() * 151) + 150;
        const discountedPrice = randomNum * 1000;
        return discountedPrice;
      }
      const randomPrice = getRandomPrice();
      const discountedPrice = Discount();

      const minValue = Math.min(randomPrice, discountedPrice);
      const maxValue = Math.max(randomPrice, discountedPrice);
   

     
    return (
    <section className="w-ful h-[555px] bg-[#315F41]  my-[5%]">
        <h2 className="font-primary text-[24px] text-[#FFFFFF] font-bold text-right pt-[2%] mb-7 mr-[11%]">غذاهای محبوب</h2>
        <div className='flex justify-center'>
        <Carousel responsive={responsive} className="w-[1224px] h-[433px] ml-[4%]  ">

          {/* 1 */}
            <div className="w-[288px] h-[433px] bg-[#FFFFFF] rounded-md border border-[#5e5b5b] ml-1 relative"> 
                <Image src={pic1}
                    alt="product 1"
                    width={1080}
                    height={1080}
                    className="w-[288px] h-[256px] "/>  
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">پنینی اسفناج</h2>
                  <div className="flex font-primary justify-center mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] mr-4"> 
                        <div className='text-[15px] mb-3'>
                        <span id="formattedNumber" className='bg-[#FFF2F2] w-[32px] h-[16px] text-[10px] px-2 rounded-lg text-[#C30000] mr-2'>%{discount.toLocaleString("fa")}</span>
                            <span className="font-primary text-[#7e7a7a] text-[10px] line-through">{randomPrice.toLocaleString("fa")}</span>
                        </div>
                            <p className="text-[10px] "> تومان {discountedPrice.toLocaleString("fa")}</p>
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
                          <p className="text-[10px] text-[#7e7a7a] ">(امتیاز 52)<span className="text-[12px] font-bold px-1"> 5 </span></p>
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
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">پیتزا پپرونی</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                        <div className='text-[15px] mb-3'>
                        <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[10px] px-2 rounded-lg text-[#C30000]'>%{discount.toLocaleString("fa")}</span>
                            <span className="font-primary text-[#7e7a7a] text-[10px] line-through">{randomPrice.toLocaleString("fa")}</span>
                        </div>
                            <p className="text-[10px] ">تومان{discountedPrice.toLocaleString("fa")}</p>
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
                          <p className="text-[10px] text-[#7e7a7a] ">(امتیاز 32)<span className="text-[12px] font-bold px-1"> 4 </span></p>
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
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">راتاتویی</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                        <div className='text-[15px] mb-3'>
                        <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[10px] px-2 rounded-lg text-[#C30000]'>%{discount.toLocaleString("fa")}</span>
                            <span className="font-primary text-[#7e7a7a] text-[10px] line-through">{randomPrice.toLocaleString("fa")}</span>
                        </div>
                            <p className="text-[10px] "> تومان{discountedPrice.toLocaleString("fa")} </p>
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
                          <p className="text-[10px] text-[#7e7a7a] ">(امتیاز 62)<span className="text-[12px] font-bold px-1"> 5 </span></p>
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
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">بورانی بادمجان</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                        <div className='text-[15px] mb-3'>
                        <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[10px] px-2 rounded-lg text-[#C30000]'>%{discount.toLocaleString("fa")}</span>
                            <span className="font-primary text-[#7e7a7a] text-[10px] line-through">{randomPrice.toLocaleString("fa")}</span>
                        </div>
                            <p className="text-[10px] "> تومان {discountedPrice.toLocaleString("fa")}</p>
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
                          <p className="text-[10px] text-[#7e7a7a] ">(امتیاز 33)<span className="text-[12px] font-bold px-1"> 3 </span></p>
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
                    <h2 className="text-center font-primary text-[22px] font-bold mt-3">پاکورا گیاهی</h2>
                  <div className="flex font-primary justify-center space-x-9 mt-2 "> 
                    {/* discount */}
                    {/* Left */}
                        <section className="flex flex-col w-[92px] h-[48px] "> 
                        <div className='text-[15px] mb-3'>
                        <span className='bg-[#FFF2F2] w-[32px] h-[16px] text-[10px] px-2 rounded-lg text-[#C30000]'>%{discount.toLocaleString("fa")}</span>
                            <span className="font-primary text-[#7e7a7a] text-[10px] line-through">{randomPrice.toLocaleString("fa")}</span>
                        </div>
                            <p className="text-[10px] ">تومان{discountedPrice.toLocaleString("fa")}</p>
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
                          <p className="text-[10px] text-[#7e7a7a] ">(امتیاز 50)<span className="text-[12px] font-bold px-1"> 5 </span></p>
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
    </section>
      
      );
    
  };
  
  export default FoodSliderSecond;
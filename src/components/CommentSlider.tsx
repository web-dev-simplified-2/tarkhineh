import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import pro1 from "../assets/CommentPics/pro1.png";
import pro2 from "../assets/CommentPics/pro2.png";
import pro3 from "../assets/CommentPics/pro3.png";


const responsive = {
    Desktop: {
      
      breakpoint: { max: 4000, min: 1024 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CommentSlider = () => {
    return (
       <section className="my-[5%]">
         <h2 className="font-primary text-[24px] font-bold text-center mb-7">نظرات کاربران</h2>
         <div className='flex justify-center'>
           <Carousel responsive={responsive} showDots={true} className="w-full h-[280px] ml-[4%] ">
              {/*comment*/}
         <div className="flex justify-center  w-[600px] h-[202px] bg-[#FFFFFF] border border-[#717171] rounded-md font-primary relative">
                <div className="flex mt-[5%] ">
                <p className="w-[427px] h-[153px] text-right mt-[5%] mr-3 leading-7">از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. </p>
                <div className="flex flex-col justify-center w-[96px] h-[154px]">
                    <Image src={pro1} className="w-[96px] h-[96px] mb-3" alt="profile 1"/>
                    <p className="text-center text-[13px] text-[#717171]">آرزو محمدعلیزاده</p>
                    <p className="text-center text-[14px] text-[#717171]">۲۳  / اسفند ۱۴۰۱</p>
                </div>
                </div>
                {/* Star */}
                <p className="absolute bottom-2 left-4 w-[60px] h-[32px]">۴ <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.88112 0.770389C7.91854 0.655227 8.08146 0.655224 8.11888 0.77039L9.6211 5.39375C9.6713 5.54825 9.81529 5.65286 9.97775 5.65286H14.839C14.9601 5.65286 15.0105 5.80782 14.9125 5.87899L10.9796 8.73638C10.8482 8.83187 10.7932 9.00114 10.8434 9.15564L12.3456 13.779C12.3831 13.8942 12.2512 13.9899 12.1533 13.9188L8.22042 11.0614C8.08899 10.9659 7.91101 10.9659 7.77958 11.0614L3.84672 13.9188C3.74876 13.9899 3.61694 13.8942 3.65436 13.779L5.15658 9.15564C5.20679 9.00114 5.15179 8.83187 5.02036 8.73638L1.0875 5.87899C0.989532 5.80782 1.03988 5.65286 1.16097 5.65286H6.02225C6.18471 5.65286 6.3287 5.54825 6.3789 5.39375L7.88112 0.770389Z" fill="url(#paint0_linear_2868_3306)" stroke="#ADADAD" stroke-width="0.25"/>
                    <defs>
                    <linearGradient id="paint0_linear_2868_3306" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                    <stop offset="0.249488" stop-color="#7CBC91" stop-opacity="0"/>
                    <stop offset="0.250326" stop-color="#F4B740"/>
                    <stop offset="1" stop-color="#F4B740"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </p>
            </div> 
                    {/*comment*/}
                    <div className="flex justify-center  w-[600px] h-[202px] bg-[#FFFFFF] border border-[#717171] rounded-md font-primary relative">
                <div className="flex mt-[5%] ">
                <p className="w-[427px] h-[153px] text-right mt-[5%] mr-3 leading-7">از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. </p>
                <div className="flex flex-col justify-center w-[96px] h-[154px]">
                    <Image src={pro2} className="w-[96px] h-[96px] mb-3" alt="profile 1"/>
                    <p className="text-center text-[13px] text-[#717171]">سردار وظیفه</p>
                    <p className="text-center text-[14px] text-[#717171]">۲۳  / اسفند ۱۴۰۱</p>
                </div>
                </div>
                {/* Star */}
                <p className="absolute bottom-2 left-4 w-[60px] h-[32px]">۴ <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.88112 0.770389C7.91854 0.655227 8.08146 0.655224 8.11888 0.77039L9.6211 5.39375C9.6713 5.54825 9.81529 5.65286 9.97775 5.65286H14.839C14.9601 5.65286 15.0105 5.80782 14.9125 5.87899L10.9796 8.73638C10.8482 8.83187 10.7932 9.00114 10.8434 9.15564L12.3456 13.779C12.3831 13.8942 12.2512 13.9899 12.1533 13.9188L8.22042 11.0614C8.08899 10.9659 7.91101 10.9659 7.77958 11.0614L3.84672 13.9188C3.74876 13.9899 3.61694 13.8942 3.65436 13.779L5.15658 9.15564C5.20679 9.00114 5.15179 8.83187 5.02036 8.73638L1.0875 5.87899C0.989532 5.80782 1.03988 5.65286 1.16097 5.65286H6.02225C6.18471 5.65286 6.3287 5.54825 6.3789 5.39375L7.88112 0.770389Z" fill="url(#paint0_linear_2868_3306)" stroke="#ADADAD" stroke-width="0.25"/>
                    <defs>
                    <linearGradient id="paint0_linear_2868_3306" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                    <stop offset="0.249488" stop-color="#7CBC91" stop-opacity="0"/>
                    <stop offset="0.250326" stop-color="#F4B740"/>
                    <stop offset="1" stop-color="#F4B740"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </p>
            </div> 
        
                    {/*comment*/}
                    <div className="flex justify-center  w-[600px] h-[202px] bg-[#FFFFFF] border border-[#717171] rounded-md font-primary relative">
                <div className="flex mt-[5%] ">
                <p className="w-[427px] h-[153px] text-right mt-[5%] mr-3 leading-7">از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. </p>
                <div className="flex flex-col justify-center w-[96px] h-[154px]">
                    <Image src={pro3} className="w-[96px] h-[96px] mb-3" alt="profile 1"/>
                    <p className="text-center text-[13px] text-[#717171]">آرزو محمدعلیزاده</p>
                    <p className="text-center text-[14px] text-[#717171]">۲۳  / اسفند ۱۴۰۱</p>
                </div>
                </div>
                {/* Star */}
                <p className="absolute bottom-2 left-4 w-[60px] h-[32px]">۴ <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.88112 0.770389C7.91854 0.655227 8.08146 0.655224 8.11888 0.77039L9.6211 5.39375C9.6713 5.54825 9.81529 5.65286 9.97775 5.65286H14.839C14.9601 5.65286 15.0105 5.80782 14.9125 5.87899L10.9796 8.73638C10.8482 8.83187 10.7932 9.00114 10.8434 9.15564L12.3456 13.779C12.3831 13.8942 12.2512 13.9899 12.1533 13.9188L8.22042 11.0614C8.08899 10.9659 7.91101 10.9659 7.77958 11.0614L3.84672 13.9188C3.74876 13.9899 3.61694 13.8942 3.65436 13.779L5.15658 9.15564C5.20679 9.00114 5.15179 8.83187 5.02036 8.73638L1.0875 5.87899C0.989532 5.80782 1.03988 5.65286 1.16097 5.65286H6.02225C6.18471 5.65286 6.3287 5.54825 6.3789 5.39375L7.88112 0.770389Z" fill="url(#paint0_linear_2868_3306)" stroke="#ADADAD" stroke-width="0.25"/>
                    <defs>
                    <linearGradient id="paint0_linear_2868_3306" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                    <stop offset="0.249488" stop-color="#7CBC91" stop-opacity="0"/>
                    <stop offset="0.250326" stop-color="#F4B740"/>
                    <stop offset="1" stop-color="#F4B740"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </p>
            </div> 
             {/*comment*/}
             <div className="flex justify-center  w-[600px] h-[202px] bg-[#FFFFFF] border border-[#717171] rounded-md font-primary relative">
                <div className="flex mt-[5%] ">
                <p className="w-[427px] h-[153px] text-right mt-[5%] mr-3 leading-7">از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. </p>
                <div className="flex flex-col justify-center w-[96px] h-[154px]">
                    <Image src={pro3} className="w-[96px] h-[96px] mb-3" alt="profile 1"/>
                    <p className="text-center text-[13px] text-[#717171]">آرزو محمدعلیزاده</p>
                    <p className="text-center text-[14px] text-[#717171]">۲۳  / اسفند ۱۴۰۱</p>
                </div>
                </div>
                {/* Star */}
                <p className="absolute bottom-2 left-4 w-[60px] h-[32px]">۴ <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.88112 0.770389C7.91854 0.655227 8.08146 0.655224 8.11888 0.77039L9.6211 5.39375C9.6713 5.54825 9.81529 5.65286 9.97775 5.65286H14.839C14.9601 5.65286 15.0105 5.80782 14.9125 5.87899L10.9796 8.73638C10.8482 8.83187 10.7932 9.00114 10.8434 9.15564L12.3456 13.779C12.3831 13.8942 12.2512 13.9899 12.1533 13.9188L8.22042 11.0614C8.08899 10.9659 7.91101 10.9659 7.77958 11.0614L3.84672 13.9188C3.74876 13.9899 3.61694 13.8942 3.65436 13.779L5.15658 9.15564C5.20679 9.00114 5.15179 8.83187 5.02036 8.73638L1.0875 5.87899C0.989532 5.80782 1.03988 5.65286 1.16097 5.65286H6.02225C6.18471 5.65286 6.3287 5.54825 6.3789 5.39375L7.88112 0.770389Z" fill="url(#paint0_linear_2868_3306)" stroke="#ADADAD" stroke-width="0.25"/>
                    <defs>
                    <linearGradient id="paint0_linear_2868_3306" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                    <stop offset="0.249488" stop-color="#7CBC91" stop-opacity="0"/>
                    <stop offset="0.250326" stop-color="#F4B740"/>
                    <stop offset="1" stop-color="#F4B740"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </p>
            </div> 
             {/*comment*/}
             <div className="flex justify-center  w-[600px] h-[202px] bg-[#FFFFFF] border border-[#717171] rounded-md font-primary relative">
                <div className="flex mt-[5%] ">
                <p className="w-[427px] h-[153px] text-right mt-[5%] mr-3 leading-7">از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. </p>
                <div className="flex flex-col justify-center w-[96px] h-[154px]">
                    <Image src={pro3} className="w-[96px] h-[96px] mb-3" alt="profile 1"/>
                    <p className="text-center text-[13px] text-[#717171]">آرزو محمدعلیزاده</p>
                    <p className="text-center text-[14px] text-[#717171]">۲۳  / اسفند ۱۴۰۱</p>
                </div>
                </div>
                {/* Star */}
                <p className="absolute bottom-2 left-4 w-[60px] h-[32px]">۴ <svg className="inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.88112 0.770389C7.91854 0.655227 8.08146 0.655224 8.11888 0.77039L9.6211 5.39375C9.6713 5.54825 9.81529 5.65286 9.97775 5.65286H14.839C14.9601 5.65286 15.0105 5.80782 14.9125 5.87899L10.9796 8.73638C10.8482 8.83187 10.7932 9.00114 10.8434 9.15564L12.3456 13.779C12.3831 13.8942 12.2512 13.9899 12.1533 13.9188L8.22042 11.0614C8.08899 10.9659 7.91101 10.9659 7.77958 11.0614L3.84672 13.9188C3.74876 13.9899 3.61694 13.8942 3.65436 13.779L5.15658 9.15564C5.20679 9.00114 5.15179 8.83187 5.02036 8.73638L1.0875 5.87899C0.989532 5.80782 1.03988 5.65286 1.16097 5.65286H6.02225C6.18471 5.65286 6.3287 5.54825 6.3789 5.39375L7.88112 0.770389Z" fill="url(#paint0_linear_2868_3306)" stroke="#ADADAD" stroke-width="0.25"/>
                    <defs>
                    <linearGradient id="paint0_linear_2868_3306" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse">
                    <stop offset="0.249488" stop-color="#7CBC91" stop-opacity="0"/>
                    <stop offset="0.250326" stop-color="#F4B740"/>
                    <stop offset="1" stop-color="#F4B740"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </p>
            </div> 
           
        </Carousel>
        </div>
    </section>
        );
}

export default CommentSlider;

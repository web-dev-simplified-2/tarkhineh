import React from "react";
import Image from "next/image";
import franchise from "../../assets/BannerSlider/franchise.png";
import ApplicationForm from "@/components/ApplicationForm";


const page = () => {
  return <> 
  
    {/* Banner */}
   <section className="font-primary relative">
    <Image src={franchise} alt="franchise" 
    width={1080}
    height={1080}
    className=" md:h-[336px] h-[336px] w-full object-cover"/>
    <div className="text-center absolute top-[38%] left-[25%] ">
    <p className="font-bold text-[#FFFFFF] text-[38px]">همین الان به خانواده بزرگ ترخینه بپیوندید</p>
    </div>
   </section>
   
   <section className="flex justify-center">
   <div className=" w-[1224px] flex flex-col border-b-2 border-[#CBCBCB]">

    {/* Main content */}
   <section className="font-primary flex justify-center my-[5%]">
    <div className="w-[1225px] h-[220px] flex justify-center space-x-10 border-b-2 border-[#CBCBCB] relative">

        <div className="w-[181px] h-[220px] flex flex-col text-center">
        <div className="flex justify-center mb-2">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70.0003 103.6C69.0003 103.6 68.0003 103.367 67.167 102.9C60.9337 99.5 49.967 95.9 43.1003 95L42.1337 94.8667C37.767 94.3333 34.167 90.2333 34.167 85.8V45.5333C34.167 42.9 35.2003 40.5 37.1003 38.7667C39.0003 37.0333 41.467 36.2 44.067 36.4333C51.4003 37 62.467 40.6667 68.7337 44.6L69.5337 45.0667C69.767 45.2 70.267 45.2 70.467 45.1L71.0003 44.7667C77.267 40.8333 88.3337 37.1 95.7003 36.4667C95.767 36.4667 96.0337 36.4667 96.1003 36.4667C98.5337 36.2333 101.034 37.1 102.9 38.8333C104.8 40.5667 105.834 42.9667 105.834 45.6V85.8333C105.834 90.3 102.234 94.3667 97.8337 94.9L96.7337 95.0333C89.867 95.9333 78.867 99.5667 72.767 102.933C71.967 103.4 71.0003 103.6 70.0003 103.6ZM43.267 41.4C42.2003 41.4 41.2337 41.7667 40.467 42.4667C39.6337 43.2333 39.167 44.3333 39.167 45.5333V85.8C39.167 87.7667 40.867 89.6667 42.767 89.9333L43.767 90.0667C51.267 91.0667 62.767 94.8333 69.4337 98.4667C69.7337 98.6 70.167 98.6333 70.3337 98.5667C77.0003 94.8667 88.567 91.0667 96.1003 90.0667L97.2337 89.9333C99.1337 89.7 100.834 87.7667 100.834 85.8V45.5667C100.834 44.3333 100.367 43.2667 99.5337 42.4667C98.667 41.7 97.567 41.3333 96.3337 41.4C96.267 41.4 96.0003 41.4 95.9337 41.4C89.567 41.9667 79.3003 45.4 73.7003 48.9L73.167 49.2667C71.3337 50.4 68.7337 50.4 66.967 49.3L66.167 48.8333C60.467 45.3333 50.2003 41.9333 43.667 41.4C43.5337 41.4 43.4003 41.4 43.267 41.4Z" fill="#417F56"/>
            <path d="M70 100.8C68.6333 100.8 67.5 99.6667 67.5 98.3V48.3C67.5 46.9333 68.6333 45.8 70 45.8C71.3667 45.8 72.5 46.9333 72.5 48.3V98.3C72.5 99.7 71.3667 100.8 70 100.8Z" fill="#417F56"/>
            <path d="M55.833 60.8H48.333C46.9663 60.8 45.833 59.6667 45.833 58.3C45.833 56.9333 46.9663 55.8 48.333 55.8H55.833C57.1997 55.8 58.333 56.9333 58.333 58.3C58.333 59.6667 57.1997 60.8 55.833 60.8Z" fill="#417F56"/>
            <path d="M58.333 70.8H48.333C46.9663 70.8 45.833 69.6667 45.833 68.3C45.833 66.9334 46.9663 65.8 48.333 65.8H58.333C59.6997 65.8 60.833 66.9334 60.833 68.3C60.833 69.6667 59.6997 70.8 58.333 70.8Z" fill="#417F56"/>
            <rect x="2" y="2" width="136" height="136" rx="68" stroke="#417F56" stroke-width="4"/>
        </svg>
        </div>
        <p>اعطای دستورالعمل پخت غذاها</p>
        </div>

        <div className="w-[181px] h-[220px] flex flex-col text-center">
        <div className="flex justify-center mb-2">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M99.667 105.833H39.667C38.3003 105.833 37.167 104.7 37.167 103.333C37.167 101.967 38.3003 100.833 39.667 100.833H99.667C101.034 100.833 102.167 101.967 102.167 103.333C102.167 104.7 101.034 105.833 99.667 105.833Z" fill="#417F56"/>
            <path d="M48.3336 95.8333H43.0003C39.8003 95.8333 37.167 93.2 37.167 90V61.2667C37.167 58.0667 39.8003 55.4333 43.0003 55.4333H48.3336C51.5336 55.4333 54.1669 58.0667 54.1669 61.2667V90C54.1669 93.2 51.5336 95.8333 48.3336 95.8333ZM43.0003 60.4C42.5337 60.4 42.167 60.7667 42.167 61.2333V90C42.167 90.4667 42.5337 90.8333 43.0003 90.8333H48.3336C48.8002 90.8333 49.1669 90.4667 49.1669 90V61.2667C49.1669 60.8 48.8002 60.4333 48.3336 60.4333H43.0003V60.4Z" fill="#417F56"/>
            <path d="M72.3346 95.8333H67.0013C63.8013 95.8333 61.168 93.2 61.168 90V50.6333C61.168 47.4333 63.8013 44.8 67.0013 44.8H72.3346C75.5346 44.8 78.1679 47.4333 78.1679 50.6333V90C78.1679 93.2 75.5346 95.8333 72.3346 95.8333ZM67.0013 49.8C66.5346 49.8 66.168 50.1667 66.168 50.6333V90C66.168 90.4666 66.5346 90.8333 67.0013 90.8333H72.3346C72.8012 90.8333 73.1679 90.4666 73.1679 90V50.6333C73.1679 50.1667 72.8012 49.8 72.3346 49.8H67.0013Z" fill="#417F56"/>
            <path d="M96.3336 95.8334H91.0003C87.8003 95.8334 85.167 93.2 85.167 90V40C85.167 36.8 87.8003 34.1667 91.0003 34.1667H96.3336C99.5336 34.1667 102.167 36.8 102.167 40V90C102.167 93.2 99.5336 95.8334 96.3336 95.8334ZM91.0003 39.1667C90.5337 39.1667 90.167 39.5334 90.167 40V90C90.167 90.4667 90.5337 90.8334 91.0003 90.8334H96.3336C96.8002 90.8334 97.1669 90.4667 97.1669 90V40C97.1669 39.5334 96.8002 39.1667 96.3336 39.1667H91.0003Z" fill="#417F56"/>
            <rect x="2" y="2" width="136" height="136" rx="68" stroke="#417F56" stroke-width="4"/>
        </svg>
        </div>
        <p>طرح‌های تشویقی ارتقای فروش</p>
        </div>

        <div className="w-[181px] h-[220px] flex flex-col text-center">
        <div className="flex justify-center mb-2">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M89.466 105.833H51.1993C42.8993 105.833 36.166 99.0999 36.166 90.7999V68.3667C36.166 60.0667 42.8993 53.3333 51.1993 53.3333H89.466C97.766 53.3333 104.499 60.0667 104.499 68.3667V73.1667C104.499 74.5334 103.366 75.6667 101.999 75.6667H95.266C94.0993 75.6667 93.0327 76.1 92.266 76.9L92.2327 76.9334C91.2993 77.8334 90.866 79.0666 90.966 80.3332C91.166 82.5332 93.266 84.2999 95.666 84.2999H101.999C103.366 84.2999 104.499 85.4332 104.499 86.7999V90.7666C104.499 99.0999 97.766 105.833 89.466 105.833ZM51.1993 58.3333C45.666 58.3333 41.166 62.8333 41.166 68.3667V90.7999C41.166 96.3333 45.666 100.833 51.1993 100.833H89.466C94.9993 100.833 99.4993 96.3333 99.4993 90.7999V89.3333H95.666C90.6327 89.3333 86.366 85.5999 85.966 80.7999C85.6993 78.0666 86.6993 75.3667 88.6993 73.4C90.4327 71.6334 92.766 70.6667 95.266 70.6667H99.4993V68.3667C99.4993 62.8333 94.9993 58.3333 89.466 58.3333H51.1993Z" fill="#417F56"/>
            <path d="M38.666 73.8667C37.2993 73.8667 36.166 72.7334 36.166 71.3667V56.1336C36.166 51.1669 39.2993 46.6667 43.9327 44.9L70.3993 34.9C73.1327 33.8667 76.166 34.2335 78.5327 35.9002C80.9327 37.5669 82.3327 40.2668 82.3327 43.1668V55.8335C82.3327 57.2001 81.1993 58.3335 79.8327 58.3335C78.466 58.3335 77.3327 57.2001 77.3327 55.8335V43.1668C77.3327 41.9002 76.7327 40.7335 75.666 40.0001C74.5993 39.2668 73.3327 39.1001 72.1327 39.5668L45.666 49.5668C42.966 50.6001 41.1327 53.2336 41.1327 56.1336V71.3667C41.166 72.7667 40.0327 73.8667 38.666 73.8667Z" fill="#417F56"/>
            <path d="M76.9993 72.5H53.666C52.2993 72.5 51.166 71.3667 51.166 70C51.166 68.6333 52.2993 67.5 53.666 67.5H76.9993C78.366 67.5 79.4993 68.6333 79.4993 70C79.4993 71.3667 78.366 72.5 76.9993 72.5Z" fill="#417F56"/>
            <rect x="2" y="2" width="136" height="136" rx="68" stroke="#417F56" stroke-width="4"/>
        </svg>
        </div>
        <p>تسهیلات راه‌اندازی رستوران و تجهیز آن</p>
        </div>

        <div className="w-[181px] h-[220px] flex flex-col text-center">
        <div className="flex justify-center mb-2">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 69.1667H40.0003C36.8003 69.1667 34.167 66.5334 34.167 63.3334V52.2667C34.167 50 35.7336 47.7 37.8336 46.8667L67.8336 34.8668C69.1002 34.3668 70.9004 34.3668 72.1671 34.8668L102.167 46.8667C104.267 47.7 105.834 50.0333 105.834 52.2667V63.3334C105.834 66.5334 103.2 69.1667 100 69.1667ZM70.0003 39.4668C69.867 39.4668 69.7337 39.4666 69.6671 39.4999L39.7002 51.5001C39.5002 51.6001 39.167 52.0333 39.167 52.2667V63.3334C39.167 63.8 39.5337 64.1667 40.0003 64.1667H100C100.467 64.1667 100.834 63.8 100.834 63.3334V52.2667C100.834 52.0333 100.534 51.6001 100.3 51.5001L70.3004 39.4999C70.2337 39.4666 70.1337 39.4668 70.0003 39.4668Z" fill="#417F56"/>
            <path d="M103.334 105.833H36.667C35.3003 105.833 34.167 104.7 34.167 103.333V93.3333C34.167 90.1333 36.8003 87.5 40.0003 87.5H100C103.2 87.5 105.834 90.1333 105.834 93.3333V103.333C105.834 104.7 104.7 105.833 103.334 105.833ZM39.167 100.833H100.834V93.3333C100.834 92.8667 100.467 92.5 100 92.5H40.0003C39.5337 92.5 39.167 92.8667 39.167 93.3333V100.833Z" fill="#417F56"/>
            <path d="M43.333 92.5C41.9663 92.5 40.833 91.3667 40.833 90V66.6667C40.833 65.3 41.9663 64.1667 43.333 64.1667C44.6997 64.1667 45.833 65.3 45.833 66.6667V90C45.833 91.3667 44.6997 92.5 43.333 92.5Z" fill="#417F56"/>
            <path d="M56.667 92.5C55.3003 92.5 54.167 91.3667 54.167 90V66.6667C54.167 65.3 55.3003 64.1667 56.667 64.1667C58.0337 64.1667 59.167 65.3 59.167 66.6667V90C59.167 91.3667 58.0337 92.5 56.667 92.5Z" fill="#417F56"/>
            <path d="M70 92.5C68.6333 92.5 67.5 91.3667 67.5 90V66.6667C67.5 65.3 68.6333 64.1667 70 64.1667C71.3667 64.1667 72.5 65.3 72.5 66.6667V90C72.5 91.3667 71.3667 92.5 70 92.5Z" fill="#417F56"/>
            <path d="M83.333 92.5C81.9663 92.5 80.833 91.3667 80.833 90V66.6667C80.833 65.3 81.9663 64.1667 83.333 64.1667C84.6997 64.1667 85.833 65.3 85.833 66.6667V90C85.833 91.3667 84.6997 92.5 83.333 92.5Z" fill="#417F56"/>
            <path d="M96.667 92.5C95.3003 92.5 94.167 91.3667 94.167 90V66.6667C94.167 65.3 95.3003 64.1667 96.667 64.1667C98.0337 64.1667 99.167 65.3 99.167 66.6667V90C99.167 91.3667 98.0337 92.5 96.667 92.5Z" fill="#417F56"/>
            <path d="M106.666 105.833H33.333C31.9663 105.833 30.833 104.7 30.833 103.333C30.833 101.967 31.9663 100.833 33.333 100.833H106.666C108.033 100.833 109.166 101.967 109.166 103.333C109.166 104.7 108.033 105.833 106.666 105.833Z" fill="#417F56"/>
            <path d="M70 60.8333C65.8667 60.8333 62.5 57.4666 62.5 53.3333C62.5 49.2 65.8667 45.8333 70 45.8333C74.1333 45.8333 77.5 49.2 77.5 53.3333C77.5 57.4666 74.1333 60.8333 70 60.8333ZM70 50.8333C68.6333 50.8333 67.5 51.9666 67.5 53.3333C67.5 54.7 68.6333 55.8333 70 55.8333C71.3667 55.8333 72.5 54.7 72.5 53.3333C72.5 51.9666 71.3667 50.8333 70 50.8333Z" fill="#417F56"/>
            <rect x="2" y="2" width="136" height="136" rx="68" stroke="#417F56" stroke-width="4"/>
        </svg></div>
        <p>بیش از 20 شعبه فعال در سراسر کشور</p>
        </div>

    </div>

   </section>

   {/* Texts */}
   <section className="font-primary flex flex-col justify-center pb-[5%]">
    <h3 className="font-bold text-[24px] text-center mb-[3%]">مزیت دریافت نمایندگی</h3>
        <div className="flex justify-center space-x-10"> 
            {/* Left col */}
            <div className="flex-col space-y-7 text-right">
            <p>
                استفاده از برند شناخته شده ترخینه
                <div className="inline-block pl-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-[17px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2"/>
                    </svg>
                </div>
            </p>
            <p>به حداقل رساندن ریسک سرمایه گذاری
            <div className="inline-block pl-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-[17px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2"/>
                    </svg>
                </div>
            </p>
            <p>تسریع روند بازگشت سرمایه
            <div className="inline-block pl-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-[17px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2"/>
                    </svg>
                </div>
            </p>
            <p>مشاوره های تخصصی جهت مدیریت رستوران
            <div className="inline-block pl-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-[17px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2"/>
                    </svg>
                </div>
            </p>
            </div>
            {/* Right col */}
            <div className="flex-col space-y-7 text-right">
           <p>مشاوره در امور حقوقی، مالی و مالیاتی
           <div className="inline-block pl-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-[17px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2"/>
                    </svg>
                </div>
           </p>
           <p>پشتیبانی بازاریابی و منابع انسانی
           <div className="inline-block pl-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-[17px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2"/>
                    </svg>
                </div>
           </p>
           <p>دریافت مشاوره جهت تامین مواد اولیه و تجهیزات
           <div className="inline-block pl-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-[17px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2"/>
                    </svg>
                </div>
           </p>
           <p>طرح های تشویقی برای ارتقا فروش
           <div className="inline-block pl-2 ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-[17px] h-[14px]" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.414214" y="10" width="14" height="14" rx="3" transform="rotate(-45 0.414214 10)" stroke="#417F56" stroke-width="2"/>
                    </svg>
                </div>
           </p>
            </div>
        </div>
   </section>
   <div className=" w-[1224px] flex flex-col border-b-2 border-[#CBCBCB]"></div>

    {/* Form */}
    <section className="font-primary flex flex-col pb-[5%]">
        <h3 className="font-bold text-[24px] text-center my-[3%]">دریافت مشاوره</h3>
        <div className="flex justify-center space-x-2">
            <input type="date" className="appearance-none block w-[392px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="زمان ایده‌آل" />
            <input type="text" className="appearance-none block w-[392px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="شماره تماس" />
            <input type="text" className="appearance-none block w-[392px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="نام و نام‌خانوادگی" />
        </div>
        <div className="text-center my-[3%]"><button className="w-[146px] h-[40px] bg-[#417F56] text-[#FFFFFF] rounded-md ">درخواست مشاوره</button></div>
    </section>
    <div className=" w-[1224px] flex flex-col border-b-2 border-[#CBCBCB]"></div>
   
    {/* Component form */}
    <section className="my-[5%] flex justify-center">
    <ApplicationForm/>
    </section>
   

   </div>
   </section>
  </>;
};

export default page;
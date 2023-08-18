import React from 'react'

function ApplicationForm() {
  return (
    <>
      <section className=" font-primary w-[1224px] h-[1021px] border border-[#CBCBCB] rounded-md">
        <h3 className="font-bold text-[24px] text-center my-[3%]">فرم درخواست نمایندگی</h3>

        {/* First form */}
        <p className='text-right my-6 mr-8 '>مشخصات فردی متقاضی</p>
        <div className="flex justify-center space-x-2">
            <input type="date" className="appearance-none block w-[382px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="شماره تماس" />
            <input type="text" className="appearance-none block w-[382px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="کدملی" />
            <input type="text" className="appearance-none block w-[382px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="نام و نام‌خانوادگی" />
        </div>

        {/* Second form */}
        <div className="mt-[4%]">
        <p className='text-right my-6 mr-8'> آدرس ملک متقاضی </p>
        <div className="flex justify-center space-x-2">
            <div className="w-[381px] h-[156px]">map</div>

            <div className='flex flex-col space-y-3'>
            <input type="text" className="appearance-none block w-[382px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="شهر" />
            <textarea className="appearance-none block w-[382px] h-[100px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="آدرس دقیق "/>
            </div>
            
            <div className='flex flex-col space-y-3'>
            <input type="text" className="appearance-none block w-[392px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="استان" />
            <input type="text" className="appearance-none block w-[392px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="منطقه" />
            </div>
        </div>
        </div>

        {/* Third form */}
        <p className='text-right my-6 mr-8 '>مشخصات ملک متقاضی</p>
        <div className="flex justify-center space-x-2">
            <input type="text" className="appearance-none block w-[382px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="سن بنا" />
            <input type="text" className="appearance-none block w-[382px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="مساحت ملک (متر مربع)" />
            <input type="text" className="appearance-none block w-[382px] h-[40px] px-3 py-2 text-right border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" placeholder="نوع مالکیت"/>
        </div>

        {/* Fourth form */}
        <p className='text-right my-10 mr-8 '> امکانات ملک متقاضی </p>
        <p className='text-right my-5 mr-8 text-[#717171]'>:  ملک متقاضی</p>
        
        <div className="flex justify-between mt-2 ">

            <div className="w-[580px] h-[225px] ml-[3%]">
            <p className="text-right text-[#717171] mb-3">تصاویر ملک</p>
            <div className="w-[580px] h-[192px] border border-[#CBCBCB] rounded-md flex flex-col justify-center items-center text-center">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className='cursor-pointer' xmlns="http://www.w3.org/2000/svg">
                <path d="M32.1602 46.0001C31.0668 46.0001 30.1602 45.0934 30.1602 44.0001V30.6667C30.1602 29.5734 31.0668 28.6667 32.1602 28.6667C33.2535 28.6667 34.1602 29.5734 34.1602 30.6667V44.0001C34.1602 45.0934 33.2535 46.0001 32.1602 46.0001Z" fill="#717171"/>
                <path d="M38.6663 39.3333H25.333C24.2397 39.3333 23.333 38.4266 23.333 37.3333C23.333 36.2399 24.2397 35.3333 25.333 35.3333H38.6663C39.7597 35.3333 40.6663 36.2399 40.6663 37.3333C40.6663 38.4266 39.7597 39.3333 38.6663 39.3333Z" fill="#717171"/>
                <path d="M45.333 60.6666H18.6663C6.90634 60.6666 3.33301 57.0933 3.33301 45.3333V18.6666C3.33301 6.90659 6.90634 3.33325 18.6663 3.33325H22.6663C27.333 3.33325 28.7997 4.85325 30.6663 7.33325L34.6663 12.6666C35.5463 13.8399 35.6797 13.9999 37.333 13.9999H45.333C57.093 13.9999 60.6663 17.5733 60.6663 29.3333V45.3333C60.6663 57.0933 57.093 60.6666 45.333 60.6666ZM18.6663 7.33325C9.14634 7.33325 7.33301 9.14659 7.33301 18.6666V45.3333C7.33301 54.8533 9.14634 56.6666 18.6663 56.6666H45.333C54.853 56.6666 56.6663 54.8533 56.6663 45.3333V29.3333C56.6663 19.8133 54.853 17.9999 45.333 17.9999H37.333C33.9197 17.9999 32.7997 16.8266 31.4663 15.0666L27.4663 9.73325C26.0797 7.89325 25.6797 7.33325 22.6663 7.33325H18.6663Z" fill="#717171"/>
            </svg>
            <p className='text-[#717171]'>...   تصاویری از ملک را بارگذاری کنید</p>

            </div>
            </div>

            <div className="flex justify-end">
                    <div>
                    <div className="flex justify-end items-center mr-8">
    <label htmlFor="default-checkbox" className='ml-2 text-sm text-center pr-2 font-medium text-gray-900 dark:text-[#717171]'>.  پروانه کسب دارد</label>
    <input type="checkbox" className='w-4 h-4 text-lue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 dark:focus:ring-ue-600 dark :ring-offset-gray-800 focus:ring-2 dark:bg-gray-700  dark:border-gray-600' />
                </div>

                <div className="flex justify-end items-center mr-8 mt-4">
    <label htmlFor="default-checkbox" className='ml-2 text-sm text-center pr-2 font-medium text-gray-900 dark:text-[#717171]'>.  پارکینگ دارد</label>
    <input type="checkbox" className='w-4 h-4 text-lue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 dark:focus:ring-ue-600 dark :ring-offset-gray-800 focus:ring-2 dark:bg-gray-700  dark:border-gray-600' />
                </div>
                </div>

                <div>
<div className="flex justify-end items-center mr-8">
    <label htmlFor="default-checkbox" className='ml-2 text-sm text-center pr-2 font-medium text-gray-900 dark:text-[#717171]'>.  آشپزخانه دارد  </label>
    <input type="checkbox" className='w-4 h-4 text-lue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 dark:focus:ring-ue-600 dark :ring-offset-gray-800 focus:ring-2 dark:bg-gray-700  dark:border-gray-600' />
</div>

<div className="flex justify-end items-center mr-8 mt-4">
    <label htmlFor="default-checkbox" className='ml-2 text-sm text-center pr-2 font-medium text-gray-900 dark:text-[#717171]'>.  انبار دارد </label>
    <input type="checkbox" className='w-4 h-4 text-lue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-50 dark:focus:ring-ue-600 dark :ring-offset-gray-800 focus:ring-2 dark:bg-gray-700  dark:border-gray-600' />
</div>
                </div>
            </div>
        </div>

        <div className="text-center mt-[3%]"><button className="w-[183px] h-[40px] rounded-md bg-[#417F56] text-[#FFFFFF]">ثبت اطلاعات</button></div>


    </section>
    </>
    )
}

export default ApplicationForm

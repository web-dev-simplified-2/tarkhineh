import { Heart } from "iconsax-react";
const FoodCard = () => {
  return (
    <div className="rounded-[8px] border border-[#CBCBCB] flex flex-col items-center md:w-[288px] md:h-[433px] w-[168px] h-[231px] md:gap-[16px]">
      <img
        src="https://s3-alpha-sig.figma.com/img/5992/9ed0/c2661f398456aa85d28512a263784b30?Expires=1690156800&Signature=RrOIFgSCBB6C1TW-S09MG5ZK96oL2JmNEktw9l-eHV8QNiNYzs6fZvraX0fQ1QhdF~BjyzkX-S~IXrVJceU5~SKStuR0T93kAo0eB7VjU4tR-3NsMC7zL-XRDEg1MKFkbV4nD-pqs4CHGLRAynVejBBhytRdxRRRomBPC8-nObr15acZlg7AltUoA3uElDmKa4v~Bj2074sJQ8lTaY1iePc44ijWvp9SAhCZCU~Nn6gLPFscVHIxJ1ewpFRTQZ0gONEeIB5914QF7cZ0Mes2E29etvM-q2p7cNS4LmlLWtsD8IOaiKGPKfVErSRurlTZ5SrZ9TPkPVh-sUSNyWQzMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        className="rounded-[8px] rounded-b-none w-full md:h-[256px] h-[109px] object-cover object-center"
        alt=""
      />
      {/* Food Name */}
      <h1 className="md:mt-0 mt-[4px] md:w-[110px] md:h-[36px] w-[66px] h-[22px] font-primarySemiBold text-[#353535] text-center md:text-[20px] text-[12px] md:font-[600] font-[400]">
        دلمه برگ کلم
      </h1>
      <div className="md:w-[256px] w-[152px] md:h-[51px] h-[40px] md:mx-[16px] mx-[8px] flex justify-between">
        <div className="h-[48px] md:flex flex-col justify-between">
          {/* if discount true */}
          <div className="flex items-center md:gap-2 gap-1">
            <div className="flex w-[32px] h-[16px] rounded-[8px] justify-center items-center bg-[#FFF2F2]">
              {/* discount percent */}
              <p className="text-center font-primarySemiBold font-[400] text-[10px] text-[#C30000]">
                %۸
              </p>
            </div>
            {/* older price */}
            <p className="font-primarySemiBold line-through font-[400] text-[10px] text-[#ADADAD] text">
              ۲۲۰٬۰۰۰
            </p>
          </div>
          <p
            dir="rtl"
            className="md:h-[29px] md:mt-0 mt-[8px] h-[18px] flex items-center justify-center md:text-[16px] text-[10px] font-[400] font-primarySemiBold text-[#353535]">
            ۲۰۹٬۰۰۰ تومان
          </p>
        </div>
        <div>
          <div
            dir="rtl"
            className="flex items-center md:gap-1">
            <Heart className="w-[16px] h-[16px] text-[#ADADAD]" />
            <p className="md:block hidden text-[#ADADAD] text-[10px] font-[400] font-primarySemiBold">
              افزودن به علاقمندی‌ها
            </p>
          </div>
          <div
            dir="rtl"
            className="md:py-[4px] py-0 flex items-center h-[32px] gap-1">
            {/* Heart SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <path
                d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z"
                fill="#F4B740"
                stroke="#CBCBCB"
                stroke-width="0.25"
              />
            </svg>

            <p className="md:font-[500] font-[400] text-[#353535] md:text-[14px] text-[10px] font-primarySemiBold">
              ۵
            </p>
            <p className="md:block hidden font-[400] text-[#ADADAD] text-[10px] font-primarySemiBold">
              (۵۲ امتیاز)
            </p>
          </div>
        </div>
      </div>
      <button className="rounded-[4px] md:w-[256px] md:h-[40px] w-[152px] h-[32px]  flex justify-center items-center py-[8px] bg-[#417F56] text-white md:text-[16px] text-[10px] font-[400] md:font-[500] font-primarySemiBold mt-[12px] md:mt-[0px] mb-[8px] md:mb-[16px]">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default FoodCard;

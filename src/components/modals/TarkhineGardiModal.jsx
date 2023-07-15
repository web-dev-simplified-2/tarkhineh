import React, { useState } from "react";
import Image from "next/image";
import aghdasie from "../../assets/tarkhine-gardi/modalpic/aghdasie2.png";
import vanak from "../../assets/tarkhine-gardi/modalpic/vanak2.png";
import chalos from "../../assets/tarkhine-gardi/modalpic/chalos2.png";
import ekbatan from "../../assets/tarkhine-gardi/modalpic/ekbatan2.png";
import MenuPic from "../../assets/tarkhine-gardi/Menupicture.png";

const TarkhineGardiModal = ({ open, onClose }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleMenu = () => {
    setModalOpen(!modalOpen);
  };
  const handleCloseImage = () => {
    setModalOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="font-primary fixed  inset-0 z-20  justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-hidden outline-none 
    focus:outline-none bg-black/60 backdrop-blur-[3px]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[808px] h-[441px] fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] flex shadow-md rounded-md"
      >
        <div className="flex-col">
          <div className="inline-flex  mt-4 ml-4 h-[50px] w-full">
            <div onClick={onClose}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="3.72611"
                  height="29.8089"
                  rx="1.86305"
                  transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.6667)"
                  fill="#717171"
                />
                <rect
                  width="3.72611"
                  height="29.8089"
                  rx="1.86305"
                  transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)"
                  fill="#717171"
                />
              </svg>
            </div>

            <p className="ml-72">انتخاب شعبه</p>
          </div>
          <p className="text-center">
            :برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید
          </p>

          <div>
            <section className="flex ml-9 mt-8 font-primary space-x-3">
              <div className="w-[175px] h-[260px] bg-[#FFFFFF] border-solid border-2 border-[#315F41]  rounded-lg flex items-center justify-center relative ">
                <Image
                  src={vanak}
                  alt="vanak"
                  className="absolute top-0 cursor-pointer "
                  onClick={handleMenu}
                />
                {modalOpen && (
                  <div
                    className=" fixed  inset-0 z-20  justify-center 
                  items-center 
                  flex 
                  overflow-x-hidden 
                  overflow-y-hidden outline-none 
                  focus:outline-none bg-black/60 backdrop-blur-[3px]"
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseImage();
                      }}
                      className="cursor-pointer z-[1000] absolute top-0 left-1"
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="3.72611"
                          height="29.8089"
                          rx="1.86305"
                          transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.6667)"
                          fill="#dd2856"
                        />
                        <rect
                          width="3.72611"
                          height="29.8089"
                          rx="1.86305"
                          transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)"
                          fill="#dd2856"
                        />
                      </svg>
                    </div>
                    <Image
                      src={MenuPic}
                      alt="Menu Picture"
                      className=" w-[808px] h-[441px] fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-md rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose;
                      }}
                    />
                  </div>
                )}
                <div className="absolute bottom-[10px] text-center ">
                  <h3 className="font-bold text-sm">شعبه ونک</h3>
                  <p className="w-[159px] h-[44px] text-[#717171] text-[13px]">
                    میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
                  </p>
                </div>
              </div>

              <div className="w-[175px] h-[260px] bg-[#FFFFFF] border-solid border-2 border-[#315F41] rounded-lg flex items-center justify-center relative ">
                <Image
                  src={aghdasie}
                  alt="vanak"
                  className="absolute top-0 cursor-pointer"
                  onClick={handleMenu}
                />
                {modalOpen && (
                  <div
                    className=" fixed  inset-0 z-20  justify-center 
                  items-center 
                  flex 
                  overflow-x-hidden 
                  overflow-y-hidden outline-none 
                  focus:outline-none bg-black/60 backdrop-blur-[3px]"
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseImage();
                      }}
                      className="cursor-pointer z-[1000] absolute top-0 left-1"
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="3.72611"
                          height="29.8089"
                          rx="1.86305"
                          transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.6667)"
                          fill="#dd2856"
                        />
                        <rect
                          width="3.72611"
                          height="29.8089"
                          rx="1.86305"
                          transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)"
                          fill="#dd2856"
                        />
                      </svg>
                    </div>
                    <Image
                      src={MenuPic}
                      alt="Menu Picture"
                      className=" w-[808px] h-[441px] fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-md rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose;
                      }}
                    />
                  </div>
                )}
                <div className="absolute bottom-[10px] text-center ">
                  <h3 className="font-bold text-sm">شعبه اقدسیه</h3>
                  <p className="w-[159px] h-[44px] text-[#717171] text-[13px]">
                    خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
                  </p>
                </div>
              </div>

              <div className="w-[175px] h-[260px] bg-[#FFFFFF] border-solid border-2 border-[#315F41]  rounded-lg flex items-center justify-center relative ">
                <Image
                  src={chalos}
                  alt={"chalos"}
                  className="absolute top-0 cursor-pointer"
                  onClick={handleMenu}
                />
                {modalOpen && (
                  <div
                    className=" fixed  inset-0 z-20  justify-center 
                  items-center 
                  flex 
                  overflow-x-hidden 
                  overflow-y-hidden outline-none 
                  focus:outline-none bg-black/60 backdrop-blur-[3px]"
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseImage();
                      }}
                      className="cursor-pointer z-[1000] absolute top-0 left-1"
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="3.72611"
                          height="29.8089"
                          rx="1.86305"
                          transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.6667)"
                          fill="#dd2856"
                        />
                        <rect
                          width="3.72611"
                          height="29.8089"
                          rx="1.86305"
                          transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)"
                          fill="#dd2856"
                        />
                      </svg>
                    </div>
                    <Image
                      src={MenuPic}
                      alt="Menu Picture"
                      className=" w-[808px] h-[441px] fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-md rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose;
                      }}
                    />
                  </div>
                )}
                <div className="absolute bottom-[10px] text-center ">
                  <h3 className="font-bold text-sm">شعبه چالوس</h3>
                  <p className="w-[159px] h-[44px] text-[#717171] text-[12px]">
                    چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                    میلانی
                  </p>
                </div>
              </div>

              <div className="w-[175px] h-[260px] bg-[#FFFFFF] border-solid border-2 border-[#315F41] rounded-lg flex items-center justify-center relative ">
                <Image
                  src={ekbatan}
                  alt="ekbatan"
                  className="absolute top-0 cursor-pointer"
                  onClick={handleMenu}
                />
                {modalOpen && (
                  <div
                    className=" fixed  inset-0 z-20  justify-center 
                  items-center 
                  flex 
                  overflow-x-hidden 
                  overflow-y-hidden outline-none 
                  focus:outline-none bg-black/60 backdrop-blur-[3px]"
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseImage();
                      }}
                      className="cursor-pointer z-[1000] absolute top-0 left-1"
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="3.72611"
                          height="29.8089"
                          rx="1.86305"
                          transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.6667)"
                          fill="#dd2856"
                        />
                        <rect
                          width="3.72611"
                          height="29.8089"
                          rx="1.86305"
                          transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)"
                          fill="#dd2856"
                        />
                      </svg>
                    </div>
                    <Image
                      src={MenuPic}
                      alt="Menu Picture"
                      className=" w-[808px] h-[441px] fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-md rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose;
                      }}
                    />
                  </div>
                )}
                <div className="absolute bottom-[10px] text-center ">
                  <h3 className="font-bold text-sm">شعبه اکباتان</h3>
                  <p className="w-[159px] h-[44px] text-[#717171] text-[13px]">
                    شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarkhineGardiModal;

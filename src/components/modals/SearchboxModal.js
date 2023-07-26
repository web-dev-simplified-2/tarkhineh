import React, { useState } from "react";

const SearchBox = ({ open, onClose }) => {
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
        className="w-[600px] h-[253px] fixed top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] flex shadow-md rounded-md"
      >
        {" "}
        <div className="font-primary flex-col h-[50px] w-full relative ">
          <div className="bg-[#ededed] w-[600px] h-[84px] flex flex-col space-x-4">
            <div className="flex justify-around">
              <div className=" absolute top-4 left-4" onClick={onClose}>
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
              <h3 className="mt-5 font-bold">جستجو</h3>
            </div>
            <div className="flex flex-col justify-center text-center items-center mt-20">
              <p>لطفا متن خود را تایپ و سپس دکمه اینتر را بزنید</p>

              <div className="relative flex-grow mt-8">
                <div className="absolute top-2 left-4 flex items-center pr-3 pointer-events-none">
                  <svg
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
                  className="text-right text-sm w-[409px] h-[40px] border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-3 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

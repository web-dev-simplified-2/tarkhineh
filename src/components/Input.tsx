"use client";

import React, { useState } from "react";

import EyeIcon from "../assets/Svg/All/outline/eye.svg";
import EyeSlashIcon from "../assets/Svg/All/outline/eye-slash.svg";
import Image from "next/image";
import usePasswordShown from "@/hooks/usePasswordShown";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  InputLogo?: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

function Input({
  placeholder,
  value,
  type = "text",
  disabled,
  onChange,
  label,
  InputLogo,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const passwordShown = usePasswordShown();

  return (
    <div className="  w-full relative">
      <input
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="   border rounded-md  group  w-full  font-primary  focus:placeholder:opacity-0 input-arrow placeholder:text-[#717171]  autofill:bg-white  placeholder:font-primary placeholder:text-right focus:border-primary focus:outline-primary border-[#cbcbcb]  py-2 px-12"
      />
      {isFocused && (
        <div
          className={` px-1 bg-white text-sm right-4  font-primary -top-3 text-primary   absolute  `}
        >
          {placeholder}
        </div>
      )}
      {label === "password" && (
        <div className=" absolute left-4 cursor-pointer top-2  ">
          {type === "password" ? (
            <EyeIcon
              className=" fill-[#717171]"
              onClick={() => passwordShown.onShown()}
            />
          ) : (
            <EyeSlashIcon
              className=" fill-[#717171]"
              onClick={() => passwordShown.onHide()}
            />
          )}
        </div>
      )}
      {InputLogo && (
        <div className="absolute right-4  top-2   ">
          <InputLogo className=" fill-[#717171]" />
        </div>
      )}
    </div>
  );
}

export default Input;

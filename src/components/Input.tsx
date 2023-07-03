"use client";

import React, { useState } from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

function Input({
  placeholder,
  value,
  type = "text",
  disabled,
  label,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="  w-full relative">
      <input
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // onChange={onChange}
        // value={value}
        placeholder={placeholder}
        type={type}
        className="   border rounded-md  group  w-full   focus:placeholder:opacity-0 input-arrow placeholder:text-[#717171] placeholder:font-primary placeholder:text-right focus:border-primary focus:outline-primary border-[#cbcbcb]  py-2 px-3"
      />
      {isFocused && (
        <div
          className={` px-1 bg-white text-sm right-4  font-primary -top-3 text-primary   absolute  `}
        >
          {placeholder}
        </div>
      )}
    </div>
  );
}

export default Input;

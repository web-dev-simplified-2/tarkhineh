"use client";

import React, { useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import usePasswordShown from "@/hooks/usePasswordShown";
import Lock from "../../assets/Svg/All/outline/lock.svg";

console.log(typeof Lock);
function RegisterModal() {
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const passwordShown = usePasswordShown();

  const bodyContent = (
    <div className="flex flex-col mt-10 items-center gap-4">
      <p
        className="  text-[#353535] font-primary 
      "
      >
        ورود / ثبت ‌نام
      </p>
      <p className=" font-primary text-sm text-[#717171]">
        با وارد کردن مشخصات خود اکانت بسازید
      </p>
      <Input
        disabled={isLoading}
        placeholder="ایمیل"
        value={email}
        label="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="نام"
        value={name}
        label="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="نام کاربری"
        value={username}
        label="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="رمز عبور"
        label="password"
        type={passwordShown.isShown ? "text" : "password"}
        value={password}
        InputLogo={Lock}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center  mt-4">
      <p className=" rtl flex   font-primarylight  text-sm ">
        ورود و عضویت در ترخینه به منزله قبول 
        <p className="  text-primary cursor-pointer hover:underline">  &nbsp; قوانین و مقررات &nbsp;</p>
        است.
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel=" ثبت نام"
      onClose={registerModal.onClose}
      onSubmit={() => console.log("Register")}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;

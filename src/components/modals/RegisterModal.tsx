"use client";

import React, { useCallback, useState } from "react";
import Input from "../Input";
import axios from "axios";
import { signIn } from "next-auth/react";

import { toast } from "react-hot-toast";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import usePasswordShown from "@/hooks/usePasswordShown";

import { Lock1 as Lock } from "iconsax-react";

console.log(typeof Lock);
function RegisterModal() {
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456");
  const [username, setUsername] = useState("test");
  const [name, setName] = useState("test1");

  const [isLoading, setIsLoading] = useState(false);

  const passwordShown = usePasswordShown();

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });

      setIsLoading(false);

      toast.success("Account created.");

      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      toast.error("somthing failed");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, registerModal, username, name]);

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
        <p className="  text-primary cursor-pointer hover:underline">
          {" "}
          &nbsp; قوانین و مقررات &nbsp;
        </p>
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
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;

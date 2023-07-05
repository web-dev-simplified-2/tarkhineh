import React, { useCallback } from "react";
import greenBig from "../assets/Logo/greenBig.png";
import Plus from "../assets/plus.svg";

import Image from "next/image";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
}: ModalProps) {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={(e) => {
        e.currentTarget !== e.target ? null : handleClose();
      }}
      className=" fixed  inset-0 z-20  justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-hidden outline-none 
    focus:outline-none bg-black/60 backdrop-blur-[3px]"
    >
      <div className="relative md:rounded-md bg-white w-full h-full lg:w-[392px] my-6 mx-auto lg:max-w-3xl lg:h-auto">
        {/*content*/}
        <div
          className="
            h-full
            lg:h-auto
            border-0  
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            p-4
            "
        >
          {/* header  */}
          <div className=" flex w-full justify-between h-[40%] md:h-auto  items-center">
            <Plus
              onClick={handleClose}
              className=" self-start cursor-pointer fill-[#717171] rotate-45 h-6 w-6"
            />

            <div>
              <Image src={greenBig} alt="" className="  md:h-8 md:w-[102px] " />
            </div>
            <div></div>
          </div>

          {/*body*/}
          <div className="relative flex-auto">{body}</div>
          {/*footer*/}
          <div className="flex flex-col mt-10 gap-2 ">
            <Button
              disabled={disabled}
              label={actionLabel}
              fullWidth
              onClick={handleSubmit}
            />
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

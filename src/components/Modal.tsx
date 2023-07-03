import React, { useCallback } from "react";
import CloseIcon from "../assets/Svg/All/outline/add.svg";
import greenBig from "../assets/Logo/greenBig.png";
import greenSmall from "../assets/Logo/greenSmall.png";

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
        e.currentTarget !== e.target ? null : onClose();
      }}
      className=" fixed  inset-0 z-20 justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-auto outline-none 
    focus:outline-none bg-black/60 backdrop-blur-[3px]"
    >
      <div className="relative md:rounded-md bg-white w-full lg:w-[392px] my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
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
            <Image
              src={CloseIcon}
              onClick={onClose}
              alt=""
              className=" self-start cursor-pointer rotate-45 h-6 w-6"
            />
            <div>
              <Image src={greenBig} alt="" className="  md:h-8 md:w-[102px] " />
            </div>
            <div></div>
          </div>

          {/*body*/}
          <div className="relative flex-auto">{body}</div>
          {/*footer*/}
          <div className="flex flex-col gap-2 p-10">
            <Button
              disabled={disabled}
              label={actionLabel}
              secondary
              fullWidth
              large
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

import React from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io'
import clx from "../utils/clx";
import Text from "./text";

export default function Container({
  type,
  heading,
  isQuestionOpen,
  onclick,
  outlineBottom,
  variant = "primary",
  classname,
  children,
}) {
  // Classes
  const outlinedContainer = clx(
    "tw-bg-primary-main tw-w-fit tw-p-4 tw-text-white tw-rounded-xl tw-relative before:tw-content-[''] before:tw-absolute before:tw-pointer-events-none before:tw-w-full before:tw-h-full before:tw-border-[1px] before:tw-border-primary-main before:tw-rounded-xl before:tw-right-[10px] before:tw-bottom-[10px]",
    outlineBottom &&
    "before:tw-right-[10px] before:tw-top-[10px] before:tw-z-0 tw-z-20",
    classname
  );
  const accordion = clx("tw-flex tw-flex-col tw-w-full tw-h-fit", classname);
  switch (type) {
    case "with-outline":
      return <div className={outlinedContainer}>{children}</div>;
    case "accordion":
      return (
        <div className={accordion}>
          <div
            className={`tw-max-w-[100%] lg:tw-max-w-fit tw-flex tw-items-center tw-gap-x-4 tw-justify-between ${variant === "secondary"
                ? "tw-bg-secondary-main tw-ml-auto"
                : "tw-bg-secondary-main"
              } tw-py-3 lg:tw-py-4 tw-px-3 lg:tw-px-6 tw-rounded-t-xl tw-text-lg tw-font-semibold tw-text-white`}
          >
            <Text as='h5' classname='lg:tw-text-[32px]'>
              {heading}
            </Text>
            {isQuestionOpen ? (
              <IoMdArrowDropupCircle className='tw-bg-text-white tw-min-w-[40px] tw-min-h-[40px]' onClick={onclick} />
            ) : (
              <IoMdArrowDropdownCircle className='tw-bg-text-white tw-min-w-[40px] tw-min-h-[40px]' onClick={onclick} />
            )}
          </div>
          {isQuestionOpen && (
            <div
              className={`tw-border-[1px] tw-border-primary-main tw-rounded-b-xl tw-w-full ${variant === "secondary"
                  ? "tw-rounded-tl-0"
                  : "tw-rounded-tr-0"
                } tw-w-fit tw-px-3 lg:tw-px-6 tw-py-4 tw-text-primary-dark tw-font-medium`}
            >
              <Text as='p'>{children}</Text>
            </div>
          )}
        </div>
      );
    case "terms":
      return (
        <div className='tw-py-4 lg:tw-py-6'>
          <Text as='h4' classname='tw-text-primary-main'>
            {heading}
          </Text>
          <Text
            as='article'
            classname='tw-leading-normal tw-text-justify lg:tw-text-left'
          >
            {children}
          </Text>
        </div>
      );
    default:
      return <div>default</div>;
  }
}

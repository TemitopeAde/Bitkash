import React from "react";
import clx from "../utils/clx";
import Text from "./text";

export default function Card({
  classname,
  type,
  heading,
  icon,
  number,
  withTriangle,
  innerHeading,
  outerHeading,
  darkHeading,
  children,
}) {
  const classes = clx(
    "tw-flex-1 tw-p-4 tw-border-[1px] tw-border-primary-main tw-w-fit lg:tw-text-lg tw-font-medium tw-min-h-fit tw-rounded-xl",
    classname
  );
  switch (type) {
    case "why":
      return (
        <div className='tw-p-4 tw-flex tw-flex-col lg:fklex-row tw-border-[1px] tw-border-primary-main tw-rounded-lg tw-shadow-sm'>
          <div className='tw-min-w-fit tw-place-self-center'>{icon}</div>
          <div>
            <Text
              as='h4'
              classname='tw-py-2 tw-text-center lg:tw-text-start tw-text-primary-main'
            >
              {heading}
            </Text>
            <Text as='p' classname='tw-text-center lg:tw-text-start'>
              {children}
            </Text>
          </div>
        </div>
      );
    case "how-it-works":
      return (
        <div className='tw-rounded-lg tw-border-[1px] tw-border-white tw-relative  tw-w-fit tw-p-4 tw-text-white'>
          <Text
            as='h6'
            classname='tw-absolute tw-top-[-25px] tw-left-[50%] tw-translate-x-[-50%] tw-w-[50px] tw-h-[50px] tw-bg-white tw-rounded-full tw-text-secondary-main tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-2xl'
          >
            {number}
          </Text>
          <Text
            as='h4'
            classname='tw-py-3 tw-font-bold tw-text-center tw-pt-4 tw-font-circular tw-text-white'
          >
            {heading}
          </Text>
          <p className='tw-m-0  tw-text-center tw-font-poppins'>{children}</p>
        </div>
      );
    default:
      return (
        <>
          <div className='tw-w-fit tw-h-full tw-flex tw-flex-col'>
            {outerHeading && (
              <Text
                as='h4'
                classname={`tw-text-center ${
                  darkHeading ? "tw-text-secondary-main" : "tw-text-primary-main"
                }`}
              >
                {outerHeading}
              </Text>
            )}
            {withTriangle && (
              <div className='tw-w-[20px] tw-mx-auto tw-pb-2'>
                <img src='/images/triangle.png' alt='' />
              </div>
            )}
            <div className={classes}>
              {innerHeading && (
                <Text as='h4' classname='tw-py-2 tw-text-primary-main'>
                  {innerHeading}
                </Text>
              )}
              <Text as='article'>{children}</Text>
            </div>
          </div>
        </>
      );
  }
}

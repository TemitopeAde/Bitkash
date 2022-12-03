import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import clx from "../utils/clx";

export default function SmallSelect({
  column,
  value,
  setValue,
  options = ["All", "Verified", "Unverified"],
  classname,
  children,
}) {
  const [isOpen, setOpen] = React.useState(false);
  // const {filterValue, setFilter} = column
  const classes = clx(
    "tw-w-fit tw-select-none tw-bg-white tw-px-4 tw-py-2 tw-border-[1px] tw-border-primary-main tw-rounded-lg tw-flex tw-gap-4 tw-items-center tw-relative",
    classname
  );
  return (
    <div className={classes}>
      {value ?? "Sort by"}
      <IoIosArrowDown
        className={`tw-cursor-pointer ${isOpen && "tw-rotate-180"}`}
        onClick={() => setOpen((state) => !state)}
      />
      {isOpen && (
        <div className='tw-absolute tw-z-[1000] tw-bg-white tw-top-[100%] tw-w-full tw-h-fit tw-shadow-md tw-left-0 tw-rounded-lg'>
          {options.map((option, index) => (
            <p
              key={option}
              className={`tw-py-2 tw-px-3 tw-h-fit tw-my-0 tw-cursor-pointer tw-select-none 
                  ${
                    option === "Verified"
                      ? "tw-text-[#0BC56B]"
                      : "tw-text-[#E00808]"
                  } ${
                index + 1 !== options.length &&
                "tw-border-b-[1px] tw-border-primary-main"
              }
                `}
              onClick={() => {
                setValue(option);
                setOpen(false);
              }}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

import React from "react";
import clx from "../utils/clx";

export default function Input({
  type,
  variant,
  name,
  label,
  placeholder,
  classname,
  children,
}) {
  const classes = clx("tw-flex tw-flex-col tw-gap-0", classname);
  return (
    <div className={classes}>
      <label
        htmlFor={name}
        className={`tw-font-medium ${variant==='primary'?'tw-text-primary-main':'text-secondary-main'} tw-font-poppins`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`tw-outline-none ${variant==='primary'?'tw-border-[1px] tw-border-primary-main':'tw-border-none'} tw-rounded-md tw-px-3 tw-py-2 tw-my-0 tw-bg-white text-secondary-main`}
      />
    </div>
  );
}

import React from "react";
import clx from "../utils/clx";

export default function Input({
  type,
  variant,
  name,
  value,
  onblur,
  errorMessage,
  label,
  placeholder,
  onchange,
  classname,
  children,
}) {
  const classes = clx("tw-flex tw-flex-col tw-gap-0", classname);
  return (
    <div className={classes}>
      <label
        htmlFor={name}
        className={`tw-font-medium ${variant==='primary'?'tw-text-primary-main':'tw-text-secondary-main'} tw-font-poppins`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onBlur={onblur}
        onChange={onchange}
        placeholder={placeholder}
        name={name}
        className={`tw-outline-none ${variant==='primary'?'tw-border-[1px] tw-border-primary-main':'tw-border-none'} tw-rounded-md tw-px-3 tw-py-2 tw-my-0 tw-bg-white tw-text-secondary-main`}
      />
      <p className="tw-text-red-500">{errorMessage}</p>
    </div>
  );
}

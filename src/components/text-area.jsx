import React from "react";
import clx from "../utils/clx";

export default function TextArea({
  name,
  label,
  placeholder,
  value,
  onchange,
  classname,
  children,
}) {
  const classes = clx("tw-flex tw-flex-col tw-gap-0", classname);
  return (
    <div className={classes}>
      <label
        htmlFor={name}
        className=' tw-font-medium tw-text-secondary-main font-poppins'
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        cols='30'
        rows='5'
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        className='tw-outline-none tw-border-none tw-rounded-md tw-px-3 tw-py-2 tw-my-0 tw-bg-white tw-text-secondary-main'
      ></textarea>
    </div>
  );
}

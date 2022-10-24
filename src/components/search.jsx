import React from "react";
import { FiSearch } from "react-icons/fi";
import clx from "../utils/clx";

export default function Search({ placeholder, value, onChange, classname, children }) {
  const classes = clx(
    "tw-border-2 tw-flex tw-items-center tw-px-3 tw-py-2 tw-rounded-lg",
    classname
  );
  return (
    <div className={classes}>
      <input
        type='text'
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
        className='tw-outline-none tw-flex-1 tw-bg-transparent'
      />
      <FiSearch />
    </div>
  );
}

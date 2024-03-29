import React from "react";
import { Link } from "react-router-dom";
import clx from "../utils/clx";

export default function LinkContainer({ heading, links, classname, children }) {
  const classes = clx("", classname);
  return (
    <div className={classes}>
      <h5 className='tw-text-base tw-font-semibold font-poppins tw-text-primary-main'>
        {heading}
      </h5>
      <ul className='tw-flex tw-flex-col tw-gap-3 tw-py-2'>
        {children}
      </ul>
    </div>
  );
}

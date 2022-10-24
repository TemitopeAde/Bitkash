import React from "react";
import clx from "../utils/clx";

export default function LinkContainer({ heading, links, classname, children }) {
  const classes = clx("", classname);
  return (
    <div className={classes}>
      <h5 className='tw-text-base tw-font-semibold font-poppins'>{heading}</h5>
      <ul className='tw-flex tw-flex-col tw-gap-3 tw-py-2'>
        {links.map((link) => (
          <li key={link} className='min-w-fit tw-text-white tw-tracking-wide'>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import clx from "../utils/clx";
import Text from "./text";

export default function LinkButton({
  category,
  href,
  onclick,
  active,
  label,
  icon,
  classname,
  children,
}) {
  const classes = clx(
    "tw-flex tw-gap-4 tw-items-center tw-justify-center tw-text-base tw-py-2 tw-font-poppins  tw-text-primary-main",
    active && "tw-border-b-[1px] tw-text-secondary-main tw-border-primary-main",
    classname
  );
  switch (category) {
    case "admin":
      return (
        <Link to={href ? href : "/"} className='tw-no-underline'>
          <div className={classes} onClick={onclick}>
            <span>{icon}</span>
              {label}
          </div>
        </Link>
      );
    default:
      return <div className={classes}></div>;
  }
}

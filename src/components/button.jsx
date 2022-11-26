import React from "react";
import { Link } from "react-router-dom";
import clx from "../utils/clx";

export default function Button({
  classname,
  variant = "primary",
  size = "small",
  iconLeft,
  iconRight,
  color,
  href,
  type,
  onclick,
  children,
}) {
  const classes = clx(
    "tw-w-fit tw-select-none tw-cursor-pointer tw-font-poppins tw-duration-400",
    (iconLeft || iconRight) && "tw-flex tw-items-center tw-gap-2",
    variant === "primary" &&
      size === "small" &&
      "tw-py-2 tw-px-3 tw-rounded-md tw-text-sm tw-bg-primary-main hover:tw-bg-primary-main/90 tw-duration-300 tw-font-medium tw-text-white",
    variant === "primary" &&
      size === "medium" &&
      "tw-py-2 tw-px-6 tw-rounded-lg tw-bg-primary-main hover:tw-bg-primary-main/90 tw-duration-300 tw-font-medium tw-text-white",
    variant === "primary" &&
      size === "large" &&
      "tw-py-3 tw-px-10 tw-rounded-lg tw-text-lg tw-bg-primary-main hover:tw-bg-primary-main/90 tw-duration-300 tw-font-medium tw-text-white",
    variant === "secondary" &&
      size === "small" &&
      "tw-py-2 tw-px-3 tw-text-sm tw-rounded-md tw-bg-primary-dark hover:tw-bg-primary-dark/90 tw-duration-300 tw-font-medium tw-text-white",
    variant === "secondary" &&
      size === "medium" &&
      "tw-py-2 tw-px-6 tw-rounded-lg tw-bg-primary-dark hover:tw-bg-primary-dark/90 tw-duration-300 tw-font-medium tw-text-white",
    variant === "secondary" &&
      size === "large" &&
      "tw-py-3 tw-px-10 tw-text-lg tw-rounded-lg tw-bg-primary-dark hover:tw-bg-primary-dark/90 tw-duration-300 tw-font-medium tw-text-white",
    variant === "text" && color === "primary"
      ? "tw-px-4 tw-py-2 tw-font-medium tw-text-primary-main"
      : "tw-px-4 tw-py-2 tw-font-medium",
    variant === "text" && color === "secondary"
      ? "tw-px-4 tw-py-2 tw-font-medium tw-text-secondary-main"
      : "tw-px-4 tw-py-2 tw-font-medium",
    classname
  );
  if (href) {
    return (
      <Link to={href} className='tw-no-underline'>
        <div className={classes}>
          {iconLeft && iconLeft}
          {children}
          {iconRight && iconRight}
        </div>
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onclick}>
      {iconLeft && iconLeft}
      {children}
      {iconRight && iconRight}
    </button>
  );
}

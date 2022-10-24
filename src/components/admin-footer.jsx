import React from "react";
import clx from "../utils/clx";

export default function AdminFooter({ classname, children }) {
  const classes = clx(
    "tw-py-5 tw-bg-primary-main tw-text-center tw-text-white tw-max-h-[70px]",
    classname
  );
  return <div className={classes}>Copyright@bitkadh.io</div>;
}

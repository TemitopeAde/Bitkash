import React from "react";
import clx from "../utils/clx";
import Text from "./text";

export default function Label({ label, icon, classname, children }) {
  const classes = clx(
    "tw-flex tw-font-medium tw-gap-2 lg:tw-text-lg",
    label ? "items-center" : "items-start",
    classname
  );
  return (
    <div className={classes}>
      <Text as='span' classname='tw-py-1'>
        {icon}
      </Text>
      <Text as='span' classname='tw-p-0 tw-py-0'>{label}</Text>
      <Text as='span' classname='tw-py-0 tw-m-0'>
        {children}
      </Text>
    </div>
  );
}

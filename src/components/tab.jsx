import React from "react";
import clx from "../utils/clx";
import Text from "./text";

export default function Tab({ name, amount, date, classname, children }) {
  const classes = clx(
    "tw-px-4 tw-py-1 tw-rounded-lg tw-bg-white tw-grid tw-grid-cols-3 tw-gap-3 max-w-[100%]",
    classname
  );
  return (
    <div className={classes}>
      <Text as='span' classname='max-w-[100%] tw-truncate'>
        {name}
      </Text>
      <Text as='span' classname='max-w-[100%] tw-place-self-center tw-truncate'>
        ${amount}
      </Text>
      <Text as='span' classname='max-w-[100%] tw-place-self-end tw-truncate'>
        {date}
      </Text>
    </div>
  );
}

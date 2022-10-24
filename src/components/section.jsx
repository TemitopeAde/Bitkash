import React from "react";
import clx from "../utils/clx";

export default function Section({ background, url, classname, children }) {
  const classes = clx(
    "lg:tw-w-[90%] tw-mx-auto tw-py-10 tw-px-3 lg:tw-px-0",
    classname
  );
  return (
    <section
      className={`tw-w-full ${background}`}
      style={{ backgroundImage: url }}
    >
      <div className={classes}>{children}</div>
    </section>
  );
}

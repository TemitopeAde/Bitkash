import React from "react";
import clx from "../utils/clx";

export default function Text({ as, weight = "normal", classname, children }) {
  const H1classes = clx(
    "tw-text-4xl lg:tw-text-[54px] tw-font-bold tw-font-circular",
    weight === "normal" && "tw-font-normal",
    weight === "medium" && "tw-font-medium",
    weight === "semi-bold" && "tw-font-semibold",
    weight === "bold" && "tw-font-bold",
    classname
  );
  const H2classes = clx(
    "tw-text-3xl lg:tw-text-[54px] tw-font-bold tw-font-poppins leading-[1.5] lg:tw-leading-normal",
    weight === "normal" && "tw-font-normal",
    weight === "medium" && "tw-font-medium",
    weight === "semi-bold" && "tw-font-semibold",
    weight === "bold" && "tw-font-bold",
    classname
  );
  const H3classes = clx(
    "tw-text-2xl lg:tw-text-3xl tw-font-bold tw-font-circular leading-[1.5] lg:tw-leading-0",
    weight === "normal" && "tw-font-normal",
    weight === "medium" && "tw-font-medium",
    weight === "semi-bold" && "tw-font-semibold",
    weight === "bold" && "tw-font-bold",
    classname
  );
  const H4classes = clx(
    "tw-text-xl lg:tw-text-2xl tw-font-bold font-circular leading-[1.5] lg:leading-normal",
    weight === "normal" && "tw-font-normal",
    weight === "medium" && "tw-font-medium",
    weight === "semi-bold" && "tw-font-semibold",
    weight === "bold" && "tw-font-bold",
    classname
  );
  const H5classes = clx(
    "tw-text-lg lg:tw-text-xl tw-font-bold font-circular leading-[1.5] lg:leading-normal",
    weight === "normal" && "tw-font-normal",
    weight === "medium" && "tw-font-medium",
    weight === "semi-bold" && "tw-font-semibold",
    weight === "bold" && "tw-font-bold",
    classname
  );
  const H6classes = clx(
    "tw-text-base lg:tw-text-lg  tw-font-bold font-circular leading-[1.5] lg:leading-0",
    weight === "normal" && "tw-font-normal",
    weight === "medium" && "tw-font-medium",
    weight === "semi-bold" && "tw-font-semibold",
    weight === "bold" && "tw-font-bold",
    classname
  );
  const classes = clx(
    "tw-text-base tw-font-medium tw-font-poppins tw-py-1 tw-m-0",
    weight === "normal" && "tw-font-normal",
    weight === "medium" && "tw-font-medium",
    weight === "semi-bold" && "tw-font-semibold",
    weight === "bold" && "tw-font-bold",
    classname
  );
  switch (as) {
    case "h1":
      return <h1 className={H1classes}>{children}</h1>;
    case "h2":
      return <h2 className={H2classes}>{children}</h2>;
    case "h3":
      return <h3 className={H3classes}>{children}</h3>;
    case "h4":
      return <h4 className={H4classes}>{children}</h4>;
    case "h5":
      return <h5 className={H5classes}>{children}</h5>;
    case "h6":
      return <h6 className={H6classes}>{children}</h6>;
    case "p":
      return <p className={classes}>{children}</p>;
    case "article":
      return <article className={classes}>{children}</article>;
    case "span":
      return <span className={classes}>{children}</span>;
    default:
      return <div className={classes}>{children}</div>;
  }
}

import React from "react";
import clx from "../utils/clx";

export default function ListWrapper({ classname, children }) {
  const classes = clx("", classname);
  return <div className={classes}>List Wrapper</div>;
}

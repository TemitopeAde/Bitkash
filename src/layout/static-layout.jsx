import React from "react";
import Footer from "../components/static-footer";
import Header from "../components/static-header";
import clx from "../utils/clx";

export default function StaticLayout({ classname, children }) {
  const classes = clx(
    "tw-min-h-[calc(100vh-290px)] lg:tw-min-h-[calc(100vh-120px)] tw-mt-[90px] lg:tw-mt-[120px]",
    classname
  );
  return (
    <div className=''>
      <Header />
      <div className={classes}>
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

import React from "react";
import AdminFooter from "../components/admin-footer";
import AdminHeader from "../components/admin-header";
import Footer from "../components/static-footer";
import Header from "../components/static-header";
import clx from "../utils/clx";

export default function AdminLayout({ classname, children }) {
  //   const classes = clx("w-[90%] tw-mx-auto overfloy-y-auto tw-flex-1", classname);
  return (
    <div className='tw-hidden lg:tw-flex tw-h-screen tw-max-h-screen tw-overflow-hidden  tw-w-full tw-flex-col tw-relative'>
      <AdminHeader />
      <div className='min-h-[cal(100vh-370px)] tw-overflow-y-auto tw-flex-1'>
        {children}
      </div>
      <AdminFooter />
    </div>
  );
}

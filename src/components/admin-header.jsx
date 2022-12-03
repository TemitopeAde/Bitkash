import React from "react";
import {useLocation} from 'react-router-dom'
import clx from "../utils/clx";
import LinkButton from "./link-button";
import AdminNavLinks from "../constants/admin-navlinks";
import Text from "./text";

export default function AdminHeader({ classname, children }) {
  const {pathname} = useLocation()
  // React.useEffect(() => {
  //   setActiveLink(1)
  // }, [activeLink])

  const classes = clx(
    "lg:tw-w-[90%] tw-mx-auto tw-max-h-[300px] tw-px-3 lg:tw-px-0 tw-flex tw-justify-between tw-items-center tw-py-8",
    classname
  );
  return (
    <div className='tw-bg-white tw-shadow-sm'>
      <div className={classes}>
        <div>
          <div className='tw-w-[200px]'>
            <img src='/images/admin/logo.png' alt='' />
          </div>
        </div>
        <div className='tw-flex tw-gap-8 tw-items-center'>
          {AdminNavLinks.map((link, index) => (
            <LinkButton
              key={link.id}
              category='admin'
              href={link.route}
              icon={link.icon}
              label={link.label}
              active={link.route === pathname}
            />
          ))}
        </div>
        <div className='tw-hidden lg:tw-flex tw-items-center tw-gap-4'>
          <div className='tw-w-[60px]'>
            <img src='/images/admin/profile-pic.png' alt='' />
          </div>
          <div>
            <Text as='h6' classname='tw-py-0'>Olubanjo Oluseyi</Text>
            <Text
              as='p'
              classname='tw-py-0 tw-pt-2 tw-leading-[0px] tw-font-normal tw-text-primary-main tw-text-base'
            >
              Super Admin
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

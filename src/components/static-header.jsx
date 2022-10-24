import React from "react";
import { useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import clx from "../utils/clx";
import Button from "./button";
import { navLink } from "../constants/navlink";
import { Link } from "react-router-dom";

export default function Header({ classname, children }) {
  const router = useLocation()
  const classes = clx(
    "lg:tw-w-[90%] tw-mx-auto tw-py-4 tw-px-3 lg:tw-px-0 tw-h-[90px] lg:tw-h-[120px] tw-flex tw-items-center tw-justify-between",
    classname
  );
  return (
    <div className='tw-bg-white tw-fixed tw-z-40 tw-inset-0 tw-h-fit tw-shadow-md'>
      <div className={classes}>
        <div className='tw-w-[170px] lg:w-[200px]'>
          <img src='/images/logo.png' alt='logo' />
        </div>
        <div className='tw-hidden lg:tw-flex tw-gap-10 tw-items-center'>
          <div className='tw-flex tw-gap-6 tw-items-center h-[100%]'>
            {navLink.map((link) => (
              <Link to={link.route} className='tw-text-secondary-main tw-no-underline hover:tw-text-primary-main'>
                <span key={link.id} className={`tw-font-semibold ${router.pathname===link.route && 'tw-text-primary-main'}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          <div className='tw-flex tw-items-center tw-gap-2'>
            <Button variant='text' color='primary'>
              Login
            </Button>
            <Button variant='secondary' size='medium'>
              Get Started
            </Button>
          </div>
        </div>
        {/* Mobile Hamburger */}
        <div className='lg:tw-hidden tw-text-2xl'>
          <HiMenu />
        </div>
      </div>
    </div>
  );
}

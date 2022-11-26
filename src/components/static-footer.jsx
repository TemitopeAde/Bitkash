import React from "react";
import clx from "../utils/clx";
import Button from "./button";
import Links, { bitkash, buyBitcoin, contacts, legacyPolicy } from "../constants/links";
import LinkContainer from "./link-container";
import Text from "./text";
import { Link } from "react-router-dom";

export default function Footer({ classname, children }) {
  const classes = clx("tw-w-[100%]", classname);
  return (
    <div className={classes}>
      <div className='lg:tw-h-fit tw-bg-[#292D32]'>
        <div className='tw-w-[90%] tw-py-6 lg:tw-py-[100px] tw-mx-auto tw-h-full tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-start lg:tw-gap-x-[30px]'>
          <div className='tw-flex-1 tw-flex tw-flex-col tw-justify-center'>
            <Text as='h5' classname='tw-text-primary-main tw-font-semibold'>
              Subscribe
            </Text>
            <h1 className='tw-text-white tw-text-2xl lg:tw-text-5xl tw-leading-normal tw-font-bold tw-font-circular lg:w-[80%]'>
              Stay informed never miss an <span>update!</span>
            </h1>
          </div>
          <div className='tw-flex-1 tw-flex tw-flex-col lg:tw-gap-12 tw-justify-center tw-text-white tw-font-poppins'>
            <p className='tw-hidden lg:tw-block tw-text-justify'>
              Sign Up For Our Free Newsletter. Once a week, we’ll send you
              Bitkash updates, news, and tips about crypto trading. Sign up to
              never miss an update or promotional offer. We promise not to bore
              you.
            </p>
            <p className='lg:tw-hidden tw-py-3 tw-m-0 tw-text-left'>
              Once each month we'll send you recent episodes of our Financial
              information covering the optimization of digital technology and
              irresistible people delivering a great customer experience that
              impacts the bottom line.
            </p>
            <Footer.Subscribe />
          </div>
        </div>
      </div>

      <div className='tw-bg-[#292D32] tw-border-t-2 tw-border-primary-main'>
        <div className='tw-w-[90%] tw-mx-auto tw-py-14 tw-flex'>
          <div className='lg:tw-w-[35%]'>
            <div className='tw-w-[200px]'>
              <img
                src='/images/footer-logo.png'
                alt='Logo'
                className='tw-object-contain'
              />
            </div>
            <p className='tw-text-white tw-py-3 tw-leading-loose'>
              Bitkash.io is a fast-rising global cryptocurrency broker that is
              dedicated to Bitcoin. Recognizing the bureaucracy of
              cryptocurrency, Bitkash.io believes that everyone must be a part
              of the decentralized tw-blockchain
            </p>
            <div className='lg:tw-hidden tw-flex tw-flex-wrap tw-gap-3 tw-py-3'>
              {["Home", "About", "Contact", "How to buy Bitcoins"].map(
                (link) => (
                  <span key={link} className='tw-font-medium w-[33.333%]'>
                    {link}
                  </span>
                )
              )}
            </div>
            <div className='tw-flex tw-gap-4'>
              <img
                src='/images/instagram.png'
                alt='instagram handle'
                className='tw-w-[30px] '
              />
              <img
                src='/images/facebook.png'
                alt='facebook handle'
                className='tw-w-[30px] '
              />
              <img
                src='/images/phone.png'
                alt='phone number'
                className='tw-w-[30px]'
              />
            </div>
          </div>
          <div className='tw-hidden lg:tw-flex tw-flex-1 tw-gap-6 tw-pl-10 tw-justify-between'>
            <LinkContainer heading='Buy Bitcoin'>
              {buyBitcoin.map((link) => (
                <Link
                  key={link.label}
                  to={link.route}
                  className='tw-no-underline'
                >
                  <li className='min-w-fit tw-text-white tw-tracking-wide'>
                    {link.label}
                  </li>
                </Link>
              ))}
            </LinkContainer>
            <LinkContainer heading='Bitkash'>
              {bitkash.map((link) => (
                <Link
                  key={link.label}
                  to={link.route}
                  className='tw-no-underline'
                >
                  <li className='min-w-fit tw-text-white tw-tracking-wide'>
                    {link.label}
                  </li>
                </Link>
              ))}
            </LinkContainer>
            <LinkContainer heading='Legal Terms'>
              {legacyPolicy.map((link) => (
                <Link
                  key={link.label}
                  to={link.route}
                  className='tw-no-underline'
                >
                  <li className='min-w-fit tw-text-white tw-tracking-wide'>
                    {link.label}
                  </li>
                </Link>
              ))}
            </LinkContainer>
            <LinkContainer heading='Contact'>
              {contacts.map((contact) => (
                <li
                  key={contact.label}
                  className='min-w-fit tw-text-white tw-tracking-wide'
                >
                  {contact.label}
                </li>
              ))}
            </LinkContainer>
            {/* <LinkContainer heading='Bitkash' links={Links.bitkash} />
            <LinkContainer heading='Legal Terms' links={Links.legacyPolicy} />
            <LinkContainer heading='Contact' links={Links.contact} /> */}
          </div>
        </div>
      </div>

      <div className='tw-bg-white tw-hidden lg:tw-flex tw-items-center tw-justify-center tw-h-fit tw-py-3'>
        <p className='tw-m-0 tw-p-0 tw-font-semibold'>
          Copyright @Bitkash 2022. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export function Subscribe({ classname }) {
  const classes = clx(
    "lg:tw-py-2 h-fit lg:tw-border-b-2 lg:tw-flex",
    classname
  );
  return (
    <div className={classes}>
      <p className='lg:tw-hidden tw-py-2 tw-m-0 tw-font-medium text-primary-main'>
        Email Address
      </p>
      <input
        type='email'
        placeholder='Email Address'
        className='tw-hidden lg:tw-block tw-outline-none tw-bg-transparent tw-flex-1 tw-pr-4'
      />
      <Button variant='primary' size='medium' classname='tw-hidden lg:tw-block'>
        Subscribe
      </Button>

      {/* Mobile */}
      <input
        type='email'
        placeholder='Email Address'
        className='lg:tw-hidden tw-outline-none tw-border-2 lg:tw-border-none tw-w-full tw-py-2  tw-px-3 lg:tw-pr-4 lg:tw-py-0 tw-rounded-lg lg:tw-rounded-none tw-bg-transparent tw-flex-1'
      />
      <Button variant='primary' size='medium' classname='lg:tw-hidden tw-my-4'>
        Subscribe
      </Button>
    </div>
  );
}

Footer.Subscribe = Subscribe;

import React from "react";
import { BsDot, BsTelephone } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import StaticLayout from "../layout/static-layout";
import Section from "../components/section";
import Label from "../components/label";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Container from "../components/container";
import Input from "../components/input";
import TextArea from "../components/text-area";
import Button from "../components/button";
import Text from "../components/text";
export default function ContactWrapper() {
  return (
    <StaticLayout>
      <div className=''>
        <Section
          background='tw-h-[550px] lg:tw-h-[90vh] tw-rounded-b-[100px] tw-relative'
          classname=''
        >
          <img
            src='/images/contact-hero.png'
            alt='hero-background'
            className='tw-hidden lg:tw-block tw-h-full tw-w-[100vw] tw-absolute tw-inset-0'
          />
          <img
            src='/images/contact-hero-mobile.png'
            alt='hero-background'
            className='lg:tw-hidden tw-w-[100%] tw-h-full tw-absolute tw-inset-0'
          />
          <div className='tw-p-4 tw-w-full md:tw-w-[70%] lg:tw-w-fit tw-h-fit tw-absolute tw-top-[50%] tw-left-[50%] tw-translate-x-[-50%] tw-translate-y-[-50%]'>
            <Text as='h1' classname='tw-text-center tw-text-white'>
              Contact Us
            </Text>
            <Text as='h2' classname='tw-text-center tw-text-white tw-pt-3'>
              We’d Love To Hear From You
            </Text>
            <Text as='article' classname='tw-py-3 tw-text-white tw-text-center'>
              One of our major focus points at Bitkash is customer satisfaction;
              your satisfaction. Our support team is available all day and every
              day to ensure that you receive the help you need when you need it.
            </Text>
          </div>
        </Section>
        <Section classname='tw-flex tw-flex-col lg:tw-flex-row tw-gap-5 tw-px-0'>
          <div className='tw-flex-1 tw-px-3 lg:tw-px-0'>
            <div>
              <Text as='h5' classname='font-circular'>
                Contact Us If:
              </Text>
              <ul className='tw-py-2 tw-leading-relaxed'>
                {[
                  "You’ve got a problem",
                  "You’d like to chat about our services",
                  "You have an inquiry or would like to learn more",
                ].map((item) => (
                  <Label key={item} icon={<BsDot />} label={item} />
                ))}
              </ul>
            </div>
            <div className='tw-my-10 tw-hidden lg:tw-block'>
              <Text as='h5' classname='font-circular'>
                We Are Available Via:
              </Text>
              <ul className='tw-py-2 tw-leading-relaxed'>
                <Label icon={<BsTelephone />} label='Phone: +1234567890' />
                <Label
                  icon={<MdOutlineMarkEmailUnread />}
                  label='Email: contact@bitkash.com'
                />
                <Label
                  icon={<HiOutlineLocationMarker />}
                  label='Address: <insert address>'
                />
              </ul>
            </div>
            <Text as='article' classname='tw-hidden lg:tw-block'>
              Alternatively, you could check out our
              <span className='tw-text-primary-main'>
                Frequently Asked Questions
              </span>
              (FAQs) or <span className='tw-text-primary-main'>Get Started</span>{" "}
              to with your purchase.
            </Text>
          </div>
          <div className='tw-flex-1 tw-flex tw-justify-center lg:tw-justify-end tw-bg-primary-main lg:tw-bg-transparent'>
            <Container
              type='with-outline'
              classname='tw-px-3 tw-w-full lg:tw-px-4 lg:tw-w-[70%] tw-h-full before:tw-hidden lg:before:tw-block tw-bg-transparent lg:tw-bg-primary-main'
            >
              <div>
                <Text as='h4' classname='tw-py-2 tw-text-secondary-main'>
                  Contact Us
                </Text>
                <Text as='p' className='tw-text-2xl tw-text-white'>
                  Let’s Get in Touch with you
                </Text>
                <div className='tw-py-3 tw-flex tw-flex-col tw-gap-3 tw-z-40'>
                  <Input
                    type='text'
                    label='Full Name'
                    placeholder='Enter your full name'
                  />
                  <Input
                    type='email'
                    label='Email Address'
                    placeholder='Enter your email address'
                  />
                  <TextArea
                    label='Your Message'
                    placeholder='Enter your email address'
                  />
                  <Button
                    variant='secondary'
                    size='medium'
                    classname=' tw-w-full lg:tw-w-[220px] tw-text-center'
                  >
                    Send
                  </Button>
                </div>
              </div>
            </Container>
          </div>
          <div className='tw-my-8 lg:tw-hidden tw-px-3 lg:tw-px-0'>
            <Text as='h4'>We Are Available Via:</Text>
            <ul className='tw-py-2 tw-leading-relaxed'>
              <Label icon={<BsTelephone />} label='Phone: +1234567890' />
              <Label
                icon={<MdOutlineMarkEmailUnread />}
                label='Email: contact@bitkash.com'
              />
              <Label
                icon={<HiOutlineLocationMarker />}
                label='Address: <insert address>'
              />
            </ul>
          </div>
        </Section>
        <Section classname='lg:tw-hidden tw-bg-pink-light'>
          <Text as='p' classname='tw-py-2 tw-px-3 lg:tw-px-0'>
            Alternatively, you could check out our
            <span className='tw-text-primary-main'>
              Frequently Asked Questions
            </span>
            (FAQs) or <span className='tw-text-primary-main'>Get Started</span> to
            with your purchase.
          </Text>
        </Section>
      </div>
    </StaticLayout>
  );
}

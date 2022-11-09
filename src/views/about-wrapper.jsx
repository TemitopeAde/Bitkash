import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../components/button";
import Label from "../components/label";
import Section from "../components/section";
import Text from "../components/text";
import StaticLayout from "../layout/static-layout";

export default function AboutWrapper({ classname, children }) {
  return (
    <StaticLayout>
      <div>
        <Section background='tw-bg-secondary-main lg:tw-bg-white tw-text-white lg:tw-text-black'>
          <div>
            <Text as='h2' classname='tw-text-center tw-py-2'>
              About Us
            </Text>
            <Text as='article' classname='tw-text-center tw-py-6'>
              <span className='tw-leading-loose lg:tw-leading-tight'>
                Bitkash is a fast-growing cryptocurrency brokerage firm focused
                on increasing access to cryptocurrency. Our services offer an
                affordable link between you and reliable and fast cryptocurrency
                purchases. Our services are customer-oriented, and we offer the
                best rates to give you the best value.
              </span>
            </Text>
          </div>
          <div className='tw-hidden lg:tw-block tw-border-[10px] tw-border-primary-main tw-my-4'>
            <img src='/images/about-img.png' alt='meeting-session' />
          </div>
        </Section>

        <Section
          classname='tw-flex tw-flex-col-reverse lg:tw-flex-row'
          background='tw-bg-pink-light'
        >
          <div className='tw-flex-1'>
            <Text as='h3' classname='tw-hidden lg:tw-block tw-text-primary-main'>
              The Beginning
            </Text>
            <Text as='p' classname='tw-py-2'>
              Although we’re just launching our website, Bitkash has been in the
              crypto space for a while. We started over WhatsApp; selling and
              exchanging cryptocurrency through dms and advertising through
              broadcast messages and status updates. However, though our
              resources were limited, our drive was not. We built our customer
              base slowly and steadily, earning customers’ trust through our
              hard work and how genuinely we strive to satisfy them.
            </Text>
            <Text as='p' className='tw-py-2'>
              Now, years later, our customer growth has encouraged and enabled
              us to create a more accessible platform where we can give you the
              best and fastest service possible. We started Bitkash with one
              aim: increasing accessibility to cryptocurrency and despite our
              growth over the years, that has not changed. Cryptocurrency has
              accomplished a lot and can do so much more if more people have
              access to it. For one, cryptocurrency has made it easier to
              transfer large amounts of money at cheaper costs. Transacting with
              cryptocurrency can also facilitate business transparency because
              of tw-blockchain’s security. Bitkash believes that everyone should
              have access to these advantages.
            </Text>
          </div>
          <div className='tw-flex-1 tw-flex tw-flex-col tw-items-center tw-justify-center'>
            <Text as='h2' classname='lg:tw-hidden tw-text-primary-main'>
              The Beginning
            </Text>
            <div className='tw-w-[60%] tw-py-6'>
              <img src='/images/main-logo.png' alt='main logo' objectFi />
            </div>
          </div>
        </Section>

        <Section classname='tw-flex tw-flex-col lg:tw-flex-row'>
          <div className='tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-block'>
            <Text as='h2' classname='lg:tw-hidden tw-py-3 tw-text-center'>
              Our Mission
            </Text>
            <div className='tw-w-[85%] tw-py-4'>
              <img src='/images/mission-img.png' alt='our mission' />
            </div>
          </div>
          <div className='tw-flex-1 tw-flex tw-justify-center lg:tw-justify-start tw-items-center '>
            <div>
              <Text as='h2' classname='tw-hidden lg:tw-block tw-py-3'>
                Our Mission
              </Text>
              <Text as='article' className='tw-py-2 lg:tw-py-0'>
                We aim to create the easiest and safest environment for anyone
                to purchase Bitcoin at the best rates.
              </Text>
            </div>
          </div>
        </Section>

        <Section
          classname='tw-flex tw-flex-col lg:tw-flex-row'
          background='tw-bg-primary-main'
        >
          <div className='tw-flex-1'>
            <Text as='h2' classname='tw-py-2 tw-text-center lg:text-start'>
              Our Vision
            </Text>
            <Text as='article' classname='tw-py-4'>
              We envision a world with financial inclusion; where businesses and
              individuals have easy and readily available access to
              cryptocurrency for business transactions.
            </Text>
          </div>
          <div className='tw-flex-1 tw-flex tw-justify-center lg:tw-block'>
            <div className='tw-w-[85%] lg:tw-ml-auto'>
              <img src='/images/vision-img.png' alt='' />
            </div>
          </div>
        </Section>

        <Section>
          <Text as='h2' classname='tw-text-center tw-py-8'>
            Our Partners
          </Text>
          <div className='tw-border-y-2 tw-border-primary-main tw-grid tw-grid-cols-2 tw-gap-6 lg:tw-gap-4 lg:tw-grid-cols-5 lg:tw-place-items-center tw-py-4'>
            <img
              src='/images/chase-logo.png'
              alt='chase-logo'
              className='tw-w-[150px]'
            />
            <img
              src='/images/asana-logo.png'
              alt='asana-logo'
              className='tw-w-[150px]'
            />
            <img
              src='/images/google-logo.png'
              alt='google-logo'
              className='tw-w-[100px]'
            />
            <img
              src='/images/buzzfeed.png'
              alt='buzzfeed-logo'
              className='tw-w-[150px]'
            />
            <img
              src='/images/walmart-logo.png'
              alt='walmart-logo'
              className='tw-w-[150px]'
            />
          </div>
        </Section>

        <Section>
          <Text as='h2' classname='tw-text-center tw-py-8'>
            Our Numbers
          </Text>
          <div className='tw-px-4 lg:tw-px-0 tw-grid tw-grid-cols-1 tw-place-items-center tw-gap-4 lg:tw-gap-0 lg:tw-grid-cols-3'>
            <div className='tw-border-2 tw-border-primary-main tw-rounded-lg tw-w-[300px] tw-h-[150px] tw-flex tw-items-center tw-justify-center tw-flex-col'>
              <Text as='h2' classname='tw-py-2'>
                2
              </Text>
              <Text as='p' className='tw-font-semibold tw-m-0 tw-text-lg'>
                Partners
              </Text>
            </div>
            <div className='tw-border-2 tw-border-primary-main tw-rounded-lg tw-w-[300px] tw-h-[150px] tw-flex tw-items-center tw-justify-center tw-flex-col'>
              <Text as='h2' className='tw-text-4xl tw-font-bold tw-m-0 tw-py-2'>
                503
              </Text>
              <Text as='p' className='tw-font-semibold tw-m-0 tw-text-lg'>
                Transactions completed
              </Text>
            </div>
            <div className='tw-border-2 tw-border-primary-main tw-rounded-lg tw-w-[300px] tw-h-[150px] tw-flex tw-items-center tw-justify-center tw-flex-col'>
              <Text as='h2' className='tw-text-4xl tw-font-bold tw-m-0 tw-py-2'>
                124
              </Text>
              <Text as='p' className='tw-font-semibold tw-m-0 tw-text-lg'>
                Transactions completed
              </Text>
            </div>
          </div>
        </Section>

        <Section classname='tw-flex' background='tw-bg-secondary-main'>
          <div className='tw-hidden lg:tw-block tw-flex-1'>
            <div className='tw-w-[85%]'>
              <img src='/images/why-bitkash.png' alt='' />
            </div>
          </div>
          <div className='tw-flex-1 '>
            <Text
              as='h2'
              classname='tw-text-center lg:tw-text-start tw-text-primary-main'
            >
              Why Bitkash
            </Text>
            <Text as='article' classname='tw-py-6 tw-text-white'>
              At Bitkash, we are driven by our vision and guided by our values.
              Here’s why you should choose Bitkash:
            </Text>
            <div>
              {[
                "Effective Customer Service",
                "Safe and Secure",
                "Best Rates",
                "Easy to Use",
                "Fast Transactions",
                "USD & EUR Accepted",
              ].map((reason) => (
                <Label
                  key={reason}
                  label={reason}
                  icon={<AiOutlineArrowRight />}
                  classname='tw-text-white'
                />
              ))}
            </div>
          </div>
        </Section>

        <Section classname='tw-flex tw-flex-col lg:tw-flex-row'>
          <div className='tw-flex-1 tw-py-6'>
            <Text as='h2' classname='tw-text-primary-main'>
              Buy Bitcoin Now
            </Text>
            <Text as='article' classname='tw-py-6'>
              We envision a world with financial inclusion; where businesses and
              individuals have easy and readily available access to
              cryptocurrency for business transactions.
            </Text>
            <Button size='medium'>Buy Now</Button>
          </div>
          <div className='tw-flex-1'>
            <div className='lg:tw-w-[85%] tw-ml-auto'>
              <img src='/images/buy-bitcoin.png' alt='' />
            </div>
          </div>
        </Section>
      </div>
    </StaticLayout>
  );
}

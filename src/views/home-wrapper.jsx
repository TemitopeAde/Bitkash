import React from "react";
import Button from "../components/button";
import Card from "../components/card";
import Section from "../components/section";
import Text from "../components/text";
import StaticLayout from "../layout/static-layout";

export default function HomeWrapper() {
  return (
    <StaticLayout>
      <div>
        <Section background='tw-relative lg:tw-bg-secondary-main tw-h-[80vh] lg:tw-h-[85vh] tw-overflow-hidden'>
          <div className='tw-hidden lg:tw-block tw-h-[300px] tw-absolute tw-bottom-0 tw-left-0'>
            <img src='/images/wave-bg.png' alt='' className='' />
          </div>
          <div className='tw-absolute tw-bg-no-repeat tw-inset-0 tw-bottom-0 tw-h-full tw-w-full tw-flex tw-items-end'>
            <img
              src='/images/home-hero-mobile.png'
              alt=''
              className='lg:tw-hidden tw-object-cover tw-h-full'
            />
            <div className='tw-absolute tw-inset-0 tw-h-full tw-w-full tw-bg-secondary-main/80'></div>
          </div>
          <div className='tw-absolute tw-inset-0 tw-h-full lg:tw-w-[90%] tw-mx-auto tw-px-'>
            <div className='tw-flex tw-items-center tw-h-full lg:tw-w-[60%]'>
              <div className='tw-flex tw-flex-col tw-items-center lg:tw-items-start'>
                <Text
                  as='h1'
                  classname='tw-text-white tw-text-center tw-px-4 lg:tw-px-0 lg:tw-text-left tw-font-circular'
                >
                  Buy{" "}
                  <span className='tw-text-center lg:tw-text-left tw-text-primary-main tw-leading-normal'>
                    Bitcoin
                  </span>{" "}
                  The Fast and Secure Way
                </Text>
                <Text
                  as='article'
                  classname='tw-font-poppins tw-text-white tw-py-6 tw-w-[70%] tw-text-center lg:tw-text-left tw-leading-[2.5]'
                >
                  With Bitkash, you can buy cryptocurrency through your bank. We
                  make it easy, fast, and 100% secure.{" "}
                  <span className='leading-[2.5]'>Bitkash </span> is one of the
                  fastest-growing brokerage firms worldwide.
                </Text>
                <Button
                  variant='primary'
                  size='large'
                  classname='tw-hidden lg:tw-block tw-px-16'
                >
                  Get Started Now
                </Button>
                <Button
                  variant='primary'
                  size='medium'
                  classname='lg:tw-hidden'
                >
                  Buy your bitcoin
                </Button>
              </div>
            </div>
            <div className='tw-hidden lg:tw-block tw-absolute tw-bottom-0 tw-right-0'>
              <div className='tw-w-[450pt]'>
                <img src='/images/home-hero.png' alt='' />
              </div>
            </div>
          </div>
        </Section>
        <Section
          background='tw-relative'
          classname='tw-flex tw-min-h-[70vh] lg:tw-min-h-[84vh] xl:tw-min-h-[77vh] tw-overflow-hidden'
        >
          <div className='tw-hidden lg:tw-block tw-flex-1 tw-absolute tw-bottom-0 tw-left-0'>
            <div className='tw-w-[70%] '>
              <img src='/images/mobile-img.png' alt='' />
            </div>
          </div>
          <div className='tw-w-[100%] tw-h-[70%] lg:tw-hidden tw-absolute tw-bottom-[50%] tw-translate-y-[50%] tw-left-0'>
            <img
              src='/images/iphone.png'
              alt=''
              className='tw-object-contain tw-h-full tw-opacity-10'
            />
          </div>
          <div className='lg:tw-w-[50%] tw-absolute lg:tw-static tw-top-[50%] tw-translate-y-[-50%] lg:tw-translate-y-0 tw-left-3 tw-right-3 tw-ml-auto tw-flex tw-items-center'>
            <div className='tw-text-center lg:tw-text-end'>
              <Text as='h2' classname='tw-font-circular'>
                <span className='tw-text-primary-main'>About</span> Bitkash
              </Text>
              <Text as='p' classname=''>
                <span className='tw-leading-[2] lg:tw-leading-normal'>
                  Bitkash is a team of professional cryptocurrency enthusiasts
                  situated all around the globe. We are a brokerage firm
                  steadfastly committed to making it easy and foolproof to
                  purchase cryptocurrency anywhere in the world.
                </span>
              </Text>
              <Text as='p' className=''>
                <span className='tw-leading-[2] lg:tw-leading-normal'>
                  Our team is made of dedicated crypto professionals working
                  together in various units to ensure that you and every member
                  of the Bitkash family enjoy fast, seamless, and safe
                  transactions.
                </span>
              </Text>
            </div>
          </div>
        </Section>

        <Section background='tw-bg-secondary-main'>
          <Text as='h2' classname='tw-text-primary-main tw-text-center tw-py-6'>
            How it works
          </Text>
          <div className='tw-px-4 lg:tw-px-0 tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-10 lg:tw-gap-4 tw-justify-around tw-py-4'>
            <Card type='how-it-works' number={1} heading='Sign up'>
              Here’s where we get to know you and welcome you to the Bitkash
              family. Don’t worry your details are a hundred percent safe with
              us. <span className='text-primary-main'>Learn more.</span>
            </Card>
            <Card type='how-it-works' number={2} heading='KYC'>
              The KYC verification allows us to protect you and your portfolio.
              It takes only a few minutes and you’re officially ready to trade!
            </Card>
            <Card type='how-it-works' number={3} heading='Buy'>
              Once payment is made, your coins will be delivered in x minutes.
              Currently, we accept only bank transfers but we’re working on
              making more payment options available.
            </Card>
          </div>
        </Section>

        <div className='tw-bg-pink-light'>
          <Section classname='tw-flex tw-flex-col lg:tw-flex-row tw-items-center lg:tw-gap-x-8 xl:tw-gap-x-6'>
            <div>
              <Text as='h2' classname='tw-text-primary-main tw-py-8'>
                Why Choose Bitkash?
              </Text>
            </div>
            <div className='tw-flex-1 tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-space-x-[30px] xl:tw-space-x-[5px] xl:tw-gap-0 tw-justify-around tw-items-center'>
              <div className='tw-border-b-2 lg:tw-border-b-0 lg:tw-border-l-2 tw-border-primary-main tw-px-3 tw-font-poppins'>
                <Text as='h2'>100%</Text>
                <Text
                  as='p'
                  classname='tw-py-0 tw-pt-2 tw-text-center lg:tw-text-left'
                >
                  Support
                </Text>
              </div>
              <div className='tw-border-b-2 lg:tw-border-b-0 lg:tw-border-l-2 tw-border-primary-main tw-px-3 tw-font-poppins'>
                <Text as='h2'>50,000+</Text>
                <Text
                  as='p'
                  classname='tw-py-0 tw-pt-2 tw-text-center lg:tw-text-left'
                >
                  Transactions
                </Text>
              </div>
              <div className='tw-border-b-2 lg:tw-border-b-0 lg:tw-border-l-2 tw-border-primary-main tw-px-3 tw-font-poppins'>
                <Text as='h2'>500+</Text>
                <Text
                  as='p'
                  classname='tw-py-0 tw-pt-2 tw-text-center lg:tw-text-left'
                >
                  Customers
                </Text>
              </div>
            </div>
          </Section>
        </div>

        <Section>
          <Text as='h2' classname='tw-text-center tw-py-8'>
            Why Our <span className='tw-text-primary-main'>Customer</span> Love
            us
          </Text>
          <div className='tw-px-4 lg:tw-px-0 tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-4 tw-py-4'>
            <Card
              type='why'
              icon={<img src='/images/easy-to-use.png' alt='easy to use' />}
              heading='Easy to use'
            >
              Our platform is designed for ease-of-use. There are no complicated
              dashboards or processes. You’ve got the money and we’ve got the
              coins.
            </Card>
            <Card
              type='why'
              icon={<img src='/images/safe-and-secure.png' alt='easy to use' />}
              heading='Safe and secure'
            >
              Bitkash is one of the safest mediums to purchase crypto online.
              We’re a real team made of real people with a real setup that is
              designed to protect you and your assets. Learn more
            </Card>
            <Card
              type='why'
              icon={
                <img src='/images/beginner-friendly.png' alt='easy to use' />
              }
              heading='Beginner-Friendly '
            >
              Have zero crypto experience? It doesn’t matter! Get started by
              checking out our Getting Started Page or checking out our FAQs. If
              you need any more assistance, we’d love to chat with you.
            </Card>
            <Card
              type='why'
              icon={
                <img src='/images/seamless-processes.png' alt='easy to use' />
              }
              heading='Seamless and Fast Processes'
            >
              Time is money and Bitkash takes this literally. You can transact
              with us with just a few clicks of the button and be rest assured
              that your transaction will be processed in minutes. Learn more
            </Card>
            <Card
              type='why'
              icon={
                <img src='/images/customer-support.png' alt='easy to use' />
              }
              heading='24/7 Customer Support '
            >
              Bitkash runs on your schedule. Our customer service operations are
              designed to give you confidence and trust in our firm. We’re
              always available and eager to help. chat with us
            </Card>
            <Card
              type='why'
              icon={<img src='/images/newsletter.png' alt='easy to use' />}
              heading='Our Newsletter'
            >
              When you join the Bitkash family and optionally sign up for our
              Newsletter, we give you an inner look at just what makes us who we
              are. From helpful crypto tips to important crypto news, and even
              promotional offers. We’re always here for you.
            </Card>
          </div>
        </Section>

        <Section
          background='tw-bg-pink-light tw-relative tw-min-h-[300px]'
          classname='lg:tw-flex'
        >
          <div className='tw-hidden tw-flex-1 lg:tw-flex tw-items-center'>
            <div>
              <Text
                as='h1'
                classname='tw-py-3 tw-leading-normal tw-font-[poppins]'
              >
                Get Started Now and Join The{" "}
                <span className='tw-text-primary-main'>Bitkash</span> Family
                With Your First Purchase
              </Text>
              <Button variant='primary' size='large'>
                Buy Bitcoins
              </Button>
            </div>
          </div>
          <div className='tw-hidden tw-flex-1 lg:tw-flex tw-justify-end'>
            <div className='tw-w-[80%]'>
              <img src='/images/bitcoin.png' alt='' />
            </div>
          </div>

          <div className='lg:tw-hidden tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-w-[90%] tw-left-[50%] tw-translate-x-[-50%] tw-h-full'>
            <img
              src='/images/bitcoin.png'
              alt=''
              className='tw-object-contain tw-h-full tw-opacity-10'
            />
          </div>
          <div className='tw-absolute tw-inset-0 tw-top-[50%] tw-translate-y-[-50%] lg:tw-hidden'>
            <Text as='h2' classname='tw-text-center'>
              Buy your Bitcoin today
            </Text>
            <Text as='article' classname='tw-text-center tw-py-4 tw-px-3'>
              <span className='tw-leading-loose'>
                At <span className='text-primary-main'>Bitkash.io,</span> we
                believe you deserve to have a stake in
                <span className='tw-text-primary-main'> Bitcoin.</span> We
                intend to partner with you in this exciting new adventure. Click
                here to claim your stake in{" "}
                <span className='tw-text-primary-main'>Bitcoin.</span>
              </span>
            </Text>
          </div>
        </Section>
      </div>
    </StaticLayout>
  );
}

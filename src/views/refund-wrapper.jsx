import React from "react";
import Section from "../components/section";
import Text from "../components/text";
import StaticLayout from "../layout/static-layout";

export default function RefundWrapper() {
  return (
    <StaticLayout>
      <div>
        <Section
          background='tw-bg-secondary-main'
          classname='tw-flex tw-flex-col-reverse lg:tw-flex-row tw-py-12'
        >
          <div className='tw-flex-1'>
            <div className='tw-hidden lg:tw-block lg:tw-w-[90%] lg:tw-h-[500px]'>
              <img
                src='/images/refund-hero.png'
                alt=''
                className='tw-object-fill tw-h-full'
              />
            </div>
            <div className='lg:tw-hidden tw-py-6'>
              <img
                src='/images/refund-hero-mobile.png'
                alt=''
                className='tw-object-fill tw-h-full'
              />
            </div>
            <Text as='article' classname='lg:tw-hidden tw-text-white tw-py-4'>
              Bitkash does not offer refunds for completed transactions. A
              transaction is considered completed when Bitkash.io successfully
              pays the purchased cryptocurrency to the specified wallet. We are
              not responsible for the speed of the tw-blockchain and any delays
              that may ensue once we have fulfilled our due diligence.{" "}
            </Text>
          </div>
          <div className='tw-flex-1 tw-flex tw-items-center tw-justify-center'>
            <div className='tw-w-[95%]'>
              <Text as='h1' classname='tw-text-white'>
                <span className='tw-text-primary-main tw-leading-relaxed'>
                  Bitkash
                </span>{" "}
                Refund and Cancellation Policy
              </Text>
              <Text
                as='article'
                classname='tw-hidden lg:tw-block tw-text-white tw-py-4'
              >
                Bitkash does not offer refunds for completed transactions. A
                transaction is considered completed when Bitkash.io successfully
                pays the purchased cryptocurrency to the specified wallet. We
                are not responsible for the speed of the tw-blockchain and any
                delays that may ensue once we have fulfilled our due diligence.{" "}
              </Text>
            </div>
          </div>
        </Section>

        <Section
          background='tw-bg-pink-light'
          classname='lg:tw-h-[400px] tw-flex tw-items-center tw-justify-center'
        >
          <div>
            <Text as='h2' classname='tw-text-primary-main tw-text-center'>
              Payment via Bank Transfer
            </Text>
            <Text as='article' classname='tw-text-center tw-py-4'>
              A minimum order of $500 is required for Bitkash to process your
              transaction. Should the amount/currency received by us be less
              than the minimum, we will not process such transaction. Should the
              amount/currency received by us be less than the minimum, we are
              under no obligation to offer a refund. Bitkash does not refund or
              cancel orders. For such a transaction that falls before the
              required minimum to be processed, you will be required to send
              additional Fiat currency to reach the minimum transaction size.
            </Text>
          </div>
        </Section>
      </div>
    </StaticLayout>
  );
}

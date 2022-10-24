import React from "react";
import Section from "../components/section";
import Text from "../components/text";
import StaticLayout from "../layout/static-layout";

export default function DeliveryWrapper() {
  return (
    <StaticLayout>
      <div>
        <Section
          background='tw-bg-secondary-main'
          classname='tw-flex tw-flex-col-reverse lg:tw-flex-row'
        >
          <div className='tw-flex-1'>
            <div className='tw-hidden lg:tw-block tw-w-[70%]'>
              <img src='/images/delivery-hero.png' alt='' />
            </div>
            <div className='lg:tw-hidden tw-mx-auto tw-w-[70%] tw-py-6'>
              <img src='/images/delivery-hero-mobile.png' alt='' />
            </div>
          </div>
          <div className='tw-flex-1 tw-flex tw-justify-center tw-pt-10'>
            <div>
              <Text as='h1' classname='tw-text-primary-main lg:tw-text-white'>
                Bitkash{" "}
                <span className='tw-text-white lg:tw-text-primary-main tw-leading-relaxed'>
                  Delivery Policy
                </span>
              </Text>
            </div>
          </div>
        </Section>

        <Section classname='lg:tw-h-[400px] tw-flex tw-justify-center tw-items-center'>
          <Text as='article' classname='tw-text-center'>
            Bitkash will send your purchased cryptocurrency to the given wallet
            address 5 minutes after we receive payment. We do not control, nor
            do we claim responsibility for how long your bank transfer payment
            takes to reflect in our accounts. It is our policy to send purchased
            cryptocurrency to the given wallet address 5 minutes after we
            receive payment, but the duration it takes for the payment to
            reflect in your specified wallet address depends on the speed of the
            tw-blockchain underlying network. You can track your order through
            your dashboard.
          </Text>
        </Section>
      </div>
    </StaticLayout>
  );
}

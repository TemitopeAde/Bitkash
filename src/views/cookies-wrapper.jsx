import React from "react";
import { BsDot } from "react-icons/bs";
import Card from "../components/card";
import Label from "../components/label";
import Section from "../components/section";
import Text from "../components/text";
import StaticLayout from "../layout/static-layout";

export default function CookiesWrapper() {
  return (
    <StaticLayout>
      <div>
        <Section
          background='tw-bg-secondary-main lg:tw-bg-transparent'
          classname='tw-flex tw-flex-col-reverse lg:tw-flex-row lg:tw-min-h-[400px]'
        >
          <div className='tw-flex-1 tw-flex tw-items-center md:tw-justify-center tw-py-6 lg:tw-py-0'>
            <div className='tw-text-white lg:tw-text-black'>
              <Text as='h1' classname='tw-text-center lg:tw-text-left'>
                Cookie Policy for{" "}
                <span className='tw-text-primary-main tw-leading-relaxed'>
                  Bitkash
                </span>
              </Text>
              <Text as='article'>
                This is the Cookie Policy for Bitkash, accessible from
                <span className='tw-text-primary-main'> Bitkash.io</span>
              </Text>
            </div>
          </div>
          <div className='tw-hidden tw-flex-1 lg:tw-flex tw-justify-end'>
            <div className='tw-w-[80%]'>
              <img src='/images/cookies-hero.png' alt='' />
            </div>
          </div>
        </Section>

        <Section
          background='lg:tw-bg-secondary-main'
          classname='tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4'
        >
          <Card
            outerHeading='What Are Cookies'
            classname='tw-border-primary-main lg:tw-border-white lg:tw-text-white'
          >
            As is common practice with almost all professional websites, this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it, and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored. However, this may downgrade or 'break'
            certain elements of the site's functionality.
          </Card>
          <Card
            outerHeading='How We Use Cookies'
            classname='tw-border-primary-main lg:tw-border-white lg:tw-text-white'
          >
            We use cookies for a variety of reasons, detailed below.
            Unfortunately, in most cases, there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </Card>
          <Card
            outerHeading='Disabling Cookies'
            classname='tw-border-primary-main lg:tw-border-white lg:tw-text-white'
          >
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of this
            site. Therefore it is recommended that you do not disable cookies.
            This Cookies Policy was created with the help of the Cookies Policy
            Generator.
          </Card>
          <Card
            outerHeading='Nothing'
            transparentHeading
            classname='tw-border-primary-main lg:tw-border-white lg:tw-text-white tw-w-full tw-flex tw-justify-center tw-items-center tw-min-h-[200px] lg:tw-min-h-fit tw-bg-primary-main lg:tw-bg-transparent'
            fullWidth
          >
            <Text as='h1' classname='tw-text-white'>The Cookies We Set</Text>
          </Card>
          {/* <div className="tw-border-[1px] tw-border-white tw-rounded-xl tw-h-[240px] tw-place-self-end tw-w-full">

          </div> */}
        </Section>

        <Section classname='tw-flex tw-flex-col tw-gap-6'>
          <Card innerHeading='Account related cookies'>
            If you create an account with us, then we will use cookies for the
            management of the signup process and general administration. These
            cookies will usually be deleted when you log out. However, in some
            cases, they may remain afterward to remember your site preferences
            when logged out.
          </Card>
          <Card innerHeading='Login related cookies'>
            We use cookies when you are logged in so that we can remember this
            fact. This prevents you from having to log in every single time you
            visit a new page. These cookies are typically removed or cleared
            when you log out to ensure that you can only access restricted
            features and areas when logged in.
          </Card>
          <Card innerHeading='Email newsletters related cookies'>
            This site offers newsletter or email subscription services, and
            cookies may be used to remember if you are already registered and
            whether to show certain notifications which might only be valid to
            subscribed/unsubscribed users.
          </Card>
          <Card innerHeading='Orders processing related cookies'>
            This site offers e-commerce or payment facilities, and some cookies
            are essential to ensure that your order is remembered between pages
            so that we can process it properly.
          </Card>
          <Card innerHeading='Surveys related cookies'>
            From time to time, we offer user surveys and questionnaires to
            provide you with interesting insights, helpful tools or to
            understand our user base more accurately. These surveys may use
            cookies to remember who has already taken part in a survey or to
            provide you with accurate results after you change pages.
          </Card>
          <Card innerHeading='Forms related cookies'>
            When you submit data to Bitkash through a form such as those found
            on contact pages or comment forms, cookies may be set to remember
            your user details for future correspondence.
          </Card>
          <Card innerHeading='Site preferences cookies'>
            In order to provide you with a great experience on this site, we
            provide the functionality to set your preferences for how this site
            runs when you use it. In order to remember your preferences, we need
            to set cookies so that this information can be called whenever you
            interact with a page that is affected by your preferences.
          </Card>
          <Card innerHeading='Site preferences cookies'>
            In order to provide you with a great experience on this site, we
            provide the functionality to set your preferences for how this site
            runs when you use it. In order to remember your preferences, we need
            to set cookies so that this information can be called whenever you
            interact with a page that is affected by your preferences.
          </Card>
        </Section>

        <Section background='tw-bg-pink-light'>
          <Card
            outerHeading='Third-Party Cookies'
            classname='tw-border-primary-main tw-rounded-3xl'
            darkHeading
            withTriangle
          >
            In some special cases, we also use cookies provided by trusted third
            parties. The following section details which third-party cookies you
            might encounter through this site.
            <ul className='tw-py-4'>
              <Label icon={<BsDot />}>
                This site uses Google Analytics which is one of the most
                widespread and trusted analytics solutions on the web for
                helping us to understand how you use the site and ways that we
                can improve your experience. These cookies may track things such
                as how long you spend on the site and the pages that you visit
                so we can continue to produce engaging content.
              </Label>
              <Label icon={<BsDot />}>
                For more information on Google Analytics cookies, see the
                official Google Analytics page.
              </Label>
              <Label icon={<BsDot />}>
                Third-party analytics are used to track and measure usage of
                this site so that we can continue to produce engaging content.
                These cookies may track things such as how long you spend on the
                site or pages you visit which helps us to understand how we can
                improve the site for you.
              </Label>
              <Label icon={<BsDot />}>
                From time to time, we test new features and make subtle changes
                to the way that the site is delivered. When we are still testing
                new features, these cookies may be used to ensure that you
                receive a consistent experience whilst on the site whilst
                ensuring we understand which optimisations our users appreciate
                the most.
              </Label>
              <Label icon={<BsDot />}>
                As we sell products, it's important for us to understand
                statistics about how many of the visitors to our site actually
                make a purchase, and as such, this is the kind of data that
                these cookies will track. This is important to you as it means
                that we can accurately make business predictions that allow us
                to monitor our advertising and product costs to ensure the best
                possible price.
              </Label>
              <Label icon={<BsDot />}>
                The Google AdSense service we use to serve advertising uses a
                DoubleClick cookie to serve more relevant ads across the web and
                limit the number of times that a given ad is shown to you.
              </Label>
              <Label icon={<BsDot />}>
                For more information on Google AdSense see the official Google
                AdSense privacy FAQ.
              </Label>
              <Label icon={<BsDot />}>
                We use adverts to offset the costs of running this site and
                provide funding for further development. The behavioural
                advertising cookies used by this site are designed to ensure
                that we provide you with the most relevant adverts where
                possible by anonymously tracking your interests and presenting
                similar things that may be of interest.
              </Label>
              <Label icon={<BsDot />}>
                Several partners advertise on our behalf, and affiliate tracking
                cookies simply allow us to see if our customers have come to the
                site through one of our partner sites so that we can credit them
                appropriately and, where applicable, allow our affiliate
                partners to provide any bonus that they may provide you for
                making a purchase.
              </Label>
            </ul>
          </Card>
        </Section>

        <Section>
          <Text as='h3' classname='tw-text-primary-main'>
            More Information
          </Text>
          <Text as='p' classname='tw-py-3'>
            Hopefully, that has clarified things for you, and as was previously
            mentioned, if there is something that you aren't sure whether you
            need or not, it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </Text>
          <Text as='p' classname='tw-py-3'>
            For more general information on cookies, please read the{" "}
            <span className='tw-text-primary-main'>
              Cookies Policy article.
            </span>{" "}
            However, if you are still looking for more information, then you can
            contact us through one of our preferred contact methods:
            contact@bitkash.com
          </Text>
        </Section>
      </div>
    </StaticLayout>
  );
}

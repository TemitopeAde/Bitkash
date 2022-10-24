import React from "react";
import { BsDot } from "react-icons/bs";
import Container from "../components/container";
import Label from "../components/label";
import Search from "../components/search";
import Section from "../components/section";
import StaticLayout from "../layout/static-layout";
import clx from "../utils/clx";
import ProhibitedActivities from "../constants/prohibited-activities";
import UserGenerated from "../constants/user-generated";
import Text from "../components/text";

export default function TermsAndConditionsWrapper(classname, children) {
  const classes = clx("", classname);
  return (
    <StaticLayout>
      <div>
        <Section
          background='tw-bg-primary-main'
          classname='tw-flex tw-flex-col-reverse lg:tw-flex-row lg:tw-h-[80vh]'
        >
          <div className='tw-flex tw-items-center tw-py-6'>
            <Text as='h1' classname='tw-text-white lg:tw-w-[80%]'>
              Terms and Conditions for{" "}
              <span className='tw-leading-relaxed tw-text-secondary-main lg:tw-text-white'>
                Bikash{" "}
              </span>
              Usage
            </Text>
          </div>
          <div className='tw-flex tw-items-center tw-justify-end'>
            <div className='tw-w-[70%] tw-mx-auto lg:tw-w-full'>
              <img src='/images/terms-hero.png' alt='' />
            </div>
          </div>
        </Section>

        <Section classname=''>
          <Search placeholder='Search Terms and Conditions' />
        </Section>

        <Section classname='tw-py-0 tw-pb-10 lg:tw-py-10'>
          <Container type='terms' heading='1. AGREEMENT TO TERMS'>
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”)
            and __________ ("Company", “we”, “us”, or “our”), concerning your
            access to and use of the __________ website as well as any other
            media form, media channel, mobile website or mobile application
            related, linked, or otherwise connected thereto (collectively, the
            “Site”). You agree that by accessing the Site, you have read,
            understood, and agreed to be bound by all of these Terms of Use. IF
            YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE
            USE IMMEDIATELY. Supplemental terms and conditions or documents that
            may be posted on the Site from time to time are hereby expressly
            incorporated herein by reference. We reserve the right, in our sole
            discretion, to make changes or modifications to these Terms of Use
            at any time and for any reason. We will alert you about any changes
            by updating the “Last updated” date of these Terms of Use, and you
            waive any right to receive specific notice of each such change.
            Please ensure that you check the applicable Terms every time you use
            our Site so that you understand which Terms apply. You will be
            subject to, and will be deemed to have been made aware of and to
            have accepted, the changes in any revised Terms of Use by your
            continued use of the Site after the date such revised Terms of Use
            are posted. The information provided on the Site is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Site from other locations do so on
            their own initiative and are solely responsible for compliance with
            local laws, if and to the extent local laws are applicable.
          </Container>
          <Container type='terms' heading='2. INTELLECTUAL PROPERTY RIGHTS'>
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the “Content”) and the trademarks, service marks, and
            logos contained therein (the “Marks”) are owned or controlled by us
            or licensed to us, and are protected by copyright and trademark laws
            and various other intellectual property rights and unfair
            competition laws of the United States, international copyright laws,
            and international conventions. The Content and the Marks are
            provided on the Site “AS IS” for your information and personal use
            only. Except as expressly provided in these Terms of Use, no part of
            the Site and no Content or Marks may be copied, reproduced,
            aggregated, republished, uploaded, posted, publicly displayed,
            encoded, translated, transmitted, distributed, sold, licensed, or
            otherwise exploited for any commercial purpose whatsoever, without
            our express prior written permission. Provided that you are eligible
            to use the Site, you are granted a limited license to access and use
            the Site and to download or print a copy of any portion of the
            Content to which you have properly gained access solely for your
            personal, non-commercial use. We reserve all rights not expressly
            granted to you in and to the Site, the Content and the Marks.
          </Container>
          <Container type='terms' heading='3. USER REPRESENTATIONS'>
            By using the Site, you represent and warrant that: (1) you have the
            legal capacity and you agree to comply with these Terms of Use; (2)
            you are not a minor in the jurisdiction in which you reside; (3) you
            will not access the Site through automated or non-human means,
            whether through a bot, script or otherwise; (4) you will not use the
            Site for any illegal or unauthorized purpose; and (5) your use of
            the Site will not violate any applicable law or regulation. If you
            provide any information that is untrue, inaccurate, not current, or
            incomplete, we have the right to suspend or terminate your account
            and refuse any and all current or future use of the Site (or any
            portion thereof).
          </Container>
          <Container type='terms' heading='4. PRODUCTS'>
            We make every effort to display as accurately as possible the
            colors, features, specifications, and details of the products
            available on the Site. However, we do not guarantee that the colors,
            features, specifications, and details of the products will be
            accurate, complete, reliable, current, or free of other errors, and
            your electronic display may not accurately reflect the actual colors
            and details of the products. All products are subject to
            availability, and we cannot guarantee that items will be in stock.
            We reserve the right to discontinue any products at any time for any
            reason. Prices for all products are subject to change.
          </Container>
          <Container type='terms' heading='5. PURCHASES AND PAYMENT'>
            We accept the following forms of payment: You agree to provide
            current, complete, and accurate purchase and account information for
            all purchases made via the Site. You further agree to promptly
            update account and payment information, including email address,
            payment method, and payment card expiration date, so that we can
            complete your transactions and contact you as needed. Sales tax will
            be added to the price of purchases as deemed required by us. We may
            change prices at any time. All payments shall be in __________. You
            agree to pay all charges at the prices then in effect for your
            purchases and any applicable shipping fees, and you authorize us to
            charge your chosen payment provider for any such amounts upon
            placing your order. We reserve the right to correct any errors or
            mistakes in pricing, even if we have already requested or received
            payment. We reserve the right to refuse any order placed through the
            Site. We may, in our sole discretion, limit or cancel quantities
            purchased per person, per household, or per order. These
            restrictions may include orders placed by or under the same customer
            account, the same payment method, and/or orders that use the same
            billing or shipping address. We reserve the right to limit or
            prohibit orders that, in our sole judgment, appear to be placed by
            dealers, resellers, or distributors.
          </Container>
          <Container type='terms' heading='6. PROHIBITED ACTIVITIES'>
            <p>
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <div className='tw-py-8'>
              <p>As a user of the Site, you agree not to:</p>
              <ul className='tw-flex tw-flex-col tw-gap-2'>
                {ProhibitedActivities.map((item) => (
                  <Label
                    key={item.id}
                    icon={<BsDot />}
                    classname='tw-font-normal'
                  >
                    {item.content}
                  </Label>
                ))}
              </ul>
            </div>
          </Container>
          <Container type='terms' heading='7. USER GENERATED CONTRIBUTIONS'>
            <p>
              The Site does not offer users to submit or post content. We may
              provide you with the opportunity to create, submit, post, display,
              transmit, perform, publish, distribute, or broadcast content and
              materials to us or on the Site, including but not limited to text,
              writings, video, audio, photographs, graphics, comments,
              suggestions, or personal information or other material
              (collectively, "Contributions"). Contributions may be viewable by
              other users of the Site and through third-party websites. As such,
              any Contributions you transmit may be treated in accordance with
              the Site Privacy Policy. When you create or make available any
              Contributions, you thereby represent and warrant that:
            </p>
            <div className='tw-py-8'>
              <ul className='tw-flex tw-flex-col tw-gap-2'>
                {UserGenerated.map((item) => (
                  <Label
                    key={item.id}
                    icon={<BsDot />}
                    classname='tw-font-normal'
                  >
                    {item.content}
                  </Label>
                ))}
              </ul>
            </div>
          </Container>
          <Container type='terms' heading='8. CONTRIBUTION LICENSE'>
            <p className='tw-py-2'>
              You and Site agree that we may access, store, process, and use any
              information and personal data that you provide following the terms
              of the Privacy Policy and your choices (including settings).
            </p>
            <p className='tw-py-2'>
              By submitting suggestions or other feedback regarding the Site,
              you agree that we can use and share such feedback for any purpose
              without compensation to you.
            </p>
            <p className='tw-py-2'>
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Site. You are solely responsible for your Contributions to
              the Site and you expressly agree to exonerate us from any and all
              responsibility and to refrain from any legal action against us
              regarding your Contributions.
            </p>
          </Container>
          <Container type='terms' heading='9. SUBMISSIONS'>
            You acknowledge and agree that any questions, comments, suggestions,
            ideas, feedback, or other information regarding the Site or the
            Marketplace Offerings ("Submissions") provided by you to us are
            non-confidential and shall become our sole property. We shall own
            exclusive rights, including all intellectual property rights, and
            shall be entitled to the unrestricted use and dissemination of these
            Submissions for any lawful purpose, commercial or otherwise, without
            acknowledgment or compensation to you. You hereby waive all moral
            rights to any such Submissions, and you hereby warrant that any such
            Submissions are original with you or that you have the right to
            submit such Submissions. You agree there shall be no recourse
            against us for any alleged or actual infringement or
            misappropriation of any proprietary right in your Submissions.
          </Container>
          <Container type='terms' heading='10. SITE MANAGEMENT'>
            We reserve the right, but not the obligation, to: (1) monitor the
            Site for violations of these Terms of Use; (2) take appropriate
            legal action against anyone who, in our sole discretion, violates
            the law or these Terms of Use, including without limitation,
            reporting such user to law enforcement authorities; (3) in our sole
            discretion and without limitation, refuse, restrict access to, limit
            the availability of, or disable (to the extent technologically
            feasible) any of your Contributions or any portion thereof; (4) in
            our sole discretion and without limitation, notice, or liability, to
            remove from the Site or otherwise disable all files and content that
            are excessive in size or are in any way burdensome to our systems;
            and (5) otherwise manage the Site in a manner designed to protect
            our rights and property and to facilitate the proper functioning of
            the Site and the Marketplace Offerings.
          </Container>
        </Section>
      </div>
    </StaticLayout>
  );
}

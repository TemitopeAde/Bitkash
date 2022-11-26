import React from "react";
import Button from "../components/button";
import Container from "../components/container";
import Search from "../components/search";
import Section from "../components/section";
import Text from "../components/text";
import StaticLayout from "../layout/static-layout";
import FAQ from "../constants/faq-list";

export default function FAQWrapper({ classname, children }) {
  return (
    <StaticLayout>
      <div>
        <div className='tw-bg-secondary-main tw-py-6 tw-text-white lg:tw-hidden'>
          <Text
            as='h1'
            classname=' lg:tw-w-[50%] tw-py-4 lg:tw-py-6 tw-text-center lg:tw-text-start'
          >
            Frequently Asked Questions{" "}
            <span className='tw-text-primary-main tw-leading-loose'>
              Bitkash
            </span>
          </Text>
        </div>
        <Section
          background='tw-w-full tw-relative before:tw-content-[""] before:tw-absolute before:tw-bg-primary-main before:tw-h-[10px] before:tw-w-[55%] before:tw-bottom-0 before:tw-left-0 after:tw-absolute after:tw-bg-secondary-main after:tw-h-[10px] after:tw-w-[45%] after:tw-bottom-0 after:tw-right-0'
          classname='lg:tw-py-16 tw-relative lg:tw-pb-[150px] '
        >
          <div className='tw-flex tw-flex-col-reverse lg:tw-block'>
            <div>
              <Text
                as='h1'
                classname='tw-hidden lg:tw-block lg:tw-w-[50%] tw-py-4 lg:tw-py-6 tw-text-center lg:tw-text-start'
              >
                Frequently Asked Questions{" "}
                <span className='tw-text-primary-main tw-leading-loose'>
                  Bitkash
                </span>
              </Text>
              <Container
                type='with-outline'
                outlineBottom
                classname='before:tw-hidden lg:before:tw-block tw-bg-[transparent] lg:tw-bg-primary-main tw-p-0 lg:tw-p-4'
              >
                <div>
                  <Text
                    as='article'
                    classname='tw-text-secondary-main lg:tw-text-white lg:tw-w-[40%] tw-pb-4'
                  >
                    Here are some of the most frequently asked questions on
                    Bitkash. Visit our how to buy Bitcoin page for a detailed
                    walkthrough on buying Bitcoin on Bitkash.{" "}
                  </Text>
                  <div className='tw-flex tw-justify-start tw-my-4'>
                    <Button
                      variant='primary'
                      size='medium'
                      // color='primary'
                      classname='lg:tw-bg-white tw-text-white lg:tw-text-secondary-main lg:hover:tw-bg-secondary-main lg:hover:tw-text-white'
                    >
                      How to buy Bitcoin
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
            <div className='tw-hidden lg:tw-block tw-w-[350px] tw-absolute tw-top-[10%] tw-bottom-[10%] tw-right-0 tw-z-20'>
              <img src='/images/faq-hero.png' alt='faq-hero' />
            </div>
            <div className='tw-hidden tw-pb-6'>
              <img src='/images/faq-hero-mobile.png' alt='faq-hero' />
            </div>
          </div>
        </Section>
        <FAQWrapper.FAQuestions />
      </div>
    </StaticLayout>
  );
}


export function FAQuestions() {
  
  const [search, setSearch] = React.useState()
  const [filteredFAQ, setFilteredFAQ] = React.useState()
  const [activeQuestion, setActiveQuestion] = React.useState(1);

  console.log(search)
  React.useEffect(() => {
    if (search) {
      setFilteredFAQ(FAQ.filter((faq) =>faq.heading.toLowerCase().includes(search.toLowerCase())));
    } else (
      setFilteredFAQ(FAQ)
    )
  }, [filteredFAQ, search])
  return (
    <Section>
          <div className='tw-hidden tw-w-full tw-py-6'>
            <img src='/images/faq-hero.png' alt='faq-hero' />
          </div>
          <Search placeholder='Search Frequently asked questions here' onchange={({target})=>setSearch(target.value)} />
          <div className=''>
            {filteredFAQ?.map((question) => (
              <Container
                key={question.id}
                type='accordion'
                // variant={question.id % 2 !== 0 ? "primary" : "secondary"}
                variant='primary'
                isQuestionOpen={question.id === activeQuestion}
                onclick={() => setActiveQuestion(question.id)}
                classname='tw-my-10'
                heading={question.heading}
              >
                {question.content}
              </Container>
            ))}
          </div>
        </Section>
  )
}


FAQWrapper.FAQuestions = FAQuestions
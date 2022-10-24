import React from "react";
import AdminFooter from "../components/admin-footer";
import AdminHeader from "../components/admin-header";
import SmallSelect from "../components/small-select";
import Footer from "../components/static-footer";
import Header from "../components/static-header";
import AdminLayout from "../layout/admin-layout";

export default function Test() {
  return (
    <div className=''>
      {/* <Text as='h2'>Hello World</Text> */}
      {/* <div className='p-8'>
          <Container type='accordion' heading='Accordion Heading' outlineBottom>
            <div>
              <Text as='p'>Contact us</Text>
              <Text as='h6'>Let's get in touch with you</Text>
              <Text as='h6'>
                We use cookies when you are logged in so that we can remember
                this fact. This prevents you from having to log in every single
                time you visit a new page. These cookies are typically removed
                or cleared when you log out to ensure that you can only access
                restricted features and areas when logged in.
              </Text>
            </div>
          </Container>
        </div>
        <div className='py-4 bg-primary-main'>
          <Input type='text' label='Input Label' placeholder='Enter a text' />
        </div>
        <div className='py-4 bg-primary-main'>
          <Input type='tel' label='Input Label' placeholder='Enter a text' />
        </div>
        <div className='py-4 bg-primary-main'>
          <TextArea label='Text Area' placeholder='Enter your Message' />
        </div>
        <div className='py-4'>
          <Search placeholder='Search frequently asked questions here' />
        </div>
        <Card innerHeading='Outer Heading'>
          We use cookies when you are logged in so that we can remember this
          fact. This prevents you from having to log in every single time you
          visit a new page. These cookies are typically removed or cleared when
          you log out to ensure that you can only access restricted features and
          areas when logged in.
        </Card>
        <Label /> */}
      {/* <Header />
      <Footer /> */}
      {/* <AdminHeader />
      <AdminFooter /> */}
      {/* <AdminLayout>
      </AdminLayout> */}
      {/* <AdminFooter />
      <Footer /> */}
      <div className='tw-p-4'>
        <SmallSelect />
      </div>
    </div>
  );
}

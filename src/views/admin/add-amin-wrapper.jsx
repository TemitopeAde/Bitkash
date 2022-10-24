import React from 'react'
import Button from '../../components/button';
import Input from '../../components/input';
import Section from '../../components/section';
import Text from '../../components/text';
import AdminLayout from '../../layout/admin-layout'

export default function AddAdminWrapper() {
      return (
        <AdminLayout>
          <div>
            <Section>
              <Text
                as='span'
                classname='tw-text-primary-main tw-text-[20px] tw-font-semibold tw-text-center tw-block'
              >
                Add Admin
              </Text>
              <div className=' tw-my-10 tw-w-[60%] tw-mx-auto tw-py-10 tw-border-2 tw-border-primary-main tw-rounded-3xl'>
                <div className='tw-w-[120px] tw-mx-auto tw-h-[120px] tw-rounded-full tw-overflow-hidden'>
                  <img src='/images/admin/user-profile-pic.png' alt='' />
                </div>
                <div className='tw-py-6 tw-grid tw-grid-cols-2 tw-gap-6 tw-w-[85%] tw-mx-auto'>
                  <Input
                    label='Name'
                    type='text'
                    placeholder='abcvder@gmail.com'
                    variant='primary'
                  />
                  <Input
                    label='Phone number'
                    type='tel'
                    placeholder='12345678'
                    variant='primary'
                  />
                  <Input
                    label='Email address'
                    type='email'
                    placeholder='abcvder@gmail.com'
                    variant='primary'
                  />
                  <Input
                    label='Location'
                    type='text'
                    placeholder='United States'
                    variant='primary'
                  />
                </div>
              </div>
              <Button classname='tw-my-10 tw-mx-auto'>Send Invite</Button>
            </Section>
          </div>
        </AdminLayout>
      );
}
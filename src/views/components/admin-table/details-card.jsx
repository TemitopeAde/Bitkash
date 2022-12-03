import React from 'react'
import Button from '../../../components/button';
import Text from '../../../components/text'
import clx from '../../../utils/clx'

export default function UserDetailsCard({classname, children}) {
      const classes = clx(
            "tw-w-[800px] tw-mx-auto tw-h-fit tw-bg-white tw-p-4 tw-rounded-[40px] tw-border-[1px] tw-border-primary-main",
            classname
      )
      return (
        <div className={classes}>
          <div className='tw-w-[60%] tw-mx-auto tw-py-10'>
            <div className='tw-w-[120px] tw-mx-auto tw-h-[120px] tw-rounded-full tw-overflow-hidden'>
              <img src='/images/admin/user-profile-pic.png' alt='' />
            </div>
            <div className='tw-py-6 tw-grid tw-grid-cols-2 tw-gap-y-6'>
              <UserDetailsCard.Label title='First name'>
                Oluseyi
              </UserDetailsCard.Label>
              <UserDetailsCard.Label title='Last name'>
                Olubanjo
              </UserDetailsCard.Label>
              <UserDetailsCard.Label title='Phone number'>
                12345678
              </UserDetailsCard.Label>
              <UserDetailsCard.Label title='Email address'>
                abcvder@gmail.com
              </UserDetailsCard.Label>
              <UserDetailsCard.Label title='Personal address'>
                Street 17, London, UK
              </UserDetailsCard.Label>
                        </div>
          </div>
        </div>
      );
}


export function Label({title, children}) {
      return (
        <div>
                  <Text as='p' classname='tw-py-[2px] tw-text-primary-main' weight='medium'>{ title}</Text>
                  <Text as='p' classname='tw-py-[0px]' weight='medium'>{children}</Text>
        </div>
      );
}

UserDetailsCard.Label= Label
import React from 'react'
import Text from '../../../components/text';
import clx from '../../../utils/clx'

export default function UserBankDetails({ classname, children }) {
      const classes = clx(
        "tw-w-[800px] tw-mx-auto tw-h-fit tw-bg-white tw-p-4 tw-rounded-[40px] tw-border-[1px] tw-border-primary-main",
        classname
      );
      return (
        <div className={classes}>
          <div className='tw-w-[70%] tw-mx-auto tw-py-6 tw-grid tw-grid-cols-2 tw-gap-y-6'>
            <UserBankDetails.Label title='Account Type'>
              Individual
            </UserBankDetails.Label>
            <UserBankDetails.Label title='Currency'>EUR</UserBankDetails.Label>
            <UserBankDetails.Label title='Account Holders Name'>
              Adeogun Olalekan
            </UserBankDetails.Label>
            <UserBankDetails.Label title='Bank Name'>
              Adeogun Olalekan bank and co
            </UserBankDetails.Label>
            <UserBankDetails.Label title='Bank Branch name'>
              Something street
            </UserBankDetails.Label>
            <UserBankDetails.Label title='SWIFT/BIC Code'>
              1234567890
            </UserBankDetails.Label>
            <UserBankDetails.Label title='IBAN'>
              1234567890
            </UserBankDetails.Label>
            <UserBankDetails.Label title='Bank City'>
              London
            </UserBankDetails.Label>
            <UserBankDetails.Label title='Bank Address'>
              Queens Avenue, Streer 24
            </UserBankDetails.Label>
            <UserBankDetails.Label title='Zip/Postal Code'>
              123456789000
            </UserBankDetails.Label>
          </div>
        </div>
      );
}



export function Label({ title, children }) {
  return (
    <div>
      <Text as='p' classname='tw-py-[2px] tw-text-primary-main' weight='medium'>
        {title}
      </Text>
      <Text as='p' classname='tw-py-[0px]' weight='medium'>
        {children}
      </Text>
    </div>
  );
}

UserBankDetails.Label = Label;
import React from 'react'
import Text from '../components/text'

export default function FormatTransaction({value}) {
      return (
            <Text as='span'>{value}k USD( <span className='tw-text-primary-main'>2BTC</span> )</Text>
      )
}
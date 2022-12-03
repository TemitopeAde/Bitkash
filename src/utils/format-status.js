import React from "react";
import Text from "../components/text";

export default function FormatStatus({value}) {
  switch (value) {
    case "Verified":
      return (
        <Text
          as='span'
          classname='tw-text-[#0BC56B]'
        >
          {value}
        </Text>
      );
    case "Unverified":
      return (
        <Text as='span' classname='tw-text-[#E00808]'>
          {value}
        </Text>
      );
    default:
      return null;
  }
}

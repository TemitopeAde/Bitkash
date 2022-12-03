const FAQ = [
  {
    id: 1,
    heading: "How can I buy Bitcoin?",
    content:
      "After signing up with Bitkash, we’ll create a user account for you. Log into your account and locate the dashboard. Input all necessary information such as wallet address, the amount you intend to buy, and currency. The bank details you need to transfer to will be displayed. Once payment is made and received by us, your wallet will be credited in less than 5 minutes.",
  },
  {
    id: 2,
    heading: "How do I know that my purchase was successful?",
    content:
      "After signing up with Bitkash, we’ll create a user account for you. Log into your account and locate the dashboard. Input all necessary information such as wallet address, the amount you intend to buy, and currency. The bank details you need to transfer to will be displayed. Once payment is made and received by us, your wallet will be credited in less than 5 minutes.",
  },
  {
    id: 3,
    heading: "I’ve paid; why has my wallet not been credited?",
    content:
      " Due to banking issues, payments from you to us may take as long as 3 to 72 hours to reflect. In rarer cases, some take as long as 5 days. While this rarely happens, we do all we can to assist when it does occur. However, a little wait usually does the trick. Once we receive payments, we transfer your Bitcoin in under 5 minutes.",
  },
  {
    id: 4,
    heading: "How long does it take Bitkash to send my Bitcoin?",
    content:
      " We complete transfers in less than 5 minutes after receiving payments.",
  },
  {
    id: 5,
    heading: "How many virtual currencies are available for purchase?",
    content:
      "Currently, we have only Bitcoin available for purchase. However, we're working to improve this. If you'd like to be the first to know when this changes, sign up for our newsletter",
  },
  {
    id: 6,
    heading: "Where can I view my past purchases?",
    content: "Customers can view their past purchases in Transaction History",
  },
  {
    id: 7,
    heading: "Can I sell Bitcoin on Bitkash?",
    content: "No. Bitkash does not purchase Bitcoin.",
  },
  {
    id: 8,
    heading: "Can you reverse or refund my transaction?",
    content:
      "We do not reverse or refund transactions. Please visit our <a href='/'> Refund and Cancellation Policy.</a>",
  },
  {
    id: 9,
    heading: "Do you offer your service in every country?",
    content:
      "We offer our services in every country where cryptocurrency isn't sanctioned.",
  },
  {
    id: 10,
    heading: "Can you reverse or refund my transaction?",
    content:
      "We do not reverse or refund transactions. Please visit our Refund and Cancellation Policy.",
  },
  {
    id: 11,
    heading: "Do you offer your service in every country?",
    content:
      "We offer our services in every country where cryptocurrency isn't sanctioned.",
  },
  {
    id: 12,
    heading: "What means of payment do you accept?",
    content: "We accept Bank transfers, ACH, WIRE / SWIFT, and SEPA.",
  },
  {
    id: 13,
    heading: "Which currencies do you accept?",
    content:
      "Currently, we only accept dollars (USD) and Euros (EUR). If you'd like to be the first to know when this changes, sign up for our newsletter.",
  },
  {
    id: 14,
    heading: "What’s the minimum amount I can buy or transfer?",
    content: "The minimum amount that you can purchase is $500.",
  },
  {
    id: 15,
    heading: "What’s the maximum amount I can buy or transfer?",
    content: "The maximum daily limit is $100,000.",
  },
  {
    id: 16,
    heading: "How many transactions can I make?",
    content:
      "You can make as many transactions as possible so long as you do not exceed your daily limit.",
  },
  {
    id: 17,
    heading: "What happens if I hit my limits?",
    content: "You have to wait till the next day to purchase.",
  },
  {
    id: 18,
    heading: "How do I increase my limits?",
    content: "Please get in touch with our customer care.",
  },
  {
    id: 19,
    heading: "Can I have more than one account?",
    content: "No, customers are not allowed to have more than one account.",
  },
  {
    id: 20,
    heading: "How can I verify my account?",
    content:
      "Account verification is done during the KYC process, which our third party carries out.",
  },
  {
    id: 21,
    heading: "Why must I submit ID proof?",
    content:
      "Your ID is needed for the mandatory KYC (Know Your Customer) verification. The KYC process allows us to protect your account.",
  },
  {
    id: 22,
    heading: "What forms of identification are acceptable?",
    content:
      "We accept valid international passports, driver's licenses, and Government-issued photo-based identity cards.",
  },
  {
    id: 23,
    heading: "What's a Selfie ID?",
    content:
      "A selfie ID is a required live photo that helps us confirm whether or not you're the one operating the account.",
  },
  {
    id: 24,
    heading: "What types of address documents are accepted?",
    content:
      "We accept utility bills (phone, gas, water, electricity) and bank statements.",
  },
  {
    id: 25,
    heading: "What do you do with my information after it is submitted?",
    content:
      "We do not store or hold any of your information. Our third-party uses the information from the KYC process to confirm your identity for regulation purposes alone. Please refer to our privacy policy.",
  },
  {
    id: 26,
    heading: "Do you charge an inactivity fee?",
    content: "No, we do not.",
  },
  {
    id: 27,
    heading: "Do you store my bank transfer details when I make a purchase?",
    content:
      "We do not store any banking details. Please refer to our privacy policy.",
  },
  {
    id: 28,
    heading: "What steps do you take to secure my data?",
    content:
      "We do not share your data or information with third parties. We encrypt our data with the latest technology.",
  },
  {
    id: 29,
    heading: "Can I change my password?",
    content:
      "Yes, go to the dashboard. Under the security section, there's an option to update your password.",
  },
  {
    id: 30,
    heading: "Do you have two-factor authentication (2FA)?",
    content:
      "Yes, we do. We recommend you secure your account with two-factor authentication to keep it safe.",
  },
  {
    id: 31,
    heading: "Is Bitkash regulated?",
    content:
      "Although Bitkash isn't regulated, our partners are. This is why we can offer top-notch service.",
  },
  {
    id: 32,
    heading: "Can you help me if I run into problems?",
    content:
      "Yes. At Bitkash, we place our customers first and are always available to assist should you need it. Contact our customer care.",
  },
  {
    id: 33,
    heading: "How do I secure my account?",
    content:
      "You can secure your account by enabling two-factor authentication, email verification, and phone number verification.",
  },
  {
    id: 34,
    heading: "Can I exchange Bitcoin anonymously?",
    content: "No, we do not allow anonymous exchanges.",
  },
  {
    id: 35,
    heading: "Can I purchase Bitcoin with more than one bank account?",
    content: "Yes, you can. However, you can only have one Bitkash account.",
  },
  {
    id: 36,
    heading: "What Is The Fastest Way To Buy Bitcoin?",
    content: "Bitkash is the fastest and most secure way to buy Bitcoin.",
  },
];

export default FAQ;

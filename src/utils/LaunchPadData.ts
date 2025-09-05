import LaunchPadCard1 from "@/_assets/launch-pad-1-card-1.png";
import LaunchPadCard2 from "@/_assets/launch-pad-1-card-2.png";
import LaunchPadCard3 from "@/_assets/launch-pad-1-card-3.png";
import LaunchPadCard4 from "@/_assets/launch-pad-1-card-4.png";

import LaunchPad2Card1 from "@/_assets/launch-pad-2-card-1.png";
import LaunchPad2Card2 from "@/_assets/launch-pad-2-card-2.png";
import LaunchPad2Card3 from "@/_assets/launch-pad-2-card-3.png";
import LaunchPad2Card4 from "@/_assets/launch-pad-2-card-4.png";

import LaunchPad3Card1 from "@/_assets/launch-pad-3-card-1.png";
import LaunchPad3Card2 from "@/_assets/launch-pad-3-card-2.png";
import LaunchPad3Card3 from "@/_assets/launch-pad-3-card-3.png";
import LaunchPad3Card4 from "@/_assets/launch-pad-3-card-4.png";

export const launchPadData = [
  {
    heading: "Want help to get your first contract?",
    title: "Contractor Launch Pad",
    cards: [
      { image: LaunchPadCard1, title: "CV Assessment and Rewrite" },
      {
        image: LaunchPadCard2,
        title: "Professional Profile Development",
      },
      {
        image: LaunchPadCard3,
        title: "Target Market and Employer Analysis",
      },
      { image: LaunchPadCard4, title: "Agency Analysis and Recommends" },
    ],
    descriptionTitle: "Contractor Launch Pad Service",
    description:"Want to be a Contractor but not sure how to get started? We have got you covered",
    price: "$995",
    bulletPoints: [
      "We will understand your experience and skills and write a killer CV and public profile for you",
      "We will identify your target market and job pathway and connect you with the right recruitment agencies",
    ],
    buttonText: "Sign Up Now!",
    buttonLink: "/signup",
    themeColor: "#FFB400",
  },
  {
    heading: "Ready to start your first contract?",
    title: "Contractor Business in a Box",
    cards: [
      { image: LaunchPad2Card1, title: "Limited Company Setup" },
      { image: LaunchPad2Card2, title: "Accounting and Receipting" },
      { image: LaunchPad2Card3, title: "Accountant Introduction" },
      { image: LaunchPad2Card4, title: "Business Setup" },
    ],
    descriptionTitle: "Contractor Launch Pad Service",
    description:"Ready to start your new Contract? We can get the business side set up for you",
    price: "$1995",
    bulletPoints: [
      "We will set up your limited or umbrella company",
      "Get your processes in place",
      "Get you an accounting software",
      "Get you the right insurance",
      "Introduce you to an awesome accountant and",
      "Get your contractor business going in 1 week",
    ],
    buttonText: "Sign Up Now!",
    buttonLink: "/signup",
    themeColor: "#FFA500",
  },
  {
    heading:
      "Already a high paid contractor? We will help you launch your Consultancy",
    title: "Consultancy Launch Pad",
    cards: [
      { image: LaunchPad3Card1, title: "Positioning & Offer" },
      { image: LaunchPad3Card2, title: "Brand Accelerator" },
      { image: LaunchPad3Card3, title: "Proposals & Bid Writing" },
      { image: LaunchPad3Card4, title: "Tools & Templates" },
    ],
    descriptionTitle: "Consultancy Launch Pad Service",
    description:"Ready to start your Consultancy? We can launch it for you!",
    price: "",
    bulletPoints: [
      "We will research your market, competitors and develop positioning, pricing and a signature methodology.",
      "We will get you set up with a killer brand and social content schedule for immediate credibility.",
      "We can write case studies and get your website set up and humming.",
    ],
    buttonText: "Contact our Team Now!",
    buttonLink: "/contact",
    themeColor: "#FFB400",
  },
];

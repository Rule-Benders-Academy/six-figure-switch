import Image from "next/image";
import React from "react";
import RefralIcon from "../../_assets/refrral-icon.png"
import PurchaseIcon from "../../_assets/purchase-icon.png"
import RBCoinImg from "../../_assets/RB-img.png"
import RubyIcon from "../../_assets/rubby-icon.png"
import SapphireIcon from "../../_assets/sapphire-icon.png"
import EmeraldIcon from "../../_assets/emrald-icon.png"
import DiamondIcon from "../../_assets/diamond-icon.png"
import MacIg from "../../_assets/mac-img.png"
import CardImg from "../../_assets/mock-img.png"
import HoverCardWrapper from "../HoverCardWrapper/HoverCardWrapper";


const gemTiers = [
  {
    name: "Ruby",
    range: "0 - 499 points",
    color: "text-[#D25470]",
    img: RubyIcon,
    hoverContent: "Welcome badge, 5% off group classes",
  },
  {
    name: "Sapphire",
    range: "500 - 999 points",
    color: "text-indigo-400",
    img: SapphireIcon,
    hoverContent: "10% off one course, early access to exclusive content",
  },
  {
    name: "Emerald",
    range: "1000 - 1999 points",
    color: "text-emerald-400",
    img: EmeraldIcon,
    hoverContent: "20% off one product, VIP access to private sessions",
  },
  {
    name: "Diamond",
    range: "2000+ points",
    color: "text-cyan-300",
    img: DiamondIcon,
    hoverContent: "One 30% off voucher per quarter, invites to exclusive AMA sessions",
  },
];

const RewardsComponent = () => {
  return (
    <div className="bg-black text-white space-y-16 py-20 px-6 md:px-16">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-12">Your Journey, Your Rewards, Your Legacy</h1>
        <p className="text-[#E1E1E1] text-base md:text-lg lg:text-xl">
          At Rule Benders Academy, every action you take, from learning a new skill to referring a friend - brings you closer to the life you deserve. With <span className="font-bold text-white">Rule benders Rewards</span>, you earn points, unlock status, and gain access to powerful perks... including <span className="font-bold text-white">exclusive invites to unforgettable experiences</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1E1E1E] px-6 md:px-8 xl:px-12 py-8 rounded-2xl flex flex-col gap-4 justify-between">
          <h2 className="text-xl md:text-2xl lg:text-4xl">Earn RB Coins from purchases and referrals</h2>
          <div className="flex items-center flex-wrap gap-4 justify-between">
            <div className="flex flex-col gap-2 flex-1">

              <HoverCardWrapper
                hoverContent={<div className="text-[#E1E1E1] text-xs lg:text-sm">At Rule Benders Academy, we believe commitment should be rewarded. That’s why we created Rule Benders Rewards..</div>}
              >
                <div className="bg-black text-white h-[107px] max-w-[248px] w-full rounded-md py-2 flex items-center gap-6 px-4 md:px-6 lg:px-8">
                  <Image src={PurchaseIcon} alt="" />
                  Purchases
                </div>
              </HoverCardWrapper>

              <HoverCardWrapper
                hoverContent={<div className="text-[#E1E1E1] text-xs lg:text-sm">Share Rule Benders with a friend and they’ll get $100 off their first course or class — and you’ll earn up to 1,000 points.</div>}
              >
                <div className="bg-black text-white h-[107px] max-w-[248px] w-full rounded-md py-2 flex items-center gap-6 px-4 md:px-6 lg:px-8">
                  <Image src={RefralIcon} alt="" />
                  Referrals
                </div>
              </HoverCardWrapper>

            </div>
            <div className="flex-1">
              <Image src={RBCoinImg} alt="" className="max-h-[216px] max-w-[230px] min-w-[150px] w-full" />
            </div>
          </div>
        </div>

        <div className="bg-[#1e1e1e] px-6 md:px-8 xl:px-12 py-8 rounded-2xl flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl lg:text-4xl">Get GEM Status</h2>
          <div className="flex flex-col gap-[14px] mt-8">
            {gemTiers.map((tier) => (

              <div key={tier.name} className="flex items-center gap-4 rounded-xl justify-between">
                <div className="flex items-center gap-4 h-[76.78px] min-w-[60px] sm:min-w-[76.78px] justify-center bg-black rounded-xl">
                  <Image src={tier.img} alt={tier.name} className="h-8 md:h-10 lg:h-[47.18px] w-[45%] md:w-auto" />
                </div>
                <HoverCardWrapper
                  hoverContent={<div className="text-[#E1E1E1] text-base md:text-lg lg;text-xl">{tier.hoverContent}</div>}
                >
                  <div className="flex justify-between items-center w-full bg-black h-full p-6 rounded-xl">
                    <div className="text-white text-base md:text-lg lg;text-2xl font-medium">{tier.name}</div>
                    <div className={`${tier.color} text-sm font-medium`}>{tier.range}</div>
                  </div>
                </HoverCardWrapper>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1E1E1E] px-6 md:px-8 xl:px-12 py-8 rounded-2xl flex flex-col gap-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl">Get Discounts and free courses and classes</h2>
          <div className="">
            <Image src={CardImg} alt="" />
          </div>
        </div>

        <div className="bg-[#1E1E1E] px-6 md:px-8 xl:px-12 py-8 rounded-2xl flex flex-col gap-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl">Track your Rewards in our Rewards Dashboard</h2>
          <Image src={MacIg} alt="Rewards Dashboard" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default RewardsComponent;

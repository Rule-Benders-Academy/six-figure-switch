import { launchPadData } from '@/utils/LaunchPadData'
import React from 'react'
import LaunchPad from '../LaunchPad/LaunchPad'
import Chip from '../Chip/Chip'

const LaunchPadMain = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16">
      <div className="text-center">
        <Chip text="Services" className='!bg-[#474747] !text-white px-5 py-2 bg-opacity-15' />
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white mt-6 w-[905] md:w-[80%] mx-auto ">
          We dont just teach you, we implement for you too
        </h1>
      </div>
      <div className="space-y-6">
        {launchPadData.map((data, index) => (
          <LaunchPad key={index} {...data} />
        ))}
      </div>
    </div>
  )
}

export default LaunchPadMain

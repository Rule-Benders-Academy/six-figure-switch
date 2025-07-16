import React from 'react'
import Chip from '../Chip/Chip'
import { ServiceCardsData } from '@/utils/ServiceCardsData'
import ServiceCard from '../ServiceCard/ServiceCard'

interface Props{
  id: string
}

const ServiceCardSection = ({id}:Props) => {
  return (
    <div className="w-full px-6 py-12 md:py-20 md:px-16">
      <div className="flex flex-col items-center">
        <Chip text="Courses" className={`${id==="0"? " bg-black/5 !text-black": "bg-[#262626] !text-white"} px-5 py-2 !text-base`} />
        <div className="mt-8">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-semibold ${id==="0"? "text-black": "text-white"} mb-6 lg:w-[80%] mx-auto text-center`}>Courses which will make you better than the rest</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {ServiceCardsData.map((service, idx) => (
          <ServiceCard
            key={idx}
            image={service.image}
            title={service.title}
            description={service.description}
            members={service.members}
            price={service.price}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceCardSection

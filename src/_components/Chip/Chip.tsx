import React from 'react'

const Chip = ({text, className}: {text: string, className?:string}) => {
  return (
    <div className={`bg-[#262626] text-white px-6 py-2 rounded-full text-lg transition duration-300 inline-block ${className}`}>
      {text}
    </div>
  )
}

export default Chip

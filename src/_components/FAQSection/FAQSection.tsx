import Image from 'next/image';
import React, { useState } from 'react';
import MinusIcon from "../../_assets/minus-icon.svg"
import PlusIcon from "../../_assets/plus-icon.svg"
import Chip from '../Chip/Chip';
import GlobalButton from '../GlobalButton/GlobalButton';

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-4 md:px-16">
      <div className="">
        <Chip text="FAQ’S" className='bg-black/5 !text-black px-5 py-2 !text-base' />
        <div className="mt-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6">Let’s Clear Things Up</h2>
          <GlobalButton className="h-[51px]">
            Get Enrolled Today
          </GlobalButton>
        </div>
      </div>

      <div className="space-y-4 grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          {faqs.map((faq, index) => (
            <div key={index} className="pb-8">
              <button
                className={`flex justify-between items-center w-full text-left text-md md:text-lg lg:text-xl text-black focus:outline-none cursor-pointer border-b border-gray-200 pb-4 ${openIndex === index ? "font-semibold" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl text-[#0000FF]">
                  {openIndex === index ?
                    <Image src={MinusIcon} alt="" className="w-7 h-7" />
                    :
                    <Image src={PlusIcon} alt="" className="w-7 h-7" />
                  }
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-5 text-[#010101] text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

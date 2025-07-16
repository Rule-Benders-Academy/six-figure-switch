import Chip from '../Chip/Chip';
import BgImg from "../../_assets/mock-img-2.png"

export default function HomeAbout() {
  return (
    <section className="w-full px-6 py-12 md:py-20 pb-20 md:px-16 bg-white" id='about'>
      <Chip text="About" className='bg-black/5 !text-black px-5 py-2 mb-6 lg:mb-0' />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black">
            We Did It Differently — So Can You
          </h1>

          <p className="text-base sm:text-lg text-gray-800">
            Rule Benders Academy teachers are real people that started with nothing and have been very successful in their field. We have not followed conventional paths, we have forged our own.
          </p>

          <p className="text-base sm:text-lg text-gray-800">
            We have become experts in different sectors doing different jobs but share a common belief that you don’t have to be stuck in the job system and go at its pace. You can shorten the journey, you can make the steps easier to achieve and you can jump steps all together.
          </p>

          <p className="text-base sm:text-lg text-gray-800">
            We want to share this with you and help you achieve your career goals, gain financial freedom and live life on your terms.
          </p>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <div className="w-full h-full rounded-3xl" style={{
            backgroundImage: `url(${BgImg.src})`,
            backgroundSize: 'cover',
          }} />
          <div className="flex justify-end mt-6">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm px-6 py-3 rounded-full shadow-lg">
              Download our Manifesto
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

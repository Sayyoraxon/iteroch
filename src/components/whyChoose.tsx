import Image from 'next/image'
import React from 'react'

const WhyChoose = () => {
  return (
    <div className='px-3 w-full bg-white py-[140px]'>
      <div className='max-w-[1296px] mx-auto'>
        <div className="container w-full gap-y-10 mx-auto flex justify-end gap-14 pt-12 lg:flex-row flex-col items-center">
          <div className="relative w-[400px] h-[720px] rounded-[16px]" style={{ backgroundImage: "url(/BG_.png)" }}>

            <Image className='absolute right-12 top-1/2 -translate-y-1/2 max-w-[734px] h-[543px]'
              src="/image80.png" alt="about" width={734} height={543} />
          </div>
          <div className="max-w-[746px]">
            <p className='font-blod text-[18px] leading-[26px] text-[#7f27ff]'>
              Why choose us
            </p>
            <p className='mt-2 font-bold text-[64px] leading-[72px] text-[#1a1d27]'>
              Proven Expertise in Complex IT Solutions
            </p>
            <p className='mt-4 mb-10 text-base leading-6 text-[#1a1d27] opacity-60'>
              Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces after value-added infrastructure.
            </p>
            <div className='w-full pr-[160px]'>
              <p className='font-semibold text-[24px] leading-[28px] text-[#1a1d27]'>
                An Award winning company
              </p>
              <p className='mt-4 text-[14px] leading-[23px] text-[#1a1d27] opacity-60'>
                Assertively streamline interactive interfaces after value infrastructures. untorn datively fabricate fully tested methodologies before Assertively streamline interactive
                interfaces after  infrastructures. We are 100+ professional software .
              </p>
              <div className='w-full h-px my-6 bg-[#ff8911]' />
              <p className='font-semibold text-[24px] leading-[28px] text-[#1a1d27]'>
                Quick Research and Solutions
              </p>
              
              <div className='w-full h-px my-6 bg-[#ff8911]' />
              <p className='font-semibold text-[24px] leading-[28px] text-[#1a1d27]'>
                Dedicated Support 24/7
              </p>
              <div className='w-full h-px my-6 bg-[#ff8911]' />
              <p className='font-semibold text-[24px] leading-[28px] text-[#1a1d27]'>
                Quick Support & Tech Solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
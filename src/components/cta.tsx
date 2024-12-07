import React from 'react'

const Cta = () => {
  return (
    <div className='px-3 w-full py-[56px] bg-[#070706]'>
        <div className='max-w-[1296px] h-full mx-auto flex flex-wrap items-center justify-between'>
            <div>
                <p className='font-semibold text-[64px] leading-[72px] text-[#ff8911]'>
                    98%  
                </p>
                <p className='mt-2 font-semibold text-[18px] leading-[26px] text-white'>
                    New users per week
                </p>
            </div>
            <div className='h-20 w-px bg-[#47484a]'></div>
            <div>
                <p className='font-semibold text-[64px] leading-[72px] text-[#ff8911]'>
                    100k+ 
                </p>
                <p className='mt-2 font-semibold text-[18px] leading-[26px] text-white'>
                New users per week
                </p>
            </div>
            <div className='h-20 w-px bg-[#47484a]'></div>
            
            <div>
                <p className='font-semibold text-[64px] leading-[72px] text-[#ff8911]'>
                    110k+ 
                </p>
                <p className='mt-2 font-semibold text-[18px] leading-[26px] text-white'>
                    Monthly active users
                </p>
            </div>
            <div className='h-20 w-px bg-[#47484a]'></div>
            <div>
                <p className='font-semibold text-[64px] leading-[72px] text-[#ff8911]'>
                    33%
                </p>
                <p className='mt-2 font-semibold text-[18px] leading-[26px] text-white'>
                Growth-over-year
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cta
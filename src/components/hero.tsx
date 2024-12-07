import Image from 'next/image'
import React from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'

const Hero = () => {
    return (
        <section className="w-full" style={{ backgroundImage: "url(/BG1.png)" }}>
            <div className="container max-w-[1612px] ml-auto flex justify-between gap-y-10 py-[120px] pr-16 2xl:flex-row flex-col items-center">
                <div className="max-w-[643px] h-[490px]">
                    <div className='flex items-center'>
                        <div className='w-11 h-px bg-[#7f27ff]'></div>
                        <p className='font-semibold text-[18px] leading-[26px] text-[#7f27ff]'>
                            WELCOME TO Ztech!
                        </p>
                    </div>
                    <p className='font-semibold text-[80px] leading-[88px] text-[#1a1d27]'>
                        We Are Ready <span className='text-white bg-[#ff8911]'>To Provide</span>
                        <br />
                        It Solution
                    </p>
                    <p className='mt-6 text-base leading-6 text-[#1a1d27] opacity-80'>
                        Assertively streamline interactive interfaces after value infrastructures. untorn datively fabricate fully tested methodologies before Assertively streamline interactive
                        interfaces after  infrastructures. We are 100+ professional software .
                    </p>
                    <div className='mt-10 flex gap-6'>
                        <button className='w-[242px] h-[56px] rounded-[6px] bg-[#070706] font-medium text-[15px] leading-4 tracking-[1px] text-white'>
                            EXPLORE SERVICES
                        </button>
                        <button className='flex gap-1 h-[56px] items-center font-medium text-[15px] leading-4 tracking-[1px]'>
                            <AiOutlinePlayCircle className='text-[#ff8911] w-10 h-10'/>
                            Watch A Video
                        </button>
                    </div>
                </div>
                <div className="relative w-[882px] h-[733px] flex justify-center">
                    <Image className="object-cover object-center rounded" alt="hero" src="/hero.png" width={716} height={733} />
                    <Image className='absolute left-0 bottom-[69px]'
                        src="/abs1.png" alt="text" width={226} height={115} />
                    <Image className='absolute right-0 top-1/2 -translate-y-1/2 bg-white py-6 pl-[18px] pr-[64px] rounded-[10px]'
                        src="/Text.png" alt="text" width={203} height={134} />
                </div>
            </div>
        </section>
    )
}

export default Hero
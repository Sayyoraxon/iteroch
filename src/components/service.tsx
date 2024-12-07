import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { ExpandableCardDemo } from './ui/animated-card'

const Service = () => {
    return (
        <div id='service' className='px-3 py-[140px]' style={{ backgroundImage: "url(/BG.png)" }}>
            <div className='max-w-[1296px] mx-auto flex flex-wrap justify-center gap-[64px]'>
                <div className='max-w-[580px]'>
                    <p className="font-semibold text-[18px] leading-[26px] text-[#ff8911]">
                        SERVICE
                    </p>
                    <p className="mt-4 max-w-[736px] font-semibold text-[64px] leading-[72px] text-white">
                        We Providing Complete Professional IT Services.
                    </p>
                    <p className='mt-4 mb-[64px] text-base leading-6 text-white opacity-60 pr-[60px]'>
                        Assertively streamline interactive interfaces after value a infrastructures. Authoritatively fabricate fully tested methodologies before Holistic deliver end-to-end architectures rather sound benefits.
                    </p>
                    <ExpandableCardDemo/>
                </div>

                <div className='w-[652px] flex gap-10'>
                    <div>
                        <div className='w-[306px] h-[360px] rounded-[16px] bg-[#eceef2] pt-10 px-6'>
                            <div className='w-[72px] h-[72px] rounded-full bg-[#101d27] flex justify-center items-center'>
                                <Image src="/fi.svg" alt="fi" width={32} height={32} />
                            </div>
                            <p className='mt-[70px] font-semibold text-[24px] leading-7 text-[#070706] '>
                                Network solution
                            </p>
                            <p className='text-base leading-6 text-[#070706] opacity-80'>
                                Assertively streamline interactive interfaces after value-added infrastructures.
                            </p>
                            <button className='mt-4 w-[147px] h-[28px] flex justify-between items-center font-medium text-[15px] leading-4 tracking-[1px] text-[#7f27ff]'>
                                <MdArrowOutward className="w-7 h-7" />
                                LEARN MORE
                            </button>
                        </div>
                        <div className='mt-[56px] w-[306px] h-[360px] rounded-[16px] bg-[#eceef2] pt-10 px-6'>
                            <div className='w-[72px] h-[72px] rounded-full bg-[#101d27] flex justify-center items-center'>
                                <Image src="/Group.svg" alt="fi" width={32} height={32} />
                            </div>
                            <p className='mt-[70px] font-semibold text-[24px] leading-7 text-[#070706] '>
                                Cyber security
                            </p>
                            <p className='text-base leading-6 text-[#070706] opacity-80'>
                                Assertively streamline interactive interfaces after value-added infrastructures.
                            </p>
                            <button className='mt-4 w-[147px] h-[28px] flex justify-between items-center font-medium text-[15px] leading-4 tracking-[1px] text-[#7f27ff]'>
                                <MdArrowOutward className="w-7 h-7" />
                                LEARN MORE
                            </button>
                        </div>
                    </div>

                    <div className='pt-[128px]'>
                        <div className='w-[306px] h-[360px] rounded-[16px] bg-[#eceef2] pt-10 px-6'>
                            <div className='w-[72px] h-[72px] rounded-full bg-[#101d27] flex justify-center items-center'>
                                <Image src="/fi_.svg" alt="fi" width={32} height={32} />
                            </div>
                            <p className='mt-[70px] font-semibold text-[24px] leading-7 text-[#070706] '>
                                Data analytics
                            </p>
                            <p className='text-base leading-6 text-[#070706] opacity-80'>
                                Assertively streamline interactive interfaces after value-added infrastructures.
                            </p>
                            <button className='mt-4 w-[147px] h-[28px] flex justify-between items-center font-medium text-[15px] leading-4 tracking-[1px] text-[#7f27ff]'>
                                <MdArrowOutward className="w-7 h-7" />
                                LEARN MORE
                            </button>
                        </div>
                        <div className='mt-[56px] w-[306px] h-[360px] flex flex-col items-end rounded-[16px] bg-[#ff8911] py-10 px-6'>
                            <MdArrowOutward className='w-12 h-12 text-[#070706]'/>
                            <p className='mt-auto font-semibold text-[24px] leading-[28px] text-[#070706] text-left w-full'>
                                View all services
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
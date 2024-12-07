import Image from 'next/image'
import React from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'

const About = () => {
    return (
        <div className='bg-white w-full py-[140px]'>
            <div className='max-w-[1296px] mx-auto'>
                <p className='font-semibold text-[18px] leading-[26px] text-[#7f27ff]'>
                ABOUT US
            </p>
            <p className='mt-2 font-semibold text-[64px] leading-[72px] text-[#1a1d27]'>
                Our Company Specialize In IT Solutions & Technology with Passion
            </p>
            <p className='mt-4 text-base leading-6 text-[#1a1d27] opacity-60'>
            Assertively streamline interactive interfaces after value-added infrastructures. Authoritatively fabricate fully tested methodologies before. Holistic deliver end-to-end architectures rather than economically sound benefits. Progressively simplify end-to-end paradigms. Assertively streamline interactive interfaces after value-added infrastructure.
            </p>
            </div>
            
            <div className="container max-w-[1296px] gap-y-10 mx-auto flex justify-between pt-12 lg:flex-row flex-col items-center">
                <div className="max-w-[574px] flex gap-[13px]">
                    <div>
                        <Image src="/about1.png" alt="about" width={242} height={392}/>
                        <div className='h-[127px] w-[242px] mt-[13px] rounded-[16px] bg-[#ff8911] py-6 pl-6'>
                            <p className='font-semibold text-[52px] leading-[46px] text-[#070706]'>
                                12+
                            </p>
                            <p className='font-semibold text-[20px] leading-6 text-[#070706]'>
                                Years  Experience
                            </p>
                        </div>
                    </div>
                    <Image src="/about2.png" alt="about" width={317} height={533}/>
                 </div>
                <div className="max-w-[650px]">
                    
                    <p className='font-semibold text-[24px] leading-[28px] text-[#1a1d27]'>
                    We try to give all kind of technology solution as your requirements and we are the best in field.
                    </p>
                    <p className='mt-4 text-[14px] leading-[23px] text-[#1a1d27] opacity-60'>
                        Assertively streamline interactive interfaces after value infrastructures. untorn datively fabricate fully tested methodologies before Assertively streamline interactive
                        interfaces after  infrastructures. We are 100+ professional software .
                    </p>
                    <div className='w-full h-px my-6 bg-[#ff8911]'/>
                    <p className='font-semibold text-[24px] leading-[28px] text-[#1a1d27]'>
                    We try to give all kind of technology solution as your requirements and we are the best in field.
                    </p>
                    <p className='mt-4 text-[14px] leading-[23px] text-[#1a1d27] opacity-60'>
                        Assertively streamline interactive interfaces after value infrastructures. untorn datively fabricate fully tested methodologies before Assertively streamline interactive
                        interfaces after  infrastructures. We are 100+ professional software .
                    </p>
                        <button className='mt-10 w-[218px] h-[56px] rounded-[6px] bg-[#070706] font-medium text-[15px] leading-4 tracking-[1px] text-white'>
                            MORE ABOUT US
                        </button>
                </div>
            </div>
        </div>
    )
}

export default About
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { FocusCardsDemo } from './ui/focusCards'

const Team = () => {
    return (
        <div className='px-3 bg-white w-full'>
            <div className='max-w-[1296px] mx-auto py-[120px]'>
                <p className='font-bold text-[18px] leading-[26px] text-[#7f27ff]'>
                    OUR TEAM
                </p>
                <div className='w-full mt-2 flex justify-between items-end'>
                    <p className='max-w-[722px] font-bold text-[64px] leading-[72px] text-[#1a1d27]'>
                        Our Professional Team member
                    </p>
                    <button className="flex items-center font-medium text-[15px] leading-4 tracking-[1px] text-[#ff8911]">
                        <MdArrowOutward className="w-7 h-7" />
                        VIEW ALL
                    </button>
                </div>

                <FocusCardsDemo/>
            </div>
        </div>
    )
}

export default Team
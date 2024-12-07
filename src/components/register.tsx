import Image from 'next/image'
import React from 'react'

const Register = () => {
  return (
    <div className='w-full bg-white py-[120px]'>
        <div className="container max-w-[1296px] gap-y-10 mx-auto flex justify-end gap-x-32 pt-12 lg:flex-row flex-col items-center">
          <div className="relative w-[400px] h-[720px] rounded-[16px]" style={{ backgroundImage: "url(/BG_.png)" }}>

            <Image className='absolute right-12 top-1/2 -translate-y-1/2 max-w-[734px] h-[543px]'
              src="/image80.png" alt="about" width={734} height={543} />
          </div>
          <div className="max-w-[526px]">
            <p className='font-blod text-[18px] leading-[26px] text-[#7f27ff]'>
              GET IN TOUCH
            </p>
            <p className='mt-2 font-bold text-[64px] leading-[72px] text-[#1a1d27]'>
                It is very easy to contact!
            </p>
            <input className='mt-[30px] w-full h-[56px] bg-inherit pl-6 rounded-[4px] border border-[rgba(26, 29, 39, 0.4)]'
             type='text' placeholder='Your name'/>
             <input className='mt-[14px] w-full h-[56px] bg-inherit pl-6 rounded-[4px] border border-[rgba(26, 29, 39, 0.4)]'
             type='text' placeholder='Email address'/>
             <input className='mt-[14px] w-full h-[56px] bg-inherit pl-6 rounded-[4px] border border-[rgba(26, 29, 39, 0.4)]'
             type='text' placeholder='Web address'/>
             <textarea className='mt-[14px] w-full h-[160px] bg-inherit p-6 rounded-[4px] border border-[rgba(26, 29, 39, 0.4)]'
              placeholder='Type message...'/>
              <button className='mt-[14px] w-full h-[56px] rounded-[4px] bg-[#ff8911] font-medium text-[15px] leading-4 tracking-[1px]'>
                SEND MESSAGE NOW
              </button>
          </div>
        </div>
    </div>
  )
}

export default Register
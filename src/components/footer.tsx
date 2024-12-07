import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-[#070706]'>
            <div className='max-w-[1296px] mx-auto py-[120px]'>
                <div className='w-full flex flex-wrap gap-y-6 justify-between'>
                    <div>
                        <p className='font-extrabold text-[24px] leading-6 text-white'>
                            iteroch
                        </p>
                        <p className='mt-9 text-base leading-6 text-white opacity-60'>
                            Home
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Features
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Works
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Careers
                        </p>
                    </div>
                    <div>
                        <p className='font-bold text-[28px] leading-[26px] text-white'>
                            Help
                        </p>
                        <p className='mt-6 text-base leading-6 text-white opacity-60'>
                            Customer Support
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Delivery Details
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Terms & Conditions
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Privacy Policy
                        </p>
                    </div>
                    <div>
                        <p className='font-bold text-[28px] leading-[26px] text-white'>
                            Resources
                        </p>
                        <p className='mt-6 text-base leading-6 text-white opacity-60'>
                            Free eBooks
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Development Tutorial
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            How to - Blog
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            YouTube Playlist
                        </p>
                    </div>
                    <div>
                        <p className='font-bold text-[28px] leading-[26px] text-white'>
                            Extra Links
                        </p>
                        <p className='mt-6 text-base leading-6 text-white opacity-60'>
                            Customer Support
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Delivery Details
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Terms & Conditions
                        </p>
                        <p className='mt-[14px] text-base leading-6 text-white opacity-60'>
                            Privacy Policy
                        </p>
                    </div>
                </div>
                <div className='mt-20 w-full flex flex-wrap gap-y-5 justify-between items-center'>
                    <div className='flex gap-[50px]'>
                        <div className='flex gap-5 text-white'>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                        <p className='text-base leading-6 text-white opacity-60'>
                            Privacy Policy
                        </p>
                        <p className='text-base leading-6 text-white opacity-60'>
                            Terms & Conditions
                        </p>
                        <p className='text-base leading-6 text-white opacity-60'>
                            Support
                        </p>
                    </div>
                    <p className='text-base leading-6 text-white opacity-60'>
                        © Copyright 2024, All Rights Reserved by company
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
import Link from 'next/link'
import { LiaPhoneVolumeSolid } from "react-icons/lia";


const Navbar = () => {
  return (
    <div className='w-full bg-[#070706] h-[96px] px-3'>
        <div className='max-w-[1296px] h-full mx-auto flex justify-between items-center'>
            <p className='font-[800] text-[24px] leading-6 text-white'>
                iteroch
            </p>
            <div className='flex gap-10'>
                <Link href="/" className='block text-base leading-5 text-white opacity-70'>
                    HOME
                </Link>
                <Link href="#service" className='block text-base leading-5 text-white opacity-70'>
                    SERVICES
                </Link>
                <Link href="#projects" className='block text-base leading-5 text-white opacity-70'>
                    PROJECTS
                </Link>
                <Link href="#blog" className='block text-base leading-5 text-white opacity-70'>
                    BLOG
                </Link>
                <Link href="/" className='block text-base leading-5 text-white opacity-70'>
                    CONTACT
                </Link>
                <div className='flex items-center text-white gap-1'>
                    <LiaPhoneVolumeSolid className='w-6 h-6 opacity-70'/>
                    <p className='font-semibold text-[18px] leading-[26px]'>
                        +49 30 9846565
                    </p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar
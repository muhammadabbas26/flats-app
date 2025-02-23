import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-[#444444] w-full h-full  bg-[url(/images/pattern.png)] bg-fixed px-5 ' >
        <div className=''>
            <div className=' text-center pt-8 pb-8 max-sm:pb-4'>
                <h1 className='text-[#fff]  text-[40px] font-[600] max-sm:text-[25px]'>Flexible Software System <br/> For Developers</h1>
                <p className='text-[#BBBBBB]  text-[20px] font-[500] py-1 max-sm:text-[14px]'>From logo design to website development, hand-picked <br/>designers and developers are ready to complete.</p>
            </div>
            <div className=' py-5 flex justify-center gap-10 flex-wrap max-sm:gap-5 max-sm:flex-col-reverse max-sm:mx-[20px]'>
                <button className='bg-[#3baece] border-2 border-[#3baece]  px-4 py-2 rounded-sm text-[#fff] text-[14px] font-[600]'>VIEW LIVE DEMO</button>
                <button className='border-2 border-[#fff] px-4 py-2 rounded-sm text-[#fff] text-[14px] font-[600]'>EXPLORE FEATURES</button>
            </div>
            <div className='flex justify-center items-center'>
                <Image src="/images/intro-image.png" alt='abs' width={900} height={400}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection
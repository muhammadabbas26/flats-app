import Image from 'next/image'
import React from 'react'
import { IoDownloadOutline } from 'react-icons/io5'

const Themeforest = () => {
    return (
        <>
            <div className='py-20 px-5 h-[auto] w-full bg-[url(/images/cta-bg.jpg)] bg-center bg-repeat  bg-cover flex flex-col justify-center items-center bg-fixed'>
                <div className=' w-[65%] max-sm:w-[100%]'>
                    <Image src="/images/iconss.png" alt='img' width={100} height={100} />
                    <h1  className='text-[#fff] text-[40px] font-bold leading-none py-2 max-sm:text-[22px] max-sm:leading-[30px]'>Download Software From <br/> Themeforest Today!</h1>
                    <p className='text-[#999999] text-[16px] font-normal py-2 max-sm:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore <br/> et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut <br/> aliquip ex commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  <br/>dolore eu fugiat nulla pariatur.</p>
                    <button className='flex items-center gap-1 border-b-4 border-b-[#287B92] bg-[#2DC0E8] hover:bg-[#2F96B2] text-[#fff] text-[20px] py-[4px] px-[15px] font-[500] transition rounded-sm mt-4 max-sm:text-[14px]'>
                        <a href="#" >
                            <IoDownloadOutline className='text-[20px] font-bold ' />
                        </a>
                        Download FlatPack
                    </button>

                </div>

            </div>
        </>
    )
}

export default Themeforest
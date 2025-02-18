import CustomText from '@/common/custom-text';
import Image from 'next/image';
import React from 'react'
import { IoDownloadOutline } from "react-icons/io5";
import ClientsSaid from '../clients-said';


const FreeSupport = () => {
    return (
        <>
            <div className=' px-5 h-auto py-10 bg-[#333333]'>
                <div className='  py-4 flex justify-center flex-col items-center gap-20'>
                    <div className='
                     
                    w-[65%] 
                    flex 
                    justify-center 
                    gap-5 
                    p-4 
                    max-lg:flex-col-reverse
                    max-lg:w-[auto]
                    max-lg:items-center
                    max-lg:text-center

                    '

                    >
                        <div className=' w-[50%] max-lg:w-[auto] '>
                            <CustomText
                                subtitle="GET FREE SUPPORT"
                                title="Get The Most Amazing Builder!"
                                description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            />
                            <div className=' flex max-lg:justify-center'>
                                <button className='flex  items-center gap-1 border-b-4 border-b-[#287B92] bg-[#2DC0E8] hover:bg-[#2F96B2] text-[#fff] text-[20px] max-sm:text-[18px] py-[4px] px-[15px] font-[500] transition rounded-sm mt-4'>
                                    <a href="#" >
                                        <IoDownloadOutline className='text-[20px] font-bold' />
                                    </a>
                                    Get Software
                                </button>
                            </div>

                        </div>
                        <div className=' w-[50%] max-lg:w-[auto] flex justify-center'>
                            <Image src="/images/software-img-3.png" alt='abs' width={450} height={500} />
                        </div>
                    </div>

                    <div className='
                     
                    w-[65%] 
                    flex 
                    justify-center 
                    gap-5 
                    p-4 
                    max-lg:flex-col
                    max-lg:w-[auto]
                    max-lg:items-center
                    max-lg:text-center

                    '

                    >
                        <div className=' w-[50%] max-lg:w-[auto] flex justify-center'>
                            <Image src="/images/software-img-4.png" alt='abs' width={450} height={500} />
                        </div>
                        <div className=' w-[50%] max-lg:w-[auto]'>
                            <CustomText
                                subtitle="GET FREE SUPPORT"
                                title="Get The Most Amazing Builder!"
                                description="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            />
                            <div className=' flex max-lg:justify-center'>
                                <button className='flex  items-center gap-1 border-b-4 border-b-[#287B92] bg-[#2DC0E8] hover:bg-[#2F96B2] text-[#fff] text-[20px] max-sm:text-[18px] py-[4px] px-[15px] font-[500] transition rounded-sm mt-4'>
                                    <a href="#" >
                                        <IoDownloadOutline className='text-[20px] font-bold' />
                                    </a>
                                    Get Software
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center  pt-20 max-sm:pt-[20px]'>
                    <ClientsSaid />

                </div>


            </div>
        </>
    )
}

export default FreeSupport
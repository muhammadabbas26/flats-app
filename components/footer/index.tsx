import Image from 'next/image'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className=' h-[auto] bg-[#333333] p-5'>
                <div className=' py-4 flex justify-center  container mx-auto gap-6 flex-wrap p-5 max-md:justify-start'>
                    <div className=' flex flex-col gap-4 p-5'>
                        <Image src="/images/footer-logo-3.png" alt='footer' width={134} height={32} />
                        <p className='text-[#999] text-[14px] leading-[26px]'>Lorem ipsum dolor sit amet consectetur <br/> adipiscing elit sed do eiusmoda tempor <br/> incididunt.</p>
                        <div className='flex gap-4'>
                            <FaFacebookF className='text-[#eee] text-[18px]'/>
                            <FaTwitter className='text-[#eee] text-[18px]'/>
                            <FaInstagramSquare className='text-[#eee] text-[18px]'/>
                        </div>
                    </div>
                    <div className=' p-5 border-l border-[#444444]'>
                        <h1 className='text-[#eee] text-[16px] font-bold'>Navigation</h1>
                        <ul className='my-[20px] cursor-pointer'>
                            <li className='text-[#999] text-[16px] font-bold my-[8px] '>Home</li>
                            <li className='text-[#999] text-[16px] font-bold my-[8px] '>Overview</li>
                            <li className='text-[#999] text-[16px] font-bold my-[8px] '>About</li>
                            <li className='text-[#999] text-[16px] font-bold my-[8px] '>Buy Now</li>
                            <li className='text-[#999] text-[16px] font-bold my-[8px] '>Support</li>
                        </ul>
                    </div>
                    <div className=' p-5 border-l border-[#444444]'>
                        <h2 className='text-[30px] text-[#ccc] font-bold'>347 567 78 90</h2>
                        <span className='text-[14px] text-[#aaa] font-medium mb-[15px]  inline-block'>AVAILABLE FROM 12PM - 18PM</span>
                        <h3 className='text-[18px] text-[#ccc] font-bold'>New York, NY</h3>
                        <p className='text-[14px] text-[#999] font-normal leading-[26px]'>560 Judah St & 15th Ave, Apt 5 <br/> San Francisco, CA, 230903</p>

                    </div>
                    <div className=' p-5 border-l border-[#444444]'>
                        <h1 className='text-[#eee] text-[16px] font-bold'>Info</h1>
                        <p className='text-[14px] text-[#999] font-normal leading-[26px]'>Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit sed do <br/> eiusmod tempor incididunt Lorem <br/> ipsum dolor sit amet consectetur <br/> adipiscing elit sed.</p>
                    </div>

                </div>


            </div>
        </>

    )
}

export default Footer
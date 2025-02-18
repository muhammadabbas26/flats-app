import CustomSaids from '@/common/custom-saids';
import Image from 'next/image';
import React from 'react'
import { TbQuote } from "react-icons/tb";

const ClientsSaid = () => {
    const clientData = [
        {
            image: "/images/t1.png",
            text: "Lorem ipsum dolor sit amet consectet adipiscing elit sed do eiusmoda tempo incididunt ut labore et dolore magnar aliqua Ut enim ad voluptate velit esse.",
            name: "Mark Smith",
        },
        {
            image: "/images/t2.png",
            text: "Lorem ipsum dolor sit amet consectet adipiscing elit sed do eiusmoda tempo incididunt ut labore et dolore magnar aliqua Ut enim ad voluptate velit esse.",
            name: "John Due",
        },
        {
            image: "/images/t3.png",
            text: "Lorem ipsum dolor sit amet consectet adipiscing elit sed do eiusmoda tempo incididunt ut labore et dolore magnar aliqua Ut enim ad voluptate velit esse.",
            name: "Sara Clark",
        },
    ]
    return (
        <>
            <div className=' w-[65%]  max-lg:w-[auto]'>
                <div className=' flex flex-col justify-center items-center py-4 max-sm:py-[0px]'>
                    <TbQuote className='border-2 border-[#2F9AB7] rounded-[50%]  text-[#2F9AB7] w-12 h-12 ' />
                    <h1 className='text-[#fff] text-[50px] font-bold leading-none pt-5 max-sm:text-[20px]'>What Clients Said</h1>
                    <p className='text-[#999999] text-[16px] font-normal py-2 text-center max-sm:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua Ut enim ad voluptate velit esse cillum dolore eu fugiat.</p>

                </div>
                <div className=' flex justify-center  py-10 gap-10 flex-wrap '  >
                    {clientData.map((client, index) => (
                        <div key={index}  className=' w-[300px]  max-sm:text-center max-sm:w-[auto] '>
                            <CustomSaids
                                image={client.image}
                                text={client.text}
                                name={client.name}
                            />
                        </div>

                    ))}
                </div>



            </div>
        </>
    )
}

export default ClientsSaid
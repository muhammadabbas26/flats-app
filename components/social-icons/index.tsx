import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { SiCircuitverse } from "react-icons/si";


const SocialIcons = () => {
    return (
        <>
            <div className=' h-[auto] bg-[#282828] py-20'>
                <div className=' py-2 flex justify-center items-center gap-[100px] flex-wrap'>
                    <div className=' w-[120px] h-[120px] bg-[#3b5998] rounded-[5px] hover:bg-[#354A77] transition-all cursor-pointer flex justify-center items-center'>
                        <GrFacebookOption  className='text-[#fff] w-[48px] h-[48px]'/>
                    </div>
                    <div className=' w-[120px] h-[120px] bg-[#55acee] rounded-[5px] hover:bg-[#4885B3] transition-all cursor-pointer flex justify-center items-center'>
                        <FaTwitter   className='text-[#fff] w-[48px] h-[48px]'/>
                    </div>
                    <div className=' w-[120px] h-[120px] bg-[#dd4b39] rounded-[5px] hover:bg-[#A74134] transition-all cursor-pointer flex justify-center items-center'>
                        <TfiGoogle  className='text-[#fff] w-[48px] h-[48px]'/>
                    </div>
                    <div className=' w-[120px] h-[120px] bg-[#ea4c89] rounded-[5px] hover:bg-[#B0416C] transition-all cursor-pointer flex justify-center items-center'>
                        <SiCircuitverse  className='text-[#fff] w-[48px] h-[48px]'/>
                    </div>


                </div>

            </div>
        </>
    )
}

export default SocialIcons
import Image from 'next/image'
import React from 'react'

interface CustomSaidProps{
    image: string; 
    text: string;  
    name: string;
}

const CustomSaids: React.FC<CustomSaidProps> = ({image ,text , name}) => {
    return (
        <>
            <div className='max-sm:flex flex-col justify-center items-center '>
                <Image src={image} alt='image' width={80} height={80} className='border-2 border-[#999999] rounded-[50%]' />
                <p className='text-[#999999] text-[16px] font-normal py-2 max-sm:text-[14px]'>{text}.</p>
                <h1 className='text-[#fff] text-[16px] font-bold leading-none py-2'>{name}</h1>
            </div>
        </>
    )
}

export default CustomSaids
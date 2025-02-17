import React from 'react';

interface CustomTextProps {
    subtitle: string;
    title: string;
    description: string;
}

const CustomText: React.FC<CustomTextProps> = ({ subtitle, title, description }) => {
    return (
        <div>
            <h3 style={{color:"#2DC0E8"}} className='text-[#2DC0E8] text-[20px] font-bold'>{subtitle}</h3>
            <h1 className='text-[#fff] text-[40px] font-bold leading-none py-2'>{title}</h1>
            <p className='text-[#999999] text-[16px] font-normal py-2'>{description}</p>
        </div>
    );
}

export default CustomText;
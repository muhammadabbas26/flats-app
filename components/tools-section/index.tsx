import React from 'react'
import { MdOutlineOndemandVideo, MdOutlineVideoLibrary, MdOutlineVideoCall, MdOutlineVideoStable, MdOutlineVideoSettings } from "react-icons/md";

const ToolsSection = () => {
    const videoSupports = [
        {
            icon: <MdOutlineOndemandVideo className='color-[#2B89A2] text-[#2B89A2] w-32 h-32 p-0 m-0' />,
            title: 'Video Support 1',
            description: 'Seamlessly empower fully researched growth strategies and interoperable internal.'
        },
        {
            icon: <MdOutlineVideoLibrary className='color-[#2B89A2] text-[#2B89A2] w-32 h-32 p-0 m-0' />,
            title: 'Video Support 2',
            description: 'Seamlessly empower fully researched growth strategies and interoperable internal.'
        },
        {
            icon: <MdOutlineVideoCall className='color-[#2B89A2] text-[#2B89A2] w-32 h-32 p-0 m-0' />,
            title: 'Video Support 3',
            description: 'Seamlessly empower fully researched growth strategies and interoperable internal.'
        },
        {
            icon: <MdOutlineVideoSettings className='color-[#2B89A2] text-[#2B89A2] w-32 h-32 p-0 m-0' />,
            title: 'Video Support 4',
            description: 'Seamlessly empower fully researched growth strategies and interoperable internal.'
        },

    ];
    return (
        <>
            <div className=' py-10  bg-[#282828] flex justify-center'>
                <div className=' flex justify-center items-center gap-6 w-[65%]  flex-wrap'>
                    {videoSupports.map((item, index) => {
                        return (
                            <div key={index} className=' py-5 flex flex-col justify-center items-center gap-4  w-[250px] '>
                                <div>
                                    {item.icon}
                                </div>
                                <div className=' text-center'>
                                    <h1 className='text-[#fff] text-[18px] font-bold'>{item.title}</h1>
                                    <p className='text-[#999999] font-light text-[16px]'>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default ToolsSection
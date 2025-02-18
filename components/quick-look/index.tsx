import Image from 'next/image'
import React from 'react'

const QuickLooks = () => {
    const brandName = [
        { image: "/images/theguardian.png" },
        { image: "/images/taskrabbit.png" },
        { image: "/images/popsugar.png" },
        { image: "/images/bigcommerce.png" },
        { image: "/images/foursquare.png" },
        { image: "/images/squarespace.png" },
    ]
    return (
        <>
            <div className='bg-[#282828]  py-10 px-5 flex flex-col justify-center items-center'>
                <div className=' text-center'>
                    <h1 className='text-[30px] text-[#fff] font-bold max-sm:text-[25px]'>Take a Quick Look</h1>
                    <p className='text-[16px] text-[#ADBBBB] font-bold max-sm:text-[14px]'>The Best Companies Which Trust Our Digital Goods</p>
                </div>
                <div className=' flex justify-center flex-wrap py-8 items-center  w-[80%] max-sm:w-[100%]'>
                    {brandName.map((item, index) => {
                        return (
                            <div key={index} className='  w-[350px] m-8 flex justify-center  py-2 max-sm:m-4'>
                                <Image src={item.image} alt='image' width={200} height={100} />
                            </div>
                        )

                    })}

                </div>

            </div>
        </>
    )
}

export default QuickLooks
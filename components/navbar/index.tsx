// import Image from "next/image";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//     return (
//         <nav className=" bg-[#444444] py-4">
//             <div className="flex justify-evenly">
//                 <div>
//                     <Image src="/images/logo-dark.png" alt="Logo" width={120} height={40} />
//                 </div>
//                 <div className="flex items-center  gap-10">
//                     <div className="flex gap-4">
//                         <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700] ">Features</a>
//                         <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700]">Testimonials</a>
//                         <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700]">Download</a>
//                     </div>
//                     <div className="flex gap-4">
//                         <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaFacebookF /></a>
//                         <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaTwitter /></a>
//                         <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaInstagram /></a>
//                     </div>
//                 </div>


//             </div>
//         </nav>
//     );
// };

// export default Navbar;


"use client"; 

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#444444] py-4">
            <div className="flex justify-evenly px-4  max-md:justify-between max-md:items-center">
                <div>
                    <Image src="/images/logo-dark.png" alt="Logo" width={120} height={40} />
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex gap-4">
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700]">Features</a>
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700]">Testimonials</a>
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700]">Download</a>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaFacebookF /></a>
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaTwitter /></a>
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaInstagram /></a>
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleSidebar} className="text-[#fff]">
                        <FaBars />
                    </button>
                </div>
            </div>

            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-[#444444] w-2/4 h-full p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex justify-between items-center">
                        <div>
                            <Image src="/images/logo-dark.png" alt="Logo" width={120} height={40} />
                        </div>
                        <button onClick={toggleSidebar} className="text-[#fff]">
                            <FaTimes />
                        </button>
                    </div>
                    <div className="flex flex-col mt-4">
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700] mb-4">Features</a>
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700] mb-4">Testimonials</a>
                        <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px] font-[700] mb-4">Download</a>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaFacebookF /></a>
                            <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaTwitter /></a>
                            <a href="#" className="text-[#fff] hover:text-[#969696] text-[14px]"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
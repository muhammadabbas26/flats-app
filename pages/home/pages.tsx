import Footer from '@/components/footer'
import FreeSupport from '@/components/free-supports'
import HeroSection from '@/components/hero-section'
import Navbar from '@/components/navbar'
import QuickLooks from '@/components/quick-look'
import SocialIcons from '@/components/social-icons'
import Themeforest from '@/components/theme-forest'
import ToolsSection from '@/components/tools-section'
import React from 'react'

const HomePages = () => {
  return (
    <>
    {/* <Navbar/> */}
    <HeroSection/>
    <ToolsSection/>
    <FreeSupport/>
    <QuickLooks/>
    <Themeforest/>
    <SocialIcons/>
    <Footer/>
    </>
  )
}

export default HomePages
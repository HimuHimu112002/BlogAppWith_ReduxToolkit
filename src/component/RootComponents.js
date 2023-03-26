import React from 'react'
import BlogItemProps from './BlogItemProps'
import Footer from './Footer'
import NavMenu from './NavMenu'
import Slider from './Slider'
import ScrollToTop from "react-scroll-to-top";
import CountSection from './CountSection'

const RootComponents = () => {
  return (
    <div>
      <ScrollToTop smooth/>
      <NavMenu></NavMenu>
      <Slider></Slider>
      <BlogItemProps></BlogItemProps>
      <CountSection></CountSection>
      <Footer></Footer>
    </div>
  )
}

export default RootComponents
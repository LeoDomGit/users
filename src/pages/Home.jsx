import React from 'react'
import Subheader from '../components/Subheader'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Courses from '../components/Courses'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
        <Subheader/>
        <Header/>
        <Carousel/>
        <Slider/>
        <Courses/>
        <Contact/>
    </>
  )
}

export default Home
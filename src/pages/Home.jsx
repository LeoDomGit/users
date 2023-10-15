import React from 'react'
import Subheader from '../components/Subheader'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Courses from '../components/Courses'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <>
        <Subheader/>
        <Header/>
        <Carousel/>
        <Slider/>
        <Courses/>
    </>
  )
}

export default Home
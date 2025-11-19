import React from 'react'
import Hero from './homeComponents/Hero'
import About from './homeComponents/About'
import Categorys from './homeComponents/Categorys'
import Course from './homeComponents/Course'
import Choose from './homeComponents/Choose'

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Categorys></Categorys>
      <Choose></Choose>
      <Course></Course>
    </div>
  )
}

export default page
import React from 'react'
import About from '../homeComponents/About'
import Counter from '../homeComponents/Counter'
import Instructor from '../homeComponents/Instructor'
import News from '../homeComponents/News'

const page = () => {
  return (
    <div className=''>
        <div className=''>
            <About/>
            <Counter/>
            <div className='pt-24'>
                <Instructor/>
            </div>
            <News/>
        </div>
    </div>
  )
}

export default page
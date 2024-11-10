import React from 'react'
import About_Institute from '../../../Jenil/Components/About_Institute'
import About_Director from '../../../Jenil/Components/About_Director'
import Footer from '../../../Samarth/Components/Footer'
import Initialheader from '../../../Jenil/Components/Initialheader'

const page = () => {
  return (
    <div className='h-fit flex flex-col overflow-x-hidden overflow-y-hidden'>
      <Initialheader/>
        <About_Institute/>
        <About_Director/>
        <Footer/>
      
    </div>
  )
}

export default page

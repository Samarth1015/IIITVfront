'use client'
import React, { useState } from 'react'
import About_Institute from '../../../Jenil/Components/About_Institute'
import About_Director from '../../../Jenil/Components/About_Director'
import Footer from '../../../Samarth/Components/Footer'
import Initialheader from '../../../Jenil/Components/Initialheader'
import DropDownCompo from '../../../Jenil/Components/DropDownCompo'


const Page = () => {
  const [menu , setMenu ] = useState(false)

  return (
   <> <div className={`flex flex-col overflow-x-hidden overflow-y-hidden ${menu ? "hidden" : ""}`}>
      
      <Initialheader setMenu={setMenu} /> {/* Pass setMenu as prop to components */}
      <About_Institute />
      <About_Director />
      <Footer />
    </div>
    <div
        className={`flex flex-col overflow-x-hidden overflow-y-hidden ${
          !menu ? "hidden" : ""
        }`}>
        {menu && <DropDownCompo  setMenu={setMenu}/>}
      </div>
    </>
  )
}

export default Page

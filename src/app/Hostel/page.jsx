'use client'
import React, { useState } from 'react'
import Initialheader from '../../../Jenil/Components/Initialheader'
import HostelPage from '../../../Jenil/Components/HostelPage'
import Hostelpage2 from '../../../Jenil/Components/Hostelpage2'
import HostelFooter from '../../../Jenil/Components/HostelFooter'
import Footer from '../../../Samarth/Components/Footer'
import DropDownCompo from '../../../Jenil/Components/DropDownCompo'

const page = () => {
    const [menu , setMenu ] = useState(false)
  return (
    <>
      <div className={`flex flex-col overflow-x-hidden overflow-y-hidden ${menu ? "hidden" : ""}`}>
      <Initialheader setMenu={setMenu}/>
      <HostelPage/>
      <Hostelpage2/>
      <HostelFooter/>
      <Footer/>
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

export default page

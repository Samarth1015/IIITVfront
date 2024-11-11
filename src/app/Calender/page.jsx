'use client'
import React from 'react'
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import { useState } from "react";
import Initialheader from '../../../Jenil/Components/Initialheader';
import Calender from '../../../Jenil/Components/Calender';
import Footer from '../../../Samarth/Components/Footer';

const page = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={`flex flex-col overflow-x-hidden overflow-y-hidden ${menu ? "hidden" : ""}`}>
      <Initialheader setMenu={setMenu}/>
      <Calender/>
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

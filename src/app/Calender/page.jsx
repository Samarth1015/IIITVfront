'use client'
import React from 'react'
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import { useState } from "react";
import Initialheader from '../../../Jenil/Components/Initialheader';

const page = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={`flex flex-col overflow-x-hidden overflow-y-hidden ${menu ? "hidden" : ""}`}>
      <Initialheader setMenu={setMenu}/>
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

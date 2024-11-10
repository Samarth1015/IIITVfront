"use client";
import React from "react";
import Initialheader from "../../../Jenil/Components/Initialheader";
import Programms from "../../../Jenil/Components/Programms";
import Footer from "../../../Samarth/Components/Footer";
import { useState } from "react";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
const page = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className={`flex flex-col overflow-x-hidden overflow-y-hidden ${menu ? "hidden" : ""}`}>
        <Initialheader setMenu={setMenu} />
        <Programms />
        <Footer />
      </div>
      <div
        className={`flex flex-col overflow-x-hidden overflow-y-hidden ${
          !menu ? "hidden" : ""
        }`}>
        {menu && <DropDownCompo  setMenu={setMenu}/>}
      </div>
    </>
  );
};

export default page;

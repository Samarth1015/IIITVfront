"use client";
import { useState } from "react";
import Initialheader from "../../../Jenil/Components/Initialheader";
import SecondHeader from "../../../Jenil/Components/SecondHeader";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import Footer from "../../../Samarth/Components/Footer";
import Seat from "../../../Samarth/Components/Seat";

export default function Admission() {
  const [menu , setMenu] = useState(false)
  return (
    <> <div  className={`flex flex-col overflow-x-hidden overflow-y-hidden ${menu ? "hidden" : ""}`}>
      <Initialheader setMenu={setMenu} />
      {!menu ? undefined : <DropDownCompo setMenu={setMenu} />}
      <Seat></Seat>

      <Footer />
    </div> <div
        className={`flex flex-col overflow-x-hidden overflow-y-hidden ${
          !menu ? "hidden" : ""
        }`}>
        {menu && <DropDownCompo  setMenu={setMenu}/>}
      </div> </>
  );
}

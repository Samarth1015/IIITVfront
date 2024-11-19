"use client";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import Initialheader from "../../../Jenil/Components/Initialheader";
import Footer from "../../../Samarth/Components/Footer";
import Graph from "../../../Samarth/Components/Graph";
import { useState } from "react";
export default function Stats() {
  const [menu, setMenu] = useState(false);

  return (
    <>
    
        <div>
          <Initialheader setMenu={setMenu}></Initialheader>
          <Graph></Graph>

          <Footer></Footer>
        </div>
      
  </>
  );
}

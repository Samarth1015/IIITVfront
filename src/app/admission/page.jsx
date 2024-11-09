"use client";
import { useState } from "react";
import Initialheader from "../../../Jenil/Components/Initialheader";
import SecondHeader from "../../../Jenil/Components/SecondHeader";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import Footer from "../../../Samarth/Components/Footer";
import Seat from "../../../Samarth/Components/Seat";

export default function Admission() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <Initialheader setMenu={setMenu} />
      {!menu ? undefined : <DropDownCompo setMenu={setMenu} />}
      <Seat></Seat>

      <Footer />
    </div>
  );
}

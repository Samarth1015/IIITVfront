"use client";
import { useState } from "react";
import Initialheader from "../../../Jenil/Components/Initialheader";
import Footer from "../../../Samarth/Components/Footer";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import All from "../../../Samarth/Components/All";

export default function Announcement() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <Initialheader setMenu={setMenu} />
      <All></All>

      <Footer />
      <div
        className={`flex flex-col overflow-x-hidden overflow-y-hidden ${
          !menu ? "hidden" : ""
        }`}
      >
        {menu && <DropDownCompo setMenu={setMenu} />}
      </div>
    </div>
  );
}

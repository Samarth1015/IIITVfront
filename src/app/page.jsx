"use client";

import Image from "next/image";
import Initialheader from "../../Jenil/Components/Initialheader";
import SecondHeader from "../../Jenil/Components/SecondHeader";
import MainContent1 from "../../Jenil/Components/MainContent1";
import dynamic from "next/dynamic";
import Animate from "../../Samarth/Components/Animate";
import Footer from "../../Samarth/Components/Footer";
import DropDownCompo from "../../Jenil/Components/DropDownCompo";
import { useState, useEffect } from "react";

const ExtraPage = dynamic(() => import("../../Jenil/Components/ExtraPage"), {
  ssr: false,
});

export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <div
   
      className="flex flex-col overflow-x-hidden overflow-y-hidden"
    >
     
        <>
          <Initialheader setMenu={setMenu} />
          <SecondHeader />
          <Animate />
          <MainContent1 />
          <ExtraPage />
          <Footer />
        </>

        {!menu ?  undefined : <DropDownCompo setMenu={setMenu} />
      }
    </div>
  );
}

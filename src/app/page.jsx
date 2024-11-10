"use client";

import Initialheader from "../../Jenil/Components/Initialheader";
import SecondHeader from "../../Jenil/Components/SecondHeader";
import MainContent1 from "../../Jenil/Components/MainContent1";
import dynamic from "next/dynamic";
import Animate from "../../Samarth/Components/Animate";
import Footer from "../../Samarth/Components/Footer";
import DropDownCompo from "../../Jenil/Components/DropDownCompo";
import { useState } from "react";

const ExtraPage = dynamic(() => import("../../Jenil/Components/ExtraPage"), {
  ssr: false,
});

export default function Home({ Component, pageProps }) {
  const [menu, setMenu] = useState(false);

  return (
<>
<div className={`flex flex-col overflow-x-hidden overflow-y-hidden ${menu?"hidden":""}`}>
      <>
        <Initialheader setMenu={setMenu} />
        <SecondHeader menu={menu} setMenu={setMenu} /> {/* Pass menu as a prop */}
        <Animate />
        <MainContent1 menu={menu} />
        <ExtraPage />
        <Footer />
      </>
    </div>
<div className={`flex flex-col overflow-x-hidden overflow-y-hidden  ${!menu?"hidden":""} `}>

     {menu && <DropDownCompo setMenu={setMenu} />}
     </div>
</>
  );
}

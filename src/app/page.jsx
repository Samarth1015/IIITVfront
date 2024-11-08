import Image from "next/image";
import Initialheader from "../../Jenil/Components/Initialheader";
import SecondHeader from "../../Jenil/Components/SecondHeader";
import MainContent1 from "../../Jenil/Components/MainContent1";
import Animate from "../../Samarth/Components/Animate";
import ExtraPage from "../../Jenil/Components/ExtraPage";

export default function Home() {
  return (
    <>
    
      <div className=" flex flex-col overflow-x-hidden overflow-y-hidden">
        <Initialheader />
        <SecondHeader />
        {/* <Animate /> */}
        <MainContent1 />
        <ExtraPage/>
      </div>
    </>
  );
}

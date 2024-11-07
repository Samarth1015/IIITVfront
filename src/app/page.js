import Image from "next/image";
import Initialheader from "../../Jenil/Components/Initialheader";
import SecondHeader from "../../Jenil/Components/SecondHeader";

export default function Home() {
  return (
    <div className="w-screen h-fit  flex flex-col overflow-x-hidden">
    <Initialheader/>
    <SecondHeader/>
  </div>
  );
}

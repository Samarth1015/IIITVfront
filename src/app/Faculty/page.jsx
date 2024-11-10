"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faculty from "../../../Jenil/Components/Faculty";
import Footer from "../../../Samarth/Components/Footer";
import Initialheader from "../../../Jenil/Components/Initialheader";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".faculty-card");

    gsap.from(cards, {
      opacity: 0,
      y: 100,
      duration: 3,
      stagger: 0.4,
      scrollTrigger: {
        trigger: cards,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        once: true,
      },
    });
  }, []);
const [menu , setMenu] = useState(false)
  return (<>
    <div className={`flex bg-gradient-to-b from-[#001a3f] to-[#4230bb] w-full flex-col overflow-x-hidden overflow-y-hidden ${menu ? "hidden" : ""}`}>
      <Initialheader setMenu={setMenu}/>
      <div className="w-full h-32 flex flex-col justify-center ">
        <h1 className="self-center font-bold text-4xl text-white">
          Our Faculty
        </h1>
        <div className="w-48 rounded-2xl mt-2 bg-yellow-300 h-1 self-center"></div>
      </div>
      <div className="w-full h-fit py-10 flex flex-col justify-start">
        <div className="flex flex-col md:flex-row py-5 justify-evenly">
          <Faculty
            imgurl={"/ps.jpg"}
            name={"Pratik Shah"}
            degree={`Ph.D. (Computer Vision)\nDA-IICT, Gandhinagar.`}
            li1={"Artificial Intelligence"}
            li2={"Geometry Processing"}
            li3={"Natural Language Processing"}
          />
          <Faculty
            imgurl={"/pm.jpg"}
            name={"Pramit Mazumdar"}
            degree={`PhD (Computer Science & Engineering): NIT, Rourkela
`}
            li1={"Multimedia Signal Processing (360-degree, Point Cloud), Extended "}
            li2={"Reality (VR, AR, MR), Visual Quality Assessment, Conversational "}
            li3={"Recommender Systems,Autism Spectrum Disorder"}
          />
          <Faculty
            imgurl={"/bk.jpg"}
            name={"Bhupendra Kumar"}
            degree={`Ph.D. (Wireless Communication)\nIIT, Delhi`}
            li1={"Cooperative Communication"}
            li2={"Cognitive Radio"}
            li3={"Queuing theory, Optimization"}
          />
        </div>
        <div className="flex flex-col md:flex-row py-5 justify-evenly">
          <Faculty
            imgurl={"/jb.jpg"}
            name={"Jignesh S. Bhatt"}
            degree={`Ph.D. (Information and Communication Technology)\nDA-IICT, Gandhinagar`}
            li1={"Signal and Image Processing"}
            li2={"Remote Sensing"}
            li3={"Inverse problems in Imaging, Machine Learning, Computer Vision"}
          />
          <Faculty
            imgurl={"/kkj.jpg"}
            name={"Kamal Kishor Jha"}
            degree={`Ph.D. (VLSI Design)\nIndian Institute of Information Technology and Management, Gwalior`}
            li1={"Nanoelectronics"}
            li2={"VLSI Design"}
            li3={"Embedded Systems for IoT"}
          />
          <Faculty
            imgurl={"/sd.jpg"}
            name={"Sunandita Debnath"}
            degree={`Ph.D. (Wireless Sensor Networks)\nNIT, Silchar`}
            li1={"Wireless Sensor Networks"}
            li2={"Wireless Communication Networks"}
            li3={"Sensing Channel Modelling, Underwater Wireless Sensor Networks"}
          />
        </div>
        <div className="flex flex-col md:flex-row py-5 justify-evenly">
          <Faculty
            imgurl={"/an.jpg"}
            name={"Ajay Nath"}
            degree={`Ph.D. (Physics)\nIIT Patna`}
            li1={"Quantum Simulation with Ultracold Atoms"}
            li2={"Optical Lattices"}
            li3={"Solitons"}
          />
          <Faculty
            imgurl={"/ac.jpg"}
            name={"Arnali Chetia"}
            degree={`Ph.D. (Linguistics)\nJNU, New Delhi`}
            li1={"Applied Linguistics"}
            li2={"Sociolinguistics"}
            li3={"Second Language Acquisition, ELT, Discourse Analysis, Gender Studies"}
          />
          <Faculty
            imgurl={"/ds.jpg"}
            name={"Dhirendra Sinha"}
            degree={`Ph.D. (Physics)\nIIT Kanpur`}
            li1={"Condensed Matter Physics"}
            li2={"Electronic and Excitonic Processes"}
            li3={"Optoelectronic Devices"}
          />
        </div>
        <div className="flex flex-col md:flex-row py-5 justify-evenly">
          <Faculty
            imgurl={"/dr.jpg"}
            name={"Dibyendu Roy"}
            degree={`Ph.D. (Mathematics)\nIIT Kharagpur`}
            li1={"Cryptology"}
            li2={"Design Analysis of Boolean Function"}
          />
          <Faculty
            imgurl={"/sl.jpg"}
            name={"Swapnil A. Lokhande"}
            degree={`Ph.D. (Mathematics)\nIIT Bombay`}
            li1={"Commutative Algebra"}
          />
          <Faculty
            imgurl={"/nk.png"}
            name={"Naveen Kumar"}
            degree={`PhD (Computer Science): DA-IICT Gandhinagar
MTech (IT): GGSIPU Delhi
`}
            li1={"Information security and privacy, Cloud computing"}
       
          />
        </div>
      </div>
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

export default Page;

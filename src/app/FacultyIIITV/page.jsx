"use client";
import { useEffect, useState } from "react";
import Initialheader from "../../../Jenil/Components/Initialheader";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import FacultyProfile from "../../../Jenil/Components/FacultyIIITV/FacultyProfile";
import { Suspense } from "react";

import FacultyProfile2 from "../../../Jenil/Components/FacultyIIITV/FacultyProfile2";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
function FacultyPage(){
  const [routerLoaded, setRouterLoaded] = useState(false); // Track if router is ready
  const [facultyData, setFacultyData] = useState(null);
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const [name, setName] = useState("");
  const searchParams = useSearchParams();
  // Ensure the router is loaded before accessing query parameters
  useEffect(() => {
    if (router.isReady) {
      setRouterLoaded(true); // Router is loaded
    }
  }, [router.isReady]);

  useEffect(() => {
    const name = searchParams.get("data");
    if (name) {
      console.log(name);
      setName(name);
    }
  }, [searchParams]); // Only run this when searchParams changes
  
  useEffect(() => {
    if (!name) return; // Only fetch data if a name exists
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        if (data[name]) {
          setFacultyData(data[name]);
        }
      })
      .catch((error) => console.error("Error fetching faculty data:", error));
  }, [name]);
  return (
    <>
      <div
        className={`flex flex-col overflow-x-hidden overflow-y-hidden ${
          menu ? "hidden" : ""
        }`}>
        <Initialheader setMenu={setMenu} />
        {facultyData && (
          <>
            <FacultyProfile
              imgUrl={facultyData.image}
              name={facultyData.name}
              position={facultyData.position}
              academicQualifications={facultyData.academicQualifications}
              contact={facultyData.contact}
            />
            <FacultyProfile2
              researchInterest={facultyData.researchInterest}
              workExperience={facultyData.workExperience}
              coursesTeaching={
                facultyData.coursesTeaching
                  ? facultyData.coursesTeaching
                  : [
                      {
                        level: "Coming Soon",
                        course: ")",
                      },
                    ]
              }
            />
          </>
        )}
      </div>
      <div
        className={`flex flex-col overflow-x-hidden overflow-y-hidden ${
          !menu ? "hidden" : ""
        }`}>
        {menu && <DropDownCompo setMenu={setMenu} />}
      </div>
    </>
  );
}
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FacultyPage />
    </Suspense>
  );
}
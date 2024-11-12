"use client";
import { createContext, useState } from "react";
import Initialheader from "../../../Jenil/Components/Initialheader";
import Footer from "../../../Samarth/Components/Footer";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import All from "../../../Samarth/Components/All";
const AppContext = createContext();

export function useMenuContext() {
  return useContext(AppContext);
}
export default function Announcement() {
  const [menu, setMenu] = useState(false);
  return (
    <AppContext.Provider value={{ menu, setMenu }}>
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
    </AppContext.Provider>
  );
}

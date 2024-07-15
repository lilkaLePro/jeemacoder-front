"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import iconRed from "../../assets/img/3692685.jpg";
import Jeem from "../logojeemacode";

const Sidebar = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [chevron, setChevron] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
    setChevron((prevChange) => !prevChange);
  };

  return (
    <div className="fixed flex flex-col  top-0 left-0 z-40 w-64 h-full bg-gray-800 border-r border-gray-600">
      <div className="flex items-center justify-center h-14 border-b border-black">
        <div className="flex items-center gap-3">
        <div className="text-center mb-4">
        <div className="flex justify-center">
          <span>
            <Jeem className="text-red-500" title="<" />
            <Jeem className="" title="/>" />
          </span>
        </div>
        <div className="flex justify-center">
          <Jeem className="text-red-500" title="Jeema" />
          <Jeem className="" title="Coder" />
        </div>
      </div>
          <div className="relative flex gap-3 ml-2">
            <button
              onClick={toggleSidebar}
              className="relative left-4 bg-none border-none sm:left-6 md:hidden"
            >
              <FontAwesomeIcon
                icon={chevron ? faChevronLeft : faChevronRight}
                size="2x"
                color={chevron ? "white" : "black"}
                style={{ marginLeft: chevron ? "0" : "1rem" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={`overflow-y-auto overflow-x-hidden flex-grow ${isSidebarActive ? "left-0 w-56" : "left-[-190px] w-48"} transition-all duration-400`}>
        <ul className="flex flex-col list-none py-4 px-0">
          <li className="text-azure flex flex-row items-center p-3">Principale</li>
          <li className="w-full hover:bg-gray-200">
            <Link href="/dashboard" className="relative text-decoration-none flex items-center gap-3 h-12 transition-all duration-300 text-gray-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-48 p-3">
              <FontAwesomeIcon icon={faHome} size="1x" />
              Dashboard
            </Link>
          </li>
          <li className="w-full hover:bg-gray-200">
            <Link href="/cardHotel" className="relative text-decoration-none flex items-center gap-3 h-12 transition-all duration-300 text-gray-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-48 p-3">
              <FontAwesomeIcon icon={faHome} size="1x" />
              Overview
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-1 mt-96 border-t border-white p-2">
          <div className="w-10 h-10 rounded-full bg-cover"
        //    style={{ backgroundImage: `url(${ProfileAdmin.src})` }}
            />
          <div className="text-white font-light">
            Mamadou Badiane <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-green-500" /> en ligne</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

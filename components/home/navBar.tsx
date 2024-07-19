"use client"
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {  usePathname } from "next/navigation";
import { linkData } from "@/app/utils/placeholder-data";
import { ListItem } from "../regular_list";
import { NavLinks } from "./navLinks";

  

export const NavBar = () => {
    const pathName = usePathname()
  
    return (<nav className="h-24  flex justify-around items-center max-md:hidden ">
      <div>
        {/* <h1 className="font-semibold">JEMACODER</h1> */}
        <div><Image src="/jemacoderLogo.png" width={100} height={20} alt="logo jemacoder" className="rounded-md" /> </div>
      </div>
      <div>
        <ListItem
          items={linkData}
          resourcename="links"
          component={NavLinks}
          className="flex"
        />
      </div>
      <div className="flex gap-5">
        <Link href="/listhackathons" className="font-semibold text-white border px-4 rounded-md py-1">
          Rejoindre un hackaton
        </Link>
      </div>
    </nav>
      
  )
}
  

"use client"
import { DashboardIcon, ListBulletIcon, ViewGridIcon } from "@radix-ui/react-icons"
import { NavList } from "../regular_list"
import { NavLinks } from "./navLinks"
import { Profil } from "./profil"
interface LinkData{
    name : string,
    href : string ,
    icone : React.ElementType
}
const linkData: LinkData[] = [
    {name : "Dashboard" , href : '/dashboard' , icone : DashboardIcon},
    {name : "Overview/stat" , href : '/' , icone : ViewGridIcon },
    {name : "Mes Hackathons" , href : '/' , icone : ListBulletIcon},
]

export const SideBar = () => {
    return (<div className="h-screen max-w-60 flex flex-col justify-between bg-white">
        <div>
            <div className="h-20 w-full border ">

            </div>
            <NavList 
                items={linkData} 
                resourcename="link" 
                navLink={NavLinks} 
            />
        </div>
        <div>
            <Profil />
        </div>
    </div>)
}
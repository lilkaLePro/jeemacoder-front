"use client"
import { ListItem } from "../regular_list"
import { Profil } from "./profil"
import { NavLinks, SmallNavLinks } from "./navLink"
import { LinkData } from "@/app/utils/definitions";
import { ChevronDownIcon, ChevronLeftIcon, DashboardIcon, PieChartIcon, TimerIcon } from "@radix-ui/react-icons";
import { Button } from "../button";
import { NavLink } from "react-router-dom";
import Link from "next/link";
import { link } from "fs";

const dashboardLinkData:LinkData[] = [
    {href : '/dashboard' , link : 'Dashboard' , icon : DashboardIcon },
    {href : '/dashboard/overview' , link : 'Overview' , icon : PieChartIcon },
]
const meshackathon = [
    { href : '/dashboard/mes-hackatons/details' , link : 'Sen Hack'},
    { href : '/dashboard/mes-hackatons/details' , link : 'Dakar Hack'},

]
const links:LinkData[] = [{href : "/dashboard/mes-hackatons" , link : "Projects" , icon : TimerIcon , icon2 : ChevronDownIcon}]

export const SideBar = () => {
    return (<div className="h-full flex flex-col justify-between max-md:hidden sticky">
        <div>
            <div className="h-20 w-full ">

                <Button href="/" types="link" size="small" className="font-semibold border-none ">
                    <ChevronLeftIcon />
                    <p>Home</p>
                </Button>
            </div>

            <div className="">
            <ListItem 
                    items={dashboardLinkData}
                    resourcename="links"
                    component={NavLinks}
                    className="flex flex-col gap-1"
                />
            
            </div>
            <div className="h-40 overflow-hidden">
                <ListItem 
                    items={links}
                    resourcename="links"
                    component={NavLinks}
                    className="flex"
                />
                <div className="flex flex-col gap-1 mt-2">
                    <ListItem 
                        items={meshackathon}
                        resourcename="links"
                        component={SmallNavLinks}
                        className=""
                    />
                </div>
            </div>
        </div>
        <div>
            <Profil />
        </div>
    </div>)
}
// const Hackathon = ({link} : {name}) => {
//     return (
//         <div className="flex">
//             <Link href=""> Jeemacoder 2024 </Link>
//         </div>
//     )
// }
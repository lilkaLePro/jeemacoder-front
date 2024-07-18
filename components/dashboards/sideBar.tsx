"use client"
import { ListItem } from "../regular_list"
import { Profil } from "./profil"
import { NavLinks } from "./navLink"
import { LinkData } from "@/app/utils/definitions";
import { ChevronDownIcon, ChevronLeftIcon, DashboardIcon, PieChartIcon, TimerIcon } from "@radix-ui/react-icons";
import { Button } from "../button";

export const dashboardLinkData:LinkData[] = [
    {href : '/dashboard' , link : 'Dashboard' , icon : DashboardIcon },
    {href : '/dashboard/overview' , link : 'Overview' , icon : PieChartIcon },
    {href : '/dashboard/mes-hackatons' , link : 'Hackathons', icon : TimerIcon , icon2 : ChevronDownIcon}
  ]

export const SideBar = () => {
    return (<div className="h-screen max-w-60 flex flex-col justify-between max-md:hidden sticky">
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
        </div>
        <div>
            <Profil />
        </div>
    </div>)
}
export const NavBar = () => {
    return (
        <>

        </>
    )
}
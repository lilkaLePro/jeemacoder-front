import { dashboardLinkData, linkData } from "@/app/utils/data"
import { ListItem } from "../regular_list"
import { Profil } from "./profil"
import { NavLinks } from "./navLink"

export const SideBar = () => {
    return (<div className="h-screen max-w-60 flex flex-col justify-between bg-white">
        <div>
            <div className="h-20 w-full border ">
              
            </div>
            <div className="border">
            <ListItem 
                    items={dashboardLinkData}
                    resourcename="links"
                    component={NavLinks}
                    className=""
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
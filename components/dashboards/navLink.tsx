"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavLinks = ({links} : {
    links : {
        link : string , 
        href : string , 
        icon ?: React.ElementType , 
        icon2 : React.ElementType
    }}) => {
    const {link , href , icon : Icon , icon2 : Icon2} = links
    const pathName = usePathname()

    return <ul className="">
                    <li className={clsx("flex gap-6 w-full rounded-lg items-center hover:bg-white font-medium" , 
                    {
                        "bg-white border-muted-foreground border  text-[#FF9700] " : pathName == href})}>
                    <Link href={href} className="text-sm w-full flex p-3 px-4 gap-5 items-center ">
                    
                    {Icon ? <Icon /> : null}
                    
                        {link}
                    
                    </Link>
                    {Icon2 ? <Icon2 className="w-10 h-8 mr-3 hover:border hover:rounded-full hover:bg-muted" /> : null}
                </li>
    </ul>  
}


export const SmallNavLinks = ({links} : {
    links : {
        link : string , 
        href : string , 
        icon ?: React.ElementType , 
        icon2 : React.ElementType
    }}) => {
    const {link , href , icon : Icon , icon2 : Icon2} = links
    const pathName = usePathname()

            return <ul className="">
                    <li className={clsx("flex w-full rounded-lg items-center hover:bg-white font-medium" , 
                    {
                        "bg-white border-muted-foreground border text-[#FF9700] " : pathName == href})}>
                    <Link href={href} className="text-xs font-normal w-full flex px-3 py-1 gap-5 items-center">
                    
                    {Icon ? <Icon /> : null}
                    
                        {link}
                    
                    </Link>
                    {Icon2 ? <Icon2 className="w-10 h-8 mr-3 hover:border hover:rounded-full hover:bg-muted" /> : null}
                </li>
    </ul>  
}

"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"



export const NavLinks = ({link} : {
    link : {
        name : string , 
        href : string , 
        icone : React.ElementType}}) => {
    const {name , href , icone : Icone} = link
    const pathName = usePathname()

    return <ul className="">
                    <li className={clsx("px-5 flex w-full py-2 gap-5 items-center hover:bg-[#F47E11]" , 
                    {"bg-[#F47E11] text-white font-semibold" : pathName == href})}>
                    <Icone />
                    <Link href={href} className="text-xs ">
                        {name}
                    </Link>
                </li>
    </ul>  
}


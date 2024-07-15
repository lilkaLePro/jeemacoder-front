"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"



export const NavLinks = ({links} : {
    links : {
        link : string , 
        href : string , 
        icone ?: React.ElementType}}) => {
    const {link , href , icone : Icone} = links
    const pathName = usePathname()

    return <ul className="">
                    <li className={clsx("px-5 flex w-full py-2 gap-5 items-center hover:bg-[#F47E11]" , 
                    {"bg-[#F47E11] text-white font-semibold" : pathName == href})}>
                    {Icone ? <Icone /> : null}
                    <Link href={href} className="text-xs">
                        {link}
                    </Link>
                </li>
    </ul>  
}


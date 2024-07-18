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

    return (
            <Link href={href} 
                className={clsx("px-5 flex w-full py-1 gap-5 items-center" ,
                    {"bg-white rounded-md font-semibold" : pathName == href})}>
                    {Icone ? <Icone /> : null}
                        {link}
                    </Link>)
}


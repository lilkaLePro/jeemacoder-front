"use client"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const linkData = [
    {href : '/' , link : 'acceuil'},
    {href : '' , link : 'service'},
    {href : '' , link : 'FAQ'}
  ]

export const MobileNav = () => {
    const [ isVisible , setIsVisible ] = useState<string>('hamMenu')
    const toggleMenu = () => {
        if(isVisible == "hamMenu") {
            setIsVisible('hamMenuOn')
        } else {
        setIsVisible('hamMenu')
        }
}

const pathName = usePathname()

return (<div>
        <div  className="flex justify-between bg-white h-14 py-3 items-center px-2 ">
          <h1 className="font-semibold">JEMACODER </h1>
          <button onClick={toggleMenu}>
            <HamburgerMenuIcon className="size-8" />
          </button>
        </div>
        
            {/* <HamburgerMenu /> */}
            <ul className={`${isVisible} border absolute w-full flex flex-col items-center bg-white z-50 overflow-hidden`}>
              <div className="py-5"></div>
        {
          linkData.map((d , i) => (
              <li key={i} className="text-base-blue w-full text-lg flex justify-center">
                <Link className={clsx("font-semibold w-full text-center p-2 rounded-md ", 
                {"bg-base-blue text-white" : pathName === d.href }
                )}
                    href={d.href} >{d.link}
                </Link>
                </li>
          ))
        }
      </ul>
          </div>
    )
}

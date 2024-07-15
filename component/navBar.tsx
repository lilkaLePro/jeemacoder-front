"use client"
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {  usePathname } from "next/navigation";

const linkData = [
    {href : '/' , link : 'acceuil'},
    {href : '' , link : 'service'},
    {href : '' , link : 'FAQ'}
  ]
  

export const NavBar = () => {
    const pathName = usePathname()
  
    return (<nav className="h-24  flex justify-around items-center max-md:hidden ">
      <div>
        {/* <h1 className="font-semibold">JEMACODER</h1> */}
        <div><Image src="/jemacoderLogo.png" width={100} height={20} alt="logo jemacoder" className="rounded-md" /> </div>
      </div>
      <div>
        <ul className="flex gap-10">
          {
            linkData.map((d , i) => (
              <div key={i}>
                <li className="text-white">
                  <Link className={clsx("font-semibold flex items-center px-4 h-7 rounded-md" , 
                  {"bg-white  text-base-blue " : pathName === d.href }
                  )}
                      href={d.href} >{d.link}
                  </Link>
                  </li>
              </div>
            ))
          }
        </ul>
      </div>
      <div className="flex gap-5">
        <Link href="/" className="bg-base-blue text-white px-3 py-1 rounded-md font-semibold">
          Creer un hackaton
        </Link>
        <Link href="/" className="font-semibold text-white border px-4 rounded-md py-1">
          Rejoindre un hackaton
        </Link>
      </div>
    </nav>
      
  )
}
  

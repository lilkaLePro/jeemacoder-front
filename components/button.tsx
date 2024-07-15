import Link from 'next/link'
import React from 'react'

export const Button = ({children , href , className , onClick} : {
  children : React.ReactNode , 
  href : string , 
  className : string , onClick ?: () => void }) => {
  return (
    <Link 
      href={href} 
      className={`${className} py-2 px-6 rounded-full text-sm font-semibold`}
      onClick={onClick}
      >
            {children}
    </Link>
  )
}

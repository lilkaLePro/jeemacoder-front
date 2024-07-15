import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    variant ?: "default" | "rounded" ;
    className ?: string ;
}

export const Button = ({className , 
    variant = "default" ,
    ...props} : ButtonProps) => {
  
    return (
    <button className={clsx(
    {
        "m-auto rounded-md py-2 w-40 bg-dark-green text-white text-sm hover:bg-dark-green-hover" : variant === "default",
        "" : variant === "rounded"
    } , className)} 
    {...props}
    >
        {props.children}
    </button>
  )
}

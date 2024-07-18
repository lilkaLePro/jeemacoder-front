import clsx from 'clsx';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    variant ?: "default" | "rounded" | "danger" | "grounded" ;
    size : "large" | "small"
    className ?: string ;
    types : "button" | "link",
    href ?: string
}

export const Button = ({className , 
    variant = "default" , 
    size, types, href,
    ...props} : ButtonProps) => {
  
    return types === "button" ? (
    <button className={clsx(
    {
        "border rounded-md" : variant === "default",
        "m-auto border rounded-full" : variant === "rounded",
        "px-3 py-1 bg-red-500" : variant === "danger",
        "px-8 py-3" : size === "large", 
        "px-3 py-1 flex gap-3 items-center" : size === "small",
    } , className)} 
    {...props}
    >
        {props.children}
    </button>
  ) : (
    href && <Link href={href} className={clsx(
        {
            "border rounded-md" : variant === "default",
            "border rounded-full" : variant === "rounded",
            "" : variant === "grounded",
            "" : variant === "danger",
            "px-8 py-3" : size === "large", "px-3 py-1 border flex items-center gap-2" : size === "small",
        } , className)} 
        >
        {props.children}
    </Link>
  )
}

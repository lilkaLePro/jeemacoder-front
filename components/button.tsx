import clsx from 'clsx';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    variant ?: "default" | "rounded" | "danger" | "grounded" ;
    size : "large" | "small"
    className ?: string ;
    types : "button" | "link",
    href : string
}

export const Button = ({className , 
    variant = "default" , 
    size, types, href,
    ...props} : ButtonProps) => {
  
    return types === "button" ? (
    <button className={clsx(
    {
        "m-auto border rounded-md" : variant === "default",
        "m-auto border rounded-full" : variant === "rounded",
        "px-3 py-1" : variant === "danger",
        "px-8 py-3" : size === "large", "" : size === "small",
    } , className)} 
    {...props}
    >
        {props.children}
    </button>
  ) : (
    <Link href={href} className={clsx(
        {
            "border rounded-md" : variant === "default",
            "border rounded-full" : variant === "rounded",
            "" : variant === "grounded",
            "" : variant === "danger",
            "px-8 py-3" : size === "large", "px-3 py-1" : size === "small",
        } , className)} 
        >
        {props.children}
    </Link>
  )
}

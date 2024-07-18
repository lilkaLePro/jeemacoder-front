"use client"
import { EyeOpenIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import React, { ChangeEvent } from 'react'

export default function FormInput({id , type = "text", value, placeholder, className, label , required , onChange} : 
    {id ?: string , 
    type ?: string , 
    value :  string|number, 
    placeholder : string, 
    className: string, 
    label ?: string , 
    required ?: boolean,
    onChange : (e : ChangeEvent<HTMLInputElement>) => void 
}) {
  return (
    <div className='max-w-xl text-dark-green '>
      <label className='text-sm px-2 font-semibold ' >{label} 
        {required && 
        <span className='text-red-500'>*</span> 
        }
        </label>
        <div className=''>
        <input  
              id={id}
              type={type} 
              value={value} 
              onChange={onChange}
              placeholder={placeholder}
              className={clsx('font-semibold w-full text- placeholder:text-[#636364] focus:border-light-green outline-none px-6 py-3 rounded-md bg-muted text-sm border' , className)} />
        </div>
    </div>
  )
}

"use client"
import clsx from 'clsx'

import React, { ChangeEvent } from 'react'

export default function FormInput({id , type = "text", value, placeholder, className, label , onChange} : 
    {id ?: string , 
    type ?: string , 
    value :  string|number, 
    placeholder : string, 
    className: string, 
    label ?: string , 
    onChange : (e : ChangeEvent<HTMLInputElement>) => void 
}) {
  return (
    <div className='max-w-xl text-dark-green '>
      <label className='text-sm absolute translate-x-5 -translate-y-2 bg-white px-2 font-semibold ' >{label} <span className='text-red-500'>*</span> </label>
      <input  id={id}
              type={type} 
              value={value} 
              onChange={onChange}
              placeholder={placeholder}
              className={clsx(' w-full border border-light-green outline-none bg-none px-4 py-3 rounded-md bg-transparent text-sm' , className)} />
    </div>
  )
}

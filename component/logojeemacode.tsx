import React from 'react'

function jeem({className, title}: {className: string, title: string}) {
  return (
    <span>
            <span className={`${className} font-bold text-3xl`}>{title}</span>
    </span>
  )
}

export default jeem
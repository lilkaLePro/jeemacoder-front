// import React, { Children } from 'react';
// import clsx from 'clsx';


// export default function Titre1({className, children}: {className:String, children: React.ReactNode}) {
//   return (
//     <div>
//         <h1  className={clsx(`text-center my-14 text-red-500`, className)}>{children} </h1>
//     </div>
//   )
// }

import React from 'react'

export  default function Titre1  ({title , className} : {title : string ,  className : string }) {
  return (
    <h1  className={`${className} text-center text-3xl my-5 font-bold`}>
            {title}
    </h1>
  )
}

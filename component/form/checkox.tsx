import { useState } from "react"

export const Checkbox = ({checked , label , className} : {label : string , checked : boolean , className : string}) => {
    const [value , setValue ] = useState(false)
    return (
        <div>
            <input type="checkbox" id="ipt" 
            checked={value}
            onChange={(e) => setValue(e.target.checked)}
            className={className}
            />
            <label htmlFor="ipt">{label} </label>
        </div>
    )
}
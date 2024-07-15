import { ChangeEvent } from "react"

export const Xicon = ({onClick} : {onClick : (e : ChangeEvent) => void}) => {
    return (
        <svg  width="24" height="24" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            stroke-width="2"
            
            >
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
    )
}
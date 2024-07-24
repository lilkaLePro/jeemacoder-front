import { PersonIcon } from "@radix-ui/react-icons"
import clsx from "clsx"

export const Avatar = ({profil , variante , className} : {profil : {firstname ?: string , lastname ?: string , email ?: string , metier ?: string }, 
    variante ?: "big" | "small" ,
    className ?: string
}) => {
    const {firstname , lastname , email , metier} = profil
    return <div className={clsx('max-w-full flex gap-1 items-center' , className)}>
        <div className={clsx("size-8 rounded-full bg-white gap-2" ,{
            "size-10 border rounded-full " : variante === "big",
            "size-8 border rounded-full " : variante === "small",
        })}> <PersonIcon className="m-auto w-full h-full p-2"/> </div>
        <div className="flex flex-col ">
            <span className="text-xs font-semibold">{firstname}{' '}{lastname} </span>
            <span className="text-xs text-[#636364]">{email} </span>
            <span className="text-xs text-[#636364]">{metier} </span>
        </div>
    </div>
}
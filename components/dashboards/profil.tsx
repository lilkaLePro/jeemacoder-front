import { BellIcon } from "@radix-ui/react-icons"
import { Avatar } from "../avatar"
const profil = {
    name : "jeemacoder team",
    email : "kaly100diallo@gmail.com"
}

export const Profil = () => {
    return <div className="h-40 bg-white p-3 justify-between flex flex-col rounded-md">
    <div className="flex justify-between">
        <span className="text-xs">notificatios</span> 
        <BellIcon /> 
    </div>
    <Avatar profil={profil}/>
    </div>
}

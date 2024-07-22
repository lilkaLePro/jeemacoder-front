import { BellIcon } from "@radix-ui/react-icons"
import { Avatar } from "../avatar"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "@/app/utils/api/auth"


const profil = {
    firstname : "jeemacoder team",
    email : "kaly100diallo@gmail.com"
}

export const Profil = () => {

    const {data , isLoading , isError } = useQuery({
        queryKey : ["profil"],
        queryFn : async () => await getUser()
    })
    
    console.log(data);

    return <div className="h-40 bg-white p-3 justify-between flex flex-col rounded-md">
    <div className="flex justify-between">
        <span className="text-xs">notificatios</span> 
        <BellIcon /> 
    </div>
        {isLoading ?
        <div>user empty</div> :
        <Avatar profil={data} variante="small"/> 
        
        }
    </div>
}

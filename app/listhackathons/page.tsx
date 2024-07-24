"use client"
import { ListItem } from "@/components/regular_list";
import { hackathons } from "../utils/placeholder-data";
import { HackathonCard } from "@/components/dashboards/hackthon-card";
import { useState } from "react";
import { getHackathons } from "../utils/api/data";
import { useQuery } from "@tanstack/react-query";
import { Modal } from "@/components/modal";
import { HackathonCardSkeleton } from "@/components/ui/skeletons";
import { useRouter } from "next/navigation";


export default function Page() {
    
    const {data , isLoading , isError} = useQuery({
        queryFn : async () => await getHackathons(),
        queryKey : ["hackathons"],
    }); 
    const router = useRouter()
    const [showDetails , setShowDetails] = useState<boolean>(false)
    const onClose = () => {
        setShowDetails(!showDetails)
    }
    // console.log(data?.map((d : any) => d.id))
    
        
    return (<div className="max-w-4xl m-auto py-12 flex flex-col gap-10">
        <div>
            <input type="text" placeholder="Rechercher"
            className="border outline-none w-80 px-4 py-2 rounded-md" />
        </div>
        <div>
          {
            isLoading ? <HackathonCardSkeleton /> : 
            <ListItem 
                items={data || []}
                resourcename="hackathons"
                component={HackathonCard}
                className=""
                onClick={()=> { setShowDetails(!showDetails) } }
                withPopup={true}
                href="listhackathons"
            />
          }
          {isError && <div> fetching data failed </div> }
            
        </div>

        <Modal showModal={showDetails} onClose={() => setShowDetails(!showDetails)} >
            <div className="max-w-2xl bg-light-green m-auto rounded-md">
                close modal ---------------------------------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------------------------------------
            </div>
        </Modal>
    </div> )
}
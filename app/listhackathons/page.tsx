"use client"
import { ListItem } from "@/components/regular_list";
import { hackathons } from "../utils/placeholder-data";
import { HackathonCard } from "@/components/dashboards/hackthon-card";
import { useState } from "react";
import { getHackathons } from "../utils/api/data";
import { useQuery } from "@tanstack/react-query";
import { Modal } from "@/components/modal";


export default function Page() {
    
    const {data , isLoading , isError} = useQuery({
        queryFn : async () => await getHackathons(),
        queryKey : ["hackathons"],
    });

    const [showDetails , setShowDetails] = useState<boolean>(false)
    const onClose = () => {
        setShowDetails(!showDetails)
    }
    console.log(showDetails);
    
    
    return (<div className="max-w-4xl m-auto py-12 flex flex-col gap-10">
        <div>
            <input type="text" placeholder="Rechercher"
            className="border outline-none w-80 px-4 py-2 rounded-md" />
        </div>
        <div>
          {
            isLoading ? <div>Loading...</div> : 
            <ListItem 
                items={hackathons}
                resourcename="hackathons"
                component={HackathonCard}
                className=""
                onClick={onClose}
            />
          }
          {isError && <div> fetching data failed </div> }
            
        </div>

        <Modal 
        showModal={showDetails}
        onClose={onClose}
        >
            voici le modal
        </Modal>
    </div> )
}
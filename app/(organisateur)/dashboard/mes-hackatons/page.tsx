"use client"
import { getHackathons } from "@/app/utils/api/data";
import { HackathonCard } from "@/components/dashboards/hackthon-card";
import { ListItem } from "@/components/regular_list";
import { HackathonCardSkeleton } from "@/components/ui/skeletons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Page () {
    const {data , isLoading , isError} = useQuery({
        queryFn : async () => await getHackathons(),
        queryKey : ["hackathons"],
    });
    const [showDetails , setShowDetails] = useState<boolean>(false)

    return ( <div className=" h-full overflow-auto ">
             <div className="w-full h-5 px-5 py-8"> 
            <div>
                <h1 className="text-sm">Tous les projects</h1>
                <p className="text-xs text-[#636364]"> Ici vous avez une vue generale de vos Hackathons </p>
            </div>
        </div>
        <div className="max-w-4xl m-auto py-12 flex flex-col gap-10 ">
            {/* <div>
          {
            isLoading ? <HackathonCardSkeleton /> : 
            <ListItem 
                items={data.slice(1 , 2) || []}
                resourcename="hackathons"
                component={HackathonCard}
                className=""
                onClick={() => setShowDetails(!showDetails) }
            />
          }
          {isError && <div> fetching data failed </div> }
            
        </div> */}
        </div>
    </div>)
}
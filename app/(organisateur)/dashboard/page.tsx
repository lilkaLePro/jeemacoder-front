import { hackathons } from "@/app/utils/data";
import { Button } from "@/components/button";
import { HackathonTable } from "@/components/dashboards/hackathonsTableList";
import { SmallHackthonCard } from "@/components/dashboards/small-hackhton-card";
import { ListItem } from "@/components/regular_list";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function Page () {

    return (<div className="min-w-full rounded-lg border-muted-foreground border-2 h-screen bg-white">
        <div className="w-full h-5 px-5 py-8 flex justify-between items-center">
            <div>
                <h1 className="text-sm">Dashboard</h1>
                <p className="text-xs text-[#636364]"> Ici vous avez une vue generale de vos Hackathons </p>
            </div>
            
            <Button types="link" size="small" href="" className="border bg-[#F47E11] text-white rounded-md"> nouveau hackaton </Button>
        </div>

        <div className="flex gap-6 px-5 py-10 max-xl:grid max-xl:grid-cols-1">
            <div className="w-80 b-0 pt-5 ">
                <h1 className="text-sm">Ajouter </h1>
                <p className="text-xs text-[#636364]">ajoutez un nouveau hackathon, persolnalisez le et offrez à vos participants une experience unique. </p>
                <div className="pt-5 flex items-center gap-2 font-semibold">
                    <PlusCircledIcon />
                    <Button types="button" size="small" href="" className="text-sm text-foreground-green">Nouveau hackathon </Button>
                </div>
                
            </div>
            <div>
                <ListItem 
                    items={hackathons}
                    resourcename="hackathonCard"
                    component={SmallHackthonCard}
                    className="flex gap-3 max-md:grid max-md:grid-cols-1"
                />
            </div>

        </div>
        <HackathonTable />

    </div>)
}

import { Button } from "@/components/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function Page () {

    return (<div className="min-w-full">
        <div className="w-full h-5 px-5 py-8 border flex justify-between items-center">
            <div>
                <h1 className="text-sm">Dashboard</h1>
                <p className="text-xs text-[#636364]"> Ici vous avez une vue generale de vos Hackathons </p>
            </div>
            
            <Button href="" className="border bg-[#F47E11] text-white rounded-md"> nouveau hackaton </Button>
        </div>
        <div className="flex px-5 py-10">
            <div className="w-80 ">
                <h1 className="text-sm">Ajouter </h1>
                <p className="text-xs text-[#636364]">ajoutez un nouveau hackathon, persolnalisez le et offrez à vos participants une experience unique. </p>
                <div className="py-10 flex items-center gap-2 font-semibold">
                    <PlusCircledIcon />
                    <button className="text-xs text-foreground-green">Nouveau hackathon </button>
                </div>
                
            </div>

        </div>
    </div>)
}

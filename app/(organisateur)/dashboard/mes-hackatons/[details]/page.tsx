import { HackathonDetails } from "@/components/dashboards/hackathonDetails";

export default function Page() {

    return (
        <div className="h-full overflow-auto border">
             <div className="w-full h-5 px-5 py-8 "> 
                <h1 className="text-sm">Details</h1>
                <p className="text-xs text-[#636364]"> Ici vous avez une vue generale de vos Hackathons </p>
            </div>
            <div className="m-5">
                <HackathonDetails />
            </div>
        </div>
    )
}


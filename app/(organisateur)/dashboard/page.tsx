"use client"
import { hackathons } from "@/app/utils/data";
import { Button } from "@/components/button";
import { HackathonTable } from "@/components/dashboards/hackathonsTableList";
import { SmallHackthonCard } from "@/components/dashboards/small-hackhton-card";
import { Modal } from "@/components/modal";
import { ListItem } from "@/components/regular_list";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Page () {
    const [showModal , setShowModal] = useState(false)

    return (<div className="min-w-full h-screen overflow-y-auto rounded-lg border-muted-foreground border-2 bg-white max-sm:border-none">
        <div className="w-full h-5 px-5 py-8 flex justify-between items-center max-sm:flex-col max-sm:py-1 max-md:px-1">
            <div>
                <h1 className="text-sm">Dashboard</h1>
                <p className="text-xs text-[#636364]"> Ici vous avez une vue generale de vos Hackathons </p>
            </div>
            <Button types="button" size="large" onClick={ ()=> setShowModal(!showModal) }
                className="border bg-[#F47E11] text-white rounded-md mt-2"> Nouveau hackaton 
            </Button>
            
            <Modal showModal={showModal} 
                onClose={ ()=> setShowModal(false)}
            > hi every body </Modal>
        </div>

        <div className="flex gap-6 px-5 py-10 max-xl:grid max-xl:grid-cols-1">
            <div className="w-80 b-0 pt-5 ">
                <h1 className="text-sm">Ajouter </h1>
                <p className="text-xs text-[#636364]">ajoutez un nouveau hackathon, persolnalisez le et offrez à vos participants une experience unique. </p>
                <div className="pt-5 flex items-center gap-2 font-semibold">
                    <Button types="button" size="small" href="" className="text-sm text-foreground-green">
                        <PlusCircledIcon />
                        ajouter
                     </Button>
                </div>
                
            </div>
            <div>
                <ListItem 
                    items={hackathons.slice(0 , 2)}
                    resourcename="hackathonCard"
                    component={SmallHackthonCard}
                    className="flex gap-3 max-md:grid max-md:grid-cols-1"
                />
            </div>

        </div>
        <HackathonTable />

    </div>)
}

"use client"
import { ListItem } from "@/components/regular_list";
import { hackathons } from "../utils/data";
import { HackathonCard } from "@/components/dashboards/hackthon-card";
import FormInput from "@/components/form/input";
import { useState } from "react";

export default function Page() {
    const [search , setSearch] = useState('')

    return (<div className="max-w-4xl m-auto py-12 flex flex-col gap-10">
        <div>
            <FormInput 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher"
                className=""
            />
        </div>
        <div>
            <ListItem 
                items={hackathons}
                resourcename="hackathon"
                component={HackathonCard}
                className="flex flex-col gap-2"
            />
        </div>
    </div> )
}
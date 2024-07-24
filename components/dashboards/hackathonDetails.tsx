"use client"
import { Pencil1Icon, Pencil2Icon } from "@radix-ui/react-icons"
import { useState } from "react"
import Image from "next/image"
import FormInput from "../form/input"
import { Button } from "../form/button"
import { Hackathon } from "@/app/utils/definitions"
import { useQuery } from "@tanstack/react-query"
import { getHackathons } from "@/app/utils/api/data"

export const HackathonDetails = () => {
    const {data , isLoading , isError} = useQuery({
        queryFn : async () => await getHackathons(),
        queryKey : ["hackathons"],
    }); 

    const [value , setValue] = useState<Hackathon>({
        name : '', date_debut : '' , 
        date_fin : '' , lieu : '', prix : '',
        structure_organisateur : ''
    })

    return (
       <div className="flex gap-10 justify-center">
        <form className="flex flex-col gap-6 ">
            <div className="flex gap-5 items-center">
                <div className=" rounded-lg ">
                    <Image src='/hotelPic.jpg' 
                        width={70} height={150} alt="" className="rounded-lg" />
                </div>
                <FormInput
                    id="name"
                    value="Jeemacoder 2024" 
                    placeholder=""
                    className="-translate-y-3.5"
                    onChange={() => {return}}
                 />
                <Pencil1Icon className="hover:bg-muted size-8 rounded-2xl p-2 cursor-pointer" />
            </div>
            <div className="mt-5 w-[600px] flex gap-3">
                <textarea rows={5} className="w-full outline-none p-4 rounded-lg border" readOnly
                    value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus veritatis aperiam harum nemo non at, quam voluptas facere illum suscipit distinctio eius. Aperiam maxime natus, ducimus maiores voluptatem libero qui?" />
                <Pencil1Icon className="hover:bg-muted size-8 rounded-2xl p-2 cursor-pointer" />
            </div>
            <div className="grid grid-cols-2 gap-5 items-center">
                    <FormInput 
                    id="organisateur"
                    value="bakeli school of tech"
                    placeholder=""
                    type="text"
                    onChange={() => null}
                    className=""
                    label="organisateur"
                    />
                        <Pencil1Icon />
                    <FormInput 
                        id="lieu"
                        value="HLM gr yoff"
                        placeholder=""
                        type="text"
                        onChange={() => null}
                        className=""
                        label="lieux"
                        />
                        <Pencil1Icon />
                    </div>
                <div className="flex gap-4 w-full">
                <FormInput 
                    id="date_debut"
                    value="2025-04-23"
                    placeholder=""
                    type="date"
                    onChange={() => null}
                    className=""
                    label="date de debut"
                />
                <FormInput 
                    id="date_debut"
                    value="2025-04-23"
                    placeholder=""
                    type="date"
                    onChange={() => null}
                    className=""
                    label="date de fin"
                />
            </div>
            <div className="flex"> 
            <FormInput 
                    id="prix"
                    value="stage"
                    placeholder=""
                    type="text"
                    onChange={() => null}
                    className=""
                    label="prix"
                />
                <div>
                    <div className="pl-5">
                    <p>theme</p>
                    <select value="theme" className="outline-none border p-3 rounded-md px-5 bg-muted">
                    <option value="">orange</option>
                    <option value="">vert</option>
                    <option value="">bleu</option>
                    </select>
                    </div>
                </div>
            </div>
            <Button> modifier </Button>
        </form>

    </div>
    )
}


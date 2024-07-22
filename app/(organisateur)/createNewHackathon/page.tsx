"use client"
import { Hackathon } from "@/app/utils/definitions";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/form/button";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

const profil = {
    firstname : "KalyDiallo"
}
export default function Page() {
    const [value , setValue] = useState<Hackathon>({
        name : '', date_debut : '' , 
        date_fin : '' , lieu : '', prix : '',
        structure_organisateur : ''
    })
    const [description , setDescription] = useState('')
    const [theme , setTheme] = useState('vert')
    const [logo_url , setLogo_Url] = useState<File | null>()
    const handleChange = (e : ChangeEvent<HTMLInputElement> ) => {
        const input = e.currentTarget;
        setValue({...value , [input.id]: input.value})   
    }
    const mutation = useMutation({
        mutationFn : async (formData : BodyInit) => {
            return await fetch('http://localhost:8000/api/hackathons/create' , {
                method : 'POST',
                headers : {
                    "Contente-type" : "Application/json",
                    "authorization" : "Bearer 10|Wrb98ax7fDNTbAErH6AaZZutOdZaUu6W46UsUJNxf30deaaf"
                },
                body : formData
            })}
        })

    const onSubmit = (e : ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData()
            formData.append('name' , value.name)
            formData.append('date_debut' , value.date_debut)
            formData.append('date_fin' , value.date_fin)
            formData.append('lieu' , value.lieu)
            formData.append('structure_organisateur' , value.structure_organisateur)
            formData.append('prix' , value.prix)
            formData.append('description' , description )
            formData.append('theme' , theme )
            formData.append('status' , "hackathon terminée")
            if(logo_url) formData.append('logo_url' , logo_url)
        mutation.mutate(formData)
    }

    return (
        <div className="">
            <div className="max-w-3xl m-auto my-10">
               <div className="">
                    <div className="bg-muted h-20 py-9 rounded-md ">

                    </div>
                    <p className="font-semibold py-5 ">Start creating</p>
                    <form onSubmit={onSubmit}
                        className="flex flex-col gap-5 pb-20">
                        <p className="mb-2 text-sm font-semibold"> Entrez le nom de votre Hackathons </p>
                        <div className="flex gap-3">
                            <Avatar variante="small" profil={profil} />
                            <input 
                            id="name"
                            value={value.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                        </div>
                        <div >
                            <p className="py-3"> Description : mettez une description detaillé de ce vas etre votre hackathon </p>
                            <textarea id="description"
                                    value={description}
                                    onChange={(e : ChangeEvent<HTMLTextAreaElement>) => {setDescription(e.target.value)}}
                                    rows={3} className="w-full outline-none border rounded-lg p-3"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Nom de l&apos;organisateur </p>
                            <input id="structure_organisateur"
                                value={value.structure_organisateur}
                                onChange={handleChange}
                                placeholder="Enter name"
                                className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> votre logo </p>
                            <input type="file" accept=".jpg,.png,.svg" id="logo_url" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            if(e.target.files && e.target.files.length>0){setLogo_Url(e.target.files[0])}
                        }} />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Lieu </p>
                            <input id="lieu"
                                value={value.lieu}
                                onChange={handleChange}
                                placeholder="Enter le lieu"
                                className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Date de debut </p>
                            <input id="date_debut"
                                value={value.date_debut}
                                onChange={handleChange}
                                placeholder="ex: 2024-05-22"
                                className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Date de fin </p>
                            <input id="date_fin"
                                value={value.date_fin}
                                onChange={handleChange}
                                placeholder="ex: 2024-05-22"
                                className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Prix </p>
                            <input id="prix"
                                value={value.prix}
                                onChange={handleChange}
                                placeholder="ex : finance"
                                className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p>Theme</p>
                            <select className="w-40" value={theme}
                                onChange={(e : ChangeEvent<HTMLSelectElement>) => {setTheme(e.target.value)}}
                            >
                                <option value="orange">orange</option>
                                <option value="vert">vert</option>
                                <option value="neutre">neutre</option>
                            </select>
                        </div>
                        
                        <Button type="submit">
                            Create
                        </Button>
                    </form>
               </div>
               <div>

               </div>
            </div>            
        </div>
    )
}
"use client"
import { Hackathon } from "@/app/utils/definitions";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/form/button";
import FormInput from "@/components/form/input";
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
                            <input type="file" accept=".jpg,.png,.svg" id="logo_url" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            if(e.target.files && e.target.files.length>0){setLogo_Url(e.target.files[0])}
                            }} />
                            <FormInput 
                            id="name"
                            value={value.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                        <div >
                            <p className="py-3"> Description : mettez une description detaillé de ce vas etre votre hackathon </p>
                            <textarea id="description"
                                    value={description}
                                    onChange={(e : ChangeEvent<HTMLTextAreaElement>) => {setDescription(e.target.value)}}
                                    rows={3} className="w-full outline-none border rounded-lg p-3"/>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                            <FormInput id="structure_organisateur"
                                value={value.structure_organisateur}
                                onChange={handleChange}
                                placeholder="Enter name"
                                label="nom de l'organisateur"
                                className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                            
                            <FormInput id="lieu"
                                value={value.lieu}
                                onChange={handleChange}
                                placeholder="Enter le lieu"
                                label="lieu"
                                className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                            </div>
                           <div className="flex gap-4">
                                <FormInput type="date"
                                    id="date_debut"
                                    value={value.date_debut}
                                    onChange={handleChange}
                                    placeholder="ex: 2024-05-22"
                                    label="date de debut"
                                    className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                                />
                                <FormInput type="date"
                                    id="date_fin"
                                    value={value.date_fin}
                                    onChange={handleChange}
                                    placeholder="ex: 2024-05-22"
                                    label="date de fin"
                                    className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                                />
                           </div>
                            <div className="flex gap-5">
                            <FormInput id="prix"
                                value={value.prix}
                                onChange={handleChange}
                                label="prix"
                                placeholder="ex : finance"
                                className="px-4 py-1 rounded-md max-w-80 border font-medium outline-none focus:border-gray-foreground text-sm placeholder:text-sm"
                            />
                            <div className="">
                                <p>Theme</p>
                                <select className="w-40 px-4 py-2 outline-none" value={theme}
                                    onChange={(e : ChangeEvent<HTMLSelectElement>) => {setTheme(e.target.value)}}
                                    >
                                    <option value="orange">orange</option>
                                    <option value="vert">vert</option>
                                    <option value="neutre">neutre</option>
                                </select>
                            </div>
                            </div>
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
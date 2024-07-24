import Image from "next/image"
import { Button } from "../button"
import { ImgCollpsed } from "./img-collabsed"
import { useRef, useState } from "react"
import { Modal } from "../modal"
import Link from "next/link"
import { DetailsButton } from "./detailsButton"

    export const HackathonCard = ({hackathons , onClick , } : {hackathons : {
    logo_url : string , 
    date_debut : string,
    name : string ,
    structure_organisateur : string ,
    description : string ,
    status : "passe" | "encour" | "arriving" ,
    participants : number ,
    id : string }, 
    onClick : () => void
}) => {
    const [showDetails , setShowDetails] = useState<boolean>(false)
    console.log(showDetails);
    

    const {logo_url , date_debut , name , structure_organisateur , description , 
            status , participants , id } = hackathons
    return (
        <DetailsButton id={id}>
        <div onClick={onClick}
            className="max-w-4xl border-b p-10 flex flex-col gap-4 hover:bg-muted cursor-pointer ">
            <div className="flex gap-3">
                <div>
                <Image src={`/public/storage/3pnTa.jpg`} 
                    width={100} 
                    height={80} 
                    alt="hack logo" 
                    className="border rounded-md"/>
                    <div className="text-xs">{status} </div>
                </div>
                <div>
                    <p className="text-sm italic">{date_debut} </p>
                    <h1 className="text-2xl">{name} </h1>
                    <h2 className="text-md font-light ">organisateur : {structure_organisateur} </h2>
                </div>
            </div>
            <div>
                <p className="px-4 font-semibold">{description} </p>
            </div>
            <div  className="flex justify-between">
                <div className="flex gap-4">
                    <Button types="button" size="small" className="" href=""> Deatails </Button>
                    <Button types="button" size="small" className="" href=""> Participer </Button>
                </div>
                <div className="flex items-center gap-4">
                    <div> <ImgCollpsed /> </div>
                    <div className="font-semibold text-sm">+{participants}participants</div>
                </div>
            </div>
        </div>
    </DetailsButton>)
}
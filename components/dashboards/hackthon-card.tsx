import Image from "next/image"
import { Button } from "../button"
import { ImgCollpsed } from "./img-collabsed"

export const HackathonCard = ({hackathon} : {hackathon : {
    logo_url : string , 
    date_debut : string,
    name : string ,
    organisateur : string ,
    description : string ,
    status : "passe" | "encour" | "arriving" ,
    participants : number
}}) => {
    const {logo_url , date_debut , name , organisateur , description , status , participants } = hackathon

    return (
        <div className="max-w-4xl border-b p-10 flex flex-col gap-4 hover:bg-muted cursor-pointer ">
            <div className="flex gap-3">
                <div>
                <Image src={`${logo_url}`} 
                    width={100} 
                    height={80} 
                    alt="hack logo" 
                    className="border rounded-md"/>
                    <div>{status} </div>
                </div>
                <div>
                    <p className="text-sm italic">{date_debut} </p>
                    <h1 className="text-2xl">{name} </h1>
                    <h2 className="text-lg ">organisateur : {organisateur} </h2>
                </div>
            </div>
            <div>
                <p>{description} </p>
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
    )
}
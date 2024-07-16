import Image from "next/image"
import { Button } from "../button"

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
        <div className="max-w-3xl border-b p-5 flex flex-col gap-4 ">
            <div className="flex gap-3">
                <Image src={`/${logo_url}`} 
                    width={100} 
                    height={70} 
                    alt="hack logo" 
                    className="border rounded-md"/>
                <div>
                    <p>{date_debut} </p>
                    <h1 className="mt-2">{name} </h1>
                    <h2>{organisateur} </h2>
                </div>
            </div>
            <div>
                <p>{description} </p>
            </div>
            <div  className="flex justify-between">
                <div className="flex gap-4">
                    <Button types="link" size="small" className="" href=""> Deatails </Button>
                    <Button types="link" size="small" className="" href=""> Participer </Button>
                </div>
                <div>+{participants}participants</div>
            </div>
        </div>
    )
}
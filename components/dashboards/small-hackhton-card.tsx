import Image from "next/image"
import { ImgCollpsed } from "./img-collabsed"

export const SmallHackthonCard = ({hackathonCard} : {hackathonCard: {
    logo_url : string , 
    date_debut : string , 
    name : string , 
    organisateur : string ,
    coordonateur : string , 
    status : 'avenir' | 'enCours' | 'finis',
    countNbrParticipant : number
}}) => {
    const {logo_url , date_debut , name , organisateur , countNbrParticipant , status} = hackathonCard
    return (
        <div className="max-w-lg h-36 max-sm:h-60 bg-light-orange border rounded-xl p-4 flex flex-col justify-between ">
            <div className="flex gap-6 max-sm:flex-col">
                <Image src={logo_url}
                    width={100} 
                    height={10} alt="logo_img"
                    className="border rounded-md max-sm:hidden"
                />
                <div className="hidden max-sm:flex gap-5 ">
                <Image src='/hack_logo.jpg'
                    width={80} 
                    height={50} alt="logo_img"
                    className="border rounded-md"
                />
                <p className="flex font-bold">{status} </p>
                </div>
                <div>
                    <p className="mb-2 font-mono text-xs">{date_debut} </p>
                    <h1 className=" text-lg font-semibold">{name} </h1>
                    <p className="text-sm">{organisateur} </p>
                </div>
            </div>
            <div className="flex justify-between text-xs items-center">
                <p className="max-sm:hidden">{status} </p>
                <div className="flex font-semibold items-center text-sm"> <ImgCollpsed />
                    +{countNbrParticipant}participants
                </div>
            </div>
        </div>
    )
}
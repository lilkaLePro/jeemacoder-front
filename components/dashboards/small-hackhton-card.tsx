import Image from "next/image"

export const SmallHackthonCard = ({hackathonCard} : {hackathonCard: {
    image_url : string , 
    date_debut : string , 
    name : string , 
    organisateur : string ,
    coordonateur : string , 
    status : 'avenir' | 'enCours' | 'finis',
    countNbrParticipant : number
}}) => {
    const {image_url , date_debut , name , organisateur , countNbrParticipant , status} = hackathonCard
    return (
        <div className="max-w-sm h-36 bg-white border rounded-xl p-6 flex flex-col justify-between">
            <div className="flex gap-6">
                <Image src={image_url}
                    width={70} 
                    height={50} alt="logo_img"
                    className="border rounded-md"
                />

                <div>
                    <p className="mb-2 font-mono text-xs">{date_debut} </p>
                    <h1 className=" text-md  font-semibold">{name} </h1>
                    <p className="text-sm">{organisateur} </p>
                </div>
            </div>
            <div className="flex justify-between text-xs py-2">
                <p>{status} </p>
                <div>
                    +{countNbrParticipant}participants
                </div>
            </div>
        </div>
    )
}
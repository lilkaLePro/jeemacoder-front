"use client"
import clsx from "clsx";
import Link from "next/link";

export default function Page() {
    const  organisateur = 'organisateur'
    const participant = 'participant'

    return (
    <div className="h-screen ">
        <div className="max-w-2xl rounded-md m-auto flex flex-col gap-10 border">
        
        <div> vous souhaitez nous rejoindre en tant que : </div>
        
        <Link href={{
            pathname : "/register",
            query: {
                role : organisateur
            },
        }}
        className={clsx('w-full border h-20 p-5 -mb-3')}>
            organisateur
        </Link>
        <Link href={{
            pathname : "/register",
            query: {
                role : participant
            },
        }}
        className={clsx('w-full border h-20 p-5 -mb-3')}>
            participant
        </Link>
    </div>
    </div>)
}
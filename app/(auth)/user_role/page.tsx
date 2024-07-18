"use client"
import clsx from "clsx";
import Link from "next/link";

export default function Page() {
    const  organisateur = 'organisateur'
    const participant = 'participant'

    return (
    <div className="h-screen max-w-2xl justify-center items-center flex flex-col m-auto gap-3">
        
        <div> vous souhaitez nous rejoindre en tant que : </div>
        
        <Link href={{
            pathname : "/register",
            query: {
                role : organisateur
            },
        }}
        className={clsx('w-full border')}>
            <h1>Organisateur</h1>
            <p>En tant que organisateur vous pouvez </p>
        </Link>
        <Link href={{
            pathname : "/register",
            query: {
                role : participant
            },
        }}
        className={clsx('w-full border')}>
            <h1>participant</h1>
            <p>En tant que organisateur vous pouvez </p>
        </Link>
    </div>)
}
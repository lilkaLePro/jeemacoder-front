const data = [{} , {} , {}]

export const HackathonCardSkeleton = () => {

    return ( <div className="flex flex-col">
       {data.map((d , i) => ( 
       <div key={i} className="max-w-4xl px-5 py-8 flex flex-col gap-4 animate-pulse border-b">
        <div className="flex gap-5">
            <div className="size-24 border rounded-md bg-gray-200"></div>
            <div className="flex flex-col gap-2">
                <div className="w-80 h-6 border rounded-lg bg-gray-200"></div>
                <div className="w-96 h-14 border rounded-2xl bg-gray-200"></div>
            </div>
        </div>
        <div className="max-w-3xl h-20 bg-gray-200 text-gray-200 rounded-lg">
            ----------------------------------------------------------------------------------
            ----------------------------------------------------------------------------------
            ---------------------------------------------------------------------------------
        </div>
        <div></div>
    </div>))}
    </div>)
}

export const SmallHackathonCardSkelethon = () => {

    return (
        <div className="border p-5 bg-gray-50 rounded-xl animate-pulse">
            <div className="flex gap-5">
                <div className="size-20 border bg-gray-200 rounded-lg"></div>
                <div className="flex flex-col gap-3">
                    <div className="w-64 border rounded-xl h-3 bg-gray-200 "></div>
                    <div className="w-64 border rounded-xl h-6 bg-gray-200 "></div>
                </div>
            </div>
            <div className="flex justify-between pt-1 items-center">
                <div className="w-10 border bg-gray-200 rounded-lg h-3"></div>
                <div className="w-32 border bg-gray-200 rounded-lg h-5"></div>
            </div>
        </div>
    )
}
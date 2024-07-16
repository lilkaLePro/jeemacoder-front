export default function Page() {

    return (
        <div className="w-full h-5 px-5 py-8 "> 
            <div>
                <h1 className="text-sm">Dashboard</h1>
                <p className="text-xs text-[#636364]"> Ici vous avez une vue generale de vos Hackathons </p>
            </div>
            <div className="grid grid-cols-1">
                <div className="w-40 h-20 border rounded-md"></div>
                <div className="w-40 h-20 border rounded-md"></div>
                <div className="w-40 h-20 border rounded-md"></div>
            </div>
        </div>
    )
}
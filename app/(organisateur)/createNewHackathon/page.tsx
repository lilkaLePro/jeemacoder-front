import { Avatar } from "@/components/avatar";
import { Button } from "@/components/form/button";
import { NavBar } from "@/components/home/navBar";

const profil = {
    name : "KalyDiallo",
}
export default function Page() {

    return (
        <div className="">
            <NavBar />
            <div className="max-w-3xl m-auto">
               <div className="">
                    <div className="bg-muted h-20 py-9 rounded-md ">

                    </div>
                    <p className="font-semibold py-5 ">Start creating</p>
                    <form className="flex flex-col gap-5 pb-20">
                        <p className="mb-2 text-sm font-semibold"> Entrez le nom de votre Hackathons </p>
                        <div className="flex gap-3">
                            <Avatar variante="small" profil={profil} />
                            <input 
                            placeholder="Enter name"
                            className="px-4 py-1 rounded-md max-w-80 border outline-none focus:border-gray-foreground placeholder:text-sm"
                            />
                        </div>
                        <div >
                            <p className="py-3"> Description : mettez une description detaillé de ce vas etre votre hackathon </p>
                            <textarea rows={3} className="w-full outline-none border rounded-lg p-3"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Nom de l&apos;organisateur </p>
                            <input 
                                placeholder="Enter name"
                                className="px-4 py-1 rounded-md max-w-80 border outline-none focus:border-gray-foreground placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Date de debut </p>
                            <input 
                                placeholder="ex: 2024-05-22"
                                className="px-4 py-1 rounded-md max-w-80 border outline-none focus:border-gray-foreground placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Date de fin </p>
                            <input 
                                placeholder="ex: 2024-05-22"
                                className="px-4 py-1 rounded-md max-w-80 border outline-none focus:border-gray-foreground placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p className=""> Date de fin </p>
                            <input 
                                placeholder="ex: 2024-05-22"
                                className="px-4 py-1 rounded-md max-w-80 border outline-none focus:border-gray-foreground placeholder:text-sm"
                            />
                        </div>
                        <div className="flex items-center gap-5">
                            <p>Theme</p>
                            <select className="w-40">
                                <option value="orange">orange</option>
                                <option value="vert">vert</option>
                                <option value="neutre">neutre</option>
                            </select>
                        </div>
                        
                        <Button>
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
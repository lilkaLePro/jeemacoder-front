import clsx from "clsx"

export const Avatar = ({profil , variante} : {profil : {firstname ?: string , lastname ?: string , email ?: string }, variante ?: "big" | "small" }) => {
    const {firstname , lastname , email} = profil
    return <div className="max-w-full flex gap-1 items-center">
        <div className={clsx({
            "size-10 border rounded-full " : variante === "big",
            "size-8 border rounded-full " : variante === "small",
        })}></div>
        <div className="flex flex-col ">
            <span className="text-xs font-semibold">{firstname}{' '}{lastname} </span>
            <span className="text-xs text-[#636364]">{email} </span>
        </div>
    </div>
}
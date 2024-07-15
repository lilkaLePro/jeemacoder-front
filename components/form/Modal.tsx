import Image from "next/image"
import { Button } from "../button"

export const HackathonsForm = ({showModal = false , closeModal , children} : {
    showModal : boolean , closeModal : () => void , children : React.ReactNode
}) => {
        return showModal ? (
            <div className="fixed z-1 left-0 right-0 w-full h-full overflow-auto bg-muted">
                <div className="bg-white m-auto-[10%] w-[50%] p-10 "
                    onClick={e => e.stopPropagation()}
                >
                <Image src='/icon/x.svg' alt="" width={40} height={40} 
                    onClick={closeModal}
                />
                {children}
                </div>
            </div>
        ) : null
    }
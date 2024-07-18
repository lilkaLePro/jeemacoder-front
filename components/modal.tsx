export const Modal = ({showModal , onClose , children} : {
    showModal : boolean , 
    onClose : () => void,
    children : React.ReactNode

    }) => {

    return showModal ? (
        <div className='z-10 w-full h-screen absolute flex justify-center items-center overflow-auto bg-muted left-0 right-0' 
            onClick={onClose}
        >
            <div className='w-1/2 bg-light-green h-screen' 
                onClick={e => e.stopPropagation()} >
                X {children}
            </div>
        </div>
    ) : null
}


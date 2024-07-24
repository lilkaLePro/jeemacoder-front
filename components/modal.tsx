export const Modal = ({showModal , onClose , children} : {
    showModal : boolean , 
    onClose : () => void,
    children : React.ReactNode

    }) => {

    return showModal ? (
        <div className='absolute z-10 w-full h-screen flex justify-center items-center overflow-auto bg-muted left-0 right-0 top-0' 
            onClick={onClose}
        >
            <div className='' 
                onClick={e => e.stopPropagation()} >
                {children}
            </div>
        </div>
    ) : null
}


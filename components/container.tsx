import clsx from "clsx"

export const Container = ({children , className} : {children : React.ReactNode , className : string}) => {
    return (
        <main className={clsx(`max-w-3xl m-auto` , className)}>
            {children}
        </main>
    )
}
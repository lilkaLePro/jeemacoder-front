import Link from "next/link"

export const DetailsButton = ({id , children} : {id : string , children : React.ReactNode}) => {
 

    return (<Link href={{
        pathname : "",
        query: {
            id : id
        }
    }}>
        {children}
    </Link> )
}
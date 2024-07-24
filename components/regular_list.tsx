import Link from "next/link"

export const ListItem = ({items , resourcename , component : Component , className , onClick , withPopup = false , href , id} : {
    items : any[] , 
    resourcename : string , 
    component : React.ElementType , 
    className : string ,
    onClick ?: () => void,
    withPopup ?: boolean,
    href ?: string,
    id ?:  string,
}) => {
    
    return (
        <div className={className}>
            {items.map((item , i ) => (
                <>
                    {
                        !withPopup ? <Component 
                        key={i} 
                        {...{[resourcename]: item}} 
                        onClick={onClick}
                />  : 
                    <Link href={{
                        pathname : `${href}`,
                        query: {
                            id : id
                        },
                    }}>
                        <Component 
                        key={i} 
                        {...{[resourcename]: item}} 
                        onClick={onClick}
                        /> 
                    </Link>
                    }
                </>
            ))}
        </div>
    )
}


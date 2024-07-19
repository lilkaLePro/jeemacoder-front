
export const ListItem = ({items , resourcename , component : Component , className , onClick} : {
    items : any[] , 
    resourcename : string , 
    component : React.ElementType , 
    className : string ,
    onClick ?: (item : any) => void
}) => {

    return (
        <div className={className} onClick={onClick && onClick} >
            {items.map((item , i ) => (
                <Component key={i} {...{[resourcename]: item}} />
            ))}
        </div>
    )
}


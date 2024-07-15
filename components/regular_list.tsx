
export const ListItem = ({items , resourcename , component : Component , className} : {
    items : any[] , 
    resourcename : string , 
    component : React.ElementType , 
    className : string
}) => {

    return (
        <div className={className}>
            {items.map((item , i ) => (
                <Component key={i} {...{[resourcename]: item}} />
            ))}
        </div>
    )
}


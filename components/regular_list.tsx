
export const ListItem = ({items , resourcename , component : Component , className , onClick} : {
    items : any[] , 
    resourcename : string , 
    component : React.ElementType , 
    className : string ,
    onClick ?: () => void
}) => {
    return (
        <div className={className}  >
            {items.map((item , i ) => (
                <Component 
                        key={i} 
                        {...{[resourcename]: item} } 
                        onClick={onClick}
                />
            ))}
        </div>
    )
}


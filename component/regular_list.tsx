"use client"

export const NavList = ({items , resourcename , navLink : NavLinks} : {
    items : any[] , resourcename : string , navLink : React.ElementType
}) => {

    return (
        <div>
            {items.map((item , i ) => (
                <NavLinks key={i} {...{[resourcename]: item}} />
            ))}
        </div>
    )
}


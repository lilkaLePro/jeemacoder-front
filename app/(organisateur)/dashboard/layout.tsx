import { Container } from "@/component/container";
import { SideBar } from "@/component/dashboards/NavBar";

export default function Layout ({children} : {children : React.ReactNode}) {

    return (<>
        <Container className="max-w-full bg-muted flex">
            <div>
                <SideBar />
            </div>
            <div className="w-full">{children} </div>
            <div>

            </div>
        </Container>
        </>)
}
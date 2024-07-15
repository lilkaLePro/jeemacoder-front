import { Container } from "@/components/container";
import { SideBar } from "@/components/dashboards/sideBar";

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
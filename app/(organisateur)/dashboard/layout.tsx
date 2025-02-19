import { Container } from "@/components/container";
import { SideBar } from "@/components/dashboards/sideBar";
import { openSans, roboto } from "@/components/ui/fonts";

export default function Layout ({children} : {children : React.ReactNode}) {

    return (<div className={roboto.className}>
        <Container className="max-w-full flex  bg-muted">
            <div className="p-2">
                <SideBar />
            </div>
            <div className="w-full p-3">
                <div className="bg-white h-full rounded-md">
                {children} 
                </div>
            </div>
            <div>

            </div>
        </Container>
        </div>)
}
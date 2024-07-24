import { Container } from "@/components/container";
import { SideBar } from "@/components/dashboards/sideBar";
import { openSans, roboto } from "@/components/ui/fonts";

export default function Layout ({children} : {children : React.ReactNode}) {

    return (<div className={roboto.className}>
        <Container className="max-w-full flex  bg-muted max-sm:flex-1 max-sm:bg-white m-0">
            <div className=" h-screen pl-2 pr-10 sticky max-sm:p-0">
                <SideBar />
            </div>
            <div className="w-full  p-5">
                <div className="bg-white h-full rounded-md">
                {children} 
                </div>
            </div>
            <div>

            </div>
        </Container>
        </div>)
}
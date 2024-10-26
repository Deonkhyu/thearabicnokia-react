import { AppSidebar } from "../components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb"
import { Separator } from "../components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "../components/ui/sidebar"
import { DateTimePickerForm } from "../components/date-time-picker-form"
import { Slider } from "../components/ui/slider"
import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '700'],
});

export default function VisualizeData() {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className={poppins.className}>
            <SidebarProvider className="dark">
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="/dashboard">
                            Dashboard
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="/dashboard/visualize-data">
                            Visualize Data
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
                </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <div className="flex justify-center items-center aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50">
                        <DateTimePickerForm />
                    </div>
                    <div className="p-16 flex flex-col justify-center items-center aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50">
                        <p className="mb-2">Temperature</p>
                        <Slider defaultValue={[33]} max={100} step={1}/>
                    </div>
                </div>
                <div className="p-4 h-full min-h-[100vh] flex flex-col items-center justify-center rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50">
                </div>
                </div>
            </SidebarInset>
            </SidebarProvider>
            </div>
        </div>
    )
}
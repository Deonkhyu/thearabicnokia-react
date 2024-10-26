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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import {
    ChevronDownIcon
} from "@heroicons/react/24/solid"
import StackedAreaChart from "../components/stackedarea-chart"
import ImagesUploader from "../components/images-uploader"
import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '700'],
});

export default function UploadPhotos() {
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
                        <BreadcrumbLink href="/dashboard/upload-photos">
                            Upload Photos
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
                </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className="p-4 h-full min-h-[100vh] rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50">
                        <p className="p-2 font-bold text-2xl">Camera Site Selection</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="p-2 flex items-center">
                                Select
                                <ChevronDownIcon className="w-4 h-4 ms-2" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className={poppins.className}>
                                <DropdownMenuLabel>Cameras</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Camera A</DropdownMenuItem>
                                <DropdownMenuItem>Camera B</DropdownMenuItem>
                                <DropdownMenuItem>Camera C</DropdownMenuItem>
                                <DropdownMenuItem>Camera D</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    
                    <div className="p-4 h-full min-h-[100vh] rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50">
                        <StackedAreaChart />
                    </div>

                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                        <div className="p-4 aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50">
                            <p className="p-2 font-bold text-2xl">Upload Image</p>
                            <div className="flex h-full items-center justify-center">
                                <ImagesUploader />
                            </div>
                        </div>
                        <div className="p-4 aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50">
                            <p className="p-2 font-bold text-2xl">Image Results</p>
                        </div>
                    </div>
                </div>
            </SidebarInset>
            </SidebarProvider>
            </div>
        </div>
    )
}
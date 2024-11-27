"use client";
import { useState, useEffect } from "react";
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
    const [annotatedImagePath, setAnnotatedImagePath] = useState<string | null>(null);
    const [resultsFilePath, setResultsFilePath] = useState<string | null>(null);
    const [resultsText, setResultsText] = useState<string | null>(null);

    useEffect(() => {
        const fetchResultsText = async () => {
            if (resultsFilePath) {
                try {
                    const response = await fetch(`http://localhost:8000/files/${resultsFilePath}`);
                    const text = await response.text();
                    setResultsText(text);
                } catch (error) {
                    console.error('Error fetching results text:', error);
                }
            }
        };

        fetchResultsText();
    }, [resultsFilePath]);

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
                    <div className="p-4 h-32 rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50">
                        <p className="p-2 font-bold text-2xl">Camera Site Selection</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="p-2 flex items-center">
                                Select
                                <ChevronDownIcon className="w-4 h-4 ms-2" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className={poppins.className}>
                                <DropdownMenuLabel>Camera Sites</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>0001-A</DropdownMenuItem>
                                <DropdownMenuItem>0001-B</DropdownMenuItem>
                                <DropdownMenuItem>0001-C</DropdownMenuItem>
                                <DropdownMenuItem>0001-D</DropdownMenuItem>
                                <DropdownMenuItem>0001-E</DropdownMenuItem>
                                <DropdownMenuItem>0002-A</DropdownMenuItem>
                                <DropdownMenuItem>0002-B</DropdownMenuItem>
                                <DropdownMenuItem>0002-C</DropdownMenuItem>
                                <DropdownMenuItem>0002-D</DropdownMenuItem>
                                <DropdownMenuItem>0002-E</DropdownMenuItem>
                                <DropdownMenuItem>0002-F</DropdownMenuItem>
                                <DropdownMenuItem>0002-G</DropdownMenuItem>
                                <DropdownMenuItem>0002-H</DropdownMenuItem>
                                <DropdownMenuItem>0002-I</DropdownMenuItem>
                                <DropdownMenuItem>0003-A</DropdownMenuItem>
                                <DropdownMenuItem>0003-B</DropdownMenuItem>
                                <DropdownMenuItem>0003-C</DropdownMenuItem>
                                <DropdownMenuItem>0003-D</DropdownMenuItem>
                                <DropdownMenuItem>0003-E</DropdownMenuItem>
                                <DropdownMenuItem>0003-F</DropdownMenuItem>
                                <DropdownMenuItem>0003-G</DropdownMenuItem>
                                <DropdownMenuItem>0003-H</DropdownMenuItem>
                                <DropdownMenuItem>0003-I</DropdownMenuItem>
                                <DropdownMenuItem>0003-J</DropdownMenuItem>
                                <DropdownMenuItem>0003-K</DropdownMenuItem>
                                <DropdownMenuItem>0003-L</DropdownMenuItem>
                                <DropdownMenuItem>0004-A</DropdownMenuItem>
                                <DropdownMenuItem>0004-B</DropdownMenuItem>
                                <DropdownMenuItem>0004-C</DropdownMenuItem>
                                <DropdownMenuItem>0004-D</DropdownMenuItem>
                                <DropdownMenuItem>0004-E</DropdownMenuItem>
                                <DropdownMenuItem>0004-F</DropdownMenuItem>
                                <DropdownMenuItem>0004-G</DropdownMenuItem>
                                <DropdownMenuItem>0004-H</DropdownMenuItem>
                                <DropdownMenuItem>0004-I</DropdownMenuItem>
                                <DropdownMenuItem>0004-J</DropdownMenuItem>
                                <DropdownMenuItem>0004-K</DropdownMenuItem>
                                <DropdownMenuItem>0004-L</DropdownMenuItem>
                                <DropdownMenuItem>0004-M</DropdownMenuItem>
                                <DropdownMenuItem>0004-N</DropdownMenuItem>
                                <DropdownMenuItem>0004-O</DropdownMenuItem>
                                <DropdownMenuItem>0005-A</DropdownMenuItem>
                                <DropdownMenuItem>0005-B</DropdownMenuItem>
                                <DropdownMenuItem>0005-C</DropdownMenuItem>
                                <DropdownMenuItem>0005-D</DropdownMenuItem>
                                <DropdownMenuItem>0005-E</DropdownMenuItem>
                                <DropdownMenuItem>0005-F</DropdownMenuItem>
                                <DropdownMenuItem>0005-G</DropdownMenuItem>
                                <DropdownMenuItem>0005-H</DropdownMenuItem>
                                <DropdownMenuItem>0005-I</DropdownMenuItem>
                                <DropdownMenuItem>0005-J</DropdownMenuItem>
                                <DropdownMenuItem>0005-K</DropdownMenuItem>
                                <DropdownMenuItem>0005-L</DropdownMenuItem>
                                <DropdownMenuItem>0005-M</DropdownMenuItem>
                                <DropdownMenuItem>0005-N</DropdownMenuItem>
                                <DropdownMenuItem>0005-O</DropdownMenuItem>
                                <DropdownMenuItem>0005-P</DropdownMenuItem>
                                <DropdownMenuItem>0005-Q</DropdownMenuItem>
                                <DropdownMenuItem>0006-A</DropdownMenuItem>
                                <DropdownMenuItem>0006-B</DropdownMenuItem>
                                <DropdownMenuItem>0006-C</DropdownMenuItem>
                                <DropdownMenuItem>0006-D</DropdownMenuItem>
                                <DropdownMenuItem>0006-E</DropdownMenuItem>
                                <DropdownMenuItem>0006-F</DropdownMenuItem>
                                <DropdownMenuItem>0006-G</DropdownMenuItem>
                                <DropdownMenuItem>0006-H</DropdownMenuItem>
                                <DropdownMenuItem>0006-I</DropdownMenuItem>
                                <DropdownMenuItem>0006-J</DropdownMenuItem>
                                <DropdownMenuItem>0006-K</DropdownMenuItem>
                                <DropdownMenuItem>0006-I</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                        <div className="p-4 w-full h-full rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50">
                            <p className="p-2 font-bold text-2xl">Upload Image</p>
                            <div className="flex h-full items-center justify-center pb-8 ms-2">
                                <ImagesUploader setAnnotatedImagePath={setAnnotatedImagePath} setResultsFilePath={setResultsFilePath} />
                            </div>
                        </div>
                        <div className="p-4 flex-wrap w-full h-full rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50">
                            <p className="p-2 font-bold text-2xl">Image Results</p>
                            {annotatedImagePath && (
                                <div>
                                    <img src={`http://localhost:8000/files/${annotatedImagePath}`} alt="Annotated" />
                                </div>
                            )}
                            {resultsText && (
                                <div>
                                    <h3>Predictions:</h3>
                                    <pre className="whitespace-pre-wrap">{resultsText}</pre>
                                </div>
                            )}
                        </div>
                    </div>
                    
                </div>
            </SidebarInset>
            </SidebarProvider>
            </div>
        </div>
    )
}
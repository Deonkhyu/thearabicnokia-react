"use client";

import { useEffect } from "react";
import { AppSidebar } from "../components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Separator } from "../components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "../components/ui/sidebar";
// import { DateTimePickerForm } from "../components/date-time-picker-form";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '700'],
});

export default function VisualizeData() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        // Background color gradient & span the full height of screen (min-h-screen)
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
            
            {/* wraps the page content with the Poppins font */}
            <div className={poppins.className}>
                
            {/* wrapping other sidebar-related components in the theme set to "dark." */}
                <SidebarProvider className="dark">
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1" />
                                <Separator orientation="vertical" className="mr-2 h-4" />
                                
                                {/* The breadcrumb navigation helps users track their location within the app, showing a "Dashboard > Visualize Data" path. */}
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
                            {/* Update grid to display the Tableau diagram above */}
                            <div className="grid auto-rows-min gap-4">
                                {/* First Tableau visualization */}
                                <div className="p-4 h-full min-h-[50vh] flex flex-col items-center justify-center rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50">
                                    <div
                                        className="tableauPlaceholder w-full h-full"
                                        id="viz1731651079200"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "1000px",
                                            minHeight: "500px",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: `
                                                <div class='tableauPlaceholder' id='viz1731651079200' style='position: relative'>
                                                    <noscript>
                                                        <a href='#'>
                                                            <img alt='Map Visualization Dashboard' src='https://public.tableau.com/static/images/TH/THE-Arabic-NokiaMapVisualizationDashboard/MapVisualizationDashboard/1_rss.png' style='border: none' />
                                                        </a>
                                                    </noscript>
                                                    <object class='tableauViz' style='display:none;'>
                                                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                                                        <param name='embed_code_version' value='3' />
                                                        <param name='site_root' value='' />
                                                        <param name='name' value='THE-Arabic-NokiaMapVisualizationDashboard/MapVisualizationDashboard' />
                                                        <param name='tabs' value='no' />
                                                        <param name='toolbar' value='yes' />
                                                        <param name='static_image' value='https://public.tableau.com/static/images/TH/THE-Arabic-NokiaMapVisualizationDashboard/MapVisualizationDashboard/1.png' />
                                                        <param name='animate_transition' value='yes' />
                                                        <param name='display_static_image' value='yes' />
                                                        <param name='display_spinner' value='yes' />
                                                        <param name='display_overlay' value='yes' />
                                                        <param name='display_count' value='yes' />
                                                        <param name='language' value='en-US' />
                                                        <param name='filter' value='publish=yes' />
                                                    </object>
                                                </div>
                                                <script type='text/javascript'>
                                                    var divElement = document.getElementById('viz1731651079200');
                                                    var vizElement = divElement.getElementsByTagName('object')[0];
                                                    // Set a fixed height to the Tableau viz element
                                                    vizElement.style.width = '100%';  // Set width to 100% of the container
                                                    vizElement.style.height = '1000px'; // Set height to a fixed value (e.g., 500px)

                                                    var scriptElement = document.createElement('script');
                                                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                                                    vizElement.parentNode.insertBefore(scriptElement, vizElement);
                                                </script>
                                            `,
                                        }}
                                    />
                                </div>
                                {/* Second Tableau visualization */}
                                <div className="p-4 h-full min-h-[50vh] flex flex-col items-center justify-center rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50">
                                    <div
                                        className="tableauPlaceholder w-full h-full"
                                        id="viz1731647737624"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "1000px",
                                            minHeight: "500px",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: `
                                                <div class='tableauPlaceholder' id='viz1731647737624' style='position: relative'>
                                                    <noscript>
                                                        <a href='#'>
                                                            <img alt='Species Count by Camera Site Dashboard' src='https://public.tableau.com/static/images/TH/THE-Arabic-NokiaSpeciesCountbyCameraSite/SpeciesCountbyCameraSiteDashboard/1_rss.png' style='border: none' />
                                                        </a>
                                                    </noscript>
                                                    <object class='tableauViz' style='display:none;'>
                                                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                                                        <param name='embed_code_version' value='3' />
                                                        <param name='site_root' value='' />
                                                        <param name='name' value='THE-Arabic-NokiaSpeciesCountbyCameraSite/SpeciesCountbyCameraSiteDashboard' />
                                                        <param name='tabs' value='no' />
                                                        <param name='toolbar' value='yes' />
                                                        <param name='static_image' value='https://public.tableau.com/static/images/TH/THE-Arabic-NokiaSpeciesCountbyCameraSite/SpeciesCountbyCameraSiteDashboard/1.png' />
                                                        <param name='animate_transition' value='yes' />
                                                        <param name='display_static_image' value='yes' />
                                                        <param name='display_spinner' value='yes' />
                                                        <param name='display_overlay' value='yes' />
                                                        <param name='display_count' value='yes' />
                                                        <param name='language' value='en-US' />
                                                    </object>
                                                </div>
                                                <script type='text/javascript'>
                                                    var divElement = document.getElementById('viz1731647737624');
                                                    var vizElement = divElement.getElementsByTagName('object')[0];

                                                    // Set a fixed height to the Tableau viz element
                                                    vizElement.style.width = '100%';  // Set width to 100% of the container
                                                    vizElement.style.height = '1000px'; // Set height to a fixed value (e.g., 500px)

                                                    var scriptElement = document.createElement('script');
                                                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                                                    vizElement.parentNode.insertBefore(scriptElement, vizElement);
                                                </script>
                                            `,
                                        }}
                                    />
                                </div>
                                {/* Third Tableau visualization */}
                                <div className="p-4 h-full min-h-[50vh] flex flex-col items-center justify-center rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50">
                                    <div
                                        className="tableauPlaceholder w-full h-full"
                                        id="viz1731654288676"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "1000px",
                                            minHeight: "500px",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: `
                                                <div class='tableauPlaceholder' id='viz1731654288676' style='position: relative'>
                                                    <noscript>
                                                        <a href='#'>
                                                            <img alt='Year(Date) vs Time, Temp DB' src='https://public.tableau.com/static/images/TH/THE-Arabic-NokiaYearDatevsTemperatureTime/YearDatevsTimeTempDB/1_rss.png' style='border: none' />
                                                        </a>
                                                    </noscript>
                                                    <object class='tableauViz' style='display:none;'>
                                                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                                                        <param name='embed_code_version' value='3' />
                                                        <param name='site_root' value='' />
                                                        <param name='name' value='THE-Arabic-NokiaYearDatevsTemperatureTime/YearDatevsTimeTempDB' />
                                                        <param name='tabs' value='no' />
                                                        <param name='toolbar' value='yes' />
                                                        <param name='static_image' value='https://public.tableau.com/static/images/TH/THE-Arabic-NokiaYearDatevsTemperatureTime/YearDatevsTimeTempDB/1.png' />
                                                        <param name='animate_transition' value='yes' />
                                                        <param name='display_static_image' value='yes' />
                                                        <param name='display_spinner' value='yes' />
                                                        <param name='display_overlay' value='yes' />
                                                        <param name='display_count' value='yes' />
                                                        <param name='language' value='en-US' />
                                                    </object>
                                                </div>
                                                <script type='text/javascript'>
                                                    var divElement = document.getElementById('viz1731654288676');
                                                    var vizElement = divElement.getElementsByTagName('object')[0];

                                                    // Set a fixed height to the Tableau viz element
                                                    vizElement.style.width = '100%';  // Set width to 100% of the container
                                                    vizElement.style.height = '1000px'; // Set height to a fixed value (e.g., 500px)

                                                    var scriptElement = document.createElement('script');
                                                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                                                    vizElement.parentNode.insertBefore(scriptElement, vizElement);
                                                </script>
                                            `,
                                        }}
                                    />
                                </div>

                                {/* Forth Tableau visualization */}
                                <div className="p-4 h-full min-h-[50vh] flex flex-col items-center justify-center rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50">
                                    <div
                                        className="tableauPlaceholder w-full h-full"
                                        id="viz1731649918883"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            height: "1000px",
                                            minHeight: "500px",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: `
                                                <div class='tableauPlaceholder' id='viz1731649918883' style='position: relative'>
                                                    <noscript>
                                                        <a href='#'>
                                                            <img alt='Images Count by Year DB' src='https://public.tableau.com/static/images/Ne/NewArabic-NokiaYearDatevsImagesCount/ImagesCountbyYearDB/1_rss.png' style='border: none' />
                                                        </a>
                                                    </noscript>
                                                    <object class='tableauViz' style='display:none;'>
                                                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                                                        <param name='embed_code_version' value='3' />
                                                        <param name='site_root' value='' />
                                                        <param name='name' value='NewArabic-NokiaYearDatevsImagesCount/ImagesCountbyYearDB' />
                                                        <param name='tabs' value='no' />
                                                        <param name='toolbar' value='yes' />
                                                        <param name='static_image' value='https://public.tableau.com/static/images/Ne/NewArabic-NokiaYearDatevsImagesCount/ImagesCountbyYearDB/1.png' />
                                                        <param name='animate_transition' value='yes' />
                                                        <param name='display_static_image' value='yes' />
                                                        <param name='display_spinner' value='yes' />
                                                        <param name='display_overlay' value='yes' />
                                                        <param name='display_count' value='yes' />
                                                        <param name='language' value='en-US' />
                                                    </object>
                                                </div>
                                                <script type='text/javascript'>
                                                    var divElement = document.getElementById('viz1731649918883');
                                                    var vizElement = divElement.getElementsByTagName('object')[0];

                                                    // Set a fixed height to the Tableau viz element
                                                    vizElement.style.width = '100%';  // Set width to 100% of the container
                                                    vizElement.style.height = '1000px'; // Set height to a fixed value (e.g., 500px)

                                                    var scriptElement = document.createElement('script');
                                                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                                                    vizElement.parentNode.insertBefore(scriptElement, vizElement);
                                                </script>
                                            `,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </div>
    );
}
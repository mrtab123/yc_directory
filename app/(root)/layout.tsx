
import Navbar from "@/components/ui/Navbar";
import React from "react";

export default function Layout({children}: Readonly<{children: React.ReactNode}> ){
    return (
        <main className="font-work-sans">
            <Navbar />
            {children}
        </main>
    )
}
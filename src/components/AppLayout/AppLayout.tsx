import React from "react"
import { ReactNode } from "react"
import Header from "../Navbar/Header"

import { Helmet } from "react-helmet";

<Helmet>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
    rel="stylesheet"
  />
</Helmet>

type AppLayoutProps = {
  children: ReactNode
}
export function AppLayout({children}:AppLayoutProps) {


  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      
      {/* className="flex-1 p-6 bg-light overflow-y-auto" */}
 
        <main >
          {children}
        </main>
      
    </div>
  )
}
import React from "react"
import { ReactNode } from "react"
import Header from "../Navbar/Header"

import { Helmet } from "react-helmet";
import Footer from "../../pages/footer";



type AppLayoutProps = {
  children: ReactNode
}
export function AppLayout({children}:AppLayoutProps) {


  return (
    <><Helmet>
        <title className="text-purple-700">Col'n Rows Tech Company</title>
        <link rel="icon" href="/logo2.png" sizes="512x512" type="image/png" />
        <meta name="description" content="Tech Company" />
      </Helmet>
    <div className="flex flex-col min-h-screen">
      <Header/>
      
      {/* className="flex-1 p-6 bg-light overflow-y-auto" */}
 
        <main >
          {children}
        </main>
    
    </div>
    </>
  )
}
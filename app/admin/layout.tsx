import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/app-sidebar";
import {cookies} from "next/headers";
import AdminAppHeader from "@/app/admin/adminComponents/appHeader";


type AdminLayoutProps = {
    children: React.ReactNode;
}

const AdminLayout = async ({children}:AdminLayoutProps) =>{
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
      <SidebarProvider defaultOpen={defaultOpen}>
          <div className="h-screen flex items-center w-full">
              <div>
                  <AppSidebar />
              </div>
              <div className="grow flex flex-col h-full justify-between">
                  <AdminAppHeader />
                  <section className="grow bg-gray-100 dark:bg-gray-950">
                      {children}
                  </section>
                  <footer className="border-gray-200 dark:border-gray-700 border-t h-12 px-5 shadow">
                      <div className="flex items-center justify-between h-full">
                        <span className="text-gray-400 dark:text-gray-200 text-sm font-medium">
                            COPYRIGHT © 2025 DashCode, All rights Reserved
                        </span>
                          <span className="text-gray-400 dark:text-gray-200 text-sm font-medium">
                            Hand-crafted & Made by Meesam
                        </span>
                      </div>
                  </footer>
              </div>
          </div>
      </SidebarProvider>

  )
}

export default AdminLayout;
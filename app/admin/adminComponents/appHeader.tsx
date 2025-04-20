import {SidebarTrigger} from "@/components/ui/sidebar";
import {ModeToggle} from "@/app/(common)/toggleTheme";
import React from "react";
import {
    Search,
    Mail,
    Bell,
} from "lucide-react"
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import AdminAppSearch from "@/app/admin/adminComponents/appSearch";

import AppUserProflePopover from "@/components/appUserProflePopover";

const RenderIcon = ({type}:{type:string})=>{

    const handleIconRender = () =>{
        switch(type){
            case "Bell":
                return <Bell size={18} className="text-gray-500" />;
            case "Inbox":
                return <Mail size={18} className="text-gray-500" />;
            default:
                return null;
        }
    }
    return(
        <div className="h-9 w-9 flex items-center justify-center border rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
            {
                handleIconRender()
            }
        </div>
    )
}


const AdminAppHeader = () =>{
   return (
       <header className="border-b border-gray-200 dark:border-gray-700 h-16 px-5 shadow">
           <div className="flex items-center justify-between h-full">
               <div>
                   <Dialog>
                       <DialogTrigger asChild>
                           <button className="flex gap-2 items-center cursor-pointer">
                               <Search size={15} className="text-gray-500" />
                               <span className="text-sm text-gray-500">
                                 Search...
                               </span>
                           </button>
                       </DialogTrigger>
                       <AdminAppSearch />
                   </Dialog>
               </div>
               <div className="flex items-center gap-4">
                   <div className="h-9 w-9 flex items-center justify-center border rounded-full text-gray-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900">
                       <SidebarTrigger />
                   </div>
                   <ModeToggle />
                   <RenderIcon type="Bell" />
                   <RenderIcon type="Inbox" />
                   <AppUserProflePopover />
               </div>
           </div>
       </header>
       )
}

export default AdminAppHeader
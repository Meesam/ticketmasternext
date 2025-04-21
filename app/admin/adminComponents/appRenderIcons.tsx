import {Bell, Mail} from "lucide-react";
import React from "react";

export const AppRenderIcons = ({type}:{type:string}) => {
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
};

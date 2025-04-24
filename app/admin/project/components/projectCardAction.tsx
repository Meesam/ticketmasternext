"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {MoreVertical, EyeIcon, EditIcon, TrashIcon} from "lucide-react";
import * as React from "react";

const ProjectCardAction  = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MoreVertical size={18} className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-pointer">
                    <EyeIcon />
                    <span className="text-xs">View</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                    <EditIcon />
                    <span className="text-xs">Edit</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer"                                                                                                                                                                                                                                        >
                    <TrashIcon />
                    <span className="text-xs">Delete</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProjectCardAction

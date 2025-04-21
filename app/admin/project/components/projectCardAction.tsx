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
                <MoreVertical size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <EyeIcon />
                    <span className="text-xs">View</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <EditIcon />
                    <span className="text-xs">Edit</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <TrashIcon />
                    <span className="text-xs">Delete</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProjectCardAction

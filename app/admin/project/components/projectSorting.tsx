import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ArrowDownUpIcon} from "lucide-react";
import * as React from "react";
import {Button} from "@/components/ui/button";


const ProjectSorting = () =>{
  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer">
                  <ArrowDownUpIcon />
                  Sort by
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer">
                  <span className="text-xs font-medium">Name</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                  <span className="text-xs font-medium">Start date</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" >
                  <span className="text-xs font-medium">End date</span>
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default ProjectSorting;
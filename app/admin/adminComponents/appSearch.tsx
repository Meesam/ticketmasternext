"use client"

import React from "react";
import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { Search } from "lucide-react"

const AdminAppSearch = () =>{
    const [search, setSearch] = React.useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="hidden">
                        <DialogTitle>Search</DialogTitle>
                    </div>

                    <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                        <Search size={15} className="text-gray-500" />
                        <input type="search" value={search} onChange={handleSearch} placeholder="Search..." className="text-gray-400 focus:outline-none" />
                    </div>
                </DialogHeader>
              <div>
                Search Content
              </div>
            <DialogFooter>

            </DialogFooter>
        </DialogContent>
    )
}

export default AdminAppSearch;
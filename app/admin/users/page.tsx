import ProjectFilter from "@/app/admin/project/components/projectFilter";
import ProjectSorting from "@/app/admin/project/components/projectSorting";
import ProjectAddEdit from "@/app/admin/project/components/projectAddEdit";
import React, {Suspense} from "react";
import Loading from "@/app/admin/project/loading";
import { DataTable } from "./data-table";
import {columns} from "@/app/admin/users/columns";
import {AppUser} from "@/types/globals";

async function getData(): Promise<AppUser[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f1",
            firstName: "Meesam",
            lastName: "pending",
            email: "m@example.com",
            createdDate:new Date()
        },
        {
            id: "728ed52f1",
            firstName: "Meesam",
            lastName: "pending",
            email: "m@example.com",
            createdDate:new Date()
        },
        {
            id: "728ed52f1",
            firstName: "Meesam",
            lastName: "pending",
            email: "m@example.com",
            createdDate:new Date()
        },
        {
            id: "728ed52f1",
            firstName: "Meesam",
            lastName: "pending",
            email: "m@example.com",
            createdDate:new Date()
        },
    ]
}

const Users = async ()=>{
    const data = await getData()


    return (
        <Suspense fallback={<Loading />}>
            <div className="w-full h-full flex flex-col gap-5 p-5">
                <div className="flex items-center justify-between w-full h-14">
                    <span className="font-medium  text-2xl">Users</span>
                    <div className="flex items-center gap-3">
                        <ProjectFilter />
                        <ProjectSorting />
                        <ProjectAddEdit />
                    </div>
                </div>
                <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </Suspense>

    )
}

export default Users;
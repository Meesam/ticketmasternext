"use client"

import { ProjectResponse} from "@/types/globals";
import ProjectCard from "@/app/admin/project/components/projectCard";
import ProjectFilter from "@/app/admin/project/components/projectFilter";
import ProjectSorting from "@/app/admin/project/components/projectSorting";
import ProjectAddEdit from "@/app/admin/project/components/projectAddEdit";
import {getAllProjects} from "@/app/admin/project/projectServices";
import React, {Suspense} from "react";
import Loading from "@/app/admin/project/loading";

const Project = ()=>{
   const [projects, setProjects] = React.useState([]);

    React.useEffect(()=>{
        const fetchProjects = async()=>{
            const res = await getAllProjects()
            setProjects(res.response)
        }
        fetchProjects()
    },[])

    console.log(projects)

    return (
        <Suspense fallback={<Loading />}>
            <div className="w-full h-full flex flex-col gap-5 p-5">
                <div className="flex items-center justify-between w-full h-14">
                    <span className="font-medium  text-2xl">Projects</span>
                    <div className="flex items-center gap-3">
                        <ProjectFilter />
                        <ProjectSorting />
                        <ProjectAddEdit />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        projects.map((product:ProjectResponse)=>{
                            return (
                                <div key={product.id}>
                                    <ProjectCard project={product} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </Suspense>

    )
}

export default Project;
import React from 'react';
import {ProjectResponse} from "@/types/globals";
import ProjectCardHeader from "@/app/admin/project/components/projectCardHeader";
import {Progress} from "@/components/ui/progress";
import moment from "moment";
import {
    ClockIcon,
} from "lucide-react"
import Image from "next/image";

interface ProjectCardProps {
    project: ProjectResponse;
}

const ProjectCard:React.FC<ProjectCardProps> = (
    {
        project
    } ) => {
    return (
        <div className="bg-white p-6 rounded-sm shadow">
            <div className="flex flex-col gap-3">
                <ProjectCardHeader title={project.projectTitle}/>
                <span className="text-sm text-gray-500 font-normal">{project.projectDescription}</span>
                <div className="flex items-center gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Start Date</span>
                        <span
                            className="text-xs text-gray-700 font-medium">{moment(project.projectStartDate).format("DD-MM-YYYY")}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">End Date</span>
                        <span
                            className="text-xs text-gray-700 font-medium">{moment(project.projectStartDate).format("DD-MM-YYYY")}</span>
                    </div>
                </div>
                <Progress value={80} className="w-full"/>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Assigned to</span>
                    <div className="flex items-center gap-1 px-2 py-1 bg-red-100 rounded-full">
                        <ClockIcon size={12} className="text-red-500"/>
                        <p className="text-xs font-normal text-red-500">3 days left</p>
                    </div>
                </div>
                <div className="flex items-center -space-x-1"><span
                    className="inline-flex items-center justify-center font-normal select-none shrink-0 overflow-hidden text-default-foreground hover:ring-default text-xs rounded-full h-6 w-6 shadow-none border-none bg-transparent hover:bg-transparent">
                    <Image
                    className="aspect-square h-full w-full object-cover" src="/av-1.svg" alt="" width={100} height={100}/></span><span
                    className="inline-flex items-center justify-center font-normal select-none shrink-0 overflow-hidden text-default-foreground hover:ring-default text-xs rounded-full h-6 w-6 shadow-none border-none bg-transparent hover:bg-transparent">
                    <Image alt=""
                    className="aspect-square h-full w-full object-cover" width={100} height={100} src="/av-2.svg"/></span><span
                    className="inline-flex items-center justify-center font-normal select-none shrink-0 overflow-hidden text-default-foreground hover:ring-default text-xs rounded-full h-6 w-6 shadow-none border-none bg-transparent hover:bg-transparent">
                    <Image alt=""
                    className="aspect-square h-full w-full object-cover" width={100} height={100} src="/av-3.svg"/></span>
                    <div
                        className="text-xs text-gray-500 ring-1 rounded-full h-6 w-6 flex flex-col justify-center items-center">+2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
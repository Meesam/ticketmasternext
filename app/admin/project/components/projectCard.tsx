import React from 'react';
import {ProjectResponse} from "@/types/globals";
import ProjectCardHeader from "@/app/admin/project/components/projectCardHeader";

interface ProjectCardProps {
    project: ProjectResponse;
}

const ProjectCard:React.FC<ProjectCardProps> = (
    {
        project
    } ) => {
    return (
        <div className="w-[500px] bg-white p-3 rounded-lg shadow">
           <div className="flex flex-col gap-3">
               <ProjectCardHeader title={project.projectTitle} />
           </div>
        </div>
    );
};

export default ProjectCard;
import {Button} from "@/components/ui/button";
import {Filter, PlusIcon, ArrowDownUpIcon} from "lucide-react";
import {ProjectResponse} from "@/types/globals";
import ProjectCard from "@/app/admin/project/components/projectCard";

const products:ProjectResponse[] = [
    {
        id:1,
        projectTitle:'First Project',
        projectDescription:"First project description",
        projectStartDate:new Date(),
        projectEndDate:new Date(),
    },
    {
        id:2,
        projectTitle:'Second Project',
        projectDescription:"Second project description",
        projectStartDate:new Date(),
        projectEndDate:new Date(),
    }
]


const Project = ()=>{
    return (
        <div className="w-full h-full flex flex-col gap-5 p-5">
           <div className="flex items-center justify-between w-full h-14">
              <span className="font-medium  text-2xl">Projects</span>
               <div className="flex items-center gap-3">
                   <Button>
                       <Filter />
                       Filter
                   </Button>
                   <Button>
                       <PlusIcon />
                       Add New
                   </Button>
                   <Button>
                       <ArrowDownUpIcon />
                       Sort by
                   </Button>
               </div>
           </div>
            <div className="grow">
                <div className="flex flex-wrap items-center gap-3">
                    {
                        products.map((product:ProjectResponse)=>{
                            return (
                                <div key={product.id}>
                                    <ProjectCard project={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;
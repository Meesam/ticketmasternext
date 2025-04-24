import ProjectCardAction from "@/app/admin/project/components/projectCardAction";

const ProjectTitleFirstLetter = ({name}:{name:string}) =>{
  return (
      <div className="h-10 w-10 rounded-sm shadow-2xl text-white flex items-center justify-center text-xl leading-tight bg-primary">
          {name.charAt(0).toUpperCase()}
      </div>
  )
}

const ProjectCardHeader  = ({title}:{title:string}) => {
    return (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
              <ProjectTitleFirstLetter name={title} />
              <span className="text-base font-medium">{title}</span>
          </div>
            <ProjectCardAction />
        </div>
    );
};

export default ProjectCardHeader

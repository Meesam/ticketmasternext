export interface LoginRequestParams {
    userName: string;
    password: string;
}

export interface LoginResponse {
    status: string;
    token: string;
    expiration:string;
    userId:string;
    userName:string;
    email:string;
    Roles:string[];
    FirstName:string;
    LastName:string;
}

export interface ProjectResponse {
    id:number;
    projectTitle: string;
    projectDescription:string;
    projectStartDate:Date
    projectEndDate:Date,
}

export interface AppUser {
    id:string;
    email:string;
    firstName:string;
    lastName:string;
    createdDate:Date;
}
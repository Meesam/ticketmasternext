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
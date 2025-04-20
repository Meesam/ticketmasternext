import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import dotenv from 'dotenv';
import {LoginRequestParams} from "@/types/globals";

console.log('BASE_API_PATH', process.env.BASE_API_PATH);

dotenv.config();
const client = axios.create({
    baseURL: process.env.BASE_API_PATH || "https://localhost:7241/api",
});

const config: AxiosRequestConfig = {
    headers: {
        'Accept': 'application/json',
    } as RawAxiosRequestHeaders,
};



export const Login = async (payload:LoginRequestParams )=>{
    debugger
    try {
        const response: AxiosResponse = await client.post(`/Authentication/login`, payload , config);
        return response.data;
    } catch (err) {
        return err;
    }
}


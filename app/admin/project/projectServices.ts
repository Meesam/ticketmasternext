"use client"

import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import dotenv from 'dotenv';
import {LoginResponse} from "@/types/globals";

const userString:string | null  = localStorage.getItem("userDetails")
let userData:LoginResponse = {
    status: '',
    token: '',
    expiration: '',
    userId: '',
    userName: '',
    email: '',
    Roles: [],
    FirstName: '',
    LastName: ''
};
if (userString) {
   userData = JSON.parse(userString)
}

dotenv.config();
const client = axios.create({
    baseURL: process.env.BASE_API_PATH || "https://localhost:7241/api",
});

const config: AxiosRequestConfig = {
    headers: {
        'Accept': 'application/json',
        'Authorization':`Bearer ${userData.token}`
    } as RawAxiosRequestHeaders,
};

export const getAllProjects = async ()=>{
    try {
        const response: AxiosResponse = await client.get(`https://localhost:7241/api/Project/getAllProject`, config);
        return response.data;
    } catch (err) {
        return err;
    }
}


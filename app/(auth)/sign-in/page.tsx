"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {Login} from "@/app/(auth)/authServices";
import {LoginRequestParams, LoginResponse} from "@/types/globals";
import { useRouter } from 'next/navigation'

const signInFormSchema = z.object({
    username: z.string().min(5, {
        message: "Username must be at least 5 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 5 characters.",
    }),
})

const SignIn =()=> {
    const router = useRouter()

    const form = useForm<z.infer<typeof signInFormSchema>>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof signInFormSchema>)=> {
       console.log(data)
       const payload :LoginRequestParams ={
           userName:data.username,
           password:data.password,
       }
       const response:LoginResponse = await  Login(payload)
        if(response.status === "Success"){
          localStorage.setItem("userDetails", JSON.stringify(response))
          router.push('/admin/project')
        }
    }

    return (
        <div className="w-1/4 border border-indigo-700 px-5 py-8 rounded-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input className="border-indigo-700 text-indigo-800 font-medium" placeholder="User Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="border-indigo-700 text-indigo-800 font-medium" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember Me
                            </label>
                        </div>
                        <Button type="submit" className="cursor-pointer bg-indigo-800">Submit</Button>
                    </div>
                </form>
            </Form>
        </div>

    )
}

export default SignIn

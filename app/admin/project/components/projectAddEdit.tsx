"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {Calendar as CalendarIcon, PlusIcon} from "lucide-react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z} from "zod"
import moment from "moment";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea"
import React from "react";

const projectSchema = z.object({
    projectTitle: z.string().min(5, {
        message: "Project title must be at least 5 characters.",
    }),
    projectDescription: z.string().min(6, {
        message: "Project description must be at least 5 characters.",
    }),
    projectStartDate: z.string().min(6, {
        message: "End date cannot be past date",
    }),
   projectEndDate: z.string().min(6, {
       message: "End date cannot be past date",
   })

})

const ProjectAddEdit = () => {

    const form = useForm<z.infer<typeof projectSchema>>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            projectTitle: "",
            projectDescription: "",
            projectStartDate:undefined,
            projectEndDate:undefined
        },
    })

    const handleSelectStartDate = (date: Date | undefined, dateType:string) => {
        form.setValue(dateType ==="startDate" ? "projectStartDate" :"projectEndDate", moment(date).format("DD/MM/YYYY"), { shouldValidate: true })
    }

    const onSubmit = async (data: z.infer<typeof projectSchema>)=> {
        console.log(data)

        /*const payload :LoginRequestParams ={
            userName:data.username,
            password:data.password,
        }*/
       // const response:LoginResponse = await  Login(payload)
        //if(response.status === "Success"){
            //localStorage.setItem("userDetails", JSON.stringify(response))
            //router.push('/admin/project')
        //}
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">
                    <PlusIcon />
                    Add New
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Project</DialogTitle>
                </DialogHeader>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                            <FormField
                                control={form.control}
                                name="projectTitle"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Project Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="projectStartDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Start date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <div className="relative">
                                                        <CalendarIcon size={16} className="absolute left-2 top-2" />
                                                        <Input placeholder="Start date" {...field} className="px-8" />
                                                    </div>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        onSelect={(date:Date | undefined)=>handleSelectStartDate(date, "startDate")}
                                                        initialFocus
                                                        {...field}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="projectEndDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project End date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <div className="relative">
                                                        <CalendarIcon size={16} className="absolute left-2 top-2" />
                                                        <Input placeholder="End date" {...field} className="px-8" />
                                                    </div>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        onSelect={(date:Date | undefined)=>handleSelectStartDate(date, "endDate")}
                                                        initialFocus
                                                        {...field}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="projectDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Description" id="message" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center justify-between">
                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </div>
                        </form>
                    </Form>
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default ProjectAddEdit

"use client"

import { Home, Settings, FolderKanbanIcon, UsersIcon, ListTodoIcon, SheetIcon } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Menu items.
const items = [
    {
        title: "Home",
        url: "/admin/dashboard",
        icon: Home,
    },
    {
        title: "Project",
        url: "/admin/project",
        icon: FolderKanbanIcon,
    },
    {
        title: "Users",
        url: "/admin/users",
        icon: UsersIcon,
    },
    {
        title: "Tasks",
        url: "/admin/tasks",
        icon: ListTodoIcon,
    },
    {
        title: "Sprints",
        url: "/admin/sprints",
        icon: SheetIcon,
    },
    {
        title: "Settings",
        url: "/admin/setting",
        icon: Settings,
    },
]

export function AppSidebar() {
    const pathname = usePathname();
    return (
        <Sidebar>
            <SidebarContent className="bg-white dark:bg-gray-950">
                <Image
                    className="dark:invert mt-5 ml-4"
                    src="/logo-light-full.png"
                    alt="App logo"
                    width={130}
                    height={38}
                    priority
                />
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className={clsx({"bg-primary text-white": item.url === pathname})}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

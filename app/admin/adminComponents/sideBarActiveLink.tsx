"use client"

import { usePathname } from 'next/navigation';

interface SideBarActiveLinkProps {
   children: React.ReactNode;
   title: string
   url: string;
}
const SideBarActiveLink:React.FC<SideBarActiveLinkProps> = ({children, url, title}) =>{
    const pathname = usePathname();

    console.log(pathname);

    return (
        <a href={url}>
            {children}
            <span>{title}</span>
        </a>
    )
}

export default SideBarActiveLink;
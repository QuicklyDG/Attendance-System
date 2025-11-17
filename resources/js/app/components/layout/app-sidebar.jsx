import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, User } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '../sidebar';
import { NavFooter } from './nav-footer';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';

const mainNavItems = [
    {
        title: 'Dashboard',
        href: '/administrator/dashboard',
        icon: LayoutGrid,
    },
    // {
    //     title: 'Users',
    //     href: '/administrator/users',
    //     icon: User,
    //     children: [
    //         {
    //             title: 'View Users',
    //             href: '/administrator/users/users1',
    //         },
    //         {
    //             title: 'Create User',
    //             href: '/administrator/users/create',
    //         },
    //     ],
    // },
    // {
    //     title: 'Departments',
    //     href: '/administrator/departments',
    //     icon: User,
    //     children: [
    //         {
    //             title: 'View Departments',
    //             href: '/administrator/departments/departments1',
    //         },
    //         {
    //             title: 'Create Department',
    //             href: '/administrator/departments/create',
    //         },
    //     ],
    // },
];

const footerNavItems = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={'/administrator/dashboard'} prefetch>
                                <div className="ml-1 grid flex-1 text-left text-sm">
                                    <span className="mb-0.5 truncate leading-tight font-semibold">
                                        Attendance System
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

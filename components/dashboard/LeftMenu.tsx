"use client";

import { Home, User, Settings, LogOut, Users, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { logout } from "@/services/auth";
import HomeDialog from "./dialogs/HomeDialog";
import ProfileDialog from "./dialogs/ProfileDialog";
import FriendsDialog from "./dialogs/FriendsDialog";

export default function LeftMenu() {
    const router = useRouter();
    const pathname = usePathname();
    const [openDialog, setOpenDialog] = useState<string | null>(null);

    const menuItems = [
        {
            icon: <Home className="w-5 h-5" />,
            label: "Home",
            link: "/dashboard",
            dialogContent: {
                title: "Welcome Home",
                description: "Your personal dashboard overview",
                content: <HomeDialog />
            }
        },
        {
            icon: <User className="w-5 h-5" />,
            label: "Profile",
            link: "/profile",
            dialogContent: {
                title: "Your Profile",
                description: "Manage your personal information",
                content: <ProfileDialog />
            }
        },
        {
            icon: <Users className="w-5 h-5" />,
            label: "Friends",
            link: "/friends",
            dialogContent: {
                title: "Friends",
                description: "Connect with your university peers",
                content: <FriendsDialog />
            }
        },
        { icon: <BookOpen className="w-5 h-5" />, label: "Courses", link: "/courses" },
        { icon: <Calendar className="w-5 h-5" />, label: "Events", link: "/events" },
        { icon: <Settings className="w-5 h-5" />, label: "Settings", link: "/settings" },
    ];

    const handleMenuClick = (e: React.MouseEvent, item: any) => {
        e.preventDefault();
        setOpenDialog(item.label);
    };

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <nav className="sticky top-4">
            <div className="mb-8 p-3">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    UniMeets
                </h2>
            </div>
            <ul className="space-y-2">
                {menuItems.map((item, index) => {
                    const isActive = pathname === item.link;
                    return (
                        <li key={index}>
                            <Dialog open={openDialog === item.label} onOpenChange={(open) => !open && setOpenDialog(null)}>
                                <DialogTrigger asChild>
                                    <Link
                                        href={item.link}
                                        onClick={(e) => handleMenuClick(e, item)}
                                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                                            isActive
                                                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border-r-4 border-blue-500'
                                                : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Link>
                                </DialogTrigger>
                                <DialogContent className="bg-gray-900 border border-gray-800">
                                    <DialogHeader>
                                        <DialogTitle className="text-white">{item.dialogContent?.title}</DialogTitle>
                                        <DialogDescription className="text-gray-400">
                                            {item.dialogContent?.description}
                                        </DialogDescription>
                                    </DialogHeader>
                                    {item.dialogContent?.content}
                                </DialogContent>
                            </Dialog>
                        </li>
                    );
                })}
            </ul>
            <div className="mt-8 border-t border-gray-700 pt-4">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 p-3 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 w-full transition-all duration-200"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </nav>
    );
}
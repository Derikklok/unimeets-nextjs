"use client";

import { Button } from "@/components/ui/button";
import { Mail, Briefcase, MapPin, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export default function ProfileDialog() {
    return (
        <div className="space-y-6 mt-4">
            <div className="flex items-center space-x-4">
                <div className="relative w-20 h-20">
                    <Image
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                        alt="Profile"
                        fill
                        className="rounded-full object-cover border-2 border-gray-700"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                </div>
                <div>
                    <h3 className="font-semibold text-xl text-white">John Doe</h3>
                    <p className="text-gray-400">Computer Science Student</p>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>john.doe@university.edu</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                    <Briefcase className="w-4 h-4" />
                    <span>3rd Year Student</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>University of Technology</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                    <LinkIcon className="w-4 h-4" />
                    <span>github.com/johndoe</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">Edit Profile</Button>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">View Full Profile</Button>
            </div>
        </div>
    );
}
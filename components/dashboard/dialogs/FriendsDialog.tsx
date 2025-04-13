"use client";

import { Button } from "@/components/ui/button";
import { Search, UserPlus, MessageCircle } from "lucide-react";

export default function FriendsDialog() {
    const friends = [
        { name: "Alice Smith", course: "Computer Science", status: "Online" },
        { name: "Bob Johnson", course: "Engineering", status: "Offline" },
        { name: "Carol White", course: "Mathematics", status: "Online" },
    ];

    return (
        <div className="space-y-6 mt-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search friends..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="space-y-4">
                {friends.map((friend, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                            <div>
                                <h4 className="font-medium text-gray-200">{friend.name}</h4>
                                <p className="text-sm text-gray-400">{friend.course}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <MessageCircle className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <UserPlus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
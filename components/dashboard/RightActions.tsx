"use client";

import { PlusCircle, Bell, MessageSquare, Search, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RightActions() {
    return (
        <div className="space-y-6 sticky top-4">
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-gray-700/50 rounded-lg pl-10 pr-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700">
                <h2 className="text-lg font-semibold mb-4 text-white">Quick Actions</h2>
                <div className="space-y-2">
                    <Button 
                        variant="ghost" 
                        className="w-full justify-start gap-3 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                        <PlusCircle className="w-5 h-5" />
                        Create Post
                    </Button>
                    <Button 
                        variant="ghost" 
                        className="w-full justify-start gap-3 hover:bg-purple-500/10 hover:text-purple-400"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Messages
                    </Button>
                    <Button 
                        variant="ghost" 
                        className="w-full justify-start gap-3 hover:bg-pink-500/10 hover:text-pink-400"
                    >
                        <Bell className="w-5 h-5" />
                        Notifications
                    </Button>
                </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    Trending
                </h2>
                <div className="space-y-3">
                    {['#WebDev', '#AIResearch', '#UniHacks'].map((topic) => (
                        <div key={topic} className="text-gray-400 hover:text-blue-400 cursor-pointer">
                            {topic}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
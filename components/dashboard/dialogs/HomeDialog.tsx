"use client";

import { Activity, Bell, BookOpen, Star } from "lucide-react";

export default function HomeDialog() {
    const stats = [
        { icon: <Activity className="w-5 h-5 text-blue-400" />, label: "Latest Activity", value: "No new activities" },
        { icon: <Bell className="w-5 h-5 text-purple-400" />, label: "Notifications", value: "You're all caught up!" },
        { icon: <BookOpen className="w-5 h-5 text-green-400" />, label: "Active Courses", value: "3 Ongoing" },
        { icon: <Star className="w-5 h-5 text-yellow-400" />, label: "Achievements", value: "12 Earned" }
    ];

    return (
        <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                            {stat.icon}
                            <h3 className="font-semibold text-gray-200">{stat.label}</h3>
                        </div>
                        <p className="text-sm text-gray-400">{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
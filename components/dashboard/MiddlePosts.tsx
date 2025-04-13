"use client";

import { Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";

export default function MiddlePosts() {
    const posts = [
        {
            id: 1,
            user: {
                name: "Sarah Johnson",
                avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
                role: "Computer Science"
            },
            content: "Just finished the first phase of my AI-powered study assistant. Looking for beta testers! 🚀 #AI #StudentProject",
            image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
            likes: 24,
            comments: 8,
            timestamp: "2h ago"
        },
        {
            id: 2,
            user: {
                name: "Alex Chen",
                avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                role: "Engineering"
            },
            content: "Our robotics team just won first place in the national competition! Proud of everyone's hard work and dedication. 🏆 #Robotics #Engineering",
            image: "https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg",
            likes: 156,
            comments: 32,
            timestamp: "4h ago"
        },
        {
            id: 3,
            user: {
                name: "Emily Martinez",
                avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
                role: "Medicine"
            },
            content: "Study group for tomorrow's anatomy exam in the library at 6 PM. Bring your notes! 📚 #MedSchool #StudyGroup",
            likes: 18,
            comments: 12,
            timestamp: "5h ago"
        },
        {
            id: 4,
            user: {
                name: "David Kim",
                avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
                role: "Computer Science"
            },
            content: "Just launched my first mobile app! Check out 'StudyBuddy' on the App Store. Would love your feedback! 📱 #MobileApp #Development",
            image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
            likes: 89,
            comments: 15,
            timestamp: "6h ago"
        },
        {
            id: 5,
            user: {
                name: "Maria Silva",
                avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
                role: "Psychology"
            },
            content: "Interesting seminar today on cognitive behavioral therapy. Here are my key takeaways: \n\n1. The importance of mindfulness\n2. Breaking negative thought patterns\n3. Building resilience\n\n#Psychology #MentalHealth",
            likes: 45,
            comments: 7,
            timestamp: "8h ago"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Create Post Section */}
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <input
                        type="text"
                        placeholder="Share something with your community..."
                        className="w-full bg-gray-700/50 rounded-lg px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
                {posts.map((post) => (
                    <article key={post.id} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                        {/* Post Header */}
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={post.user.avatar}
                                alt={post.user.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-white">{post.user.name}</h3>
                                <p className="text-sm text-gray-400">{post.timestamp}</p>
                            </div>
                        </div>

                        {/* Post Content */}
                        <p className="text-gray-200 mb-4">{post.content}</p>
                        {post.image && (
                            <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt="Post image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Post Actions */}
                        <div className="flex gap-6 pt-4 border-t border-gray-700">
                            <button className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors">
                                <Heart className="w-5 h-5" />
                                <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
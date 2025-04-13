import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Lock, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
    return (
        <main className="min-h-screen bg-gray-900">
            <div className="flex min-h-screen">
                {/* Left Section - Image */}
                <div className="hidden lg:flex lg:w-1/2 relative">
                    <Image
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                        alt="Students collaborating"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent flex items-center">
                        <div className="px-12">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Welcome Back to UniMeets
                            </h2>
                            <p className="text-gray-300 text-lg max-w-md">
                                Connect with your university community, share ideas, and collaborate on amazing projects.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:px-8 py-12">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-white">Sign in to your account</h1>
                            <p className="mt-2 text-gray-400">
                                Or{' '}
                                <Link href="/register" className="text-blue-400 hover:text-blue-300">
                                    create a new account
                                </Link>
                            </p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="space-y-3">
                            <Button variant="outline" className="w-full border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-blue-400" size="lg">
                                <Github className="mr-2 h-5 w-5" />
                                Continue with Github
                            </Button>
                            <Button variant="outline" className="w-full border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-blue-400" size="lg">
                                <Twitter className="mr-2 h-5 w-5" />
                                Continue with Twitter
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        {/* Login Form Placeholder */}
                        <div className="space-y-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500"
                                    />
                                    <label className="ml-2 text-sm text-gray-400">Remember me</label>
                                </div>
                                <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                                    Forgot password?
                                </Link>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90" size="lg">
                                Sign in
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
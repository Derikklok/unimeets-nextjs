"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Lock, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { login } from '@/services/auth';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    // Show success message if redirected from register
    const justRegistered = searchParams.get('registered') === 'true';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await login({
                email: formData.email,
                password: formData.password
            });

            if (response.success) {
                // Handle successful login - redirect to dashboard
                router.push('/dashboard');
            } else {
                throw new Error(response.message);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

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
                        {justRegistered && (
                            <div className="p-3 rounded bg-green-500/10 border border-green-500 text-green-500">
                                Registration successful! Please log in.
                            </div>
                        )}

                        {error && (
                            <div className="p-3 rounded bg-red-500/10 border border-red-500 text-red-500">
                                {error}
                            </div>
                        )}

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

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500"
                                    />
                                    <label className="ml-2 text-sm text-gray-400">Remember me</label>
                                </div>
                                <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                                    Forgot password?
                                </Link>
                            </div>
                            <Button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90" 
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
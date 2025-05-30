"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Lock, User, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { register } from '@/services/auth';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        acceptTerms: false
    });

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
            if (!formData.acceptTerms) {
                throw new Error('Please accept the terms and conditions');
            }

            await register({
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            // Redirect to login page on success
            router.push('/login?registered=true');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-900">
            <div className="flex min-h-screen">
                {/* Left Section - Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:px-8 py-12">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-white">Create your account</h1>
                            <p className="mt-2 text-gray-400">
                                Already have an account?{' '}
                                <Link href="/login" className="text-blue-400 hover:text-blue-300">
                                    Sign in
                                </Link>
                            </p>
                        </div>

                        {/* Social Register Buttons */}
                        <div className="space-y-3">
                            <Button variant="outline" className="w-full border-gray-700  text-gray-700 hover:bg-gray-800 hover:text-blue-400" size="lg">
                                <Github className="mr-2 h-5 w-5" />
                                Sign up with Github
                            </Button>
                            <Button variant="outline" className="w-full border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-blue-400"  size="lg">
                                <Twitter className="mr-2 h-5 w-5" />
                                Sign up with Twitter
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-900 text-gray-400">Or register with email</span>
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 rounded bg-red-500/10 border border-red-500 text-red-500">
                                {error}
                            </div>
                        )}

                        {/* Register Form */}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Username"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
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
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500"
                                    required
                                />
                                <label className="ml-2 text-sm text-gray-400">
                                    I agree to the{' '}
                                    <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                                        Terms of Service
                                    </Link>
                                    {' '}and{' '}
                                    <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                            <Button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90" 
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="hidden lg:flex lg:w-1/2 relative">
                    <Image
                        src="https://images.pexels.com/photos/7976042/pexels-photo-7976042.jpeg"
                        alt="Students collaborating"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-gray-900/90 to-transparent flex items-center justify-end">
                        <div className="px-12">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Join UniMeets Today
                            </h2>
                            <p className="text-gray-300 text-lg max-w-md">
                                Connect with fellow students, share your ideas, and be part of an amazing university community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
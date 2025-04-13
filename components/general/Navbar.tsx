import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white-950/80">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-white">
                            Uni<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Meets</span>
                        </h1>
                    </Link>

                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-gray-300 hover:text-blue-400 transition-colors">
                            Sign in
                        </Link>
                        <Link href="/register">
                            <Button variant="default" 
                                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
import { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse } from "@/types/auth";

const API_URL = "http://localhost:8080/api/users";

export async function register(data: RegisterRequest): Promise<RegisterResponse> {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Registration failed');
    }

    return response.json();
}

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Login failed');
    }

    return data;
}

export function logout(): void {
    // Clear all items from localStorage
    localStorage.clear();
    // Or if you want to clear specific items:
    // localStorage.removeItem('user');
    // localStorage.removeItem('token');
}
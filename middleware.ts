import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    // List of paths where navbar should be hidden
    const protectedRoutes = ['/dashboard']

    // Add isProtectedRoute flag to headers if the current path is in protectedRoutes
    const response = NextResponse.next()
    response.headers.set('x-protected-route', protectedRoutes.includes(path).toString())

    return response
}

export const config = {
    matcher: ['/dashboard']
}
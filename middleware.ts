import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  res.headers.set('Access-Control-Allow-Origin', '*')
  res.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204, headers: res.headers })
  }

  return res
}

export const config = {
  matcher: '/.well-known/:path*',
}

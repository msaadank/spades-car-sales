import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl.clone()

  console.log(`Path: ${url.pathname}, Token: ${token}`)

  if(token) {
    if(
        url.pathname === '/admin/spades-car-sales/login'
    ) {
        url.pathname = '/admin-pannel'
        return NextResponse.redirect(url)
    }
  } else {
    if(url.pathname.startsWith('/admin-pannel')){
        url.pathname = '/admin/spades-car-sales/login'
        return NextResponse.redirect(url)
    }
  }
  
  return NextResponse.next()
}

export const config = {
    matcher: [
        '/admin/spades-car-sales/login',
        '/admin-pannel/:path*'
    ]
}
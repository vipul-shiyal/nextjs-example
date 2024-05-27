import { sessionStatus } from "@/utils/session";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/middlewareside", "/profile"];


 export default function middleware(request:NextRequest) {
  
  if(!sessionStatus && protectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL("/", request.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
 }


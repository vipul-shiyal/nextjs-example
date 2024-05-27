"use client"
import { sessionStatus } from "@/utils/session";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default function withAuth(Component: any){
  return function WithAuth(props: any){
    useEffect(() => {
      if(!sessionStatus) {
        redirect('/')
      }
    }, [])

    if(!sessionStatus) {
      return null
    }
    
    return <Component {...props} />
  }
}


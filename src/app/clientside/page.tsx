"use client"

import { sessionStatus } from "@/utils/session";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

// sessionStatus
const clientSide = () => {
  useLayoutEffect(() => {
    if(!sessionStatus) {
      redirect('/')
    }
  }, [])

  return (
    <div>
      <h1>This page is protected route on client side</h1>
    </div>
  );
};

export default clientSide;

'use client'
import React from 'react'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Admin = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          redirect("/");
        },
      });
  return (
    <div>Admin</div>
  )
}

export default Admin
"use client";

import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import AdminLayout from "./layout";
import Image from "next/image";
import logo from '@/public/logo.svg'
import AddCarIcon from "@/public/addCarIcon";
import CarIcon from "@/public/carIcon";
import Link from "next/link";

const AdminPannel = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session || !session.user) {
      return;
    }
  }, []);

  if (status === "loading") {
    return (
        <p>Loading...</p>
    );
  }

  if (!session || !session.user) {
    return (
        <p>Please login First</p>
    );
  }
  if (session.user.role !== "admin") {
    return (
        <p>You are not an Admin! Unauthorized access</p>
    );
  }
  return (
      <div className="col-start-2 col-end-7 row-start-2 row-end-11 border-[1px] border-zinc-700 grid md:px-5 px-3 py-5 gap-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        Hello
      </div>
  );
};

export default AdminPannel;

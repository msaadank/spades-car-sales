"use client";

import AddCarIcon from "@/public/addCarIcon";
import CarIcon from "@/public/carIcon";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { User } from "next-auth";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  return (
    <div className="h-screen">
      <main>
        <div className="grid grid-cols-[repeat(6,1fr)] grid-rows-[repeat(10,1fr)] w-full h-screen">
          <div className="py-4 col-start-1 col-end-2 row-start-1 row-end-11 border-[1px] border-zinc-700">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Logo"
                width={45}
                className="ml-4 hover:scale-110 transition-all duration-150"
              />
            </Link>
            <div className="mt-10 flex flex-col w-full">
              <Link
                href={"/admin-pannel"}
                className="flex items-center gap-4 px-4 w-full h-14"
              >
                <CarIcon color="white" width="40" />
                <p className="font-bold hidden md:block text-sm">All Cars</p>
              </Link>
              <Link
                href={"/admin-pannel/add-new-car"}
                className="flex items-center gap-4 px-4 w-full h-14"
              >
                <AddCarIcon color="white" width="40" />
                <p className="font-bold hidden md:block text-sm">Add new Car</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-end items-center pr-5 gap-3 col-start-2 col-end-7 row-start-1 row-end-2 border-[1px] border-zinc-700">
            <div className="w-8 h-8 bg-purple-500 rounded-full" />
            <p>{user?.email?.split("@")[0]}</p>
            <LogOutIcon
              className="text-red-500 cursor-pointer"
              onClick={() => signOut()}
            />
          </div>
          <div className="flex-center col-start-2 col-end-7 row-start-2 row-end-11 w-full h-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

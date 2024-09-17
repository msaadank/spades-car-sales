"use client";

import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "@/public/logo.svg";
import { CustomButton } from "@/components";
import { useRouter } from "next/navigation";
import * as z from "zod"
import { loginVerification } from "@/schemas/loginSchema";
import { signIn } from "next-auth/react";

interface FormData {
  identifier: string;
  password: string
}

const Login = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<z.infer<typeof loginVerification>>({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const router = useRouter()

  const onSubmit = async (data: z.infer<typeof loginVerification>) => {
    const result = await signIn('credentials', {
      redirect: false,
      identifier: data.identifier,
      password: data.password
    })

    if(result?.error){}
    if(result?.url){
      router.replace('/admin-pannel')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-col items-center gap-2 mb-5">
          <Image src={logo} alt="logo" height={60} width={60} />
          <p className="font-bold text-xl">Admin Login</p>
        </div>
        <input
          {...register("identifier", {
            required: "Email is required",
            pattern: {value: /^\S+@\S+$/i, message: "Invalid email entered"}
          })}
          type="text"
          className="bg-zinc-700 text-white text-lg px-4 py-2 rounded-lg"
          placeholder="Email"
        />
        {errors.identifier && (
          <p>{errors.identifier.message}</p>
        )}
        <input
          {...register("password", {
            required: "Password is required to login",
          })}
          type="password"
          className="bg-zinc-700 text-white text-lg px-4 py-2 rounded-lg"
          placeholder="Password"
        />
        {errors.password && (
          <p>{errors.password.message}</p>
        )}
        {
          isSubmitting ? (
            <CustomButton
              title="Logging In..."
              containerStyles="bg-gradient-to-r from-[#DCAC26] to-[#ECC547] rounded-xl font-bold w-full mt-3"
            />
          ) : (
            <CustomButton
              title="Login"
              containerStyles="bg-gradient-to-r from-[#DCAC26] to-[#ECC547] rounded-xl font-bold w-full mt-3"
              btnType="submit"
            />
          )
        }
      </div>
    </form>
  );
};

export default Login;

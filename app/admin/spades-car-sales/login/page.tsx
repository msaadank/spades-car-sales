"use client";

import Image from "next/image";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "@/public/logo.svg";
import { CustomButton } from "@/components";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { loginVerification } from "@/schemas/loginSchema";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Eye, EyeOffIcon } from "lucide-react";


const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<z.infer<typeof loginVerification>>({
    resolver: zodResolver(loginVerification),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof loginVerification>) => {
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (result?.error) {
      toast.error(result.error);
    }
    if (result?.url) {
      router.replace("/admin-pannel");
      toast.success("Successfully logged in!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-screen flex items-center justify-center"
    >
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-col items-center gap-2 mb-5">
          <Image src={logo} alt="logo" height={60} width={60} />
          <p className="font-bold text-xl">Admin Login</p>
        </div>
        <div>
          <input
            {...register("identifier", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email entered",
              },
            })}
            type="text"
            className="bg-zinc-700 text-white text-lg px-4 py-2 rounded-lg"
            placeholder="Email"
          />
          {errors.identifier && <p className="text-red-500">{errors.identifier.message}</p>}
        </div>
        <div>
          <div className="relative">
            <input
              {...register("password", {
                required: "Password is required to login",
              })}
              type={showPassword ? "text" : "password"}
              className="bg-zinc-700 text-white text-lg px-4 py-2 rounded-lg"
              placeholder="Password"
            />
            <EyeOffIcon onClick={() => setShowPassword(true)} className={`${showPassword ? "hidden" : "absolute"} top-[25%] text-zinc-400 right-2 cursor-pointer bg-zinc-700 w-6`}/>
            <Eye onClick={() => setShowPassword(false)} className={`${showPassword ? "absolute" : "hidden"} absolute top-[25%] text-zinc-400 right-2 cursor-pointer bg-zinc-700 w-6`}/>
          </div>
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        {isSubmitting ? (
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
        )}
      </div>
    </form>
  );
};

export default Login;

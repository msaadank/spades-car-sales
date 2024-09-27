"use client";

import { addNewCarValidation } from "@/schemas/addNewCar";
import { ApiResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { any, string, z } from "zod";
import { carModels, fuelType, years } from "@/constants/cars";

const page = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm<z.infer<typeof addNewCarValidation>>({
    resolver: zodResolver(addNewCarValidation),
    defaultValues: {
      title: "",
      description: "",
      make: "",
      model: "",
      variant: "",
      year: 0,
      price: "",
      color: "",
      gear: "",
      fuel: "",
      mileage: "",
      images: [],
    },
  });

  const make = watch("make");
  const model = watch("model");

  const onSubmit = async () => {
    try {
      const response = await axios.post<ApiResponse>("/api/add-car");
      toast.success("Successfully added a new car!");

      router.push("/admin-pannel");
    } catch (error) {
      console.error("Error adding a new car");
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message;

      toast.error(errorMessage ?? "Error adding a new car");
    }
  };

  return (
    <form className="flex items-start flex-col gap-5 p-6 xl:w-1/2 lg:w-3/5 md:w-4/5 w-full h-full overflow-y-auto">
      <input
        type="file"
        className="w-full h-36 flex-center border border-zinc-700 rounded-lg"
      />
      <div className="flex gap-2 w-full max-[450px]:flex-wrap">
        <select
          id="make"
          className="add-car-input w-full"
          {...register("make", { required: "Make of the car is required" })}
        >
          <option value="" className="text-zinc-300">
            --- Make
          </option>
          {Object.entries(carModels).map(([make], idx) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
        <select
          id="model"
          className="add-car-input w-full"
          {...register("model", { required: "Model of the car is required" })}
          disabled={make === ""}
        >
          <option value="" className="text-zinc-300">
            --- Model
          </option>
          {make &&
            Object.entries(carModels[make]).map(([model]) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </select>
        <select
          id="variant"
          className="add-car-input w-full"
          {...register("variant", { required: "Variant is required" })}
          disabled={model === ""}
        >
          <option value="" className="text-zinc-300">
            --- Variant
          </option>
          {model &&
            carModels[make][model].map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
        </select>
        <select
          id="fuel"
          className="add-car-input w-full"
          {...register("fuel", { required: "Fuel type is required" })}
        >
          <option value="">--- Fuel Type</option>
          {fuelType.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 w-full max-[450px]:flex-wrap">
        <select
          id="year"
          className="add-car-input w-full"
          {...register("year", { required: "Year of the car is required" })}
        >
          <option value="">--- Year</option>
          {
            years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))
          }
        </select>
        <select name="gear" id="gear" className="add-car-input w-full"></select>
      </div>
      <div className="flex gap-2 flex-wrap w-full">
        <input
          type="text"
          placeholder="Price"
          className="add-car-input w-full"
        />
        <input
          type="text"
          placeholder="Color"
          className="add-car-input w-full"
        />
        <input
          type="text"
          placeholder="Mileage"
          className="add-car-input w-full"
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <input
          type="text"
          placeholder="Title"
          className="add-car-input w-full"
        />
        <textarea placeholder="Description" className="add-car-input w-full" />
      </div>
    </form>
  );
};

export default page;

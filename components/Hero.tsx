"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import hero from "@/public/hero.png";
import heroBg from "@/public/hero-bg.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 lg:pt-36 pt-14 padding-x">
        <h1 className="hero__title leading-none">
          Find a car - quickly and easily
        </h1>
        <p className="hero__subtitle leading-tight">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Link href={"/explore"}>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-gradient-to-r from-[#DCAC26] to-[#ECC547] text-white rounded-xl mt-10 font-bold text-lg"
            btnType="button"
          />
        </Link>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

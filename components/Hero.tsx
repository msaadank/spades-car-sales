"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"
import hero from '@/public/hero.png'

const Hero = () => {


  const handleScroll = () => {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title leading-none">
          Find, book or rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle leading-tight">Streamline your car rental experience with our effortless booking process.</p>

        <CustomButton title="Explore Cars"
                      containerStyles="bg-gradient-to-r from-[#DCAC26] to-[#ECC547] text-white rounded-xl mt-10 font-bold text-lg" 
                      btnType="button"
                      handleClick={handleScroll}/>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={hero} alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-10 bg-[#212121]">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href={'/'} className="flex justify-center items-center">
                <Image src="/logo.svg"
                       alt="Spades Car Sales logo" 
                       width={45}
                       height={45}
                       className="object-contain" />
            </Link>

            <div className="flex items-center">
              <div className="md:flex hidden items-center mr-10 gap-10">
                <Link href={'/home'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact Us</Link>
              </div>
              <Link href={'/explore'}>
                <CustomButton title="Find a Car"
                              containerStyles="text-[#DCAC26] rounded-xl bg-[#212121]"
                              btnType="button"  />
              </Link>
            </div>
                          
        </nav>
    </header>
  )
}

export default Navbar
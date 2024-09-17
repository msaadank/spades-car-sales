<<<<<<< HEAD
import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer
=======
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black text-white mt-5">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <p className="text-base text-gray-300">
            Spades car sales 2024 <br />
            All rights reserved
          </p>
        </div>
        <div className="footer__links"></div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> d95fdd4 (NextAuth, react-hook-form, zod)

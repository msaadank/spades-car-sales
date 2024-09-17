import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Navbar } from "@/components";
<<<<<<< HEAD
=======
import AuthProvider from "@/context/AuthProvider";
>>>>>>> d95fdd4 (NextAuth, react-hook-form, zod)

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spades Car Sales",
  description: "Find your perfect car hassle free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body
        className='relative'
      >
        <Navbar />
        {children}
        <Footer />
      </body>
=======
      <AuthProvider>
        <body
          className='relative'
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </AuthProvider>
>>>>>>> d95fdd4 (NextAuth, react-hook-form, zod)
    </html>
  );
}

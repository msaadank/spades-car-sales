import type { Metadata } from "next";
import "./globals.css";

import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "react-hot-toast";

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
      <AuthProvider>
        <body
          className='relative'
        >
          <Toaster position="top-center"/>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}

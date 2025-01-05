import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import localFont from 'next/font/local'
const raleway = localFont({
  src:'../fonts/Raleway.woff2',
  variable:'--font-raleway',
  weight: "100 900",

})



export const metadata: Metadata = {
  title: "Mae's Fashion app",
  description: "The most beautiful girl in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
          <html lang="en">
      <body
        className={`${raleway.variable}antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>

  );
}

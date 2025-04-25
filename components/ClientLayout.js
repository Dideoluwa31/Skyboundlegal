
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/app/navcomponents/Navbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

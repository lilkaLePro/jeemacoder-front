'use client'
import Hero from "@/components/home/hero";
import { MobileNav } from "@/components/home/menuHamburger";
import { NavBar } from "@/components/home/navBar";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState('');

  return (
    <main className="font-mono bg-gradient-radial-home h-screen">
      {/* nav bar */}
      <NavBar />
      {/* hamburger nav */}
      <div className="hidden max-md:block ">
        <MobileNav />  
      </div>
      <Hero />
    </main>
  );
}

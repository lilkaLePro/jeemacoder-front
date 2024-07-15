'use client'
import Hero from "@/component/hero";
import { MobileNav } from "@/component/menuHamburger";
import { NavBar } from "@/component/navBar";
import Sidebar from "@/component/sidebare/sidebare";
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

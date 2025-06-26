"use client";

import { useState, useEffect } from "react";
import HeaderSection from "@/components/header/HeaderSection";
import HomeSection from "@/components/home/HomeSection";
import CursorFollower from "@/utils/CursorFollower";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Muda o estado quando scroll > 50px
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full h-[75px] z-50
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-black/60 backdrop-blur-md shadow-lg" // Cor escura transparente com blur
              : "bg-transparent" // Transparente quando no topo
          }
        `}
      >
        <div className="
          w-full h-full
          max-w-[1500px]
          mx-auto
          
          min-[1300px]:px-0
        ">
          <HeaderSection />
        </div>
      </header>

      <main className="w-full ">
        <section className=" pt-[88px] min-h-[calc(100vh-80px)]">
          <HomeSection />
        </section>

        <section className="pt-[80px] min-h-[calc(100vh-80px)]">...</section>
         
        <section className="pt-[80px] min-h-[calc(100vh-80px)]">.....</section>

        <section className="pt-[80px] min-h-[calc(100vh-80px)]">....</section>
      </main>

      <div className="hidden md:block">
        <CursorFollower />
      </div>

      
    </>
  );
}
"use client";

import { useState, useEffect } from "react";
import HeaderSection from "@/components/header/HeaderSection";
import HomeSection from "@/components/home/HomeSection";
import CursorFollower from "@/utils/CursorFollower";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Confirma que estamos no client

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Evita o hydration mismatch — só renderiza após montagem no client
  if (!hasMounted) return null;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full h-[75px] z-50
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-black/60 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            w-full h-full
            max-w-[1500px]
            mx-auto
            min-[1300px]:px-0
          "
        >
          <HeaderSection />
        </div>
      </header>

      <main className="w-full">
        <section className="pt-[88px] min-h-[calc(100vh-80px)]">
          <HomeSection />
        </section>

        <section className="pt-[80px] min-h-[calc(100vh-80px)]">...</section>

        <section className="pt-[80px] min-h-[calc(100vh-80px)]">.....</section>

        <section className="pt-[80px] min-h-[calc(100vh-80px)]">....</section>
      </main>

      {/* Só mostra no client após mount para evitar erro */}
      <div className="hidden md:block">
        <CursorFollower />
      </div>
    </>
  );
}

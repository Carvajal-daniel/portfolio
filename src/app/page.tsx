"use client";

import { useState, useEffect, useCallback } from "react";
import HeaderSection from "@/components/header/HeaderSection";
import HomeSection from "@/components/home/HomeSection";
import CursorFollower from "@/utils/CursorFollower";
import AboutMe from "@/components/about/AboutMe";
import AboutMeTimeline from "@/components/Jornada/AboutMeTimeline";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  }, []);

  useEffect(() => {
    setHasMounted(true);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (!hasMounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <>
      {/* Header fixo */}
      <header
        className={`
          fixed top-0 left-0 w-full h-[75px] z-50
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-black/30 backdrop-blur-lg shadow-xl border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="w-full h-full max-w-[1500px] mx-auto px-4 min-[1300px]:px-0">
          <HeaderSection />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="w-full min-h-screen">
        {/* Home */}
        <section
          id="home"
          className="mt-20 min-h-screen flex items-center pt-[75px] md:mt-0 "
        >
          <HomeSection />
        </section>

        {/* About */}
        <section
          id="about"
          className="min-h-screen -mt-[23rem] md:-mt-10 flex items-center"
        >
          <AboutMe />
        </section>

        {/* Timeline */}
        <section
          id="projects"
          className="bg-zinc-900/30 overflow-x-hidden relative min-h-screen -mt-20 flex items-center justify-center py-20"
        >
          <AboutMeTimeline />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Contato</h2>
            <p className="text-gray-400">Seção em desenvolvimento...</p>
          </div>
        </section>
      </main>

      {/* Cursor customizado */}
      {hasMounted && (
        <div className="hidden md:block pointer-events-none">
          <CursorFollower />
        </div>
      )}
    </>
  );
}

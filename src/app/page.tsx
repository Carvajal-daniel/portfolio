"use client";

import { useState, useEffect, useCallback } from "react";
import HeaderSection from "@/components/header/HeaderSection";
import HomeSection from "@/components/home/HomeSection";
import CursorFollower from "@/utils/CursorFollower";
import AboutMe from "@/components/about/AboutMe";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Otimiza o handler de scroll com useCallback
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  }, []);

  useEffect(() => {
    setHasMounted(true);

    // Adiciona listener de scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Evita hydration mismatch
  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-black">
        {/* Loading placeholder opcional */}
      </div>
    );
  }

  return (
    <>
      {/* Header fixo com transição suave */}
      <header
        className={`
          fixed top-0 left-0 w-full h-[75px] z-50
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-black/70 backdrop-blur-lg shadow-xl border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="w-full h-full max-w-[1500px] mx-auto px-4 min-[1300px]:px-0">
          <HeaderSection />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="w-full">
        {/* Seção Home */}
        <section 
          id="home"
          className="mt-30 md:mt-0 min-h-screen flex items-center"
        >
          <HomeSection />
        </section>

        {/* Seção About */}
        <section 
          id="about"
          className=" -mt-70 md:mt-0 flex items-center"
        >
          <AboutMe />
        </section>

        {/* Seções futuras - com IDs para navegação */}
        <section 
          id="projects"
          className="py-20 min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Projetos</h2>
            <p className="text-gray-400">Seção em desenvolvimento...</p>
          </div>
        </section>

        <section 
          id="contact"
          className="py-20 min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Contato</h2>
            <p className="text-gray-400">Seção em desenvolvimento...</p>
          </div>
        </section>
      </main>

      {/* Cursor personalizado apenas em desktop */}
      {hasMounted && (
        <div className="hidden md:block pointer-events-none">
          <CursorFollower />
        </div>
      )}
    </>
  );
}
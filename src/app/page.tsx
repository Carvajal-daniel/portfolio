"use client";

import { useState, useEffect, useCallback } from "react";
import HeaderSection from "@/components/header/HeaderSection";
import HomeSection from "@/components/home/HomeSection";
import CursorFollower from "@/utils/CursorFollower";
import AboutMe from "@/components/about/AboutMe";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Otimiza o handler de scroll com useCallback
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  }, []);

  // Função para ir para próxima/anterior seção
  interface GoToSectionParams {
    direction: 'up' | 'down';
  }

  const sections: string[] = ['home', 'about', 'projects', 'contact'];

  const goToSection = useCallback(
    (direction: GoToSectionParams['direction']) => {
      if (isScrolling) return;

      let newSection: number = currentSection;

      if (direction === 'down' && currentSection < sections.length - 1) {
        newSection = currentSection + 1;
      } else if (direction === 'up' && currentSection > 0) {
        newSection = currentSection - 1;
      }

      if (newSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(newSection);

        document.getElementById(sections[newSection])?.scrollIntoView({
          behavior: 'smooth',
        });

        // Reset scroll flag after animation
        setTimeout(() => setIsScrolling(false), 1000);
      }
    },
    [currentSection, isScrolling]
  );

  // Handler para wheel scroll
  interface WheelEventHandler {
    (e: WheelEvent): void;
  }

  const handleWheel: WheelEventHandler = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (e.deltaY > 0) {
      goToSection('down');
    } else {
      goToSection('up');
    }
  }, [goToSection]);

  useEffect(() => {
    setHasMounted(true);

    // Adiciona listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleScroll, handleWheel]);

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
      <main className="w-full">
        {/* Seção Home */}
        <section 
          id="home"
          className=" mt-20 md:-mt-10 min-h-screen flex items-center pt-[75px]"
        >
          <HomeSection />
        </section>

        {/* Seção About */}
        <section 
          id="about"
          className=" -mt-64 md:-mt-10 min-h-screen flex items-center "
        >
          <AboutMe />
        </section>

        {/* Seções futuras - com IDs para navegação */}
        <section 
          id="projects"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Projetos</h2>
            <p className="text-gray-400">Seção em desenvolvimento...</p>
          </div>
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

      {/* Cursor personalizado apenas em desktop */}
      {hasMounted && (
        <div className="hidden md:block pointer-events-none">
          <CursorFollower />
        </div>
      )}
    </>
  );
}
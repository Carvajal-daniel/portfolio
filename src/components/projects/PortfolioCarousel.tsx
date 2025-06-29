"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

// Hook personalizado para detectar quando elemento entra na tela
const useIntersectionObserver = (
  options = {}
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsIntersecting(true);
        setHasAnimated(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, options]);

  return [ref, isIntersecting];
};

// Tipagem para os projetos
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

// Tipagem das props do AnimatedProjectCard
interface AnimatedProjectCardProps {
  project: Project;
  index: number;
  isHovered: number | null;
  setIsHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

// Componente para animação de entrada individual dos projetos
const AnimatedProjectCard: React.FC<AnimatedProjectCardProps> = React.memo(({ project, index, isHovered, setIsHovered }) => {
  const [cardRef, cardVisible] = useIntersectionObserver();
  
  const handleMouseEnter = React.useCallback(() => {
    setIsHovered(index);
  }, [index, setIsHovered]);

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(null);
  }, [setIsHovered]);
  
  return (
    <div
      ref={cardRef}
      className={`h-full transform transition-all duration-1000 ${
        cardVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms` 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800/50 transition-all duration-700 hover:border-zinc-700 hover:bg-zinc-900/70 hover:scale-[1.02] hover:-translate-y-1 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          {/* Floating Category */}
          <div className="absolute top-6 left-6 transform transition-all duration-500 group-hover:scale-105">
            <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
              {project.category}
            </span>
          </div>

          {/* Hover Overlay with Actions */}
          <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-500 ${isHovered === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-100 transition-all duration-300 hover:scale-105 transform font-medium animate-[slideUp_0.5s_ease-out]"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Projeto
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 transform border border-white/20 font-medium animate-[slideUp_0.5s_ease-out_0.1s_both]"
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-light text-white mb-4 group-hover:text-zinc-100 transition-all duration-300 transform group-hover:translate-x-1">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light transition-all duration-300 group-hover:text-zinc-300 flex-1">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1.5 bg-zinc-800/50 text-zinc-300 text-xs rounded-full border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-700/50 transition-all duration-300 font-medium transform hover:scale-[1.02]"
                style={{ 
                  animationDelay: `${tagIndex * 100}ms`,
                  animation: cardVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const PortfolioCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Refs para animações
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [gridRef, gridVisible] = useIntersectionObserver();

  // Projetos de exemplo - substitua pelos seus projetos reais
  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description: "Plataforma completa de e-commerce com React, Node.js e MongoDB. Sistema de pagamentos integrado e painel administrativo avançado.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos dinâmicos, visualizações em tempo real e relatórios customizáveis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["React", "D3.js", "TypeScript", "API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 3,
      title: "App Mobile Fitness",
      description: "Aplicativo mobile para acompanhamento de exercícios com sistema de gamificação, social features e tracking avançado.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile"
    },
    {
      id: 4,
      title: "Sistema de Gestão",
      description: "ERP completo para pequenas empresas com módulos de vendas, estoque, financeiro e relatórios detalhados.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend"
    },
    {
      id: 5,
      title: "Plataforma de Streaming",
      description: "Clone do Netflix com sistema de recomendação inteligente, múltiplos perfis e streaming de vídeo em 4K.",
      image: "https://images.unsplash.com/photo-1489599904472-c7556eaae36c?w=500&h=300&fit=crop",
      tags: ["Next.js", "Prisma", "AWS", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "Assistente virtual inteligente com processamento de linguagem natural, integração de APIs e interface conversacional moderna.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tags: ["Python", "OpenAI", "FastAPI", "React"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML"
    }
  ];

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number): void => {
    setCurrentProject(index);
  };

  if (!mounted) {
    return null; // Evita problemas de hidratação
  }

  return (
    <div className="min-h-screen py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Elegant Header com animação */}
        <div 
          ref={headerRef}
          className={`text-center mb-5 md:mb-16 transform transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block mb-2">
            <h2 className={`${bebasNeue.className} text-5xl md:text-6xl font-light text-white mb-3 tracking-tight transform transition-all duration-1000 hover:scale-[1.02]`}>
              Meus Projetos
            </h2>
            <div 
              className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto transform transition-all duration-1000"
              style={{ 
                transitionDelay: '0.3s',
                width: headerVisible ? '96px' : '0px'
              }}
            ></div>
          </div>
        </div>

        {/* Desktop Grid com animação */}
        {!isMobile && (
          <div 
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            {projects.map((project, index) => (
              <AnimatedProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            ))}
          </div>
        )}

        {/* Mobile Carousel com animação */}
        {isMobile && (
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800/50 transform transition-all duration-500 hover:scale-[1.02]">
                      {/* Project Image */}
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-60 sm:h-48 object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-60"></div>
                        
                        {/* Category */}
                        <div className="absolute top-6 left-6">
                          <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20 animate-fadeIn">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-light text-white mb-4 transform transition-all duration-500 hover:translate-x-1">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-6">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-2 bg-zinc-800/50 text-zinc-300 text-xs rounded-full border border-zinc-700/50 font-medium transform transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-700/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 sm:gap-3">
                          <a
                            href={project.liveUrl}
                            className="flex-1 flex items-center justify-center gap-1 sm:gap-2 bg-white text-black px-3 py-2 sm:px-5 sm:py-3 rounded-2xl hover:bg-zinc-100 transition-all duration-300 font-medium transform hover:scale-[1.02] hover:-translate-y-0.5 text-xs sm:text-sm"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                            Ver Projeto
                          </a>
                          <a
                            href={project.githubUrl}
                            className="flex items-center justify-center gap-1 sm:gap-2 bg-zinc-800 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-2xl hover:bg-zinc-700 transition-all duration-300 border border-zinc-700 font-medium transform hover:scale-[1.02] hover:-translate-y-0.5 text-xs sm:text-sm"
                          >
                            <Github className="w-4 h-4" />
                            Código
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Elegant Navigation com animação */}
            <button
              onClick={prevProject}
              className="absolute left-2 top-[42%] -translate-y-1/2 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 transform border -ml-3 border-white/40 animate-slideInLeft"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-[42%] -mr-3 -translate-y-1/2 bg-black/80 backdrop-blur-md hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 transform border border-white/40 animate-slideInRight"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Minimalist Dots com animação */}
            <div className="flex justify-center mt-4 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-1 rounded-full transition-all duration-500 transform hover:scale-110 ${
                    index === currentProject
                      ? 'w-8 bg-white'
                      : 'w-1 bg-zinc-600 hover:bg-zinc-500'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                  aria-label={`Ir para projeto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default PortfolioCarousel;

"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Code, Briefcase, GraduationCap } from 'lucide-react';
import { Bebas_Neue } from 'next/font/google';
import AnimatedBgImage from '@/utils/BgImageProps';


const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

type TimelineItemType = 'education' | 'work' | 'project' | 'achievement' | 'personal';

interface TimelineItemProps {
  item: {
    id: number;
    type: TimelineItemType;
    title: string;
    date: string;
    location?: string;
    description: string;
    skills?: string[];
  };
  index: number;
  isVisible: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isVisible }) => {
  const iconMap: Record<TimelineItemType, React.ComponentType<any>> = {
    education: GraduationCap,
    work: Briefcase,
    project: Code,
    achievement: Award,
    personal: Calendar
  };
  
  const Icon = iconMap[item.type] || Calendar;
  
  return (

    <>
  

    <div className={`relative flex items-center mb-8 md:mb-12 transition-all duration-700 ease-out transform ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
    }`}
    style={{ transitionDelay: `${index * 200}ms` }}>
      
      {/* Linha vertical */}
      <div className="absolute left-4 md:left-6 top-12 w-0.5 h-full bg-gradient-to-b from-orange-300/50 via-pink-400/40 to-transparent"></div>
      
      {/* Ponto da timeline */}
      <div className={`relative z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-4 transition-all duration-500 ${
        isVisible 
        ? 'bg-gradient-to-r from-orange-500/90 to-pink-500/90 border-orange-300/70 scale-100 shadow-lg shadow-orange-400/30' 
        : 'bg-zinc-700 border-zinc-600 scale-75'
      }`}>
        <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </div>
      
      {/* Card de conteúdo */}
      <div className={`ml-6 md:ml-8 flex-1 bg-zinc-900/50 rounded-xl border border-zinc-800 p-4 md:p-6 transform transition-all duration-500 hover:border-orange-600/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/15 relative overflow-hidden ${
        isVisible ? 'scale-100' : 'scale-95'
      }`}>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-0">
              {item.title}
            </h3>
            <div className="flex items-center text-sm text-orange-200 bg-orange-900/30 border border-orange-600/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {item.date}
            </div>
          </div>
          
          {item.location && (
            <div className="flex items-center text-zinc-400 mb-3">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{item.location}</span>
            </div>
          )}
          
          <p className="text-zinc-300 leading-relaxed mb-4">
            {item.description}
          </p>
          
          {item.skills && (
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill: string, idx: number) => (
                <span key={idx} className="text-xs bg-gradient-to-r from-orange-900/25 to-pink-900/25 text-orange-200 border border-orange-600/25 px-2 py-1 rounded-md backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
   



    </div>

</>
  );
};

export default function AboutMeTimeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Timeline data atualizada
  const timelineData: {
    id: number;
    type: TimelineItemType;
    title: string;
    date: string;
    location?: string;
    description: string;
    skills?: string[];
  }[] = [
    {
      id: 1,
      type: 'personal',
      title: 'Migração para o Brasil',
      date: '2019',
      location: 'Venezuela → Brasil',
      description: 'Migrei da Venezuela para o Brasil, onde desenvolvi fluência completa em português de forma autodidata. Esta experiência fortaleceu minha capacidade de adaptação e aprendizado contínuo.',
      skills: ['Adaptabilidade', 'Aprendizado Autodidata', 'Multilíngue']
    },
    {
      id: 2,
      type: 'education',
      title: 'Início da Jornada em Programação',
      date: 'Início de 2024',
      description: 'Comecei minha jornada na programação estudando JavaScript, HTML e CSS de forma autodidata, focando nos fundamentos do desenvolvimento web.',
      skills: ['JavaScript', 'HTML', 'CSS', 'Lógica de Programação']
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Evolução em Frontend',
      date: 'Meio de 2024',
      description: 'Avancei para frameworks frontend, aprendendo React e começando a construir aplicações mais complexas e interativas.',
      skills: ['React', 'Component Architecture', 'State Management', 'DOM Manipulation']
    },
    {
      id: 4,
      type: 'education',
      title: 'Expansão para Backend e TypeScript',
      date: '2025',
      description: 'Aprendi TypeScript para desenvolvimento mais robusto, Node.js para backend, e Golang para sistemas de alta performance.',
      skills: ['TypeScript', 'Node.js', 'Golang', 'API Development']
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Domínio de Frameworks Modernos',
      date: '2025',
      description: 'Especializei-me em frameworks como Next.js, Express.js e ferramentas modernas de desenvolvimento, criando aplicações full stack completas.',
      skills: ['Next.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Docker']
    },
    {
      id: 6,
      type: 'work',
      title: 'Desenvolvedor Full Stack',
      date: '2025 - Presente',
      description: 'Alcancei o nível de desenvolvedor Full Stack, trabalhando com tecnologias modernas tanto no frontend quanto no backend, colaborando com startups e projetos inovadores.',
      skills: ['Full Stack Development', 'Microservices', 'REST APIs', 'Clean Architecture', 'DevOps']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const itemId = parseInt((entry.target as HTMLElement).dataset.itemId || "");
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, itemId]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="max-w-[94%] w-full relative z-10">
        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className={` ${bebasNeue.className} text-3xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r text-white  mb-4`}>
              Minha Jornada
            </h3>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Uma timeline da minha trajetória profissional e crescimento pessoal
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                ref={el => { itemRefs.current[index] = el; }}
                data-item-id={item.id}
                className="timeline-item"
              >
                <TimelineItem
                  item={item}
                  index={index}
                  isVisible={visibleItems.has(item.id)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
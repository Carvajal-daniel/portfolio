"use client";

import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

// Variáveis de animação reutilizáveis
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" }
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 }
};

export default function IntroContent() {
  return (
    <div className="max-w-3xl text-center md:text-left mx-auto space-y-6 px-4 md:px-6 md:text-xl">
      {/* Header com título e linha decorativa */}
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-3"
      >
        <h2 className={`
          ${bebasNeue.className} 
          text-5xl md:text-5xl lg:text-6xl font-bold 
          drop-shadow-sm
        `}>
          Sobre Mim
        </h2>
        <div className="w-full flex justify-center md:block">
        <div className="w-20  h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-orange-400/20"></div>
        </div>
      </motion.div>

      {/* Conteúdo principal */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        transition={{ staggerChildren: 0.2 }}
        className="space-y-5"
      >
        {/* Introdução principal */}
        <motion.div
          variants={staggerChild}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl leading-relaxed text-zinc-100 font-light">
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text font-semibold">
              Daniel Carvajal
            </span> — Desenvolvedor Full Stack apaixonado por criar 
            experiências digitais excepcionais e soluções tecnológicas inovadoras.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-zinc-300">
            Minha jornada profissional é marcada pela <span className="text-orange-400 font-medium">
            determinação</span>, <span className="text-pink-400 font-medium">adaptabilidade</span> e 
            uma paixão genuína por transformar ideias em realidade através da tecnologia.
          </p>
        </motion.div>

        {/* História pessoal */}
        <motion.div
          variants={staggerChild}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-zinc-700/30 shadow-lg"
        >
          <div className="flex  text-left items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
              🌎
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Jornada Internacional</h3>
              <p className="text-zinc-300 leading-relaxed">
                Migrei da <span className="text-yellow-400 font-medium">Venezuela</span> para o 
                <span className="text-green-400 font-medium"> Brasil</span>, desenvolvendo fluência 
                completa em português de forma autodidata. Esta experiência fortaleceu exponencialmente 
                minha capacidade de <span className="text-orange-400">adaptação</span>, 
                <span className="text-pink-400"> aprendizado contínuo</span> e 
                <span className="text-purple-400"> resolução de problemas complexos</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills em grid responsivo */}
        <motion.div
          variants={staggerChild}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Stack Principal */}
          <div className="group  bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg p-4 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 hover:shadow-md hover:shadow-orange-400/10">
            <div className="space-y-3">
              <h3 className="text-orange-400  font-bold text-base uppercase tracking-wide flex items-center gap-2">
                <span className="text-xl">⚡</span> 
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Stack Principal
                </span>
              </h3>
              <div className="space-y-2">
                <p className="text-zinc-200 font-medium">Frontend & Backend</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Next.js, React, Node.js, TypeScript, PostgreSQL, Docker
                </p>
              </div>
            </div>
          </div>

          {/* Especializações */}
          <div className="group bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:shadow-md hover:shadow-pink-400/10">
            <div className="space-y-3">
              <h3 className="text-pink-400 font-bold text-base uppercase tracking-wide flex items-center gap-2">
                <span className="text-xl">🚀</span>
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Especializações
                </span>
              </h3>
              <div className="space-y-2">
                <p className="text-zinc-200 font-medium">Arquitetura & DevOps</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  APIs REST, Microservices, SQL/NoSQL, CI/CD, Cloud
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action sutil */}
        <motion.div
          variants={staggerChild}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center pt-2"
        >
          <p className="text-zinc-400 text-sm">
            Transformando conceitos em código, 
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-medium">
              {" "}uma linha por vez
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
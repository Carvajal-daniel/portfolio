"use client";

import { motion, Variants } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

// Animação fade + slide rápida
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Stagger mais rápido
const containerStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// Animação com mola mais leve
const itemSpring: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 10,
    },
  },
};

export default function IntroContent() {
  return (
    <motion.div
      className="max-w-3xl text-center md:text-left mx-auto space-y-8 px-4 md:px-6 md:text-xl"
      variants={containerStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Título */}
      <motion.div variants={fadeUp} className="space-y-3">
        <h2 className={`${bebasNeue.className} text-5xl lg:text-6xl font-bold text-white`}>
          Sobre Mim
        </h2>
        <div className="w-full flex justify-center md:block">
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-orange-400/20" />
        </div>
      </motion.div>

      {/* Parágrafos principais */}
      <motion.div variants={itemSpring} className="space-y-4">
        <p className="text-lg md:text-xl leading-relaxed text-zinc-100 font-light">
          <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text font-semibold">
            Daniel Carvajal
          </span>{" "}
          — Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais e
          soluções tecnológicas inovadoras.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-zinc-300">
          Minha jornada é marcada pela{" "}
          <span className="text-orange-400 font-medium">determinação</span>,{" "}
          <span className="text-pink-400 font-medium">adaptabilidade</span> e uma paixão por
          transformar ideias em soluções reais.
        </p>
      </motion.div>

      {/* Jornada */}
      <motion.div
        variants={itemSpring}
        className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm rounded-xl p-5 border border-zinc-700/30 shadow-lg"
      >
        <div className="flex text-left items-start gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
            🌎
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Jornada Internacional</h3>
            <p className="text-zinc-300 leading-relaxed">
              Migrei da <span className="text-yellow-400 font-medium">Venezuela</span> para o{" "}
              <span className="text-green-400 font-medium">Brasil</span>, aprendendo português por
              conta própria. Essa jornada fortaleceu minha{" "}
              <span className="text-orange-400">adaptação</span>,{" "}
              <span className="text-pink-400">aprendizado contínuo</span> e{" "}
              <span className="text-purple-400">resolução de problemas</span>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div variants={itemSpring} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-orange-500/10 backdrop-blur-sm rounded-lg p-4 border border-orange-400/20 hover:shadow-orange-500/10 hover:shadow-md transition-all duration-300">
          <h3 className="text-orange-400 font-bold text-base uppercase tracking-wide flex items-center gap-2">
            ⚡{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Stack Principal
            </span>
          </h3>
          <p className="text-zinc-200 font-medium mt-2">Frontend & Backend</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Next.js, React, Node.js, TypeScript, PostgreSQL, Docker
          </p>
        </div>

        <div className="bg-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-pink-400/20 hover:shadow-pink-500/10 hover:shadow-md transition-all duration-300">
          <h3 className="text-pink-400 font-bold text-base uppercase tracking-wide flex items-center gap-2">
            🚀{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Especializações
            </span>
          </h3>
          <p className="text-zinc-200 font-medium mt-2">Arquitetura & DevOps</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            APIs REST, Microservices, SQL/NoSQL, CI/CD, Cloud
          </p>
        </div>
      </motion.div>

      {/* Rodapé */}
      <motion.div variants={itemSpring} className="text-center pt-2">
        <p className="text-zinc-400 text-sm">
          Transformando conceitos em código,
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-medium">
            {" "}uma linha por vez
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}

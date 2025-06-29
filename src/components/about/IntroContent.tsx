"use client";

import { motion, easeOut } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

// Variantes de animação
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

export default function IntroContent() {
  return (
    <motion.div
      className="max-w-3xl text-center md:text-left mx-auto space-y-6 px-4 md:px-6 md:text-xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.3
          }
        }
      }}
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="space-y-3">
        <h2 className={`
          ${bebasNeue.className} 
          text-5xl md:text-5xl lg:text-6xl font-bold 
          drop-shadow-sm
        `}>
          Sobre Mim
        </h2>
        <div className="w-full flex justify-center md:block">
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-orange-400/20"></div>
        </div>
      </motion.div>

      {/* Conteúdo principal com animação em cascata */}
      <motion.div variants={staggerContainer}>
        {/* Parágrafos */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <p className="text-lg md:text-xl leading-relaxed text-zinc-100 font-light">
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text font-semibold">
              Daniel Carvajal
            </span> — Desenvolvedor Full Stack apaixonado por criar 
            experiências digitais excepcionais e soluções tecnológicas inovadoras.
          </p>
          
          <p className="text-base md:text-lg leading-relaxed text-zinc-300">
            Minha jornada profissional é marcada pela <span className="text-orange-400 font-medium">
            determinação</span>, <span className="text-pink-400 font-medium">adaptabilidade</span> e uma paixão genuína por transformar ideias em soluções tecnológicas reais.
          </p>
        </motion.div>

        {/* Cards em grid */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Card 1 */}
          <div className="group bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-lg p-4 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 hover:shadow-md hover:shadow-orange-400/10">
            <div className="space-y-3">
              <h3 className="text-orange-400 font-bold text-base uppercase tracking-wide flex items-center gap-2">
                <span className="text-xl">⚡</span> 
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Stack Principal
                </span>
              </h3>
              <div className="space-y-2">
                <p className="text-zinc-200 font-medium">Frontend & Backend</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Next.js, React, Node.js, TypeScript, Golang, PostgreSQL, Docker
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
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

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center pt-6">
          <p className="text-zinc-400 text-sm">
            Transformando conceitos em código, 
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent font-medium">
              {" "}uma linha por vez
            </span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

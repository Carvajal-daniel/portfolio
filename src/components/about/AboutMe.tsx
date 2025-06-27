"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-zinc-950 text-white px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-zinc-200">
                <strong className="text-white">Daniel Carvajal</strong> — Desenvolvedor Full Stack com 
                experiência em criar soluções web modernas e escaláveis. Minha jornada profissional 
                combina determinação, adaptabilidade e paixão por tecnologia.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-zinc-300">
                Migrei da Venezuela para o Brasil, onde desenvolvi fluência completa em português 
                de forma autodidata. Esta experiência fortaleceu minha capacidade de adaptação, 
                aprendizado contínuo e resolução de problemas complexos.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="space-y-2">
                <h3 className="text-orange-400 font-semibold text-sm uppercase tracking-wide">
                  Foco Atual
                </h3>
                <p className="text-zinc-300 text-sm">
                  Desenvolvimento Full Stack com Next.js, Node.js, Prisma e PostgreSQL
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-orange-400 font-semibold text-sm uppercase tracking-wide">
                  Expandindo Skills
                </h3>
                <p className="text-zinc-300 text-sm">
                  Golang, Docker e arquiteturas de microsserviços
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card de Skills e Características */}
          <motion.div
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Competências Técnicas</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-orange-400 font-semibold mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-semibold mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm">Prisma ORM</span>
                  <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm">Go (aprendendo)</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-semibold mb-3">DevOps & Ferramentas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-full text-sm">Linux</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <h4 className="text-white font-semibold mb-3">Diferenciais</h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Adaptabilidade e aprendizado rápido
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Multilíngue (Português, Espanhol, Inglês)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Foco em UI/UX e performance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  Mentalidade orientada a resultados
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
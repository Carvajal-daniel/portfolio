"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-zinc-950/10 text-white px-6 py-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl text-orange-400">{'</>'}</div>
        <div className="absolute top-40 right-32 text-4xl text-pink-400">λ</div>
        <div className="absolute bottom-32 left-40 text-5xl text-orange-400">∞</div>
        <div className="absolute bottom-20 right-20 text-4xl text-pink-400">{'{ }'}</div>
        <div className="absolute top-60 left-1/3 text-3xl text-orange-400">⚡</div>
        <div className="absolute top-32 right-1/4 text-4xl text-pink-400">⌘</div>
      </div>
      <div className="max-w-[94%] w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full shadow-lg shadow-orange-400/50"></div>
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
                <h3 className="text-orange-400 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                  <span className="text-pink-400">⚡</span> Stack Principal
                </h3>
                <p className="text-zinc-300 text-sm">
                  Next.js, Node.js, TypeScript, PostgreSQL e Docker
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-orange-400 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                  <span className="text-pink-400">🚀</span> Especializações
                </h3>
                <p className="text-zinc-300 text-sm">
                  APIs REST, bancos relacionais e NoSQL, containerização
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card de Skills e Características */}
          <motion.div
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-pink-500/5 to-orange-500/5 rounded-2xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
              <span className="text-2xl">💻</span> Competências Técnicas
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div>
                <h4 className=" font-semibold mb-3 flex items-center gap-2">
                  <span className="text-pink-400">🎨</span> Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full text-sm border border-orange-500/30 shadow-lg shadow-orange-500/20">Next.js</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20  rounded-full text-sm border border-orange-500/30 shadow-lg shadow-orange-500/20">React</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full text-sm border border-orange-500/30 shadow-lg shadow-orange-500/20">TypeScript</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full text-sm border border-orange-500/30 shadow-lg shadow-orange-500/20">JavaScript</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full text-sm border border-orange-500/30 shadow-lg shadow-orange-500/20">Tailwind CSS</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-pink-400">⚙️</span> Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full text-sm border border-pink-500/30 shadow-lg shadow-pink-500/20">Node.js</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full text-sm border border-pink-500/30 shadow-lg shadow-pink-500/20">Express</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full text-sm border border-pink-500/30 shadow-lg shadow-pink-500/20">Fastify</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full text-sm border border-pink-500/30 shadow-lg shadow-pink-500/20">Golang</span>
                </div>
              </div>

              <div>
                <h4 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-pink-400">🗄️</span> Banco de Dados
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full text-sm border border-orange-400/30 shadow-lg shadow-orange-400/20">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full text-sm border border-orange-400/30 shadow-lg shadow-orange-400/20">MongoDB</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full text-sm border border-orange-400/30 shadow-lg shadow-orange-400/20">Prisma ORM</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-pink-400">🔧</span> DevOps & Ferramentas
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full text-sm border border-pink-400/30 shadow-lg shadow-pink-400/20">Docker</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full text-sm border border-pink-400/30 shadow-lg shadow-pink-400/20">Git</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full text-sm border border-pink-400/30 shadow-lg shadow-pink-400/20">Linux</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 relative z-10">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-orange-400">✨</span> Diferenciais
              </h4>
              <ul className="space-y-2  text-zinc-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full shadow-sm shadow-orange-400/50"></div>
                  Adaptabilidade e aprendizado rápido
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full shadow-sm shadow-orange-400/50"></div>
                  Multilíngue (Português, Espanhol, Inglês)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full shadow-sm shadow-orange-400/50"></div>
                  Foco em UI/UX e performance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full shadow-sm shadow-orange-400/50"></div>
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
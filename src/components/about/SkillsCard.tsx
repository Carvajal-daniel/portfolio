"use client";

import { motion } from "framer-motion";

export default function SkillsCard() {
  return (
    <motion.div
      className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-sm relative overflow-hidden hover:border-orange-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/15"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >


      <h3 className="text-2xl font-bold text-center md:text-left text-white mb-6 relative z-10 flex items-center justify-center gap-3">
        Competências Técnicas
      </h3>

      <div className="space-y-6 md:text-xl relative z-10">
        <div className="flex flex-col md:block items-center justify-center">
          <h4 className="font-semibold mb-3 flex items-center gap-2 text-orange-200">
            <span>🎨</span> Frontend
          </h4>
          <div className="flex md:block items-center justify-center flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-orange-900/25 to-pink-900/25 text-orange-200 border border-orange-600/25 rounded-full text-sm backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 flex items-center justify-center gap-2 md:block text-orange-200">
            <span>⚙️</span> Backend
          </h4>
          <div className="flex items-center justify-center md:block flex-wrap gap-2">
            {["Node.js", "Express", "Fastify", "Golang"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-orange-900/25 to-pink-900/25 text-orange-200 border border-orange-600/25 rounded-full text-sm backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 flex items-center justify-center md:block gap-2 text-orange-200">
            <span>🗄️</span> Banco de Dados
          </h4>
          <div className="flex items-center justify-center md:block flex-wrap gap-2">
            {["PostgreSQL", "MongoDB", "Prisma ORM"].map((db) => (
              <span
                key={db}
                className="px-3 py-1 bg-gradient-to-r from-orange-900/25 to-pink-900/25 text-orange-200 border border-orange-600/25 rounded-full text-sm backdrop-blur-sm"
              >
                {db}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 flex items-center justify-center md:block gap-2 text-orange-200">
            <span>🔧</span> DevOps & Ferramentas
          </h4>
          <div className="flex items-center justify-center md:block flex-wrap gap-2">
            {["Docker", "Git", "Linux"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 bg-gradient-to-r from-orange-900/25 to-pink-900/25 text-orange-200 border border-orange-600/25 rounded-full text-sm backdrop-blur-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 md:text-lg pt-6 border-t border-zinc-800 relative z-10">
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <span className="text-orange-400">✨</span> Diferenciais
        </h4>
        <ul className="space-y-2 text-zinc-300">
          {[
            "Adaptabilidade e aprendizado rápido",
            "Multilíngue (Português, Espanhol, Inglês)",
            "Foco em UI/UX e performance",
            "Mentalidade orientada a resultados",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-400/70 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
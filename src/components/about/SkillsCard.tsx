"use client";

import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function SkillsCard() {
  return (
    <motion.div
      className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 backdrop-sm relative overflow-hidden transition-all duration-500"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        variants={fadeInUp}
        className="text-2xl font-bold text-center md:text-left text-white mb-6 relative z-10 flex items-center justify-center gap-3"
      >
        Competências Técnicas
      </motion.h3>

      <div className="space-y-6 md:text-xl relative z-10">
        {[
          {
            label: "🎨 Frontend",
            items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
          },
          {
            label: "⚙️ Backend",
            items: ["Node.js", "Express", "Fastify", "Golang"],
          },
          {
            label: "🗄️ Banco de Dados",
            items: ["PostgreSQL", "MongoDB", "Prisma ORM"],
          },
          {
            label: "🔧 DevOps & Ferramentas",
            items: ["Docker", "Git", "Linux"],
          },
        ].map(({ label, items }) => (
          <motion.div key={label} variants={fadeInUp}>
            <h4 className="font-semibold mb-3 flex items-center justify-center md:block gap-2 text-[#E0E0E0]">
              {label}
            </h4>
            <div className="flex items-center justify-center md:block flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-orange-900/25 to-pink-900/25 text-[#E0E0E0] border border-orange-600/25 rounded-full text-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeInUp}
        className="mt-8 md:text-lg pt-6 border-t border-zinc-800 relative text-center lg:text-left flex flex-col items-center lg:block z-10"
      >
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
      </motion.div>
    </motion.div>
  );
}

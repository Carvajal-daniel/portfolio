import { motion } from "framer-motion";

export default function SkillsCard() {
  return (
    <motion.div
      className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
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
        <ul className="space-y-2 text-zinc-300">
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
  );
}

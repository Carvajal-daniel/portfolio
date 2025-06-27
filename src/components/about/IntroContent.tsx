import { motion } from "framer-motion";

export default function IntroContent() {
  return (
    <>
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
    </>
  );
}

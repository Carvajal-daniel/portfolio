"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParticleSystemProps {
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ className }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindow = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    updateWindow();
    window.addEventListener("resize", updateWindow);
    return () => window.removeEventListener("resize", updateWindow);
  }, []);

  const isMobile = windowWidth < 768;

  const colorsBig = [
    "#3b82f6",
    "#8b5cf6",
    "#06b6d4",
    "#ec4899",
    "#6366f1",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];
  const colorsSmall = [
    "#60a5fa",
    "#a78bfa",
    "#22d3ee",
    "#f472b6",
    "#818cf8",
  ];
  const colorsLarge = ["#2563eb", "#ffffff", "#0891b2", "#ffffff"];

  if (!windowHeight || !windowWidth) return null;

  const bigParticles = Array.from({ length: 70 }, (_, i) => i);
  const smallParticles = Array.from({ length: 50 }, (_, i) => i);
  const largeParticles = Array.from({ length: 20 }, (_, i) => i);

  const adjustSpeed = (originalSpeed: number) =>
    isMobile ? originalSpeed * 0.33 : originalSpeed;

  return (
    <div className={`pointer-events-none overflow-hidden ${className ?? ""}`}>
      {bigParticles.map((p) => {
        const color = colorsBig[p % colorsBig.length];
        const size = Math.random() * 4 + 3;
        const startY = Math.random() * windowHeight;
        const speed = adjustSpeed(Math.random() * 6 + 14);
        const delay = Math.random() * 15;

        return (
          <motion.div
            key={p}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              filter: "blur(0.8px)",
              boxShadow: `0 0 ${size}px ${color}50`,
            }}
            initial={{ x: -30, y: startY, opacity: 0, scale: 0 }}
            animate={{
              x: windowWidth + 30,
              y: startY,
              opacity: [0, 0.8, 0.6, 0.9, 0.4, 0.7, 0],
              scale: [0, 1, 0.8, 1.2, 0.9, 1, 0],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay,
            }}
          />
        );
      })}

      {smallParticles.map((p) => {
        const color = colorsSmall[p % colorsSmall.length];
        const size = Math.random() * 2 + 1;
        const startY = Math.random() * windowHeight;
        const speed = adjustSpeed(Math.random() * 4 + 8);
        const delay = Math.random() * 10;

        return (
          <motion.div
            key={`small-${p}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              filter: "blur(0.4px)",
              boxShadow: `0 0 ${size * 1.5}px ${color}40`,
            }}
            initial={{ x: -20, y: startY, opacity: 0, scale: 0 }}
            animate={{
              x: windowWidth + 20,
              y: startY,
              opacity: [0, 0.9, 0.7, 1, 0.5, 0.8, 0],
              scale: [0, 1, 0.7, 1.1, 0.8, 1, 0],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay,
            }}
          />
        );
      })}

      {largeParticles.map((p) => {
        const color = colorsLarge[p % colorsLarge.length];
        const size = Math.random() * 6 + 8;
        const startY = Math.random() * windowHeight;
        const speed = adjustSpeed(Math.random() * 10 + 20);
        const delay = Math.random() * 20;

        return (
          <motion.div
            key={`large-${p}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              filter: "blur(1.2px)",
              boxShadow: `0 0 ${size * 2}px ${color}40`,
            }}
            initial={{ x: -40, y: startY, opacity: 0, scale: 0 }}
            animate={{
              x: windowWidth + 40,
              y: startY,
              opacity: [0, 0.6, 0.4, 0.8, 0.3, 0.7, 0],
              scale: [0, 0.8, 0.6, 1, 0.7, 0.9, 0],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleSystem;

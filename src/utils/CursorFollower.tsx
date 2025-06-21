"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      currentPos.current.x = lerp(currentPos.current.x, pos.current.x, 0.1); // menos que antes
      currentPos.current.y = lerp(currentPos.current.y, pos.current.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 15,
        height: 15,
        backgroundColor: "rgba(0, 110, 255, 1)",
        borderRadius: "50%",
        pointerEvents: "none",
        filter: "blur(6px)",
        zIndex: 9999,
        mixBlendMode: "screen",
        transform: "translate3d(0, 0, 0) translate(-50%, -50%)",
        transition: "background-color 0.2s ease",
      }}
    />
  );
}

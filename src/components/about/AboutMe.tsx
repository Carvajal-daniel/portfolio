"use client";
import BackgroundTech from "./BackgroundTech";
import IntroContent from "./IntroContent";
import SkillsCard from "./SkillsCard";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-zinc-950/10 text-white px-2 py-20 flex items-center justify-center relative overflow-hidden"
    >
      <BackgroundTech />
      <div className="max-w-[94%] w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <IntroContent />
          </div>
          <SkillsCard />
        </div>
      </div>
    </section>
  );
}

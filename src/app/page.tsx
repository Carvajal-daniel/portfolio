import HeaderPage from "@/components/header/header";
import HomeSection from "@/components/main/HomeSection";
import CursorFollower from "@/utils/CursorFollower";
import GitImg from "@/utils/Git";

export default function Home() {
  return (
    <>
      {/* Header fixo no topo */}
      <header className="fixed top-0 left-0 w-full h-[88px] z-50">
        <HeaderPage />
      </header>

      <main className="pt-[88px] ">
        <section id="hero" className="h-[calc(100vh-88px)] scroll-mt-[88px]">
          <HomeSection/>
        </section>
        <section id="about" className="h-[calc(100vh-88px)] scroll-mt-[88px]">
          ...
        </section>
        <section
          id="projects"
          className="h-[calc(100vh-88px)] scroll-mt-[88px]"
        >
          ...
        </section>
        <section id="contact" className="h-[calc(100vh-88px)] scroll-mt-[88px]">
          ...
        </section>
      </main>

      <GitImg className="hidden md:block fixed bottom-12 left-[22rem] z-50  hover:scale-110 transition-all duration-300 ease-in-out" />
      <div className="hidden md:block">
        <CursorFollower />
      </div>
    </>
  );
}

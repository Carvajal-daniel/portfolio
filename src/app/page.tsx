import NavBar from "@/components/header/navBar";
import Homepage from "@/components/home/home";

export default function Home() {
  return (
    <>
      <NavBar/>
      <main className="md:w-full md:px-[6%]">
        <section
          id="home"
          className="pt-18 min-h-screen text-white scroll-mt-18"
        >
          <Homepage/>
        </section>

        <section
          id="about"
          className="min-h-screen bg-gray-800 text-white scroll-mt-18"
        >
          Sobre mim
        </section>

        <section
          id="projects"
          className="min-h-screen bg-gray-700 text-white scroll-mt-18"
        >
          Projetos
        </section>

        <section
          id="contact"
          className="min-h-screen bg-gray-600 text-white scroll-mt-18"
        >
          Contato
        </section>
      </main>
    </>
  );
}

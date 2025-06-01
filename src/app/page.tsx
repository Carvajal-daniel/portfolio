import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <section id="home" className="min-h-screen bg-gray-900 text-white">
          Início
        </section>
        <section id="about" className="min-h-screen bg-gray-800 text-white">
          Sobre mim
        </section>
        <section id="projects" className="min-h-screen bg-gray-700 text-white">
          Projetos
        </section>
        <section id="contact" className="min-h-screen bg-gray-600 text-white">
          Contato
        </section>
      </main>
    </>
  );
}

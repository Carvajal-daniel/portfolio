import Link from "next/link";

const HeaderPage = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      {/* Aqui aplicamos 'group' para ativar o hover em elementos filhos */}
      <div className="group">
        <Link className="flex gap-2 items-center" href="/">

          <div className="flex items-center md:h-6 h-5 md:w-[32px] w-7 justify-center text-black bg-[#f0f8ff] group-hover:bg-[#303030] group-hover:text-white transition-colors duration-300">

            <p className="text-2xl">&gt;</p>
            <div>
              <div className="w-[8px] group-hover:bg-[#f0f8ff] h-[3px] mt-2 bg-black animate-blink"></div>
            </div>
          </div>
          <h1 className="md:text-3xl text-xl md:font-extrabold font-bold">DC</h1>
        </Link>
      </div>

      <div>
        <Link href="/contato">
          <button>Contato</button>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderPage;

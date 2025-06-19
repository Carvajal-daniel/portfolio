import Link from "next/link";

const HeaderPage = () => {
  return (
    <nav className="flex justify-between items-center py-5 ">
      <div className="group">
        <Link className="flex gap-2 items-center" href="/">

          <div className="flex items-center h-6 md:w-[36px] w-8 gap-1 justify-center text-black bg-[#e3ecf3] group-hover:bg-[#292929] group-hover:text-white transition-colors duration-300">

            <p className="text-2xl">&gt;</p>
            <div>
              <div className="w-[8px] group-hover:bg-[#f0f8ff] h-[3px] mt-2 bg-black animate-blink"></div>
            </div>
          </div>
          <h1 className="md:text-3xl text-[#f0f8ff] text-2xl font-bold">DC</h1>
        </Link>
      </div>

      <div>
        <Link href="#">
          <button className=" cursor-pointer border px-3 py-1 md:py-2 md:px-4 hover:bg-[#f0f8ff] hover:text-black transition-colors duration-300 rounded">Contato</button>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderPage;

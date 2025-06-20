import HeaderPage from "@/components/header/header";
import BgImg from "@/utils/BgImg";
import GitImg from "@/utils/Git";

export default function Home() {
  return (
    <>
      <header>
        <HeaderPage />
      </header>

      <GitImg className="hidden hover:scale-110 transition-all duration-300 ease-in-out  md:block fixed bottom-12" />

      <div className="absolute -z-10 md:-bottom-64 -bottom-40 md:-left-60 -left-[340px] ">
        <BgImg />
      </div>
    </>
  );
}

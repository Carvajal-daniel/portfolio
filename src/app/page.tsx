import HeaderPage from "@/components/header/header";
import BgImg from "@/utils/BgImg";
import GitImg from "@/utils/git";

export default function Home() {
  return (
    <>
      <header>
        <HeaderPage />
      </header>

      <div className=" hidden md:block fixed bottom-12">
        <GitImg />
      </div>

      <div className="absolute md:-bottom-64 -bottom-40 md:-left-60 -left-[340px] ">
        <BgImg/>
      </div>
    </>
  );
}

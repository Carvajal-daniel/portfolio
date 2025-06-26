import HeaderSection from "@/components/header/HeaderSection";
import HomeSection from "@/components/home/HomeSection";
import CursorFollower from "@/utils/CursorFollower";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full min-[1300px]:max-w-[1500px] min-[1300px]:left-1/2 min-[1300px]:-translate-x-1/2 z-50 h-[80px]">
  <HeaderSection />
</header>

      <main className="w-full ">
        <section className="pt-[88px] min-h-[calc(100vh-80px)]">
          <HomeSection />
        </section>

        <section className="pt-[80px] min-h-[calc(100vh-80px)]">...</section>
         
        <section className="pt-[80px] min-h-[calc(100vh-80px)]">.....</section>

        <section className="pt-[80px] min-h-[calc(100vh-80px)]">....</section>
      </main>

      <div className="hidden md:block">
        <CursorFollower />
      </div>
    </>
  );
}

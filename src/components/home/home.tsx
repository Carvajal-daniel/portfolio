"use client";
import SocialIcons from "@/utils/SocialIcon";
import AvatarBlock from "./image ";
import TitleBlock from "./title";

const Homepage = () => {
  return (
    <section
      aria-label="Homepage - Apresentação do desenvolvedor"
      className="relative flex flex-col md:flex-row items-center min-h-screen px-4 py-12"
    >
      <div className="md:flex-1 flex flex-col justify-center w-full order-1 md:order-2">
        <TitleBlock />
      </div>

      <div className="md:flex-1 flex items-center justify-center w-full order-2 md:order-1 relative">
        <div>
          <AvatarBlock />
        </div>
      </div>

      <div className="order-3 mt-8 md:mt-0">
        <SocialIcons />
      </div>
    </section>
  );
};

export default Homepage;

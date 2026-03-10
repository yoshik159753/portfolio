import { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import HeaderBody, {
  scrollToWorks,
  scrollToSkills,
  scrollToProducts,
} from "@/components/headerBody";
import Profile from "@/components/profile";
import Works from "@/components/works";
import Skills from "@/components/skills";
import Products from "@/components/products";

const Index = ({ profile, profile2, works }) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => setIsAtTop(window.scrollY < 30), {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-[1000]">
        <HeaderBody />
      </header>

      <main className="pt-16">
        <section
          className="min-h-[calc(100vh-4rem)] flex items-center bg-white relative"
          id="profile"
        >
          <div className="max-w-[720px] mx-auto px-4 md:px-0">
            <Profile>{profile}</Profile>
          </div>
          <span
            className={`absolute bottom-6 left-1/2 -translate-x-1/2
              flex flex-col items-center gap-1 text-neutral-500 animate-bounce
              transition-opacity duration-300
              ${isAtTop ? "opacity-100" : "opacity-0"}`}
            aria-label="スクロールして続きを見る"
          >
            <span className="text-xs tracking-widest">scroll</span>
            <FontAwesomeIcon icon={faAnglesDown} />
          </span>
        </section>

        <section className="py-16 bg-neutral-100" id="profile2">
          <div className="max-w-[720px] mx-auto px-4 md:px-0">
            <Profile>{profile2}</Profile>
          </div>
        </section>

        <section className="py-16 bg-white" id={scrollToWorks}>
          <div className="max-w-[720px] mx-auto px-4 md:px-0">
            <Works>{works}</Works>
          </div>
        </section>

        <section className="py-16 bg-neutral-100" id={scrollToSkills}>
          <div className="max-w-[720px] mx-auto px-4 md:px-0">
            <Skills />
          </div>
        </section>

        <section className="py-16 bg-white" id={scrollToProducts}>
          <div className="max-w-[720px] mx-auto px-4 md:px-0">
            <Products />
          </div>
        </section>
      </main>

      <footer className="mt-auto bg-neutral-800 text-white py-8">
        <div className="max-w-[960px] mx-auto px-4">
          <div
            className="flex flex-col gap-2 items-center
                      md:flex-row md:justify-between"
          >
            <div className="text-neutral-500 text-xs">
              Icons: Devicon, Simple Icons, Font Awesome Free |
              各商標は各社に帰属
            </div>
            <div className="text-neutral-400 text-sm md:shrink-0 self-end md:self-auto">
              Last Update: Nov 2022
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export async function getServerSideProps() {
  const profile = fs.readFileSync(
    path.join(process.cwd(), "content", "profile.md"),
    "utf-8"
  );
  const profile2 = fs.readFileSync(
    path.join(process.cwd(), "content", "profile2.md"),
    "utf-8"
  );
  const works = fs.readFileSync(
    path.join(process.cwd(), "content", "works.md"),
    "utf-8"
  );
  return {
    props: { profile, profile2, works },
  };
}

export default Index;

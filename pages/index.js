import fs from "fs";
import path from "path";

import HeaderBody, {
  scrollToSkillSummary,
  scrollToWorks,
  scrollToSkillSet,
  scrollToProducts,
} from "@/components/headerBody";
import Profile from "@/components/profile";
import SkillSummary from "@/components/skillSummary";
import Works from "@/components/works";
import Skills from "@/components/skills";
import Products from "@/components/products";
import ScrollIndicator from "@/components/scrollIndicator";

const Index = ({ profile, works }) => {
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
          <ScrollIndicator />
        </section>

        <section className="py-16 bg-neutral-100" id={scrollToSkillSummary}>
          <div className="max-w-[720px] mx-auto px-4 md:px-0">
            <SkillSummary />
          </div>
        </section>

        <section className="py-16 bg-white" id={scrollToWorks}>
          <div className="max-w-[720px] mx-auto px-4 md:px-0">
            <Works>{works}</Works>
          </div>
        </section>

        <section className="py-16 bg-neutral-100" id={scrollToSkillSet}>
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
            <div className="text-neutral-500">
              Icons: Devicon, Simple Icons, Font Awesome Free |
              各商標は各社に帰属
            </div>
            <div className="text-neutral-400 md:shrink-0 self-end md:self-auto">
              Last Update: Mar 2026
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
  const works = fs.readFileSync(
    path.join(process.cwd(), "content", "works.md"),
    "utf-8"
  );
  return {
    props: { profile, works },
  };
}

export default Index;

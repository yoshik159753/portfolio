import fs from "fs";
import path from "path";

import { getSkills, getSkillSummary, getWorks } from "@/actions/api";
import Index_, { BorderBlcok } from "../components/pages/index/index";
import Profile from "@/components/pages/index/profile";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoTop from "@/components/goTop";

const Index = ({ profile, works, skillSummary, skills }) => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-12 max-w-[720px] mx-auto px-4">
        <BorderBlcok>
          <Profile>{profile}</Profile>
        </BorderBlcok>
        <Index_ works={works} skillSummary={skillSummary} skills={skills} />
      </main>
      <Footer />
      <GoTop />
    </>
  );
};

export async function getServerSideProps() {
  const profile = fs.readFileSync(
    path.join(process.cwd(), "content", "profile.md"),
    "utf-8"
  );
  const works = await getWorks();
  const skillSummary = await getSkillSummary();
  const skills = await getSkills();
  return {
    props: { profile, works, skillSummary, skills },
  };
}

export default Index;

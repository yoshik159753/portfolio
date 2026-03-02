import fs from "fs";
import path from "path";

import { getSkills, getSkillSummary, getWorks } from "@/actions/api";
import Index_ from "../components/pages/index/index";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoTop from "@/components/goTop";

const Index = ({ profile, works, skillSummary, skills }) => {
  return (
    <>
      <Header />
      <Index_
        profile={profile}
        works={works}
        skillSummary={skillSummary}
        skills={skills}
      />
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

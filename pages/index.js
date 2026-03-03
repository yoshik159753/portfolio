import fs from "fs";
import path from "path";

import Header, {
  scrollToWorks,
  scrollToSkills,
  scrollToProducts,
} from "@/components/header";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Works from "@/components/works";
import SkillSummary from "@/components/skillSummary";
import Skills from "@/components/skills";
import Products from "@/components/products";

import styles from "@/pages/index.module.css";

export const BorderBlcok = ({ children }) => {
  return <div className={`border rounded ${styles.block}`}>{children}</div>;
};

const Title = ({ children }) => {
  return (
    <div className={styles.title}>
      <h2>{children}</h2>
    </div>
  );
};

const Index = ({ profile, profile2, works, skillSummary, skills }) => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-12 max-w-[720px] mx-auto px-4">
        <BorderBlcok>
          <Profile>{profile}</Profile>
        </BorderBlcok>

        <div className="mt-10">
          <BorderBlcok>
            <Profile>{profile2}</Profile>
          </BorderBlcok>
        </div>

        <div id={scrollToWorks} className={styles.contentBlock}>
          <Title>職務経歴</Title>
          <div className={styles.blockWithTitle}>
            <BorderBlcok>
              <Works>{works}</Works>
            </BorderBlcok>
          </div>
        </div>

        <div id={scrollToSkills} className={styles.contentBlock}>
          <Title>技術スタック概要</Title>
          <div className={styles.blockWithTitle}>
            <BorderBlcok>
              <SkillSummary skillSummary={skillSummary} />
            </BorderBlcok>
          </div>
        </div>

        <div className={styles.contentBlock}>
          <Title>技術スタック</Title>
          <div className={styles.blockWithTitle}>
            <BorderBlcok>
              <Skills>{skills}</Skills>
            </BorderBlcok>
          </div>
        </div>

        <div id={scrollToProducts} className={styles.contentBlock}>
          <Title>Products</Title>
          <div className={styles.blockWithTitle}>
            <Products />
          </div>
        </div>
      </main>
      <Footer />
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
  const skillSummary = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "skillSummary.json"),
      "utf-8"
    )
  );
  const skills = fs.readFileSync(
    path.join(process.cwd(), "content", "skills.md"),
    "utf-8"
  );
  return {
    props: { profile, profile2, works, skillSummary, skills },
  };
}

export default Index;

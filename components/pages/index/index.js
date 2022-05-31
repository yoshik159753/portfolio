import { Element } from "react-scroll";

import Base from "@/components/base";

import styles from "./index.module.css";

import Profile from "./profile";
import Works from "./works";
import SkillSummary from "./skillSummary";
import Skills from "./skills";
import Products from "./products";

export const scrollToWorks = "works";
export const scrollToSkills = "skills";
export const scrollToProducts = "products";

const BorderBlcok = ({ children }) => {
  return <div className={`border rounded ${styles.block}`}>{children}</div>;
};

const Title = ({ children }) => {
  return (
    <div className={styles.title}>
      <h2>{children}</h2>
    </div>
  );
};

const Index = ({ profile, works, skillSummary, skills }) => {
  return (
    <Base>
      <BorderBlcok>
        <Profile>{profile}</Profile>
      </BorderBlcok>

      <div className={styles.contentBlock}>
        <Element name={scrollToWorks}>
          <Title>職務経歴</Title>
          <div className={styles.blockWithTitle}>
            <BorderBlcok>
              <Works>{works}</Works>
            </BorderBlcok>
          </div>
        </Element>
      </div>

      <div className={styles.contentBlock}>
        <Element name={scrollToSkills}>
          <Title>技術スタック概要</Title>
          <div className={styles.blockWithTitle}>
            <BorderBlcok>
              <SkillSummary skillSummary={skillSummary} />
            </BorderBlcok>
          </div>
        </Element>
      </div>

      <div className={styles.contentBlock}>
        <Title>技術スタック</Title>
        <div className={styles.blockWithTitle}>
          <BorderBlcok>
            <Skills>{skills}</Skills>
          </BorderBlcok>
        </div>
      </div>

      <div className={styles.contentBlock}>
        <Element name={scrollToProducts}>
          <Title>Products</Title>
          <div className={styles.blockWithTitle}>
            <Products />
          </div>
        </Element>
      </div>
    </Base>
  );
};

export default Index;

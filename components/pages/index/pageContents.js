import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Element } from "react-scroll";

import Base from "@/components/base";
import useHttpRequest from "@/hooks/useHttpRequest";
import Spinner from "@/components/spinners/spinner";

import styles from "./pageContents.module.css";

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

const Block2 = ({ scrollTo, title, children }) => {
  return (
    <Element name={scrollTo} className={`${styles.block}`}>
      {title === null ? "" : <Title>{title}</Title>}
      <div className={`border rounded mt-3 px-5 py-3`} style={{ height: 500 }}>
        {children}
      </div>
    </Element>
  );
};

const Body = () => {
  return (
    <Block2>
      <div>
        {/* <ReactMarkdown
  children={profile}
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
/> */}
        body
      </div>
    </Block2>
  );
};

const Body2 = ({ scrollTo }) => {
  return (
    <Block2 scrollTo={scrollTo} title="Title">
      <div>body</div>
    </Block2>
  );
};

const PageContents = ({ profile, works, skillSummary, skills }) => {
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

      <div className="mt-4">
        <Body2 scrollTo="body2" />
      </div>
      <div className="mt-4">
        <Body2 scrollTo="body3" />
      </div>
      <div className="mt-4">
        <Body2 scrollTo="body4" />
      </div>
    </Base>
  );
};

export default PageContents;

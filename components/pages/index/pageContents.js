import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Element } from "react-scroll";

import Base from "@/components/base";
import useHttpRequest from "@/hooks/useHttpRequest";
import Spinner from "@/components/spinners/spinner";

import styles from "./pageContents.module.css";

import Profile from "./profile";
import Works from "./works";

export const scrollToWorksName = "works";

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

const PageContents = ({ profile, works }) => {
  // TODO: 意外と markdown の解析に時間がかかるので、そこもローディングを表示したい
  return (
    <Base>
      <BorderBlcok>
        <Profile>{profile}</Profile>
      </BorderBlcok>

      <div className="mt-5">
        <Element name={scrollToWorksName}>
          <Title>職務経歴</Title>
          <div className="mt-3">
            <BorderBlcok>
              <Works>{works}</Works>
            </BorderBlcok>
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

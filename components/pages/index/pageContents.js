import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Element } from "react-scroll";

import Base from "@/components/base";
import useHttpRequest from "@/hooks/useHttpRequest";
import Spinner from "@/components/spinner";

import styles from "./pageContents.module.css";

export const getProfile = async (params) => {
  return await axios.get(`/api/admin/current-user`);
};

const Title = ({ children }) => {
  return (
    <>
      <h2>{children}</h2>
    </>
  );
};

const Block = ({ scrollTo, title, children }) => {
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
    <Block>
      <div>
        {/* <ReactMarkdown
  children={profile}
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeRaw]}
/> */}
        body
      </div>
    </Block>
  );
};

const Body2 = ({ scrollTo }) => {
  return (
    <Block scrollTo={scrollTo} title="Title">
      <div>body</div>
    </Block>
  );
};

const PageContents = () => {
  const [{ response, isError, isLoading }, getProfileClient] = useHttpRequest(
    getProfile,
    true
  );

  useEffect(() => {
    getProfileClient();
  }, [getProfileClient]);

  if (isLoading) {
    return <Spinner />;
  }

  // TODO: 意外と markdown の解析に時間がかかるので、そこもローディングを表示したい
  return (
    <Base>
      <Body />
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
